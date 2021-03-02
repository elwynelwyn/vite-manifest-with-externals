Repro for bug where setting `manifest: true` along side some `externals` causes a crash during build:

```
error during build:
TypeError: Cannot read property 'facadeModuleId' of undefined
    at getChunkName (/repos/vite-manifest-with-externals/node_modules/vite/dist/node/chunks/dep-e0f09032.js:26966:27)
    at /repos/vite-manifest-with-externals/node_modules/vite/dist/node/chunks/dep-e0f09032.js:26992:73
    at Array.map (<anonymous>)
    at createChunk (/repos/vite-manifest-with-externals/node_modules/vite/dist/node/chunks/dep-e0f09032.js:26992:59)
    at Object.generateBundle (/repos/vite-manifest-with-externals/node_modules/vite/dist/node/chunks/dep-e0f09032.js:27009:53)
    at /repos/vite-manifest-with-externals/node_modules/rollup/dist/shared/rollup.js:19049:25
error Command failed with exit code 1.
```