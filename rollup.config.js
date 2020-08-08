import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

export default {
    input: 'src/index.js',
    output: [
        {
            file: 'dist/diff-dom-es.js',
            format: 'es'
        },
        {
            file: 'dist/diff-dom.js',
            format: 'cjs'
        },
        {
            file: 'dist/diff-dom-browser.js',
            format: 'umd',
            name: 'diffDOM',
            sourcemap: true,
            plugins: [terser()]
        }
    ],
    plugins: [
        babel({
            exclude: 'node_modules/**'
        })
    ]
}
