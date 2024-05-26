import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const buildCssLoaders = (isDev: boolean) => ({
    test: /\.s[ac]ss$/i,
    exclude: /node_modules/,
    use: [
        // Creates `style` nodes from JS strings
        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
        {
            loader: 'css-loader',
            options: {
                modules: {
                    auto: (path: string) => Boolean(path.includes('.module.')),
                    localIdentName: isDev
                        ? '[path][name]__[local]--[hash:base64:5]'
                        : '[hash:base64:5]',
                },
            },
        },
        // Compiles Sass to CSS
        'sass-loader',
    ],
});
