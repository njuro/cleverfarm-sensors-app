const path = require('path')
const { CheckerPlugin } = require('awesome-typescript-loader')
const ESLintPlugin = require('eslint-webpack-plugin')

const SRC_DIR = path.resolve(__dirname, 'src')

module.exports = {
  entry: path.resolve(__dirname, './src/index.tsx'),
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'awesome-typescript-loader']
      },
      {
        test: /\.(s(a|c)ss)$/,
        use: ['style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: { localIdentName: '[local]_[hash:base64:5]' }
            }
          },
          'sass-loader'],
        include: /\.module\.(s(a|c)ss)$/
      },
      {
        test: /\.(s(a|c)ss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: /\.module\.(s(a|c)ss)$/
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg|jpg|png)$/,
        use: {
          loader: 'url-loader'
        }
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.ts', '.tsx'],
    alias: {
      components: path.resolve(__dirname, 'src/components')
    }
  },
  devtool: 'source-map',
  plugins: [
    new CheckerPlugin(),
    new ESLintPlugin({
      extensions: ['ts', 'tsx'],
      fix: false,
      files: SRC_DIR,
      failOnError: false
    })
  ],
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, './public'),
    hot: true
  }
}
