import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

export default [
  // CommonJS build
  {
    input: 'index.js',
    output: {
      file: 'dist/index.cjs',
      format: 'cjs',
      exports: 'auto'
    },
    plugins: [
      nodeResolve(),
      commonjs(),
      json()
    ]
  },
  // ES Module build
  {
    input: 'index.js',
    output: {
      file: 'dist/index.mjs',
      format: 'es'
    },
    plugins: [
      nodeResolve(),
      commonjs(),
      json()
    ]
  }
];
