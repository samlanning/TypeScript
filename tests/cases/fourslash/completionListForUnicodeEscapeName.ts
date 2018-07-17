/// <reference path='fourslash.ts' />

////function \u0042 () { /*0*/ }
////export default function \u0043 () { /*1*/ }
////class \u0041 { /*2*/ }
/////*3*/

verify.completions(
    { marker: "0", includes: ["B", "\u0042"] },
    { marker: "1", excludes: ["C", "\u0043"] },
    { marker: "2", excludes: ["A", "\u0041"] },
    { marker: "3", includes: ["B", "\u0042", "A", "\u0041", "C", "\u0043"] },
);
