///<reference path="fourslash.ts" />

// @allowNonTsExtensions: true
// @Filename: Foo.js
/////**
//// * @type {function(): number}
//// */
////var v;
////v()./**/

verify.completions({ includes: { name: "toExponential", kind: "method" } });
