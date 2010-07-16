#!/bin/sh -e

CODE=http://boshi.inimino.org/3box/

get() {
  curl -sS ${CODE}$1 >$(basename $1)
}

get PanPG/js_pp/update.sh
get PanPG/js_pp/bundle.sh
get PanPG/js_pp/install.sh

mkdir -p lib && cd lib
get PanPG/js_pp/commonjs/js_pp.js
get PanPG/build/commonjs/ES5Parser.js
get PanPG/build/commonjs/PanPG_util.js
cd ..

get PanPG/js_pp/node/js_pp

chmod +x js_pp update.sh bundle.sh install.sh

./install.sh