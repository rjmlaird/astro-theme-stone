// Import Alpine.js plugins
import anchor from '@alpinejs/anchor'
import collapse from '@alpinejs/collapse'
import csp from '@alpinejs/csp'
//import docs from '@alpinejs/docs'
import focus from '@alpinejs/focus'
import intersect from '@alpinejs/intersect'
import mask from '@alpinejs/mask'
import morph from '@alpinejs/morph'
import persist from '@alpinejs/persist'
import resize from '@alpinejs/resize'
import sort from '@alpinejs/sort'
import ui from '@alpinejs/ui'

// Initialize Alpine.js plugins
Alpine.plugin(anchor)
Alpine.plugin(collapse)
Alpine.plugin(csp)
//Alpine.plugin(docs)
Alpine.plugin(focus)
Alpine.plugin(intersect)
Alpine.plugin(mask)
Alpine.plugin(morph)
Alpine.plugin(persist)
Alpine.plugin(resize)
Alpine.plugin(sort)
Alpine.plugin(ui)

// Define Alpine.js object
let Alpine = {
    get reactive() { return reactive },
    get release() { return release },
    get effect() { return effect },
    get raw() { return raw },
    version: ALPINE_VERSION,
    flushAndStopDeferringMutations,
    dontAutoEvaluateFunctions,
    disableEffectScheduling,
    startObservingMutations,
    stopObservingMutations,
    setReactivityEngine,
    onAttributeRemoved,
    onAttributesAdded,
    closestDataStack,
    skipDuringClone,
    onlyDuringClone,
    addRootSelector,
    addInitSelector,
    interceptClone,
    addScopeToNode,
    deferMutations,
    mapAttributes,
    evaluateLater,
    interceptInit,
    setEvaluator,
    mergeProxies,
    extractProp,
    findClosest,
    onElRemoved,
    closestRoot,
    destroyTree,
    interceptor, // INTERNAL: not public API and is subject to change without major release.
    transition, // INTERNAL
    setStyles, // INTERNAL
    mutateDom,
    directive,
    entangle,
    throttle,
    debounce,
    evaluate,
    initTree,
    nextTick,
    prefixed,
    prefix,
    plugin,
    magic,
    store,
    start,
    clone, // INTERNAL
    cloneNode, // INTERNAL
    bound,
    $data,
    watch,
    walk,
    data,
    bind,
}

// Export Alpine.js object
export default Alpine
