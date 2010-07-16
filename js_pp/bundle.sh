#!/bin/sh -e

mkdir build
cd build
mkdir js_pp
mkdir js_pp/bin js_pp/lib

cp ../lib/* js_pp/lib
cp ../js_pp js_pp/bin
cp ../install.sh js_pp/

DATE=$(date -u +%Y%m%dT%H%M%S)

tar czf ../js_pp-${DATE}.tgz js_pp

cd ..
rm -rf build