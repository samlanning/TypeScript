/// <reference path="fourslash.ts" />

// Ensure kind is set correctly on completions of a generic symbol

////var a = [1,2,3];
////a./**/

verify.completions({
    marker: "",
    includes: [
        { name: "length", text: "(property) Array<number>.length: number", kind: "property" },
        { name: "toString", text: "(method) Array<number>.toString(): string", kind: "method" },
    ],
});
