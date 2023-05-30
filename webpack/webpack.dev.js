const webpack = require('webpack')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
  mode: 'development',
  devServer: {
    hot: true,
    port: 3000,
    open: true, // auto open browser
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('webpack-dev'),
    }),
    new ReactRefreshWebpackPlugin(), // refresh page when change text or style component but do not reset state in component
  ],
}
