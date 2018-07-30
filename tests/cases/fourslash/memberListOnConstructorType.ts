/// <reference path='fourslash.ts'/>

////var f: new () => void;
////f./*1*/

verify.completions({ marker: "1", exact: ["apply", "call", "bind", "toString", "prototype", "length", "arguments", "caller"] });
