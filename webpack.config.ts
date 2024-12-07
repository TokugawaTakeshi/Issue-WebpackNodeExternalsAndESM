import Webpack from "webpack";
import NodeExternalsPlugin from "webpack-node-externals";



export default function generateConfiguration(
  _environment: Record<string, string>, commandArguments: Record<string, string>
): Webpack.Configuration {

  const __IS_DEVELOPMENT_BUILDING_MODE__: boolean = commandArguments.mode === "development";
  const __IS_PRODUCTION_BUILDING_MODE__: boolean = commandArguments.mode === "production";

  return {

    target: "node",

    entry: {
      ImageminPngquantTest: "./ImageminPngquantTest.ts",
      HTMLValidationTest: "./HTMLValidationTest.ts"
    },

    output: {
      path: __dirname,
      filename: "[name].js",
      library: {
        type: "commonjs"
      }
    },

    /* [ Theory ] Valid non-undefined values are only "development", "production" and "none". */
    mode: __IS_DEVELOPMENT_BUILDING_MODE__ ? "development" : "production",
    watch: __IS_DEVELOPMENT_BUILDING_MODE__,
    optimization: {
      emitOnErrors: __IS_DEVELOPMENT_BUILDING_MODE__,
      minimize: __IS_PRODUCTION_BUILDING_MODE__
    },

    node: {
      __dirname: false
    },

    devtool: false,

    externals: [
      NodeExternalsPlugin({})
    ],

    module: {
      rules: [
        {
          test: /\.ts$/u,
          loader: "ts-loader",
          options: {
            /* [ Theory ] 'ForkTypeScriptCheckerWebpackPlugin' will execute the type checking. */
            transpileOnly: true
          }
        }
      ]
    },

    resolve: {
      extensions: [ ".ts", ".js" ],
    }

  };
}
