/*

{S:20,name:'CharEscape',direct_deps:['HEXDIG','HEXDIG','HEXDIG','HEXDIG']
,known_regular:[true]
,all_csets:[[92,93],[48,58,65,71],[92,93]
           ,[102,103,110,111,114,115,116,117,118,119]]
,re:[2
    ,[[3
      ,[[2,[[0,[92,93]],[4,4,4,[5,'HEXDIG']]]]
       ,[2,[[0,[92,93]],[0,[102,103,110,111,114,115,116,117,118,119]]]]]]]]
,dfa:{type:'transition'
     ,transition:[[[92,93]
                  ,{type:'transition'
                   ,transition:[[[48,58,65,71]
                                ,{type:'transition'
                                 ,transition:[[[48,58,65,71]
                                              ,{type:'transition'
                                               ,transition:[[[48,58,65,71]
                                                            ,{type:'transition'
                                                             ,transition:[[[48,58
                                                                           ,65
                                                                           ,71]
                                                                          ,{type:'match'}]]}]]}]]}]
                               ,[[102,103,110,111,114,115,116,117,118,119]
                                ,{type:'match'}]]}]]}
,expr:{id:'CharEscape+0',type:2,S:20,T:1179648,M:324,F:325,toplevel:true
      ,flag_n:2735,anon_consume:false,can_emit_named:true,S_flags:84655
      ,S_flags_:'10100101010101111'
      ,flags:{cache:true,t_bufferout:true,pushpos:true,t_emitstate:true
             ,m_emitstate:false,m_emitclose:true,m_emitanon:false
             ,m_emitlength:true,m_resetpos:false,m_emitbuf:true,m_tossbuf:false
             ,f_tossbuf:true}
      ,subexprs:[{id:'CharEscape+1',type:3,S:288,T:1186310,M:324,F:325,flag_n:0
                 ,anon_consume:false,can_emit_named:true,S_flags:1179648
                 ,S_flags_:'100100000000000000000'
                 ,flags:{cache:false,t_bufferout:false,pushpos:false
                        ,t_emitstate:false,m_emitstate:false,m_emitclose:false
                        ,m_emitanon:false,m_emitlength:false,m_resetpos:false
                        ,m_emitbuf:false,m_tossbuf:false,f_tossbuf:false}
                 ,subexprs:[{id:'CharEscape+2',type:2,S:289,T:1188036,M:324
                            ,F:1219270,flag_n:2566,anon_consume:false
                            ,can_emit_named:true,S_flags:1186310
                            ,S_flags_:'100100001101000000110'
                            ,flags:{cache:false,t_bufferout:true,pushpos:true
                                   ,t_emitstate:false,m_emitstate:false
                                   ,m_emitclose:false,m_emitanon:false
                                   ,m_emitlength:false,m_resetpos:false
                                   ,m_emitbuf:true,m_tossbuf:false
                                   ,f_tossbuf:true}
                            ,subexprs:[{id:'CharEscape+3',type:0,S:290,T:358
                                       ,M:1194502,F:325,cset:[92,93],flag_n:196
                                       ,subexprs:[],anon_consume:true
                                       ,emits_anon:true,S_flags:1188036
                                       ,S_flags_:'100100010000011000100'
                                       ,flags:{cache:false,t_bufferout:false
                                              ,pushpos:true,t_emitstate:false
                                              ,m_emitstate:false
                                              ,m_emitclose:false,m_emitanon:true
                                              ,m_emitlength:true
                                              ,m_resetpos:false,m_emitbuf:false
                                              ,m_tossbuf:false,f_tossbuf:false}}
                                      ,{id:'CharEscape+4',type:2,S:291,T:1196032
                                       ,M:324,F:325,flag_n:2566
                                       ,anon_consume:false,can_emit_named:true
                                       ,S_flags:1194502
                                       ,S_flags_:'100100011101000000110'
                                       ,flags:{cache:false,t_bufferout:true
                                              ,pushpos:true,t_emitstate:false
                                              ,m_emitstate:false
                                              ,m_emitclose:false
                                              ,m_emitanon:false
                                              ,m_emitlength:false
                                              ,m_resetpos:false,m_emitbuf:true
                                              ,m_tossbuf:false,f_tossbuf:true}
                                       ,subexprs:[{id:'CharEscape+5',type:5,S:292
                                                  ,T:76463,M:1200128,F:325
                                                  ,ref:'HEXDIG',flag_n:0
                                                  ,subexprs:[]
                                                  ,can_emit_named:true
                                                  ,S_flags:1196032
                                                  ,S_flags_:'100100100000000000000'
                                                  ,flags:{cache:false
                                                         ,t_bufferout:false
                                                         ,pushpos:false
                                                         ,t_emitstate:false
                                                         ,m_emitstate:false
                                                         ,m_emitclose:false
                                                         ,m_emitanon:false
                                                         ,m_emitlength:false
                                                         ,m_resetpos:false
                                                         ,m_emitbuf:false
                                                         ,m_tossbuf:false
                                                         ,f_tossbuf:false}}
                                                 ,{id:'CharEscape+6',type:5,S:293
                                                  ,T:76463,M:1204224,F:325
                                                  ,ref:'HEXDIG',flag_n:0
                                                  ,subexprs:[]
                                                  ,can_emit_named:true
                                                  ,S_flags:1200128
                                                  ,S_flags_:'100100101000000000000'
                                                  ,flags:{cache:false
                                                         ,t_bufferout:false
                                                         ,pushpos:false
                                                         ,t_emitstate:false
                                                         ,m_emitstate:false
                                                         ,m_emitclose:false
                                                         ,m_emitanon:false
                                                         ,m_emitlength:false
                                                         ,m_resetpos:false
                                                         ,m_emitbuf:false
                                                         ,m_tossbuf:false
                                                         ,f_tossbuf:false}}
                                                 ,{id:'CharEscape+7',type:5,S:294
                                                  ,T:76463,M:1208320,F:325
                                                  ,ref:'HEXDIG',flag_n:0
                                                  ,subexprs:[]
                                                  ,can_emit_named:true
                                                  ,S_flags:1204224
                                                  ,S_flags_:'100100110000000000000'
                                                  ,flags:{cache:false
                                                         ,t_bufferout:false
                                                         ,pushpos:false
                                                         ,t_emitstate:false
                                                         ,m_emitstate:false
                                                         ,m_emitclose:false
                                                         ,m_emitanon:false
                                                         ,m_emitlength:false
                                                         ,m_resetpos:false
                                                         ,m_emitbuf:false
                                                         ,m_tossbuf:false
                                                         ,f_tossbuf:false}}
                                                 ,{id:'CharEscape+8',type:5,S:295
                                                  ,T:76463,M:1212416,F:325
                                                  ,ref:'HEXDIG',flag_n:0
                                                  ,subexprs:[]
                                                  ,can_emit_named:true
                                                  ,S_flags:1208320
                                                  ,S_flags_:'100100111000000000000'
                                                  ,flags:{cache:false
                                                         ,t_bufferout:false
                                                         ,pushpos:false
                                                         ,t_emitstate:false
                                                         ,m_emitstate:false
                                                         ,m_emitclose:false
                                                         ,m_emitanon:false
                                                         ,m_emitlength:false
                                                         ,m_resetpos:false
                                                         ,m_emitbuf:false
                                                         ,m_tossbuf:false
                                                         ,f_tossbuf:false}}
                                                 ,{id:'CharEscape+9',type:8,S:296
                                                  ,T:326,M:324,F:325,flag_n:0
                                                  ,subexprs:[],S_flags:1212416
                                                  ,S_flags_:'100101000000000000000'
                                                  ,flags:{cache:false
                                                         ,t_bufferout:false
                                                         ,pushpos:false
                                                         ,t_emitstate:false
                                                         ,m_emitstate:false
                                                         ,m_emitclose:false
                                                         ,m_emitanon:false
                                                         ,m_emitlength:false
                                                         ,m_resetpos:false
                                                         ,m_emitbuf:false
                                                         ,m_tossbuf:false
                                                         ,f_tossbuf:false}}]}]}
                           ,{id:'CharEscape+10',type:2,S:297,T:1220608,M:324
                            ,F:325,flag_n:2758,anon_consume:true
                            ,can_emit_named:false,emits_anon:true
                            ,S_flags:1219270,S_flags_:'100101001101011000110'
                            ,flags:{cache:false,t_bufferout:true,pushpos:true
                                   ,t_emitstate:false,m_emitstate:false
                                   ,m_emitclose:false,m_emitanon:true
                                   ,m_emitlength:true,m_resetpos:false
                                   ,m_emitbuf:true,m_tossbuf:false
                                   ,f_tossbuf:true}
                            ,subexprs:[{id:'CharEscape+11',type:0,S:298,T:358
                                       ,M:1224704,F:325,cset:[92,93],flag_n:0
                                       ,subexprs:[],anon_consume:true
                                       ,S_flags:1220608
                                       ,S_flags_:'100101010000000000000'
                                       ,flags:{cache:false,t_bufferout:false
                                              ,pushpos:false,t_emitstate:false
                                              ,m_emitstate:false
                                              ,m_emitclose:false
                                              ,m_emitanon:false
                                              ,m_emitlength:false
                                              ,m_resetpos:false,m_emitbuf:false
                                              ,m_tossbuf:false,f_tossbuf:false}}
                                      ,{id:'CharEscape+12',type:0,S:299,T:359
                                       ,M:324,F:325,flag_n:0,subexprs:[]
                                       ,anon_consume:true,S_flags:1224704
                                       ,S_flags_:'100101011000000000000'
                                       ,cset:[102,103,110,111,114,115,116,117,118
                                             ,119]
                                       ,flags:{cache:false,t_bufferout:false
                                              ,pushpos:false,t_emitstate:false
                                              ,m_emitstate:false
                                              ,m_emitclose:false
                                              ,m_emitanon:false
                                              ,m_emitlength:false
                                              ,m_resetpos:false,m_emitbuf:false
                                              ,m_tossbuf:false,f_tossbuf:false}}]}]}]}}
{equiv_class_:{id:0,key:'equiv_class_',member_cset_ids:[]}
,equiv_class_1:{id:1,key:'equiv_class_1',member_cset_ids:[1]}
,equiv_class_0:{id:2,key:'equiv_class_0',member_cset_ids:[0]}
,equiv_class_2:{id:3,key:'equiv_class_2',member_cset_ids:[2]}}
[{key:'cset_92,93',cset:[92,93],equivs:[2],id:0}
,{key:'cset_48,58,65,71',cset:[48,58,65,71],equivs:[1],id:1}
,{key:'cset_102,103,110,111,114,115,116,117,118,119'
 ,cset:[102,103,110,111,114,115,116,117,118,119],equivs:[3],id:2}]
{cset_92,93:{key:'cset_92,93',cset:[92,93],equivs:[2],id:0}
,cset_48,58,65,71:{key:'cset_48,58,65,71',cset:[48,58,65,71],equivs:[1],id:1}
,cset_102,103,110,111,114,115,116,117,118,119:{key:'cset_102,103,110,111,114,115,116,117,118,119'
                                              ,equivs:[3],id:2
                                              ,cset:[102,103,110,111,114,115,116
                                                    ,117,118,119]}}

*/

parsePEG_dfa.legend="RuleSet ← (RuleSet+0 seq (RuleSet+1 ordC (RuleSet+2 seq (RuleSet+3 rep (RuleSet+4 ref LB)) (RuleSet+5 ordC (RuleSet+6 ref Comment) (RuleSet+7 ref Rule)) (RuleSet+8 rep (RuleSet+9 seq (RuleSet+10 seq (RuleSet+11 ref LB) (RuleSet+12 rep (RuleSet+13 ref LB))) (RuleSet+14 ordC (RuleSet+15 ref Comment) (RuleSet+16 ref Rule)))) (RuleSet+17 rep (RuleSet+18 ref LB))) (RuleSet+19 ϵ)))\nLB ← (LB+0 seq (LB+1 ordC (LB+2 seq (LB+3 cset d) (LB+4 cset a)) (LB+5 cset a d)))\nComment ← (Comment+0 seq (Comment+1 cset 3b) (Comment+2 rep (Comment+3 cset 0-9 b-c e-10ffff)))\nRule ← (Rule+0 seq (Rule+1 ref NonTerminal) (Rule+2 ref S) (Rule+3 cset 2190) (Rule+4 ref S) (Rule+5 ref OrdChoice))\nNonTerminal ← (NonTerminal+0 seq (NonTerminal+1 ref IdentStartChar) (NonTerminal+2 rep (NonTerminal+3 ref IdentChar)))\nIdentStartChar ← (IdentStartChar+0 seq (IdentStartChar+1 cset 41-5a))\nIdentChar ← (IdentChar+0 seq (IdentChar+1 cset 30-39 41-5a 5f 6…))\nS ← (S+0 seq (S+1 seq (S+2 ref SpaceAtom) (S+3 rep (S+4 ref SpaceAtom))))\nSpaceAtom ← (SpaceAtom+0 seq (SpaceAtom+1 ordC (SpaceAtom+2 cset 20) (SpaceAtom+3 seq (SpaceAtom+4 ref LB) (SpaceAtom+5 cset 20))))\nOrdChoice ← (OrdChoice+0 seq (OrdChoice+1 ordC (OrdChoice+2 ref S) (OrdChoice+3 ϵ)) (OrdChoice+4 ref Sequence) (OrdChoice+5 ordC (OrdChoice+6 ref S) (OrdChoice+7 ϵ)) (OrdChoice+8 rep (OrdChoice+9 seq (OrdChoice+10 cset 2f) (OrdChoice+11 ordC (OrdChoice+12 ref S) (OrdChoice+13 ϵ)) (OrdChoice+14 ref Sequence) (OrdChoice+15 ordC (OrdChoice+16 ref S) (OrdChoice+17 ϵ)))))\nSequence ← (Sequence+0 seq (Sequence+1 seq (Sequence+2 seq (Sequence+3 ref SeqUnit) (Sequence+4 ordC (Sequence+5 ref S) (Sequence+6 ϵ))) (Sequence+7 rep (Sequence+8 seq (Sequence+9 ref SeqUnit) (Sequence+10 ordC (Sequence+11 ref S) (Sequence+12 ϵ))))))\nSeqUnit ← (SeqUnit+0 seq (SeqUnit+1 ordC (SeqUnit+2 ref AnyRep) (SeqUnit+3 ref PosRep) (SeqUnit+4 ref MNRep) (SeqUnit+5 ref Optional) (SeqUnit+6 ref ParenthExpr) (SeqUnit+7 ref PosLookahead) (SeqUnit+8 ref NegLookahead) (SeqUnit+9 ref AtomicExpr)))\nAnyRep ← (AnyRep+0 seq (AnyRep+1 ref Replicand) (AnyRep+2 cset 2a))\nReplicand ← (Replicand+0 seq (Replicand+1 ordC (Replicand+2 ref ParenthExpr) (Replicand+3 ref AtomicExpr)))\nParenthExpr ← (ParenthExpr+0 seq (ParenthExpr+1 cset 28) (ParenthExpr+2 ref OrdChoice) (ParenthExpr+3 cset 29))\nAtomicExpr ← (AtomicExpr+0 seq (AtomicExpr+1 ordC (AtomicExpr+2 ref Empty) (AtomicExpr+3 ref CharSet) (AtomicExpr+4 ref NonTerminal) (AtomicExpr+5 ref StrLit)))\nEmpty ← (Empty+0 seq (Empty+1 cset 3f5))\nCharSet ← (CharSet+0 seq (CharSet+1 ordC (CharSet+2 ref NegCharSet) (CharSet+3 ref PosCharSet)))\nNegCharSet ← (NegCharSet+0 seq (NegCharSet+1 seq (NegCharSet+2 cset 5b) (NegCharSet+3 cset 5e)) (NegCharSet+4 ordC (NegCharSet+5 ref S) (NegCharSet+6 ϵ)) (NegCharSet+7 ordC (NegCharSet+8 ref CharSetExpr) (NegCharSet+9 ϵ)) (NegCharSet+10 cset 5d))\nCharSetExpr ← (CharSetExpr+0 seq (CharSetExpr+1 ref CharSetDifference) (CharSetExpr+2 ordC (CharSetExpr+3 ref S) (CharSetExpr+4 ϵ)))\nCharSetDifference ← (CharSetDifference+0 seq (CharSetDifference+1 ref CharSetIntersection) (CharSetDifference+2 rep (CharSetDifference+3 seq (CharSetDifference+4 ordC (CharSetDifference+5 ref S) (CharSetDifference+6 ϵ)) (CharSetDifference+7 cset 2212) (CharSetDifference+8 ordC (CharSetDifference+9 ref S) (CharSetDifference+10 ϵ)) (CharSetDifference+11 ref CharSetIntersection))))\nCharSetIntersection ← (CharSetIntersection+0 seq (CharSetIntersection+1 ref CharSetUnion) (CharSetIntersection+2 rep (CharSetIntersection+3 seq (CharSetIntersection+4 ordC (CharSetIntersection+5 ref S) (CharSetIntersection+6 ϵ)) (CharSetIntersection+7 cset 2229) (CharSetIntersection+8 ordC (CharSetIntersection+9 ref S) (CharSetIntersection+10 ϵ)) (CharSetIntersection+11 ref CharSetUnion))))\nCharSetUnion ← (CharSetUnion+0 seq (CharSetUnion+1 seq (CharSetUnion+2 seq (CharSetUnion+3 ref CodePointExpr) (CharSetUnion+4 ordC (CharSetUnion+5 ref S) (CharSetUnion+6 ϵ))) (CharSetUnion+7 rep (CharSetUnion+8 seq (CharSetUnion+9 ref CodePointExpr) (CharSetUnion+10 ordC (CharSetUnion+11 ref S) (CharSetUnion+12 ϵ))))))\nCodePointExpr ← (CodePointExpr+0 seq (CodePointExpr+1 ordC (CodePointExpr+2 ref UnicodePropSpec) (CodePointExpr+3 ref CodePointRange) (CodePointExpr+4 ref CodePoint)))\nUnicodePropSpec ← (UnicodePropSpec+0 seq (UnicodePropSpec+1 ordC (UnicodePropSpec+2 ref PositiveSpec) (UnicodePropSpec+3 ref NegativeSpec)))\nPositiveSpec ← (PositiveSpec+0 seq (PositiveSpec+1 seq (PositiveSpec+2 cset 5b) (PositiveSpec+3 cset 3a)) (PositiveSpec+4 ref PropSpec) (PositiveSpec+5 seq (PositiveSpec+6 cset 3a) (PositiveSpec+7 cset 5d)))\nPropSpec ← (PropSpec+0 seq (PropSpec+1 ordC (PropSpec+2 ref BinaryUnicodeProperty) (PropSpec+3 seq (PropSpec+4 ref UnicodeProperty) (PropSpec+5 ordC (PropSpec+6 cset 3d) (PropSpec+7 cset 2260)) (PropSpec+8 ref PropVal)) (PropSpec+9 seq (PropSpec+10 ref ScriptOrCatPropVal) (PropSpec+11 rep (PropSpec+12 seq (PropSpec+13 cset 7c) (PropSpec+14 ref ScriptOrCatPropVal))))))\nBinaryUnicodeProperty ← (BinaryUnicodeProperty+0 seq (BinaryUnicodeProperty+1 ref UnicodeProperty))\nUnicodeProperty ← (UnicodeProperty+0 seq (UnicodeProperty+1 seq (UnicodeProperty+2 cset 20 2d 41-5a 5f 6…) (UnicodeProperty+3 rep (UnicodeProperty+4 cset 20 2d 41-5a 5f 6…))))\nPropVal ← (PropVal+0 seq (PropVal+1 seq (PropVal+2 cset 20 2d 41-5a 5f 6…) (PropVal+3 rep (PropVal+4 cset 20 2d 41-5a 5f 6…))))\nScriptOrCatPropVal ← (ScriptOrCatPropVal+0 seq (ScriptOrCatPropVal+1 seq (ScriptOrCatPropVal+2 cset 20 2d 41-5a 5f 6…) (ScriptOrCatPropVal+3 rep (ScriptOrCatPropVal+4 cset 20 2d 41-5a 5f 6…))))\nNegativeSpec ← (NegativeSpec+0 seq (NegativeSpec+1 seq (NegativeSpec+2 cset 5b) (NegativeSpec+3 cset 3a) (NegativeSpec+4 cset 5e)) (NegativeSpec+5 ref PropSpec) (NegativeSpec+6 seq (NegativeSpec+7 cset 3a) (NegativeSpec+8 cset 5d)))\nCodePointRange ← (CodePointRange+0 seq (CodePointRange+1 ref CodePointFrom) (CodePointRange+2 cset 2d) (CodePointRange+3 ref CodePointTo))\nCodePointFrom ← (CodePointFrom+0 seq (CodePointFrom+1 ref CodePoint))\nCodePoint ← (CodePoint+0 seq (CodePoint+1 ordC (CodePoint+2 ref UPlusCodePoint) (CodePoint+3 ref CodePointLit)))\nUPlusCodePoint ← (UPlusCodePoint+0 seq (UPlusCodePoint+1 seq (UPlusCodePoint+2 cset 55) (UPlusCodePoint+3 cset 2b)) (UPlusCodePoint+4 seq (UPlusCodePoint+5 ref HEXDIG) (UPlusCodePoint+6 ref HEXDIG) (UPlusCodePoint+7 ref HEXDIG) (UPlusCodePoint+8 ref HEXDIG) (UPlusCodePoint+9 ordC (UPlusCodePoint+10 seq (UPlusCodePoint+11 ref HEXDIG) (UPlusCodePoint+12 ordC (UPlusCodePoint+13 ref HEXDIG) (UPlusCodePoint+14 ϵ))) (UPlusCodePoint+15 ϵ))))\nHEXDIG ← (HEXDIG+0 seq (HEXDIG+1 cset 30-39 41-46))\nCodePointLit ← (CodePointLit+0 seq (CodePointLit+1 cset 0-1f 21-5c 5e-9f…))\nCodePointTo ← (CodePointTo+0 seq (CodePointTo+1 ref CodePoint))\nPosCharSet ← (PosCharSet+0 seq (PosCharSet+1 cset 5b) (PosCharSet+2 ordC (PosCharSet+3 ref S) (PosCharSet+4 ϵ)) (PosCharSet+5 ordC (PosCharSet+6 ref CharSetExpr) (PosCharSet+7 ϵ)) (PosCharSet+8 cset 5d))\nStrLit ← (StrLit+0 seq (StrLit+1 cset 22) (StrLit+2 rep (StrLit+3 ordC (StrLit+4 ref CharEscape) (StrLit+5 cset 0-21 23-5b 5d-10…))) (StrLit+6 cset 22))\nCharEscape ← (CharEscape+0 seq (CharEscape+1 ordC (CharEscape+2 seq (CharEscape+3 cset 5c) (CharEscape+4 seq (CharEscape+5 ref HEXDIG) (CharEscape+6 ref HEXDIG) (CharEscape+7 ref HEXDIG) (CharEscape+8 ref HEXDIG) (CharEscape+9 ϵ))) (CharEscape+10 seq (CharEscape+11 cset 5c) (CharEscape+12 cset 66 6e 72 74 76))))\nPosRep ← (PosRep+0 seq (PosRep+1 ref Replicand) (PosRep+2 cset 2b))\nMNRep ← (MNRep+0 seq (MNRep+1 ref Replicand) (MNRep+2 cset 7b) (MNRep+3 ref M) (MNRep+4 ordC (MNRep+5 seq (MNRep+6 cset 2c) (MNRep+7 ref N)) (MNRep+8 ϵ)) (MNRep+9 cset 7d))\nM ← (M+0 seq (M+1 rep (M+2 cset 30-39)))\nN ← (N+0 seq (N+1 rep (N+2 cset 30-39)))\nOptional ← (Optional+0 seq (Optional+1 ref Replicand) (Optional+2 cset 3f))\nPosLookahead ← (PosLookahead+0 seq (PosLookahead+1 cset 26) (PosLookahead+2 ref SeqUnit))\nNegLookahead ← (NegLookahead+0 seq (NegLookahead+1 cset 21) (NegLookahead+2 ref SeqUnit))\n_ ← (_+0 seq (_+1 ref RuleSet) (_+2 neg (_+3 cset 0-10ffff)))";
parsePEG_dfa.names=['','PropSpec','BinaryUnicodeProperty','UnicodeProperty','PropVal','ScriptOrCatPropVal','UPlusCodePoint','PositiveSpec','NegativeSpec','CodePoint','CodePointLit','CodePointFrom','CodePointTo','CodePointRange','UnicodePropSpec','CodePointExpr','CharSetUnion','CharSetIntersection','HEXDIG','CharSetDifference','CharEscape','CharSetExpr','StrLit','CharSet','PosCharSet','NegCharSet','Empty','AtomicExpr','ParenthExpr','Replicand','N','M','Optional','MNRep','PosRep','AnyRep','SeqUnit','Sequence','IdentChar','IdentStartChar','OrdChoice','S','SpaceAtom','LB','NonTerminal','Comment','Rule','RuleSet','PosLookahead','NegLookahead','_']
function parsePEG_dfa(out){var eof=false,s='',l=0,S=204800,T,M,F,R,tbl=[],x,pos=0,offset=0,buf=[],bufs=[],states=[],posns=[],c,equiv,S_map=['','PropSpec+0','BinaryUnicodeProperty+0','UnicodeProperty+0','PropVal+0','ScriptOrCatPropVal+0','UPlusCodePoint+0','PositiveSpec+0','NegativeSpec+0','CodePoint+0','CodePointLit+0','CodePointFrom+0','CodePointTo+0','CodePointRange+0','UnicodePropSpec+0','CodePointExpr+0','CharSetUnion+0','CharSetIntersection+0','HEXDIG+0','CharSetDifference+0','CharEscape+0','CharSetExpr+0','StrLit+0','CharSet+0','PosCharSet+0','NegCharSet+0','Empty+0','AtomicExpr+0','ParenthExpr+0','Replicand+0','N+0','M+0','Optional+0','MNRep+0','PosRep+0','AnyRep+0','SeqUnit+0','Sequence+0','IdentChar+0','IdentStartChar+0','OrdChoice+0','S+0','SpaceAtom+0','LB+0','NonTerminal+0','Comment+0','Rule+0','RuleSet+0','PosLookahead+0','NegLookahead+0','_+0','RuleSet+1','RuleSet+2','RuleSet+3','RuleSet+4','RuleSet+5','RuleSet+6','RuleSet+7','RuleSet+8','RuleSet+9','RuleSet+10','RuleSet+11','RuleSet+12','RuleSet+13','RuleSet+14','RuleSet+15','RuleSet+16','RuleSet+17','RuleSet+18','RuleSet+19','LB+1','LB+2','LB+3','LB+4','LB+5','Comment+1','Comment+2','Comment+3','Rule+1','Rule+2','Rule+3','Rule+4','Rule+5','NonTerminal+1','NonTerminal+2','NonTerminal+3','IdentStartChar+1','IdentChar+1','S+1','S+2','S+3','S+4','SpaceAtom+1','SpaceAtom+2','SpaceAtom+3','SpaceAtom+4','SpaceAtom+5','OrdChoice+1','OrdChoice+2','OrdChoice+3','OrdChoice+4','OrdChoice+5','OrdChoice+6','OrdChoice+7','OrdChoice+8','OrdChoice+9','OrdChoice+10','OrdChoice+11','OrdChoice+12','OrdChoice+13','OrdChoice+14','OrdChoice+15','OrdChoice+16','OrdChoice+17','Sequence+1','Sequence+2','Sequence+3','Sequence+4','Sequence+5','Sequence+6','Sequence+7','Sequence+8','Sequence+9','Sequence+10','Sequence+11','Sequence+12','SeqUnit+1','SeqUnit+2','SeqUnit+3','SeqUnit+4','SeqUnit+5','SeqUnit+6','SeqUnit+7','SeqUnit+8','SeqUnit+9','AnyRep+1','AnyRep+2','Replicand+1','Replicand+2','Replicand+3','ParenthExpr+1','ParenthExpr+2','ParenthExpr+3','AtomicExpr+1','AtomicExpr+2','AtomicExpr+3','AtomicExpr+4','AtomicExpr+5','Empty+1','CharSet+1','CharSet+2','CharSet+3','NegCharSet+1','NegCharSet+2','NegCharSet+3','NegCharSet+4','NegCharSet+5','NegCharSet+6','NegCharSet+7','NegCharSet+8','NegCharSet+9','NegCharSet+10','CharSetExpr+1','CharSetExpr+2','CharSetExpr+3','CharSetExpr+4','CharSetDifference+1','CharSetDifference+2','CharSetDifference+3','CharSetDifference+4','CharSetDifference+5','CharSetDifference+6','CharSetDifference+7','CharSetDifference+8','CharSetDifference+9','CharSetDifference+10','CharSetDifference+11','CharSetIntersection+1','CharSetIntersection+2','CharSetIntersection+3','CharSetIntersection+4','CharSetIntersection+5','CharSetIntersection+6','CharSetIntersection+7','CharSetIntersection+8','CharSetIntersection+9','CharSetIntersection+10','CharSetIntersection+11','CharSetUnion+1','CharSetUnion+2','CharSetUnion+3','CharSetUnion+4','CharSetUnion+5','CharSetUnion+6','CharSetUnion+7','CharSetUnion+8','CharSetUnion+9','CharSetUnion+10','CharSetUnion+11','CharSetUnion+12','CodePointExpr+1','CodePointExpr+2','CodePointExpr+3','CodePointExpr+4','UnicodePropSpec+1','UnicodePropSpec+2','UnicodePropSpec+3','PositiveSpec+1','PositiveSpec+2','PositiveSpec+3','PositiveSpec+4','PositiveSpec+5','PositiveSpec+6','PositiveSpec+7','PropSpec+1','PropSpec+2','PropSpec+3','PropSpec+4','PropSpec+5','PropSpec+6','PropSpec+7','PropSpec+8','PropSpec+9','PropSpec+10','PropSpec+11','PropSpec+12','PropSpec+13','PropSpec+14','BinaryUnicodeProperty+1','UnicodeProperty+1','UnicodeProperty+2','UnicodeProperty+3','UnicodeProperty+4','PropVal+1','PropVal+2','PropVal+3','PropVal+4','ScriptOrCatPropVal+1','ScriptOrCatPropVal+2','ScriptOrCatPropVal+3','ScriptOrCatPropVal+4','NegativeSpec+1','NegativeSpec+2','NegativeSpec+3','NegativeSpec+4','NegativeSpec+5','NegativeSpec+6','NegativeSpec+7','NegativeSpec+8','CodePointRange+1','CodePointRange+2','CodePointRange+3','CodePointFrom+1','CodePoint+1','CodePoint+2','CodePoint+3','UPlusCodePoint+1','UPlusCodePoint+2','UPlusCodePoint+3','UPlusCodePoint+4','UPlusCodePoint+5','UPlusCodePoint+6','UPlusCodePoint+7','UPlusCodePoint+8','UPlusCodePoint+9','UPlusCodePoint+10','UPlusCodePoint+11','UPlusCodePoint+12','UPlusCodePoint+13','UPlusCodePoint+14','UPlusCodePoint+15','HEXDIG+1','CodePointLit+1','CodePointTo+1','PosCharSet+1','PosCharSet+2','PosCharSet+3','PosCharSet+4','PosCharSet+5','PosCharSet+6','PosCharSet+7','PosCharSet+8','StrLit+1','StrLit+2','StrLit+3','StrLit+4','StrLit+5','StrLit+6','CharEscape+1','CharEscape+2','CharEscape+3','CharEscape+4','CharEscape+5','CharEscape+6','CharEscape+7','CharEscape+8','CharEscape+9','CharEscape+10','CharEscape+11','CharEscape+12','PosRep+1','PosRep+2','MNRep+1','MNRep+2','MNRep+3','MNRep+4','MNRep+5','MNRep+6','MNRep+7','MNRep+8','MNRep+9','M+1','M+2','N+1','N+2','Optional+1','Optional+2','PosLookahead+1','PosLookahead+2','NegLookahead+1','NegLookahead+2','_+1','_+2','_+3'];
equiv=rle_dec([48,0,10,1,7,0,6,1,21,0,1,2,9,0,1,3,7,0,1,3,3,0,1,3,1,0,1,3,1,0,1,3,65417,0])
function rle_dec(a){var r=[],i,l,n,x,ll;for(i=0,l=a.length;i<l;i+=2){n=a[i];x=a[i+1];r.length=ll=r.length+n;for(;n;n--)r[ll-n]=x}return r}
T=[,876544,933888,940550,956934,973318,1051334,850630,989894,1036288,1114112,1032192,1118208,1019904,835584,819200,772614,724992,1110016,679936,1179648,663552,1155072,610304,1122500,625350,606208,585728,573636,561152,1282048,1273856,1290240,1236992,1228800,552960,516096,469510,356352,352256,397312,363014,376832,286720,339968,307200,319488,208896,1298628,1306820,1314816,215558,217088,221184,178863,229376,187055,191151,244230,248326,249856,178863,258048,178863,266240,187055,191151,278528,178863,326,293382,294912,327,328,329,330,315392,331,182959,170671,332,170671,166575,162479,348160,158383,333,334,364544,174767,372736,174767,381124,335,389120,178863,335,401408,170671,326,154287,417792,170671,326,432646,434372,336,442368,170671,326,154287,458752,170671,326,473606,475136,150191,483328,170671,326,498182,499712,150191,507904,170671,326,520192,146095,141999,137903,133807,117423,199343,203439,113327,121519,337,565248,117423,113327,338,166575,339,589824,109231,96943,182959,92847,340,614400,105135,101039,626688,341,342,638976,170671,326,651264,88751,326,343,80559,671744,170671,326,72367,690694,692224,696320,170671,326,344,712704,170671,326,72367,68271,735750,737280,741376,170671,326,345,757760,170671,326,68271,776710,778240,64175,786432,170671,326,801286,802816,64175,811008,170671,326,823296,60079,55983,39599,839680,31407,35503,851968,341,346,6831,868352,346,343,880640,10927,888832,15023,897024,347,348,19119,913408,23215,924166,925892,349,23215,15023,942080,350,950272,350,958464,350,966656,350,974848,350,983040,350,991232,341,346,342,6831,1011712,346,343,47791,351,51887,39599,1040384,27311,43695,1052672,352,353,1064960,76463,76463,76463,76463,1088006,1089536,76463,1097728,76463,326,326,354,355,39599,341,1130496,170671,326,1142784,88751,326,343,356,1163264,1167360,84655,357,356,1186310,1188036,358,1196032,76463,76463,76463,76463,326,1220608,358,359,121519,353,121519,360,129711,1255942,1257668,361,125615,326,362,1277952,363,1286144,363,121519,364,365,150191,366,150191,195247,1323008,367]
M=[,324,324,324,324,324,324,324,324,324,324,324,324,324,324,324,324,324,324,324,324,324,324,324,324,324,324,324,324,324,324,324,324,324,324,324,324,324,324,324,324,324,324,324,324,324,324,324,324,324,324,324,324,225280,221184,237568,324,324,274432,244230,262144,253952,324,258048,324,324,324,324,278528,324,324,324,299008,324,324,311296,324,315392,323584,327876,331776,335872,324,344064,324,348160,324,324,324,368640,324,372736,324,324,324,393412,324,409600,324,324,413696,425984,324,324,324,432646,438272,450560,324,324,454656,324,324,324,324,491520,479232,324,324,324,324,498182,503808,324,324,324,324,324,324,324,324,324,324,324,324,557252,324,324,324,324,577536,581828,324,324,324,324,324,324,324,324,324,324,634880,630784,324,647168,324,324,659652,324,324,324,667648,324,324,324,684032,324,690694,704708,324,324,708608,720896,324,324,324,729088,324,735750,749764,324,324,753664,765952,324,324,324,324,794624,782336,324,324,324,324,801286,806912,324,324,324,324,324,324,324,324,324,324,860160,856064,324,867014,324,872448,324,324,324,324,893124,905216,324,324,324,324,917504,324,924166,929792,324,324,324,946176,324,950272,324,962560,324,966656,324,978944,324,983040,1003520,995328,999424,324,1010374,324,1015808,324,1024196,1028096,324,324,324,324,324,1063430,1056768,324,324,1069056,1073152,1077248,1081344,324,324,1093632,324,324,324,324,324,324,324,1126400,1138688,324,324,1151172,324,324,324,1159168,1175552,1163264,324,324,324,324,324,1194502,324,1200128,1204224,1208320,1212416,324,324,1224704,324,1233092,324,1241284,1245184,1249280,1269956,324,1261568,324,324,324,324,1277952,324,1286144,1294532,324,1302528,324,1310720,324,1318912,324,325]
F=[,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,282624,325,324,325,233472,325,325,324,325,325,325,324,325,270336,325,325,324,325,325,303104,325,325,325,325,325,324,325,325,325,325,325,325,325,324,325,325,325,325,325,324,325,387590,325,325,325,325,405504,325,325,325,421888,325,325,324,325,325,446464,325,325,325,462848,325,325,325,325,325,487424,325,325,324,325,325,512000,325,325,524288,528384,532480,536576,540672,544768,548864,325,325,325,325,569344,325,325,325,325,325,593920,598016,602112,325,325,325,618496,325,325,325,325,325,643072,325,325,655360,325,325,325,325,675840,325,325,325,324,325,700416,325,325,325,716800,325,325,325,325,324,325,745472,325,325,325,761856,325,325,325,325,325,325,790528,325,325,324,325,325,815104,325,325,827392,831488,325,325,843776,325,325,325,325,325,325,325,325,325,887302,911878,325,325,901120,325,325,325,325,325,324,325,325,325,325,325,325,324,325,325,325,324,325,325,325,324,325,325,325,325,325,325,325,325,325,325,325,325,325,1044480,325,325,325,325,325,325,325,325,325,325,1105920,325,325,1101824,325,325,325,325,325,325,325,1134592,325,325,1146880,325,325,325,325,324,1171652,325,325,325,1219270,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,325,1265664,325,325,325,325,325,324,325,324,325,325,325,325,325,325,325,325,324]
if(typeof out=='string'){s=out;out=[];x=parsePEG_dfa(function(m,x,y){if(m=='fail')out=[false,x,y];if(m=='tree segment')out=out.concat(x)});x('chunk',s);x('eof');return out[0]===false?out:[true,{names:parsePEG_dfa.names,tree:out,input:s}]}
return function(m,x){switch(m){
case 'chunk':s+=x;l=s.length;while(tbl.length<l+1)tbl.push([]);mainloop();break
case 'eof':eof=true;mainloop();break
default:throw new Error('unhandled message: '+m)}}
function mainloop(){for(;;){out('main','S:'+(S_map[S>>>12]||'unknown state '+S>>>12)+' pos:'+pos+' '+s.charAt(pos)+' R:'+R+' stack:'+states.map(function(s){return s>>>12})+' posns:'+posns+' bufs:'+bufs.map(function(b){return '['+b+']'})+' buf:'+buf);
if(S>367||S<326)t_block:{
assert(typeof S=="number","S")
assert((S>>>12)<=367,"S in range: "+S)
assert(R==undefined,'result is unknown (R:'+R+',S:'+S+')')
if(S&4/*pushpos*/)posns.push(pos)
if(S&2/*t_bufferout*/){bufs.push(buf);buf=[]}
if(S&1/*cache*/&&(x=tbl[pos-offset][S])!=undefined){if(x){R=true;pos=x[0];buf=x[1]}else{R=false}out('cache hit','S:'+(S_map[S>>>12]||'unknown state '+S>>>12)+' pos:'+pos+' '+s.charAt(pos)+' R:'+R+' stack:'+states.map(function(s){return s>>>12})+' posns:'+posns+' bufs:'+bufs.map(function(b){return '['+b+']'})+' buf:'+buf);break t_block}
if(S&8/*t_emitstate*/){buf.push(S>>>12)}
states.push(S)

function expand_dfa(dfa){var i,l,state,j,l2,all=[],t,ts,builder
 builder=
 {match:function(cls){return [cls,true]}
 ,transition:function(cls,sid){return [cls,sid]}
 ,state:function(sid,ts){return ts}
 ,dfa:function(ss){var i,l_ss,st,l_s,l_t,a,d=[],t,j,k,l
   for(i=0,l_ss=ss.length;i<l_ss;i++){st=ss[i]
    a=[]
    for(j=0,l_s=st.length;j<l_s;j++){t=st[j]
     for(k=0,l_t=t[0].length;k<l_t;k++){
      a[t[0][k]]=t[1]==true?l_ss:t[1]}}
    for(k=0,l=a.length;k<l;k++)if(a[k]==undefined)a[k]=l_ss+1
    d[i]=a}
   return function(){var st=0,eq,i=pos
    while(st<l_ss){
     eq=equiv[s.charCodeAt(i++)]
     st=d[st][eq]}
    if(st==l_ss){pos=i;return true}
    return false}}}
 for(i=0,l=dfa.length;i<l;i++){state=dfa[i]
  ts=[] // transitions
  for(j=0,l2=state.length;j<l2;j++){t=state[j]
   if(state[1]==l) ts.push(builder.match(t[0]))
   else ts.push(builder.transition(t[0],t[1]==undefined?j+1:t[1]))}
  all.push(builder.state(i,ts))}
 return builder.dfa(all)}

// if there is a DFA

var d_20 = expand_dfa([[[[2]]],[[[1]],[[3],5]],[[[1]]],[[[1]]],[[[1],5]]])

//throw new Error(pp(d_20))

if(S>>>12 == 20){
 bufs.push(buf);buf=[] // XXX
 posns.push(pos)
 R=d_20()
 //S=T[S>>>12]
}
else{

assert(T[S>>>12],'T')
S=T[S>>>12]}

}


if(S<368&&S>325){
if(S==326)R=true
else{
c=s.charCodeAt(pos);if(isNaN(c)){if(eof)R=false;else{emit();R=undefined;assert(S,'popped state');out('waiting…','S:'+(S_map[S>>>12]||'unknown state '+S>>>12)+' pos:'+pos+' '+s.charAt(pos)+' R:'+R+' stack:'+states.map(function(s){return s>>>12})+' posns:'+posns+' bufs:'+bufs.map(function(b){return '['+b+']'})+' buf:'+buf);out('ready');return}}
else switch(S){
case 327:R=c<13?0:c<14?1:0;break
case 328:R=c<10?0:c<11?1:0;break
case 329:R=c<10?0:c<11?1:c<13?0:c<14?1:0;break
case 330:R=c<59?0:c<60?1:0;break
case 331:R=c<0?0:c<10?1:c<11?0:c<13?1:c<14?0:c<55296?1:c<57344?0:c<65536?1:0;break
case 332:R=c<8592?0:c<8593?1:0;break
case 333:R=c<65?0:c<91?1:0;break
case 334:R=c<48?0:c<58?1:c<65?0:c<91?1:c<95?0:c<96?1:c<97?0:c<123?1:0;break
case 335:R=c<32?0:c<33?1:0;break
case 336:R=c<47?0:c<48?1:0;break
case 337:R=c<42?0:c<43?1:0;break
case 338:R=c<40?0:c<41?1:0;break
case 339:R=c<41?0:c<42?1:0;break
case 340:R=c<1013?0:c<1014?1:0;break
case 341:R=c<91?0:c<92?1:0;break
case 342:R=c<94?0:c<95?1:0;break
case 343:R=c<93?0:c<94?1:0;break
case 344:R=c<8722?0:c<8723?1:0;break
case 345:R=c<8745?0:c<8746?1:0;break
case 346:R=c<58?0:c<59?1:0;break
case 347:R=c<61?0:c<62?1:0;break
case 348:R=c<8800?0:c<8801?1:0;break
case 349:R=c<124?0:c<125?1:0;break
case 350:R=c<32?0:c<33?1:c<45?0:c<46?1:c<65?0:c<91?1:c<95?0:c<96?1:c<97?0:c<123?1:0;break
case 351:R=c<45?0:c<46?1:0;break
case 352:R=c<85?0:c<86?1:0;break
case 353:R=c<43?0:c<44?1:0;break
case 354:R=c<48?0:c<58?1:c<65?0:c<71?1:0;break
case 355:R=c<0?0:c<32?1:c<33?0:c<93?1:c<94?0:c<160?1:c<161?0:c<5760?1:c<5761?0:c<6158?1:c<6159?0:c<8192?1:c<8203?0:c<8239?1:c<8240?0:c<8287?1:c<8288?0:c<8722?1:c<8723?0:c<12288?1:c<12289?0:c<55296?1:c<57344?0:c<65536?1:0;break
case 356:R=c<34?0:c<35?1:0;break
case 357:R=c<0?0:c<34?1:c<35?0:c<92?1:c<93?0:c<55296?1:c<57344?0:c<65536?1:0;break
case 358:R=c<92?0:c<93?1:0;break
case 359:R=c<102?0:c<103?1:c<110?0:c<111?1:c<114?0:c<115?1:c<116?0:c<117?1:c<118?0:c<119?1:0;break
case 360:R=c<123?0:c<124?1:0;break
case 361:R=c<44?0:c<45?1:0;break
case 362:R=c<125?0:c<126?1:0;break
case 363:R=c<48?0:c<58?1:0;break
case 364:R=c<63?0:c<64?1:0;break
case 365:R=c<38?0:c<39?1:0;break
case 366:R=c<33?0:c<34?1:0;break
case 367:R=c<0?0:c<55296?1:c<57344?0:c<65536?1:0;break}
if(R)pos++
else if(c>=0xD800&&c<=0xDFFF){if(c<0xDB80){if(pos+1==l){if(eof)return fail('unmatched surrogate at EOF');else{emit();R=undefined;out('waiting (surrogate pair)','S:'+(S_map[S>>>12]||'unknown state '+S>>>12)+' pos:'+pos+' '+s.charAt(pos)+' R:'+R+' stack:'+states.map(function(s){return s>>>12})+' posns:'+posns+' bufs:'+bufs.map(function(b){return '['+b+']'})+' buf:'+buf);out('ready');return}}else{c=(c&0x3FF)<<10 | s.charCodeAt(pos+1)&0x3FF | 0x10000
switch(S){case 331:R=c<65536?0:1;break
case 355:R=c<65536?0:1;break
case 357:R=c<65536?0:1;break
case 367:R=c<65536?0:c<1114112?1:0;break
default:R=false}
if(R)pos+=2
}}else return fail('UTF-16 decoding error: unmatched low surrogate')}}
assert(R==true||R==false,'have result')
S=states.pop()}
while(R!=undefined){out('result','S:'+(S_map[S>>>12]||'unknown state '+S>>>12)+' pos:'+pos+' '+s.charAt(pos)+' R:'+R+' stack:'+states.map(function(s){return s>>>12})+' posns:'+posns+' bufs:'+bufs.map(function(b){return '['+b+']'})+' buf:'+buf);
if(S==204800){(R?emit:fail)();return}if(R){
if(S&1/*cache*/){tbl[posns[posns.length-1]][S]=[pos,buf];buf=buf.slice()}
if(S&16/*m_emitstate*/)buf.push(S>>>12)
if(S&32/*m_emitclose*/)buf.push(-2)
if(S&64/*m_emitanon*/)buf.push(-1)
if(S&128/*m_emitlength*/)buf.push(pos-posns[posns.length-1])
if(S&256/*m_resetpos*/)pos=posns[posns.length-1]
if(S&4/*pushpos*/)posns.pop()
if(S&1024/*m_tossbuf*/)buf=bufs.pop()
if(S&512/*m_emitbuf*/)buf=bufs.pop().concat(buf)
if(!bufs.length&&buf.length>64)emit()
assert(M[S>>>12],'M')
S=M[S>>>12]}
else{
if(S&1/*cache*/)tbl[posns[posns.length-1]][S]=false
if(S&4/*pushpos*/)pos=posns.pop()
if(S&2048/*f_tossbuf*/)buf=bufs.pop()
assert(F[S>>>12],'F')
S=F[S>>>12]}
if(S==324){R=true;S=states.pop()}else if(S==325){R=false;S=states.pop()}else R=undefined;out('res_end','S:'+(S_map[S>>>12]||'unknown state '+S>>>12)+' pos:'+pos+' '+s.charAt(pos)+' R:'+R+' stack:'+states.map(function(s){return s>>>12})+' posns:'+posns+' bufs:'+bufs.map(function(b){return '['+b+']'})+' buf:'+buf);
}}}
function emit(){var x=bufs.length?bufs[0]:buf;if(x.length){out('tree segment',x);if(bufs.length)bufs[0]=[];else buf=[]}}
function fail(s){out('fail',pos,s)}
function assert(x,msg){if(!x)throw new Error('assertion failed'+(msg?': '+msg:''))}}
