const HtmlWebpackPlugin = require("html-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const BrotliPlugin = require("brotli-webpack-plugin");
const webpack = require("webpack");
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const IS_DEV = process.env.NODE_ENV === "development";
const IS_PROD = !IS_DEV;

module.exports = {
  entry: {
    app: ["./src/index.tsx"],
  },
  context: path.resolve(__dirname),
  mode: IS_DEV ? "development" : "production",
  target: "web",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[fullhash:7].js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset",
      },
      {
        resourceQuery: /inline/,
        type: "asset/inline",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      Buffer: ["buffer", "Buffer"],
    }),
    new webpack.EnvironmentPlugin(["NODE_ENV"]),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: `${__dirname}/static/index.html`,
    }),
    ...(IS_PROD
      ? [
          new CompressionPlugin({ test: /\.(js|css|html|svg)$/ }),
          new BrotliPlugin({ test: /\.(js|css|html|svg)$/ }),
          new CopyWebpackPlugin({
            patterns: [{ from: "static/images", to: "static/images" }],
          }),
        ]
      : []),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /\/node_modules\//,
          name: "vendor",
          chunks: "all",
        },
      },
    },
  },
  devtool: IS_PROD ? false : "eval-cheap-module-source-map", // https://webpack.js.org/configuration/devtool
  devServer: {
    compress: true,
    historyApiFallback: true,
    hot: true,
    port: 3000,
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
    modules: ["node_modules", path.resolve(__dirname, "src")],
    alias: {
      react: path.resolve("./node_modules/react"),
    },
    fallback: {
      crypto: require.resolve("crypto-browserify"),
      stream: require.resolve("stream-browserify"),
      timers: require.resolve("timers-browserify"),
      buffer: require.resolve("buffer"),
    },
  },
  bail: true,
};
