'use strict';

import path from 'path';

export const mode = 'development';
export const entry = './src/js/script.js';
export const output = {
  filename: 'bundle.js',
  path: __dirname + '/dist/js'
};
export const watch = true;
export const devtool = "source-map";
export const module = {
  rules: [
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader?optional[]=runtime',
        options: {
          presets: [
            ["@babel/env", {
              targets: {
                edge: "17",
                firefox: "60",
                chrome: "67",
                safari: "11.1",
                ie: "11"
              }
            }]
          ]
        }
      }
    }
  ]
};
