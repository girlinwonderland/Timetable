import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

export const buildDevServer = (port: number): DevServerConfiguration => ({
    port,
    open: true,
    historyApiFallback: true,
});
