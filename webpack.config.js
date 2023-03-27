const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'build'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'build'),
    },
    port: '3000',
    open: true,
    historyApiFallback: true,
    hot: true,
  },
  module: {
    rules: [
      // `js` and `jsx` files are parsed using `babel`
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      // `ts` and `tsx` files are parsed using `ts-loader`
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader',
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        exclude: /node_modules/,
        loader: 'file-loader',
        options: {
          limit: 1024,
          name: '[name].[ext]',
          publicPath: 'assets/fonts/',
          outputPath: 'assets/fonts/',
        },
      },
      {
        test: /\.(jpg|png)$/,
        exclude: /node_modules/,
        loader: 'file-loader',
        options: {
          limit: 1024,
          name: '[name].[ext]',
          publicPath: 'assets/images/',
          outputPath: 'assets/images/',
        },
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
  },
};

