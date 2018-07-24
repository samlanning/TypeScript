///<reference path="fourslash.ts" />

// @allowNonTsExtensions: true
// @Filename: Foo.js
/////**
//// * @type {function(new:number)}
//// */
////var v;
////new v()./**/

verify.completions({ includes: { name: "toExponential", kind: "method" } });
