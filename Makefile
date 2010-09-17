VERSION = 0.0.8

ifeq ($(V), 1)
define doit
@echo " * "$(strip $(1)); 
$(strip $(2))
endef
else
define doit
@echo -n " * "$(strip $(1))"..."; 
@$(strip $(2)) && echo " done" || ((rm -f $(strip $(3)) && echo " failed"))
endef
endif
SOURCES = \
		  src/API_compiling.js \
		  src/API_debugging.js \
		  src/API_support.js \
		  build/parsePEG.js \
		  src/re.js \
		  deps/lists.js \
		  deps/util.js \
		  deps/assert.js \
		  src/codegen_6_attr.js \
		  src/codegen_6.js \
		  src/codegen_6_tree_attribution.js \
		  src/codegen_6_dfa_generation.js \
		  src/codegen_6_dfa_output.js \
		  src/codegen_6_character_equivalence_classes.js \
		  src/codegen_6_run_length_encoding.js \
		  src/codegen_6_expression_flags.js

SOURCES_UTIL = \
			   src/API_support.js \

CLOSURE_COMPILER = closure-compiler

BUILT_SOURCES = build/cset.js
PANPG = build/PanPG.js
PANPG_UTIL = build/PanPG_util.js
PANPG_UTIL_MIN = build/PanPG_util.min.js
PANPG_MIN = build/PanPG.min.js
GEN_PARSER = build/generate_parser_shell.js
GEN_BUILD = build/build_generic.js

# $(call build_generic, message, output, package name, description, requires, exports, includes)
define build_generic
	$(call doit, $(1), nodejs $(GEN_BUILD) \
		--output $(2) \
		--version $(VERSION) \
		--package $(3) \
		--description $(4) \
		$(foreach i, $(5), --require $(i)) \
		$(foreach i, $(6), --export $(i)) \
		$(foreach i, $(7), --include $(i)), $(2))
endef

# $(call build_parser, message, input, output, patches, commonjs?, fname, startrule)
define build_parser
	$(call doit, $(1), nodejs $(GEN_PARSER) \
		--input $(2) \
		--output $(3) \
		$(foreach i, $(4), --patch $(i)) \
		$(if $(strip $(5)),--commonjs) \
		--fname $(6) \
		--startrule $(7), $(2))
endef

# some make stupidity
, := ,
space :=
space +=
$(space) := 
$(space) +=


all: panpg

panpg: $(PANPG)

min: $(PANPG_MIN) $(PANPG_UTIL_MIN)

support: $(PANPG_UTIL)

ast: build/parseJS.js support


build/cset.js: src/cset.js \
	src/UNIDATA/UnicodeData.txt \
	build/build_cset.js \
	build/cset_unicode_properties.js
	$(call doit, "Building $@", nodejs build/build_cset.js $@, $@)

$(PANPG): $(SOURCES) $(BUILT_SOURCES)
	$(call build_generic,"Bootstrapping (not yet actually)", $@, PanPG, "PEG → JavaScript parser generator$(,) with its dependencies" ,,generateParser explain,$^)
	$(call build_parser, "Generating parser ($@)", grammars/PEG.peg, $@, , true, parsePEG, RuleSet)
	$(call build_generic,"Building $@", $@, PanPG, "PEG → JavaScript parser generator$(,) with its dependencies" ,,generateParser explain,$^)

$(PANPG_UTIL): $(SOURCES_UTIL)
	$(call build_generic,"Building $@",$@,PanPG_util,"Utility functions on PanPG parse trees",,showTree treeWalker,$^)

$(PANPG_UTIL_MIN): $(PANPG_UTIL)
	$(call doit, "Minifying $^", $(CLOSURE_COMPILER) --js $^ --js_output_file $@, $@)

$(PANPG_MIN): $(PANPG)
	$(call doit, "Minifying $^", $(CLOSURE_COMPILER) --js $^ --js_output_file $@, $@)

build/parseES5.js: $(PANPG) grammars/ECMAScript_5.peg
# $(call build_parser, message, input, output, patches, commonjs?, fname, startrule)
	$(call build_parser, "Generating parser ($@)", grammars/ECMAScript_5.peg, $@, , true, parseES5, Program)

build/parseJS.js: $(PANPG) grammars/ECMAScript_5.peg grammars/ECMAScript_web_compat.peg grammars/ECMAScript_5_streamable.peg
	$(call build_parser, "Generating parser ($@)", grammars/ECMAScript_5.peg, $@,grammars/ECMAScript_web_compat.peg grammars/ECMAScript_5_streamable.peg, true, parseJS, Program)

clean:
	rm -f $(BUILT_SOURCES) $(PANPG) $(PANPG_MIN) $(PANPG_UTIL_MIN) $(PANPG_UTIL) build/parseES5.js build/parseJS.js

.PHONY: panpg all clean min install support
