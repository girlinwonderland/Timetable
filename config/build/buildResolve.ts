import webpack from 'webpack';

export const buildResolve = (src: string): webpack.ResolveOptions => ({
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [src, 'node_modules'],
    mainFiles: ['index'],
    alias: {},
});
