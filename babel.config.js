module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: ['last 2 versions', 'not dead', 'not < 2%'],
      },
    ],
    '@babel/preset-react',
  ],
  plugins: ['react-hot-loader/babel', '@babel/plugin-proposal-class-properties', '@babel/plugin-syntax-dynamic-import'],
  env: {
    test: {
      plugins: ['dynamic-import-node'],
    },
  },
  // so we need `@babel/preset-env` for transform our code to old javascript syntax.
  // and we need `@babel/preset-react` for compile our JSX code to old javascript syntax
};
