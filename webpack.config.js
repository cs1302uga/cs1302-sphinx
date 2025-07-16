// -*- mode: web; standard-indent: 2; fill-column: 80; -*-

import path from "path";
import { fileURLToPath } from 'url';
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const devMode = process.env.NODE_ENV !== "production";
const minCssExtractLoader = MiniCssExtractPlugin.loader;

const cssLoader = {
  loader: "css-loader",
  options: {
    importLoaders: 1,
    sourceMap: true,
  },
};

const sassLoader = {
  loader: "sass-loader",
  options: {
    sourceMap: true,
    sassOptions: {
      quietDeps: true,
      silenceDeprecations: ['import'],
    },
  },
};

export default {
  devtool: "source-map",
  entry: {
    "cs1302_base": {
      import: [
        "./src/cs1302_sphinx/assets/scripts/cs1302_base.ts",
        "./src/cs1302_sphinx/assets/styles/cs1302_base.scss",
      ],
    },
  },
  output: {
    filename: "scripts/[name].js",
    path: path.resolve(__dirname, "src/cs1302_sphinx/theme/cs1302_base/static"),
    clean: true,
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "styles/[name].css" }),
  ],
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },
  performance: {
    hints: false,
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        use: [
          'babel-loader',
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          minCssExtractLoader,
          cssLoader,
          sassLoader,
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext][query]'
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: 'fonts/[name][ext][query]'
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts',],
  },
  stats: {
    errorDetails: true,
  }
};
