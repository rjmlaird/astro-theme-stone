// Import Alpine.js plugins
import Alpine from 'alpinejs'
import anchor from '@alpinejs/anchor'
import collapse from '@alpinejs/collapse'
Alpine.plugin(collapse)  // This is the one we need!
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

import store from 'store'
import theme from 'theme'
import toggle from 'toggle'
import warn from 'warn'

// Initialize Alpine.js plugins
Alpine.plugin(anchor)

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

// Log the Alpine object to check if plugins were registered correctly
console.log(Alpine.plugin)  // Check if collapse and other plugins are in the list

// Define Alpine.js object (if necessary)
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
    interceptor,  // INTERNAL: not public API and is subject to change without major release.
    transition,   // INTERNAL
    setStyles,    // INTERNAL
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
    clone,        // INTERNAL
    cloneNode,    // INTERNAL
    bound,
    $data,
    watch,
    walk,
    data,
    bind,
}

// Export Alpine.js object
export default Alpine

// Start Alpine.js after logging
Alpine.start()
