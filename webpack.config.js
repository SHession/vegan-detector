import path from "path";

const moduleURL = new URL(import.meta.url);
export const dirName = path.dirname(moduleURL.pathname);

export default {
    mode: 'development',
    entry: './src/index.ts',
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: [".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            { test: /\.tsx?$/, loader: "ts-loader" },
            { test: /\.jpeg?$/},
            { test: /\.html?$/}
        ],
    },
    output: {
        path: path.resolve(dirName, 'public'),
        filename: 'detector.bundle.js',
    },
    devServer: {
        static: {
            directory: path.join(dirName, 'public'),
        },
        compress: true,
        port: 7890,
    },
}