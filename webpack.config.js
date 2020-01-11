const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/scripts/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js"
  },
  mode: "production",
  plugins: [
    new CopyPlugin([
      {
        from: "./index.html",
        to: ""
      },
      {
        from: "src/styles/main.css",
        to: ""
      }
    ])
  ]
};
