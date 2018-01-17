'use strict';

import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
// import alias from 'rollup-plugin-alias';
import vue from 'rollup-plugin-vue';
import buble from 'rollup-plugin-buble';
import replace from 'rollup-plugin-replace';

export default {
  input: './app/public/app.js',
  output: {
    file: 'app/public/dist/bundle.js',
    format: 'cjs'
  },
  plugins: [
    vue({compileTemplate: true}),
    buble(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('development'),
      'process.env.VUE_ENV': JSON.stringify('browser')
    }),
    resolve(),
    babel({
      exclude: 'node_modules/**' // 只编译我们的源代码
    })
  ]
};