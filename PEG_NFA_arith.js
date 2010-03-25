// NFA parser implementation of the arithmetic parser grammar.

// Written by hand to better understand the issues of generating a (partial) DFA from a PEG.

// The grammar:

// Expr ← Add
// Add  ← Mult (S? "+" S? Mult)*
// Mult ← Num (S? "*" S? Num)*
// Num  ← [0-9] [0-9]*
// S    ← " "+

// Beginning from the start token, we collect a set of potential parser states that may succeed, until we reach terminals.

// [ Expr ]
// [ Add ]
// [ Mult ]
// [ Num ]
// [ [0-9] ]

// In this simple grammar, in each case, each rule must match the first subexpression or fail, so we descend all the way to [0-9] without adding any alternative succesful parses.

// For each character range leading to a different result we create a new state that the parser can be in.
// In this case there is only one allowable character range so far, [0-9], and anything else in the initial state is a fatal error.

// So what can happen, based on the first character we see, is that Expr, Add, Mult, Num, can all be pushed onto the stack and a [0-9] can be consumed, or an error can be emitted.

// Assuming a [0-9] is consumed we are now in the [0-9]* expression of the Num production.
// This may succeed or fail.
// Regardless, Num will succeed.
// Since the *-expr cannot fail and is the last expr in the Num sequence, we can determine that this is a commit point for the Num, and can emit the entire stack once the first [0-9] is consumed.

// At position two there are four possible character classes, these are [0-9], [*], [+], [ ].
// These happen to be disjoint which simplifies this case.

// We construct a new state representing the superposition of these expressions.
// This is the state we move to once the [0-9] succeeds.
// We test the second input character in this state and either fail if the input character is in none of these sets, or move into a new state.

// If the second character is a space, this is ambiguous, we could be matching the space before a "*" in Mult or the "+" in Add.
// So here we introduce non-determinism.

// 