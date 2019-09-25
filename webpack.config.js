const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	entry: "./src/index.js",
    mode: "development",
	output: {
		filename: "./bundle.js",
        chunkFilename: "[name].bundle.js"
	},
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		port: 6060,
		inline: true,
		historyApiFallback: true
	},
	module: {

		rules: [
                {
                    test: /\.m?js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: "babel-loader"
                    }
                },
                {
                    test: /\.css$/,
                    use: [
                        "style-loader",
                        {
                            loader: "css-loader",
                            options: {
                                modules: true
                            }
                        }
                    ]
                },
                {
                    test: /\.(png|svg|jpg|gif)$/,
                    use: ["file-loader"]
                }

		]

	},
    resolve: {
        modules: ['node_modules', 'src'],
        extensions: ['.js', '.jsx'],
    }
}