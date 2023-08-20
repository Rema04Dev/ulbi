import webpack from 'webpack';
export function buildLoaders(): webpack.RuleSetRule[] {
  // Если не использовать typescript, то нужно было бы установить babel-loader
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: '/node_modules/',
  };
  return [typescriptLoader];
}
