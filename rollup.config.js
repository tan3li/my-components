import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import svgr from '@svgr/rollup';
import dts from 'rollup-plugin-dts';
import postcss from 'rollup-plugin-postcss';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import copy from 'rollup-plugin-copy';
import del from 'rollup-plugin-delete';

export default [
    {
        input: 'src/index.ts',
        output: [
            {
                file: 'dist/index.js',
                format: 'esm',
                sourcemap: true
            }
        ],
        plugins: [
            peerDepsExternal(),
            resolve(),
            commonjs(),
            typescript({tsconfig: './tsconfig.build.json'}),
            svgr({icon: true}),
            postcss({
                extract: 'index.css'
            }),
            copy({
                targets: [{src: 'public/locales/en/translation.json', dest: 'dist'}]
            })
        ]
    },
    {
        input: 'dist/dts/index.d.ts',
        output: [{file: 'dist/index.d.ts', format: 'esm'}],
        plugins: [dts(), del({hook: 'buildEnd', targets: 'dist/dts'})],
        external: [/\.(css|less|scss)$/]
    }
];
