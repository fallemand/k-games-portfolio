const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const AutoPrefixer = require('autoprefixer');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;

module.exports = {
  entry: './app/app.js',
  output: {
    path: `${__dirname}/build`,
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(sass|scss)$/,
        loader: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          { loader: 'postcss-loader', options: { plugins: () => [AutoPrefixer] } },
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/[name].[ext]',
              context: '',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.jsx', '.js'],
  },
  plugins: [
    new CleanWebpackPlugin(['build']),
    new HtmlWebPackPlugin({
      template: './app/index.html',
      favicon: './app/assets/images/favicon.png',
      minify: {
        removeScriptTypeAttributes: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: 'bundle.css',
    }),
    new ImageminPlugin({
      pngquant: {
        quality: '95-100',
      },
    }),
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: { output: { comments: false } },
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },
  mode: 'production',
};
