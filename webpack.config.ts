import path from 'path';
import webpack from 'webpack';
import { buildWebpackConfig } from './config/build';
import { TBuildMode, TBuildPath, IBuildEnv } from './config/build/types';

export default (env: IBuildEnv) => {
    const PATH: TBuildPath = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src')
    };

    const mode: TBuildMode = env.mode || 'development';
    const isDev: boolean = mode === 'development';
    const PORT = env.port || 3000;

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        path: PATH,
        isDev,
        port: env.port || PORT,
        project: 'frontend',
    });
    return config;
};
