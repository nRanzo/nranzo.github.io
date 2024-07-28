import { merge } from 'webpack-merge';
import commonConfiguration from './webpack.common.mjs';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default merge(
    commonConfiguration,
    {
        mode: 'production',
        plugins: [
            new CleanWebpackPlugin()
        ]
    }
);
