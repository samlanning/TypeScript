/// <reference path="fourslash.ts" />


////class Class {
////    private privateInstanceMethod() { }
////    public publicInstanceMethod() { }
////
////    private privateProperty = 1;
////    public publicProperty = 1;
////
////    private static privateStaticProperty = 1;
////    public static publicStaticProperty = 1;
////
////    private static privateStaticMethod() { }
////    public static publicStaticMethod() {
////        Class./*staticsInsideClassScope*/publicStaticMethod();
////        var c = new Class();
////        c./*instanceMembersInsideClassScope*/privateProperty;
////    }
////}
////
////Class./*staticsOutsideClassScope*/publicStaticMethod();
////var c = new Class();
////c./*instanceMembersOutsideClassScope*/privateProperty;

verify.completions({
    marker: "staticsInsideClassScope",
    exact: ["prototype", "privateStaticProperty", "publicStaticProperty", "privateStaticMethod", "publicStaticMethod", ...completion.functionMembers],
});

goTo.marker("instanceMembersInsideClassScope");
verify.completionListContains("privateProperty");
verify.completionListContains("privateInstanceMethod");
verify.completionListContains("publicProperty");
verify.completionListContains("publicInstanceMethod");
// No statics
verify.not.completionListContains("privateStaticProperty");
verify.not.completionListContains("privateStaticMethod");


goTo.marker("staticsOutsideClassScope");
// No privates
verify.not.completionListContains("privateStaticProperty");
verify.not.completionListContains("privateStaticMethod");
// Only publics
verify.completionListContains("publicStaticProperty");
verify.completionListContains("publicStaticMethod");
// No instance properties
verify.not.completionListContains("publicProperty");
verify.not.completionListContains("publicInstanceMethod");
// constructors should have a 'prototype' member
verify.completionListContains("prototype");

goTo.marker("instanceMembersOutsideClassScope");
// No privates
verify.not.completionListContains("privateProperty");
verify.not.completionListContains("privateInstanceMethod");
// Only publics
verify.completionListContains("publicProperty");
verify.completionListContains("publicInstanceMethod");
// No statics
verify.not.completionListContains("publicStaticProperty");
verify.not.completionListContains("publicStaticMethod");