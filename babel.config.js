module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'entry',
        corejs: 3,
      },
    ],
  ],
  // en_US: Load on demand is enabled by default
  // zh_CN: 默认启用了按需加载
  plugins: [
    ['import', {
      libraryName: 'ant-design-vue',
      libraryDirectory: 'es',
      style: true, // `style: true` 会加载 less 文件,反之 css
    }],
  ],
}
