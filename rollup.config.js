import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { dts } from 'rollup-plugin-dts';
import url from '@rollup/plugin-url';
import postcss from 'rollup-plugin-postcss';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const pkg = require('./package.json');

const config = [
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true,
        exports: 'named'
      },
      {
        file: pkg.module,
        format: 'esm',
        sourcemap: true
      }
    ],
    plugins: [
      peerDepsExternal(),
      resolve({
        browser: true,
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }),
      commonjs(),
      postcss({
        extract: true,
        minimize: true,
        use: {
          sass: {
            includePaths: ['src/styles', 'src', 'node_modules']
          }
        }
      }),
      url({
        include: ['**/*.svg'],
        limit: 0,
        fileName: '[name][extname]'
      }),
      typescript({
        tsconfig: './tsconfig.json',
        exclude: ['**/*.test.*', '**/*.stories.*'],
        jsx: 'react-jsx'
      })
    ],
    external: ['react', 'react-dom']
  },
  {
    input: 'dist/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()]
  }
];

export default config;