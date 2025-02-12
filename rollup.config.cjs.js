const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const terser = require('@rollup/plugin-terser');
const babel = require('@rollup/plugin-babel');

module.exports = {
  input: './index.js', // 入口文件路径
  output: [
    {
      file: './jasypt.cjs.js', // 输出 CommonJS 文件路径
      format: 'cjs', // 输出格式为 CommonJS
      sourcemap: false, // 生成源映射文件
    },
  ],
  plugins: [
    resolve(), // 解析 Node.js 模块
    commonjs(), // 转换 CommonJS 模块为 ESM
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**', // 排除 node_modules 中的文件
      presets: ['@babel/preset-env'] // 使用 Babel 编译现代 JavaScript
    }),
    terser() // 压缩代码（可选）
  ],
  // external: ['fs', 'path', 'process', 'crypto', 'assert'], // 外部依赖（避免打包 Node.js 内置模块）
};