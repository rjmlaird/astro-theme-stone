import type Interface from "../Interface/Class.js";
import type Option from "../Interface/Option.js";
import type Plan from "../Interface/Plan.js";
/**
 * @module Pipe
 *
 */
export default class implements Interface {
    In: (...[Path]: Parameters<Interface["In"]>) => Promise<this>;
    By: (...[File]: Parameters<Interface["By"]>) => Promise<this>;
    Not: (...[Exclude]: Parameters<Interface["Not"]>) => Promise<this>;
    Pipe: (...[_Action]: Parameters<Interface["Pipe"]>) => Promise<this>;
    Plan: Plan;
    constructor(Cache?: Option["Cache"], Logger?: Option["Logger"]);
}
export declare const Cache: {
    Search: string;
    Folder: string;
}, Logger: 2, Action: {
    Read: ({ Input }: import("../Interface/File.js").default) => Promise<string>;
    Wrote: ({ Buffer }: import("../Interface/File.js").default) => Promise<import("../Type/Buffer.js").Type>;
    Passed: (On: import("../Interface/File.js").default) => Promise<true>;
    Failed: ({ Input }: import("../Interface/File.js").default) => Promise<string>;
    Accomplished: ({ Input, Output }: import("../Interface/File.js").default) => Promise<string>;
    Fulfilled: ({ File }: Plan) => Promise<string | false>;
    Changed: (Plan: Plan) => Promise<Plan>;
};
export declare const Merge: <Ts extends readonly unknown[]>(...objects: Ts) => import("deepmerge-ts").DeepMergeHKT<Ts, Readonly<{
    DeepMergeRecordsURI: "DeepMergeRecordsDefaultURI";
    DeepMergeArraysURI: "DeepMergeArraysDefaultURI";
    DeepMergeSetsURI: "DeepMergeSetsDefaultURI";
    DeepMergeMapsURI: "DeepMergeMapsDefaultURI";
    DeepMergeOthersURI: "DeepMergeLeafURI";
    DeepMergeFilterValuesURI: "DeepMergeFilterValuesDefaultURI";
}>, Readonly<{
    key: PropertyKey;
    parents: ReadonlyArray<Readonly<Record<PropertyKey, unknown>>>;
}>>;
