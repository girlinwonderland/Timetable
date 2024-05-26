import webpack from 'webpack';
import { buildCssLoaders } from './loaders/buildCssLoaders';
import { buildBabelLoader } from './loaders/buildBabelLoader';

export const buildLoaders = (isDev: boolean): webpack.RuleSetRule[] => {

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const codeBabelLoader = buildBabelLoader({ isDev, isTsx: false });
    const tsxCodeBabelLoader = buildBabelLoader({ isDev, isTsx: true });

    const cssLoader = buildCssLoaders(isDev);

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    return [
        fileLoader,
        svgLoader,
        codeBabelLoader,
        tsxCodeBabelLoader,
        cssLoader,
    ];
};
