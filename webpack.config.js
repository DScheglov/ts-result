/* eslint-disable */
const path = require('path');

module.exports = [
  {
    mode: "production",
    entry: { "result": "./lib/index.js" },
    output: {
      globalObject: 'this',
      path: path.resolve(__dirname, 'lib/dist'),
      filename: '[name].min.js',
      library: {
        name: 'Result',
        type: 'umd',
      },
    },
  },
  {
    mode: "production",
    entry: { "base": "./lib/base.js" },
    output: {
      globalObject: 'this',
      path: path.resolve(__dirname, 'lib/dist'),
      filename: '[name].min.js',
      library: {
        name: 'Result',
        type: 'umd',
      },
    },
  },
  {
    mode: "production",
    entry: { "fn": "./lib/fn/index.js" },
    output: {
      globalObject: 'this',
      path: path.resolve(__dirname, 'lib/dist'),
      filename: '[name].min.js',
      library: {
        name: 'Result.Fn',
        type: 'umd',
      },
    },
  },
  {
    mode: "production",
    entry: { "do": "./lib/do.js" },
    output: {
      globalObject: 'this',
      path: path.resolve(__dirname, 'lib/dist'),
      filename: '[name].min.js',
      library: {
        name: 'Result.Do',
        type: 'umd',
      },
    },
  },
  {
    mode: "production",
    entry: { "methods": "./lib/methods.js" },
    output: {
      globalObject: 'this',
      path: path.resolve(__dirname, 'lib/dist'),
      filename: '[name].min.js',
      library: {
        name: 'Result.Methods',
        type: 'umd',
      },
    },
  },
  {
    mode: "production",
    entry: { "lists": "./lib/lists.js" },
    output: {
      globalObject: 'this',
      path: path.resolve(__dirname, 'lib/dist'),
      filename: '[name].min.js',
      library: {
        name: 'Result.lists',
        type: 'umd',
      },
    },
  },
  {
    mode: "production",
    entry: { "sync": "./lib/sync.js" },
    output: {
      globalObject: 'this',
      path: path.resolve(__dirname, 'lib/dist'),
      filename: '[name].min.js',
      library: {
        name: 'Result',
        type: 'umd',
      },
    },
  },
  {
    mode: "production",
    entry: { "sync/do": "./lib/do-gen.js" },
    output: {
      globalObject: 'this',
      path: path.resolve(__dirname, 'lib/dist'),
      filename: '[name].min.js',
      library: {
        name: 'Result.Do',
        type: 'umd',
      },
    },
  },
  {
    mode: "production",
    entry: { "sync/methods": "./lib/sync-methods.js" },
    output: {
      globalObject: 'this',
      path: path.resolve(__dirname, 'lib/dist'),
      filename: '[name].min.js',
      library: {
        name: 'Result.Methods',
        type: 'umd',
      },
    },
  },
  {
    mode: "production",
    entry: { "async": "./lib/async.js" },
    output: {
      globalObject: 'this',
      path: path.resolve(__dirname, 'lib/dist'),
      filename: '[name].min.js',
      library: {
        name: 'Result',
        type: 'umd',
      },
    },
  },
  {
    mode: "production",
    entry: { "async/do": "./lib/async-do-gen.js" },
    output: {
      globalObject: 'this',
      path: path.resolve(__dirname, 'lib/dist'),
      filename: '[name].min.js',
      library: {
        name: 'Result.Do',
        type: 'umd',
      },
    },
  },
  {
    mode: "production",
    entry: { "async/methods": "./lib/async-methods.js" },
    output: {
      globalObject: 'this',
      path: path.resolve(__dirname, 'lib/dist'),
      filename: '[name].min.js',
      library: {
        name: 'Result.Methods',
        type: 'umd',
      },
    },
  },
];
