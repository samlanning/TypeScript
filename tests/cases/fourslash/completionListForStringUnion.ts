/// <reference path='fourslash.ts' />

//// type A = 'fooooo' | 'barrrrr';
//// type B<T extends A> = {};
//// type C = B<'fooooo' | '/**/'>

verify.completions({ marker: "", exact: ["fooooo", "barrrrr"] });
edit.insert("b");
verify.completions({ exact: ["fooooo", "barrrrr"] });
