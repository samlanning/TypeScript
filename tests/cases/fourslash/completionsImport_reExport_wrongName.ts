/// <reference path="fourslash.ts" />

// @moduleResolution: node

// @Filename: /a.ts
////export const x = 0;

// @Filename: /index.ts
////export { x as y } from "./a";

// @Filename: /c.ts
/////**/

verify.completions({
    marker: "",
    includes: { name: "x", source: "/a", sourceDisplay: "./a", text: "const x: 0", kind: "const", hasAction: true },
    preferences: { includeCompletionsForModuleExports: true },
});
verify.applyCodeActionFromCompletion("", {
    name: "x",
    source: "/a",
    description: `Import 'x' from module "./a"`,
    newFileContent: `import { x } from "./a";

`,
});
