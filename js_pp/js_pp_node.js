#!/usr/bin/env node
var js_pp=require('./js_pp')

var stdin = process.openStdin()
  , input = ''

stdin.setEncoding('utf8')

stdin.addListener('data',function(s){input+=s})

stdin.addListener('end',function(){
  process.stdout.write(js_pp.format(input))})