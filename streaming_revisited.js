// We write and explain a parser for the following grammar:

// Expr ← Addn
// Addn ← Mult (S? "+" S? Mult)*
// Mult ← Nmbr (S? "*" S? Nmbr)*
// Nmbr ← [0-9]+
// S ← " "+

// Expr is the start rule, and matches a simple arithmetic expression including only numbers, additions, and multiplications.
// Expr is parsed by parsing an addition expression.
// Addn is parsed by parsing a Mult, followed by any number of Mults separated by "+" with optional whitespace.
// Mult is parsed by parsing a Nmbr, followed by any number of Nmbrs separated by "*" with optional whitespace.
// Precedence is handled by letting top-level expressions like Addn use more tightly binding expressions like Mult to parse their child nodes; i.e. every parse tree from this grammar will have a single Addn expression containing one or more Mult children.
// Nmbr and S are parsed as sequences of 1 or more digits or space characters respectively.

// Valid strings:
// "0"
// "2+2*3"
// "2 + 2*3 + 4 * 55"

// Invalid strings:
// "2+"  (incomplete Addn expression)
// " 2 " (no leading or trailing whitespace allowed by the grammar)
// "a"
// "2++2"
// ""    (Num cannot be empty so neither can Expr)

// To clarify the grammar in the analysis that follows, we wish to refer easily to expressions within it.
// This is somewhat complicated by the syntax which, while convenient for reading and writing grammars, sometimes obscures where expressions begin and end.
// To avoid these confusions we rewrite each rule as an S-expressions composed of character literals and ranges, nonterminals such as Mult and Nmbr, and sequences and repetitions.

// Expr ← (sequence Addn)
// Addn ← (sequence Mult (repetition (sequence (optional S) "+" (optional S) Mult)))
// Mult ← (sequence Nmbr (repetition (sequence (optional S) "*" (optional S) Nmbr)))
// Nmbr ← (positive-repetition [0-9])
// S    ← (positive-repetition " ")

// The Expr rule is written as a sequence of only one element, which isn't strictly necessary but we do so for consistency.

// To simplify things further we can eliminate some forms of expressions which can be expressed in terms of others.
// Positive repetitions of the form "A+" which match A one or more times, can be rewritten using only sequence and the 0-or-more repetition operator, as "A A*".
// For example, to parse Nmbr we must parse at least one [0-9] so we can just as well write:
// Nmbr ← [0-9] [0-9]*
// We also have negative and positive lookahead and ordered choice expressions, though those do not appear in our grammar above.
// We introduce a special rule, ϵ, which matches the empty string and always succeeds, and using ϵ and the ordered choice rule, we can rewrite expressions of the form "A?" as "A / ϵ", i.e. an ordered choice between A, or if A fails, succeeding anyway without consuming any input.

// Our entire vocabulary of expressions then includes sequence, ordered choice, positive and negative lookahead, repetition, primitive tests for character classes, and the special expression ϵ which always succeeds.
// To keep the s-exp notation compact we give each of these a mnemonic name; s for sequence, o for ordered choice, p and n for the lookaheads, and r for greedy repetition 0 or more times.
// Making these transformations in our grammar we have:
// Expr ← Addn
// Addn ← (s Mult (r (s (o S ϵ) "+" (o S ϵ) Mult)))
// Mult ← (s Nmbr (r (s (o S ϵ) "*" (o S ϵ) Nmbr)))
// Nmbr ← (s [0-9] (r [0-9]))
// S    ← (s " " (r " "))

// We create a shadow start rule, which eliminates some special cases in dealing of the actual start rule.
// Our parser will emit events whenever a rule is started or whenever a rule succeeds, so having a shadow start rule lets us use the same machinery to emit events when the actual start rule (here Expr) succeeds or fails.
// The shadow start rule also gives us a way to ensure that the parser consumes the entire string.
// Ordinarily a PEG expression matches as much as at can, but it is generally intended that a parser will consume the entire input string or fail, so we add the EOF requirement in the shadow start rule.
// (This is an option to the parser generator and can be toggled if successful parses which do not consume all the input are desired.)

// _    ← (s Expr (n [^])
// Expr ← (s Addn)
// Addn ← (s Mult (r (s (o S ϵ) "+" (o S ϵ) Mult)))
// Mult ← (s Nmbr (r (s (o S ϵ) "*" (o S ϵ) Nmbr)))
// Nmbr ← (s [0-9] (r [0-9]))
// S    ← (s " " (r " "))

// The shadow start rule matches Expr, followed by EOF.
// (EOF is written as ![^], a negative lookahead for the universal character test, since the only position at which a lookahead for any character will fail is at EOF.  [^] is the negation of the empty character set, and thus matches any single character.)
// We also now write the Expr rule as a sequence of one element, which makes things a little more consistent and simpler in what follows.

// These reductions are the same reductions made by the code generator, which first converts the grammar into a simpler form before performing optimizations.
// Now that we have the grammar in this simpler form we assign a number to each expression.
// This gives us a way to refer to these expressions, and we use these numbers in the parser to keep track of the progress.

// First we assign numbers to each rule in the grammar, which we use to refer both to the rule (in the parse tree results we return) and to the top-level expression on the right hand side of that rule.
// Since we are using s-exps we can just tag each s-exp with a number without introducing any ambiguity.
// We number each rule that appears in the grammar with the index of the order in which the rules appear.
// Any top-level rules that were generated, as the shadow start rule, or by an optimization, are given higher numbers.

// _    ← (5 s Expr (n [^])
// Expr ← (0 s Addn)
// Addn ← (1 s Mult (r (s (o S ϵ) "+" (o S ϵ) Mult)))
// Mult ← (2 s Nmbr (r (s (o S ϵ) "*" (o S ϵ) Nmbr)))
// Nmbr ← (3 s [0-9] (r [0-9]))
// S    ← (4 s " " (r " "))

// Next we assign numbers to all remaining compound expressions:

// _    ← (5 s Expr (16 n [^])
// Expr ← (0 s Addn)
// Addn ← (1 s Mult (17 r (18 s (19 o S ϵ) "+" (20 o S ϵ) Mult)))
// Mult ← (2 s Nmbr (21 r (22 s (23 o S ϵ) "*" (24 o S ϵ) Nmbr)))
// Nmbr ← (3 s [0-9] (25 r [0-9]))
// S    ← (4 s " " (26 r " "))

// Next we assign numbers to all nonterminal expressions:

// _    ← (5 s (32 Expr) (16 n [^])
// Expr ← (0 s (33 Addn))
// Addn ← (1 s (34 Mult) (17 r (18 s (19 o (35 S) ϵ) "+" (20 o (36 S) ϵ) (37 Mult))))
// Mult ← (2 s (38 Nmbr) (21 r (22 s (23 o (39 S) ϵ) "*" (24 o (40 S) ϵ) (41 Nmbr))))
// Nmbr ← (3 s [0-9] (25 r [0-9]))
// S    ← (4 s " " (26 r " "))

// Finally we assign numbers to all primitive expressions:

// _    ← (5 s (32 Expr) (16 n (48 [^]))
// Expr ← (0 s (33 Addn))
// Addn ← (1 s (34 Mult) (17 r (18 s (19 o (35 S) (49 ϵ)) (50 "+") (20 o (36 S) (51 ϵ)) (37 Mult))))
// Mult ← (2 s (38 Nmbr) (21 r (22 s (23 o (39 S) (52 ϵ)) (53 "*") (24 o (40 S) (54 ϵ)) (41 Nmbr))))
// Nmbr ← (3 s (55 [0-9]) (25 r (56 [0-9])))
// S    ← (4 s (57 " ") (26 r (58 " ")))

// Note that expressions of a particular type have contiguous numbers, e.g. all rules in the grammar are numbered 0-4, while all states 48-59 correspond to primitive expressions.
// We have left gaps between these ranges for ease of editing, but a machine parser generator could number the internal expressions in any convenient way so long as they are distinct.

// In addition to these states corresponding to actual expressions in the grammar, there are additional state values which represent parser states that do not correspond to an expression appearing in the grammar.
// These include primitive test states (not to be confused with the primitive expression states) which are the states in which the parser actually tests and consumes characters of the input, and two result states, which indicate that the parser has a result (either success or failure) for an expression.

arith_stream.names=['Expr','Add','Mult','Num','S']

function arith_stream(out){var eof,s,l,S,T,M,F,tbl,x,pos,offset,R,buf,bufs,states,posns,chr
// `out` output function, which we call repeatedly with events
// `eof` whether we have seen EOF on the input stream or not
 eof=false
// `s` the string we are parsing
 s=''
// `l` the length of that string
 l=0
// `S` is the current parser state
// we begin in state 5, which represents a kind of shadow start state
// we do this so that when we enter state 0 (the real start state, corresponding to Expr) we will emit the start of the Expr rule correctly.
// if we began already in state 0, then we would never have reason to enter it, and emitting the start of the Expr rule would have to be special-cased.
 S=5
// `T`, `M`, `F` are arrays described and initialized later
// `tbl` is the result table, initialized whenever the string is extended and truncated when the string is truncated
 tbl=[[]]
// `x` is used in various places for intermediate or unknown results
// `pos` is our position within (all) the input
 pos=0
// `offset` is the start of the current string and current result table, it is advanced when these are truncates as output is streamed
 offset=0
// `R`, if `true` or `false`, is the parse result of the current expression or test, otherwise it is undefined
// `buf` is the active buffer to which elements are appended
// `bufs` is the buffer stack
 buf=[]
 bufs=[]
// `states` is the stack of S values representing our descent into the grammar
 states=[]
// `posns` is the position stack
 posns=[]
// `chr` is the character currently being tested in primitive tests
// we return a function which will do nothing until called with an 'eof' or 'chunk' message
// when it is called with a chunk, it will parse as much as it can, and will emit either an error message if the string is not valid, or zero or more 'tree segment' messages followed by a `ready` message, indicating that it needs to read more of the string to continue.
// when called with an 'eof' message it will parse any of the string that remains and emit a final 'tree segment' message or an 'error' message if the string is not parsable.
// messages are emitted by the parser by calling the 'out' function, with the type of message as the first argument, and any additional arguments depending on the message type.

// `mainloop` runs the loop, doing the actual parsing and emitting events to the caller as necessary.
// the loop runs until either the entire parse fails or succeeds, or more input is needed to continue parsing.
// the mainloop function doesn't maintain any internal state; since we may be resuming at any time, all state is stored in the scope of the enclosing function

// each time we enter the main loop, we are in a particular state, and we do not yet know the result of that state.
// either the state will succeed or fail, or we will run out of input string and have to wait for the next chunk.
// when we enter a state there are certain operations we may do at the start of the state
// sometimes there is a direct test we perform to determine the result of the state
// these are called primitive states or primitive tests, and this is where input characters are read
// if an input character can't be read, because we have reached the end of a chunk, then this is where we send a message requesting the next chunk and exit the loop
// in this case when we re-enter the loop with a new chunk (or eof) the loop will continue and the primitive test will be attempted again
// if a character can't be read because we are at EOF, then the primitive test fails
// when we have performed a primitive test we are in 'has_result' mode
// in this mode we have a result for a state
// there is some processing we do when leaving a state which may result in finding the result of the parent state as well
// as long as we have a result we stay is 'has_result' mode, popping states from the stack, until we reach a state for which we must do some further testing to get a result, in which case we loop the main loop again, or until the stack becomes empty, in which case the parse is finished and has succeeded.
// so the only way to enter has_result mode is by doing a primitive test, but once in it, we may stay in it for a while
// while in has_result mode, we are recording the successful and failing results of various rules at various input positions, which we add to the result table, and we may stream tree segments to the caller if it is safe to do so
// the parser can be in streaming mode or not, as controlled by flags on expressions in the grammar
// when we are in streaming mode, every rule that is entered can be immediately streamed to the caller
// this means that a rule can only be entered in streaming mode if that rule cannot fail to parse unless the entire parse fails
// the parser begins in streaming mode, but each expression we enter may turn streaming mode off
// when exiting an expression, streaming mode may be turned back on

// example: A ← ( B C D E )*
// In this case, assume that matching D commits us to this branch.
// Then B C and D can be streamed once D has matched, and E can be streamed when it is entered and when it is exited.
// B C and D and their child nodes must be buffered until D has succeeded.

// so we have two flags which may be set per expression: one which turns off streaming when the expression is entered, and one which turns on streaming when the expression completes
// the only thing this doesn't allow is turning off streaming at the end of a rule, or turning on streaming at the beginning of a rule, but those are useless anyway
// in the case of the start rule, we are by default in streaming mode when the parse begins, so turning on streaming at the beginning of the start rule would be redundant, and turning it off at the end would be ineffectual, as whatever remains will be emitted when the parse completes at EOF regardless of the streaming mode.
// in any other case, the rule will be entered from a call in some other rule, and if it needs to be turned off or on this can happen at the call site.

// the linear memory and runtime guarantees of a PEG come from the fact that results are cached, which prevents exponential backtracking
// where we cannot stream, we may backtrack, and so when streaming is disabled we cache results in a result table.
// when results are cached, they are stored in a two-dimensional array indexed first by position in the input chunk, and then by rule index.
// the result of a parse of a rule at a particular offset is either failure, or the stream of events generated by success.
// this stream of events includes the length of the match, which can be used to advance the position when replaying the rule from the result table.

// Starting with the start rule of the grammar, parsing proceeds from expression to expression, handling each expression according to the same pattern, with variations determined by flags.
// Each expression is first entered, then tested, either succeeding or failing, and finally exited, either by entering a new state or by returning a success or failure result to the containing expression.

// We maintain several stacks.
// One stack contains the rules which have been entered in the course of the parse.
// Another contains positions to which we may return if various expressions fail and which we will use to calculate the length of matches which succeed.
// A third contains result streams, which may be emitted or concatenated to a parent expression result when an expression succeeds, or discarded if it fails (or in the case of a lookahead, always discarded).
// Each expression, when entered, may push onto zero or more of these stacks, and when it fails or succeeds it must pop the items it added.

// The behavior of each expression is characterized by several tables and bitfields.

// The Test array `T` defines how to determine the result of an expression by transitioning to a new state which will eventually produce a result.
// The new state will either correspond to another expression, a primitive test, or one of the distinguished 'has_result' state values.
// The value of T for an expression is determined by the expression itself, while the values of M and F are determined by its parent expression.
// For example in an expression (s "a" "b"), considering the string literal "a", the test depends only on the expression (test for the literal character 'a') while the M and F values (proceed to test "b", and fail the entire sequence, respectively) depend on the fact that the "a" appears in a sequence in a particular position.
// _    ← (5 s (32 Expr) (16 n (48 [^]))
// Expr ← (0 s (33 Addn))
// Addn ← (1 s (34 Mult) (17 r (18 s (19 o (35 S) (49 ϵ)) (50 "+") (20 o (36 S) (51 ϵ)) (37 Mult))))
// Mult ← (2 s (38 Nmbr) (21 r (22 s (23 o (39 S) (52 ϵ)) (53 "*") (24 o (40 S) (54 ϵ)) (41 Nmbr))))
// Nmbr ← (3 s (55 [0-9]) (25 r (56 [0-9])))
// S    ← (4 s (57 " ") (26 r (58 " ")))
 T=[33,34,38,55,57 // 0-4 in the case of each top-level rule, to test we simply proceed to test the first sub-expression.
   ,32 // 5 in the case of the shadow start rule, we begin by testing the actual start rule
   ,0,0,0,0,0,0,0,0,0,0 // 6-15 just filling the gap, these will never be used
   ,48 // 16 (a negative lookahead) proceeds to test its subexpression 48
   ,18,19,35,36 // 17-20 (Addn) these similarly just move to the subexpression
   ,22,23,39,40 // 21-24 (Mult)
   ,56,58 // 25-26 (Nmbr and S)
   ,0,0,0,0,0 // 27-31 filling the gap
   ,0,1,2,4,4,2 // 32-37 these are named rule expressions; to test them we move to the state corresponding to that rule
   ,3,4,4,3 // 38-41 more named rule expressions
   ,0,0,0,0,0,0 // 42-47 filling the gap
   ,64 // 48 this is a primitive expression (48 [^]), which has a corresponding primitive test
   ,65 // 49 this is ϵ which always succeeds consuming no input
   ,66,65 // 50-51 the rest of the primitive expressions in the Addn rule
   ,65,67,65 // 52-54 Mult rule
   ,68,68,69,69] // Nmbr and S
// This gives us the following primitive tests:
// 64: matches [^] (any character, but not EOF)
// 65: ϵ always succeeds, even at EOF
// 66: tests "+"
// 67: tests "*"
// 68: tests [0-9]
// 69: tests " "

// _    ← (5 s (32 Expr) (16 n (48 [^]))
// Expr ← (0 s (33 Addn))
// Addn ← (1 s (34 Mult) (17 r (18 s (19 o (35 S) (49 ϵ)) (50 "+") (20 o (36 S) (51 ϵ)) (37 Mult))))
// Mult ← (2 s (38 Nmbr) (21 r (22 s (23 o (39 S) (52 ϵ)) (53 "*") (24 o (40 S) (54 ϵ)) (41 Nmbr))))
// Nmbr ← (3 s (55 [0-9]) (25 r (56 [0-9])))
// S    ← (4 s (57 " ") (26 r (58 " ")))
// When an expression matches, the parser looks at the Match array to get the next state or the result of the containing expression
// We define two extra state values to indicate success and failure of the current expression:
// 80 // success
// 81 // failure
 M=[80,80,80,80,80 // 0-4 when a named rule succeeds, the success simply propagates up to whatever called it.
   ,-1 // 5 when the shadow start rule succeeds, we are done, so the state value returned here should not matter
   ,0,0,0,0,0,0,0,0,0,0 // 6-15
   ,80 // 16 if 16 succeeds, the enclosing expression (5 s ...) succeeds as well
   ,80,18,50,37 // 17-20 Addn, note that if 18 (the repetition sub-expression) succeeds, it loops back
   ,80,22,53,41 // 21-24 Mult
   ,80,80 // 25-26 repetition expressions in Num and S
   ,0,0,0,0,0 // 27-31
   ,16,80 // 32-33
   ,17,80,80,80 // 34-37 Addn
   ,21,80,80,80 // 38-41 Mult
   ,0,0,0,0,0,0 // 42-47
   ,81 // 48 if (48 [^]) succeeds, the negative lookahead (16 n (48 [^])) fails
   ,80,20,80 // 49-51 Addn when (49 ϵ) succeeds, the containing ordered choice expression succeeds
   ,80,24,80 // 52-54 Mult
   ,25,56,26,58] // 55-58 Nmbr and S
// When an expression fails, the Fail array determines what happens next.
// As with the Match array, we may continue to a new test state or propagate the result to the parent expression
 F=[81,81,81,81,81 // 0-4
   ,81 // 5 the shadow start state fails just like any other (by reporting the error)
   ,0,0,0,0,0,0,0,0,0,0 // 6-15
   ,81 // 16
   ,-2,80,-3,-4 // 17-20 Addn, note that r can never fail, and neither can ordered choice ending with ϵ
   ,-7,80,-6,-5 // 21-24 Mult
   ,-8,-9 // 25-26 Nmbr and S
   ,0,0,0,0,0 // 27-31
   ,81,81 // 32-33
   ,81,49,51,81 // 34-37 Addn
   ,81,52,54,81 // 38-41 Mult
   ,0,0,0,0,0,0 // 42-47
   ,80 // 48 if (48 [^]) fails, the containing negative lookahead expression succeeds
   ,-10,81,-11 // 49-51 Addn
   ,-13,81,-12 // 52-54 Mult
   ,81,80,81,80] // 55-58 Nmbr and S

// There are a few bitfields which determine what happens when an expression is entered or exited.
// Here for clarity we use strings, but in a machine-generated parser we can pack these into the bits of the state value itself, or use some other efficient means of lookup.
// The things that an expression may do when entered are:
// - lookup the current state and position in the result table and use the cached result if any
// - push itself onto the state stack (some states, such as some primitive test states, may not need to do this)
// - push the current output array onto a stack, and create a new one (e.g. negative and positive lookaheads always do this)
// - push the current input position onto the position stack, e.g. to return to it or use it to calculate a length
// - emit the current state to the current output stream (e.g. when entering a rule, or on every expression for debugging)
// After doing any of these as specified by the flags, the parser will, for every expression, look up the Test state.
// The test may be another state, a primitive test, or a result value (success or failure).
// (We have no direct result values in the test table above for consistency, but ϵ could be implemented this way.)
// The parser will proceed with the test, possibly entering any number of other states, and will eventually return to this expression with a result (unless it fails before that time).
// It is worth noting that even in streaming mode, the parser will still return to close all open expressions.
// When a result is obtained, an expression may:
// - pop the state stack and let the popped value be the state for which we have a result (this is probably the same set of expressions that push onto the state stack)
// this doesn't make any sense.
// how can we look up popstate to see if we need to pop the state to get the state that we need to look up?
// there might be something here to do with optimizing lexing, but it's too confusing for now, so everything is going to have this set
// - emit the current state (for the rule for which we have a result)
// - emit -1 to indicate an anonymous node
// - pop a position from the position stack and emit the calculated length
// - return to the position at the top of the position stack
// - pop a position from the position stack
// - merge the current output array with the parent output array
// - discard the current output array
// - cache just the state and position in the result table
// - cache the state, position, and current output buffer in the result table
// Which of these actions are taken can depend on both the expression flags and the result.
// After the above actions, if any, are taken, the next state is always looked up in the Match or Fail array.
// When something is "emitted", this generally means that it is appended to the current output array.
// (Another part of the code comes by later and actually emits the contents of this array to the caller and truncates it.)
// _    ← (5 s (32 Expr) (16 n (48 [^]))
// Expr ← (0 s (33 Addn))
// Addn ← (1 s (34 Mult) (17 r (18 s (19 o (35 S) (49 ϵ)) (50 "+") (20 o (36 S) (51 ϵ)) (37 Mult))))
// Mult ← (2 s (38 Nmbr) (21 r (22 s (23 o (39 S) (52 ϵ)) (53 "*") (24 o (40 S) (54 ϵ)) (41 Nmbr))))
// Nmbr ← (3 s (55 [0-9]) (25 r (56 [0-9])))
// S    ← (4 s (57 " ") (26 r (58 " ")))
var
//                       1         2         3         4         5
//             01234567890123456789012345678901234567890123456789012345678
 t_lookup    ="000010----------00000000000-----0000000000------00000000000"
,t_lookupall ="000000----------00000000000-----0000000000------00000000000"
,t_pushstate ="111111----------11111111111-----1111111111------11111111111"
,t_bufferout ="000000----------00010001000-----0000000000------00000000000"
,t_pushpos   ="111110----------10100010000-----0000000000------00100100000"
//             01234567890123456789012345678901234567890123456789012345678
,t_emitstate ="111100----------00000000000-----0000000000------00000000000"
,m_popstate  ="111111----------11111111111-----1111111111------11111111111"
,m_emitstate ="000010----------00000000000-----0000000000------00000000000"
,m_emitclose ="111110----------00000000000-----0000000000------00000000000"
,m_emitanon  ="000000----------00000000000-----0000000000------00100100000"
//             01234567890123456789012345678901234567890123456789012345678
,m_emitlength="111110----------00000000000-----0000000000------00100100000"
,m_cache     ="000010----------00000000000-----0000000000------00000000000"
,m_cacheall  ="000000----------00000000000-----0000000000------00000000000"
,m_resetpos  ="000000----------00000000000-----0000000000------00000000000"
,m_poppos    ="111110----------10100010000-----0000000000------00100100000"
,m_emitbuf   ="000000----------00000000000-----0000000000------00100100000"
//             01234567890123456789012345678901234567890123456789012345678
,m_tossbuf   ="000000----------00000000000-----0000000000------00000000000"
,f_popstate  ="111111----------11111111111-----1111111111------11111111111"
//             01234567890123456789012345678901234567890123456789012345678
,f_cache     ="000010----------00000000000-----0000000000------00000000000"
,f_resetpos  ="111110----------10100010000-----0000000000------00100100000"
,f_poppos    ="111110----------10100010000-----0000000000------00100100000"
//             01234567890123456789012345678901234567890123456789012345678
,f_tossbuf   ="000000----------00010001000-----0000000000------00100100000"

// These are 22 bitfields, which, if packed into the state value in a JavaScript number, leaves 53-22 = 31 bits treating the number as a 64-bit float (with 53 bits worth of contiguous integers).
// If an interpreter is going to use 32-bit ints for these, it leaves 10 bits for the state.
// It's probably unlikely that a grammar will use more than 2^10 expressions.
 
// t_lookup - for any rule worth caching (can be derived experimentally)
// t_pushstate - for any expression that may change the state to perform its test (ϵ could be an exception but isn't)
// t_bufferout - for the subexpressions of a sequence before its commit point, for any lookahead that might generate child nodes, and for any rule that is going to be cached in the result table.
// bufferout and nostream are probably equivalent in all cases
// t_pushpos - for any expression that will generate a node (to determine the length of that node) and for any expression that might fail and backtrack (or that has children that might fail and backtrack) including any lookahead expressions, which will always backtrack.
// t_emitenter - for rules which, once entered, will certainly succeed or the entire parse will fail, unless the parser is already in non-streaming mode when they are called
// m_restream - for each expression with t_nostream there should be a subsequent expression, probably in the same sequence, with m_restream set
// note that the t_nostream takes effect before an expression is entered, whereas m_restream takes effect after the successful match result of an expression is known.
// the m_restream expressions therefore represent 'commit points' in sequences in the grammar.
// m_popstate - currently set everywhere, and may prove useless
// m_emitstate - for each rule which does not have t_emitstate set, i.e. each rule which does not stream when it is entered, such as rules like S which may be entered but still fail without the entire parse failing.
// m_emitstate | t_emitstate | m_emitanon = m_emitlength
// m_emitclose - each rule has an open and a close 'tag'
// if m_emitstate or t_emitstate is set, then m_emitclose must be set
// if m_emitlength is set and m_emitanon is not set, the m_emitclose must be set
// m_emitanon is for all expressions that emit anonymous nodes.
// these are all expressions which may both consume input and have non-anonymous sibling nodes.
// m_emitlength - for each expression that emits any kind of node at all, to report the length
// this peeks at the top of the position stack, which is subtracted from the current position to calculate the length
// It should be the case that t_emitstate XOR m_emitstate XOR m_emitanon == m_emitlength
// Note that there is no t_* corollary to m_emitanon; since anonymous nodes have no children there is no point in trying to emit the start of an anonymous node early.
// m_resetpos is set on lookaheads: when they succeed the position is reset from the stack
// in this case we do not need to set it on ![^] since, if it succeeds, we are at EOF and no input has been consumed
// rules that do not consume input when they fail do not need to have m_resetpos set, but a generator can't be expected (at this point) to determine most of these
// m_poppos mirrors t_pushpos, and probably can be dropped
// m_emitbuf - for any expression that buffers output, it must eventually either be emitted (merged with the parent output buffer) (e.g. at a commit point in a sequence) or discarded (e.g. after a lookahead which creates child nodes)
// to "emit" the buffer we append it to the previous buffer in the buffer stack, and make that the new current buffer
// m_tossbuf - we do have a negative lookahead assertion but it cannot have children so we don't buffer (and hence have no need to discard) the output
// m_cache - for anything that has t_lookup set and doesn't use m_cacheall
// caches the current position and the fact that this rule succeeded, but nothing else
// m_cacheall
// caches the current position, the fact that this rule succeeded, and the current output buffer, which will be used if this cached result is used again in the future
// to cache these, m_cache or m_cacheall must know where to cache the result in the cache table, i.e. where the start position of this match was
// that means that m_cache or m_cacheall implies t_pushpos
// m_cache and m_cacheall are identical to t_lookup and t_lookupall
// f_restream - for any subexpression of a sequence in nostream mode that fails before a commit point
// f_emitstate, f_emitanon, f_emitlength - these hav. no purpose, as a failing rule can never emit a result anyway, but might have application in a debugging mode
// f_resetpos - most (all?) expressions which push a position will reset to it on failure
// f_poppos - probably can be dropped along with m_poppos
// f_emitbuf - nothing emits events on failure, so there's no need for this
// f_tossbuf - on any expression prior to a commit point in a sequence that buffers its output
// f_cache - again anything that will be t_lookup'd, though in some cases caching failure may not be worth doing
// an example is where it can be proved that if a rule fails (or succeeds) it will never be tested again at the same position, which for many grammars is true of a large percentage of rules (but hard to prove without sophisticated algorithms)

// for each of these bitfields we write a test function which tests the current state and determines whether the bit is set or not.
// currently this looks up that index in the string, but when these bitfields are packed into the state value they can be extracted from it using a bitmask.
 function tlookup(S){return t_lookup[S]=='1'} function tlookupall(S){return t_lookupall[S]=='1'}
 function tpushstate(S){return t_pushstate[S]=='1'}
 function tbufferout(S){return t_bufferout[S]=='1'} function tpushpos(S){return t_pushpos[S]=='1'}
 function temitstate(S){return t_emitstate[S]=='1'} function mpopstate(S){return m_popstate[S]=='1'}
 function memitstate(S){return m_emitstate[S]=='1'} function memitclose(S){return m_emitclose[S]=='1'}
 function memitanon(S){return m_emitanon[S]=='1'}
 function memitlength(S){return m_emitlength[S]=='1'} function mresetpos(S){return m_resetpos[S]=='1'}
 function mpoppos(S){return m_poppos[S]=='1'} function memitbuf(S){return m_emitbuf[S]=='1'}
 function mtossbuf(S){return m_tossbuf[S]=='1'} function mcache(S){return m_cache[S]=='1'}
 function mcacheall(S){return m_cacheall[S]=='1'}
 function fpopstate(S){return f_popstate[S]=='1'} function fresetpos(S){return f_resetpos[S]=='1'}
 function fpoppos(S){return f_poppos[S]=='1'} function fcache(S){return f_cache[S]=='1'}
 function ftossbuf(S){return f_tossbuf[S]=='1'}

 return function(m,x){
 // this function will be called by the caller with messages
 // `m` is the message
 // `x` is an optional argument depending on message type
 // messages are of the following types:
  switch(m){
   case 'chunk':
    // with a chunk message, we append the chunk to the string, store the new length, and start the main loop
    s+=x
    l=s.length
    while(tbl.length < l+1) tbl.push([])
    mainloop()
    break
   case 'eof':
    // on an eof message, we set the eof flag and start the main loop
    eof=true
    mainloop()
    break
   case 'clone':
   case 'stringify':
   default: throw new Error('unhandled')}}

 function mainloop(){
  for(;;){
// each time we enter the main loop we have a current state representing an expression with unknown result
// it will not be a primitive test, because when these fail for lack of input, we pop the state
// each primitive test tests only a single character (string literals are converted to sequences)
// in case string literals are optimized later this will need to be changed, as popping the state won't be sufficient
//console.log(S)
   assert(typeof S == 'number','S is a number')
   assert(t_lookup[S]=='0' || t_lookup[S]=='1','S is in bounds '+S)
   assert(R==undefined,'result is unknown (R:'+R+',S:'+S+')')
   t_block:{
    if(tlookup(S)&&((x=tbl[pos-offset][S])!=undefined)){if(x){R=true;pos=x[0]}else{R=false}break t_block}
    if(tlookupall(S)&&((x=tbl[pos-offset][S])!=undefined)){if(x){R=true;pos=x[0];bufs.push(buf);buf=x[1]}
                                                           else{R=false}break t_block}
    if(tpushstate(S)) states.push(S)
    if(tbufferout(S)){bufs.push(buf);buf=[]}
    if(tpushpos(S)) posns.push(pos)
    if(temitstate(S)) buf.push(S)
// now that we've done our basic operations on entering an expression, we look up how to Test this expression against the input
    S=T[S]}
   if(S&64){ // if we are in a primitive test state (64-69 in this grammar)
    assert(S<70 && S>63,'S is a primitive test')
// 64: matches [^] (any character, but not EOF)
// 65: ϵ always succeeds, even at EOF
// 66: tests "+"
// 67: tests "*"
// 68: tests [0-9]
// 69: tests " "
    chr=s.charCodeAt(pos)
// if pos is past the end of the string, charCodeAt returns NaN
// TODO: deal with supplementary characters
    switch(S){
// 64 matches "any character", but this means any single Unicode code point
// in case the character we have is a surrogate, [^] needs to fail
// when we match character classes here, we exclude the surrogate range, which is always handled separately
     case 64:R=chr<0xD800&&chr>0xDFFF;break
     case 65:R=true;pos--;break
     case 66:R=chr==0x2B;break
     case 67:R=chr==0x2A;break
     case 68:R=chr<0x3A&&chr>0x2F;break // '0'-'9' == 0x30-0x39
     case 69:R=chr==0x20;break}
// if R is true, we have succeeded and need to advance the position
    if(R)pos++
    else{
// if R is false we must determine why
// if chr is NaN then we are at the end of an input chunk
// if we are also at EOF, the test fails; otherwise, we need to ask the caller to provide more input
     if(isNaN(chr)){
      if(eof) R=false
      else{
// before requesting the next chunk, we stream anything we can in the output buffer and replace it with a new empty buffer
       emit()
// clean up the mess from the failed primitive test
       R=undefined
       S=states.pop()
       out('ready')
// having requested more input, we exit the mainloop function
       return}}
// if !isNaN(chr), then it is either a surrogate character, or a BMP character that failed the test
     else{
// what we actually want here is to read the next character (emitting a 'next' event if there is none, as above) and then combine the two and do a normal character class test limited to the surrogate range.
      if(chr>=0xD800&&chr<=0xDFFF)throw new Error('surrogate characters not yet handled here')
      else R=false}}
    assert(R===true||R===false,'we have a result if we reach this point')
// the result that we have here is for the primitive expression, but the current state is a primitive test state
// we need to pop the state stack to get the state to which the result we have actually corresponds
    S=states.pop()}
// if we have a result it is either from a cache hit on entering a rule, or from a primitive test that just completed (or because we just looped and still have a result)
   while(R!==undefined){
    assert(R===true||R===false,'result is Boolean')
// S here should be the state to which R corresponds, though we have no good way of testing this assertion
// if S is the shadow start state, then we are done.
    if(S==5){emit();return}
    if(R){
// emitting stuff about the node that just matched
     if(memitstate(S)) buf.push(S)
     if(memitclose(S)) buf.push(-2)
     if(memitanon(S)) buf.push(-1)
     if(memitlength(S)) buf.push(pos-posns[posns.length-1])
// caching
     if(mcache(S)) tbl[posns[posns.length-1]][S]=[pos]
     if(mcacheall(S)) tbl[posns[posns.length-1]][S]=[pos,buf]
// dealing with the position stack
     if(mresetpos(S)) pos=posns[posns.length-1]
     if(mpoppos(S)) posns.pop()
// dealing with buffered output (i.e. child nodes)
     if(memitbuf(S)) buf=bufs.pop().concat(buf)
     if(mtossbuf(S)) buf=bufs.pop()
     if(!bufs.length&&buf.length>64)emit()
// as described above:
// When an expression matches, the parser looks at the Match array to get the next state or the result of the containing expression
     S=M[S]}
    else{ // !R
// like mpopstate, fpopstate is useless here so we skip it; if it has any application at all it has something to do with primitive tests
     if(fcache(S)) tbl[posns[posns.length-1]][S]=false
     if(fresetpos(S)) pos=posns[posns.length-1]
     if(fpoppos(S)) posns.pop()
     if(ftossbuf(S)) buf=bufs.pop()
     S=F[S]}
// We define two extra state values to indicate success and failure of the containing expression:
// 80 // success
// 81 // failure
    if(S==80){R=true;S=states.pop()}
    else if(S==81){R=false;S=states.pop()}
    else R=undefined}}}
 function emit(){var x
// note that when we emit, we are emitting from the "outside" of the parse tree, i.e. bufs[0] not bufs[bufs.length-1]
  x=bufs.length?bufs[0]:buf
  if(x.length){
   out('tree segment',x)
   if(bufs.length)bufs[0]=[]; else buf=[]}}}

function streaming_revisited(){var output='',f,events=[],chunks
 f=arith_stream(function(m,x,y){
  output+=pp(m)+'\n'+(x?pp(x)+'\n':'')
  if(m=='tree segment')events=events.concat(x)})
 chunks=['2','+2','*3']
 chunks=['2 ','+ 2 ','* 3']
 //f('chunk','78')
 //f('chunk','9')
 chunks.forEach(function(chunk){f('chunk',chunk)})
 f('eof')
 //return pp(chunks)+'\n\n'+output
 //return pp(treeFromEvents(events))
 //return pp(chunks)+'\n\n'+pp(events)
 return showTree(treeFromEvents(events),p_arith_streaming_Expr.names,chunks.join(''))
}