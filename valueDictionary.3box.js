{cfunc:'xyzzy',ciset:'',outfn:'',outct:''

//,cfunc:'test_showEvents'
//,cfunc:'test_showError'
//,cfunc:'test_showResult'

,cfunc:'test_nodeHandler'

//,cfunc:'generateParser',ciset:'ES5_gen_v6'

//,cfunc:'peg_v5_gen',ciset:'ES5_v6_default_identifier',outfn:'ES5_v6_default_identifier.js',outct:'text/javascript'

//,cfunc:'ES5_default_test',ciset:'ES5_test_small'
//,ciset:'scratch'

//,outfn:'parse_trace',outct:'text/plain'

//,cfunc:'ES5_default_test_identifier',ciset:'ES5_test_small'

//,cfunc:'peg_v6_test_streaming_arith_default'

//,cfunc:'peg_benchmarks_upper_bound'

//,cfunc:'peg_v5_gen',ciset:'arith_streaming_default_flags',outfn:'PEG_arith_streaming_default.js',outct:'text/javascript'


//,cfunc:'peg_v5_gen',ciset:'arith_streaming',outfn:'PEG_arith_streaming.js',outct:'text/javascript'
//,outfn:'scratch',outct:'text/plain'
//,cfunc:'peg_v6_test_streaming_arith'

//,cfunc:'peg_v5_gen',ciset:'PEG_features_v6'
//,outfn:'PEG_features_streaming.js',outct:'application/x-javascript'


//cfunc:'cset_prod',ciset:'cset_prod',outfn:'cset_prod.js',outct:'application/x-javascript'
//,cfunc:'PEG_summarize',ciset:'ES5arith'
//,cfunc:'PEG_summarize_tal',ciset:'ES5arith'
//,cfunc:'peg_arith_test',ciset:'arith_expr1'

//,cfunc:'peg_generator',ciset:'peg_generator',outfn:'peg_generated.js',outct:'application/x-javascript'

//,cfunc:'rawFailDump',ciset:'buildFailTree'

//,cfunc:'abc_test',ciset:'test_abc'

//,cfunc:'streaming_test',ciset:'streaming_test'
//,cfunc:'streaming_revisited'

//,cfunc:'peg_v6_hacked'
//,cfunc:'peg_benchmarks_upper_bound'
//,cfunc:'peg_benchmarks_test_arith_streaming'
//,cfunc:'peg_benchmarks_array_push'

/**************/
/* Codegen v5 */
/**************/

//,cfunc:'cset_to_js_v5_test'

//,cfunc:'peg_v5_gen_tal',ciset:'arith'

//,cfunc:'peg_v5_gen',ciset:'arith_gen_v5',outfn:'PEG_arith_v5.js',outct:'application/x-javascript'

//,cfunc:'peg_v5_gen',ciset:'PEG.peg_gen_v5',outfn:'PEG_v5.js',outct:'application/x-javascript'

//,cfunc:'peg_v5_gen',ciset:'ES5arith_gen_v5',outfn:'PEG_ES5_arith_v5.js',outct:'application/x-javascript'

//,cfunc:'peg_v5_gen',ciset:'ES5_gen_v5_opt',outfn:'ES5_v5_1.js',outct:'application/x-javascript'

//,cfunc:'ES5_test',ciset:'ES5_test'

//,cfunc:'PEG_ES5_arith_Expr_test',ciset:'PEG_ES5_arith_Expr_test'

//,cfunc:'peg_benchmarks',ciset:'PEG.peg'
//,cfunc:'peg_benchmarks',ciset:'CodePointLit'
//,cfunc:'peg_benchmarks_re_vs_loop',ciset:'PEG.peg'
//,cfunc:'peg_benchmarks_fcall_vs_loop'

//,cfunc:'peg_profile_analyzer',ciset:'profile_analyzer'

/**************/
/* v6 codegen */
/**************/

//,cfunc:'peg_v5_gen',ciset:'arith_streaming',outfn:'PEG_arith_streaming.js',outct:'text/javascript'
//,cfunc:'peg_v5_gen',ciset:'arith_streaming_default_flags',outfn:'PEG_arith_streaming_default.js',outct:'text/javascript'
//,cfunc:'peg_v5_gen',ciset:'ES5_v6_default',outfn:'ES5_v6_default.js',outct:'text/javascript'
//,outfn:'scratch',outct:'text/plain'
//,cfunc:'peg_v6_test_streaming_arith'
//,cfunc:'peg_v6_test_streaming_arith_default'
//,cfunc:'peg_v6_test_streaming_arith_single_call'

/************/
/* FEATURES */
/************/

//,cfunc:'peg_v5_gen',ciset:'PEG_features_gen_v5',outfn:'PEG_features_v5.js',outct:'application/x-javascript'

//,cfunc:'peg_features_test'

//,cfunc:'generateParserThrowing',ciset:'test_markdown'

,isets:
 {cset_prod:['file(cset.js)'
            ,'file(cset_unicode_properties_generated.js)'
            ,'file(../compat/forEach.js)'
            ,'file(../compat/filter.js)']
 ,arith:['file(PEG_arith.peg)'
        ,'hide'
        ,'force']
 ,arith_gen_v5:['file(PEG_arith.peg)'
               ,'arith_v5_opts']
 ,arith_streaming:['file(PEG_arith.peg)'
                  ,'arith_streaming']
 ,arith_streaming_default_flags:['file(PEG_arith.peg)'
                                ,'arith_streaming_default_flags']
 ,arith_expr1:['arith_expr1']
 ,ES5arith:['file(PEG_ES5_arith.peg)','hide']
 ,ES5arith_gen_v5:['file(PEG_ES5_arith.peg)'
                  ,'ES5arith_v5_opts']
 ,PEG_ES5_arith_Expr_test:['ES5arith_expr']
 ,peg_generator:['file(PEG.peg)'
                ,'file(_n2)']
 ,'PEG.peg':['file(PEG.peg)']
 ,'PEG.peg_gen':['file(PEG.peg)'
                ,'PEGpeg_start'
                ,'PEGpeg_prefix']
 ,'PEG.peg_gen_v5':['file(PEG.peg)'
                   ,'PEGpeg_v5_opts']
 ,'PEG.peg_gen_v5_1':['file(PEG.peg)'
                     ,'PEGpeg_start'
                     ,'PEGpeg_prefix_v5_1']
 ,'PEG_features_gen_v5':['file(PEG_features.peg)'
                        ,'emptyOpts']
 ,'PEG_features_v6':['file(PEG_features.peg)'
                    ,'features_streaming']
 ,'ES5_gen_v5':['file(ECMAScript_unified.peg)'
               ,'ES5_v5_opts']
 ,'ES5_gen_v5_opt':['file(ECMAScript_unified.peg)'
                   ,'ES5_v5_opt_opts']
 ,'ES5_v6_default':['file(ECMAScript_unified.peg)'
                   ,'ES5_v6_default']
 ,'ES5_v6_default_identifier':['file(PEG_ES5_Identifier.peg)'
                              ,'ES5_v6_default_identifier']
 ,'ES5_test':['file(API.js)']
 ,'ES5_test_small':['small_javascript']
 ,'ES5_gen_v6':['file(ECMAScript_unified.peg)','emptyOpts']
 ,'scratch':['file(scratch)']
 ,CodePointLit:['CodePointLit']
 ,profile_analyzer:['result(1252281266,ES5_test,ES5_test)']
 ,test_markdown:['file(tests/markdown.peg)']
 ,test_abc:['abc_peg']
 ,buildFailTree:['failTree','failNames']
 ,streaming_test:['arith_expr2']
 }


,'const':
 {force:['x'
        ,'y'
        ,'nm'
        ,'code'
        ,'cset'
        ,'fdecl'
        ,'cp'
        ]
 ,hide:['IdentChar'
       ,'IdentStartChar'
       ,'SpaceAtom'
       ,'LB'
       //,'NonTerminal'
       ,'HEXDIG'
       ]
 ,small_javascript:'function f(x){return x*x}'
 ,emptyOpts:{}
 ,arith_expr1:'42 * 3 + 1'
 ,arith_expr2:'7'
 ,CodePointLit:'C ← [a-z−z]'
 ,arith_v5_opts:{prefix:'p_arith_v5_'
                ,nocache:['Expr']}
 ,arith_streaming:{prefix:'p_arith_streaming_v6_'
                  ,cache:['S+0'
                         ]
                  ,t_bufferout:['Add+4'
                               ,'Mult+4'
                               ]
                  ,pushpos:['Expr+0'
                           ,'Add+0'
                           ,'Mult+0'
                           ,'Num+0'
                           ,'S+0'
                           ,'_+2'
                           ,'Add+3'
                           ,'Mult+3'
                           ,'Add+7'
                           ,'Mult+7'
                           ]
                  ,t_emitstate:['Expr+0'
                               ,'Add+0'
                               ,'Mult+0'
                               ,'Num+0'
                               ]
                  ,m_emitstate:['S+0'
                               ]
                  ,m_emitclose:['Expr+0'
                               ,'Add+0'
                               ,'Mult+0'
                               ,'Num+0'
                               ,'S+0'
                               ]
                  ,m_emitanon:['Add+7'
                              ,'Mult+7'
                              ]
                  ,m_resetpos:[]
                  ,m_emitbuf:['Add+7'
                             ,'Mult+7'
                             ]
                  ,m_tossbuf:[]
                  ,f_tossbuf:['Add+4'
                             ,'Mult+4'
                             ,'Add+7'
                             ,'Mult+7'
                             ]
                  ,chunk:['Expr'
                         ,'Add'
                         ,'Mult'
                         ,'Num'
                         ,'S']
                  ,streaming:true}
 ,arith_streaming_default_flags:
     {prefix:'p_arith_streaming_v6_default_flags_'
     ,streaming:true
     //,debug:true
     //,asserts:true
     //,trace:true
     }
 ,features_streaming:{prefix:'p_features_stream'
                     ,streaming:true}
 ,ES5_v6_default:{fname:'p_ES5_v6_default'
                 ,streaming:true}
 ,ES5_v6_default_identifier:{fname:'p_ES5_v6_default_identifier'
                            ,streaming:true}
 ,ES5arith_v5_opts:{prefix:'p_ES5_arith_'}
 ,ES5arith_expr:'8 * 3 << ~-2'
 ,PEGpeg_v5_opts:{start:'RuleSet'
                 ,prefix:'p_PEG_v5_'
                 }
 ,PEGpeg_prefix_v5:'p_PEG_v5_'
 ,PEGpeg_prefix_v5_1:'p_PEG_v5_1_'
 ,PEG_feat_start:'S'
 ,PEG_feat_pre_v5:'p_PEG_features_v5_'
 ,ES5_v5_opts:{prefix:'p_ES5_v5_'
              ,debug:1
              ,profile:1
       /*       ,drop:['LF','CR','LS','PS'
  ,'DQ','SQ','RS'
  ,'HexDigit'
  ,'RegularExpressionChar'
  ,'RegularExpressionFlags'
  ,'WhiteSpace'
  ,'FalseTok','TrueTok','NullTok'
  ,'BreakTok','ContinueTok','DebuggerTok'
  ,'InTok','InstanceOfTok', 'DeleteTok'
  ,'FunctionTok', 'NewTok', 'ThisTok'
  ,'TypeofTok', 'VoidTok', 'IfTok', 'ElseTok'
  ,'DoTok','WhileTok', 'ForTok', 'VarTok'
  ,'ReturnTok','CaseTok', 'DefaultTok'
  ,'SwitchTok','ThrowTok', 'CatchTok'
  ,'FinallyTok','TryTok','WithTok'
  ,'LineTerminator'
  ,'LineTerminatorSequence'
  ,'IdentifierStart'
  ,'IdentifierPart'
  ,'ReservedWord'
  ,'Keyword'
  ,'FutureReservedWord'
  ,'SourceCharacter'
  ]*/
              ,nocache:[]}
 //optimized
 ,ES5_v5_opt_opts:{prefix:'p_ES5_v5_'
                  ,nocache:["UnicodeLetter","LF","LS","PS","MultiLineComment","IdentifierName","Keyword","ReservedWord","ThisTok","PrimaryExpr","CallExpr","PostfixExpr","UnaryExpr","FutureReservedWord","MultiplicativeExpr","NewExpr","AdditiveExpr","ShiftExpr","RelationalExpr","Arguments","EqualityExpr","BitwiseAndExpr","BitwiseXOrExpr","AssignmentExpr","SourceCharacter","BitwiseOrExpr","LogicalAndExpr","LogicalOrExpr","ConditionalExpr","LineTerminator","MultiplicativeOp","AdditiveOp","ShiftOp","RelationalOp","InstanceOfTok","EqualityOp","InTok","AssignmentOperator","DoubleStringCharacter","NullTok","NullLiteral","Literal","TrueTok","BooleanLiteral","FalseTok","DecimalLiteral","NumericLiteral","StringLiteral","HexIntegerLiteral","Expr","RegularExpressionLiteral","ArrayLiteral","ObjectLiteral","Block","Statement","FunctionExpr","VariableStatement","DeleteTok","VoidTok","TypeofTok","EmptyStatement","ExprStatement","IfTok","IfStatement","EOS","DoTok","DoWhileStatement","WhileTok","WhileStatement","IterationStatement","ForInStatement","ForStatement","ContinueTok","ContinueStatement","BreakTok","BreakStatement","ReturnTok","ReturnStatement","RegularExpressionChar","ArgumentList","SingleStringCharacter","WithTok","WithStatement","LabelledStatement","SwitchTok","SwitchStatement","ThrowTok","ThrowStatement","TryTok","TryStatement","DebuggerTok","DebuggerStatement","LineContinuation","ExponentPart","PropertyName","PropertyAssignment","FunctionDeclaration","VariableDeclaration","FormalParameterList","FunctionBody","EOSnoLB","EOF","RegularExpressionBackslashSequence","DecimalDigit","RegularExpressionClassChar","RegularExpressionClass","AssignmentExprNoIn","RelationalExprNoIn","EqualityExprNoIn","BitwiseAndExprNoIn","BitwiseXOrExprNoIn","BitwiseOrExprNoIn","LogicalAndExprNoIn","LogicalOrExprNoIn","ConditionalExprNoIn","PropertyNameAndValueList","RegularExpressionFirstChar","RegularExpressionBody","RegularExpressionFlags","RelationalOpNoIn","ExprNoIn","ElementList","VariableDeclarationListNoIn","CatchTok","Catch","FinallyTok","Finally","SingleEscapeCharacter","CharacterEscapeSequence","EscapeSequence","CaseTok","CaseClause","DefaultTok","DefaultClause","Program"]
                  ,drop:['LF','CR','LS','PS'
  ,'DQ','SQ','RS'
  ,'HexDigit'
  ,'RegularExpressionChar'
  ,'RegularExpressionFlags'
  ,'WhiteSpace'
  ,'FalseTok','TrueTok','NullTok'
  ,'BreakTok','ContinueTok','DebuggerTok'
  ,'InTok','InstanceOfTok', 'DeleteTok'
  ,'FunctionTok', 'NewTok', 'ThisTok'
  ,'TypeofTok', 'VoidTok', 'IfTok', 'ElseTok'
  ,'DoTok','WhileTok', 'ForTok', 'VarTok'
  ,'ReturnTok','CaseTok', 'DefaultTok'
  ,'SwitchTok','ThrowTok', 'CatchTok'
  ,'FinallyTok','TryTok','WithTok'
  ,'LineTerminator'
  ,'LineTerminatorSequence'
  ,'IdentifierStart'
  ,'IdentifierPart'
  ,'ReservedWord'
  ,'Keyword'
  ,'FutureReservedWord'
  ,'SourceCharacter'
  ,'SingleStringCharacter'
  ,'DoubleStringCharacter'
  ]
  }
 ,failNames: ["Document", "P_spacechar", "P_sp", "P_spnl", "P_specialchar", "P_newline", "P_normalchar", "P_blankline", "P_eof", "P_interblockspace", "P_line", "P_nonemptyline", "P_space", "P_nonspacechar", "P_lineof_star", "P_lineof_dash", "P_lineof_underscore", "P_bullet", "P_enumerator", "P_nonindentspace", "P_linechar", "P_indent", "P_indentedline", "P_optionallyindentedline", "P_openblocktag", "P_closeblocktag", "P_selfclosingblocktag", "P_blocktag", "P_alphanumeric", "P_singlequoted", "P_doublequoted", "P_htmlattributevalue", "P_htmlattribute", "P_htmlcomment", "P_htmltag", "P_inticks", "References", "Block", "Heading", "AtxStart", "AtxInline", "AtxEnd", "AtxHeading", "SetextHeading", "SetextHeadingBig", "SetextHeadingSmall", "BulletList", "BulletListTight", "BulletListLoose", "OrderedList", "OrderedListTight", "OrderedListLoose", "ListItem", "ListBlock", "ListContinuationBlock", "NestedList", "ListBlockLine", "InBlockTags", "HtmlBlock", "BlockquoteLine", "Blockquote", "VerbatimChunk", "Verbatim", "Label", "RefTitle", "RefSrc", "Reference", "HorizontalRule", "Para", "Plain", "Inline", "RawHtml", "EscapedChar", "Entity", "HexEntity", "DecEntity", "CharEntity", "Endline", "NormalEndline", "TerminalEndline", "LineBreak", "Code", "UlOrStarLine", "Emph", "EmphStar", "EmphUl", "Strong", "StrongStar", "StrongUl", "Image", "Link", "ReferenceLink", "ReferenceLinkDouble", "ReferenceLinkSingle", "AutoLinkUrl", "AutoLinkEmail", "BasicSource", "AngleSource", "Source", "LinkTitle", "ExplicitLink", "Str", "Space", "Symbol"]

 ,failTree: [[false, false, [true, 0, []], , false, false, , false, false, , false, false, false, , , , , , , [true, 0, []], , , , , , , , , , , , , , false, false, false, false, , , , , , , , , , , , , , , , , , , , , , , , , , , false, , , false, , , , false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, , , , , false, , false, false], [, , , , , false, , , false], [, , , , , false], [, , , , , false], [, , , , , false], [, , , , , false], [, , , , , false], [, , , , , false], [, , , , , false], [, , , , , false], [, , , , , false], [, , , , , false], [, , , , , false], [, , , , , false], [, , , , , false], [, , , , , false], [, , , , , false], [, , , , , false], [, , , , , false], [, , , , , false], [, , , , , [true, 21, []]], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []]
 ,abc_peg:'TestABC ← "abc"'
 }
}