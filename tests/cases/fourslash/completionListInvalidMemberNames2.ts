/// <reference path='fourslash.ts' />

// TODO: we should probably support this like we do in completionListInvalidMemberNames.ts

////declare var Symbol: SymbolConstructor;
////interface SymbolConstructor {
////    readonly hasInstance: symbol;
////}
////interface Function {
////    [Symbol.hasInstance](value: any): boolean;
////}
////interface SomeInterface {
////    (value: number): any;
////}
////var _ : SomeInterface;
////_./**/

verify.completions({ marker: "", exact: ["apply", "call", "bind", "toString", "prototype", "length", "arguments", "caller"] });
