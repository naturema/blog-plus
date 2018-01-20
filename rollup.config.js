'use strict';

import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
// import alias from 'rollup-plugin-alias';
import vue from 'rollup-plugin-vue';
import buble from 'rollup-plugin-buble';
import replace from 'rollup-plugin-replace';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';

export default {
  input: './app/public/app.js',
  output: {
    file: 'app/public/dist/bundle.js',
    format: 'cjs'
  },
  plugins: [
    vue({compileTemplate: true}),
    postcss({extensions: [ '.css' ]}),
    buble(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('development'),
      'process.env.VUE_ENV': JSON.stringify('browser')
    }),
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**' // 只编译我们的源代码
    })
  ]
};