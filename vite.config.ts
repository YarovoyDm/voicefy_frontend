import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { resolve } from 'path';

const root = resolve(__dirname, 'src');

export default defineConfig({
    plugins: [react(), svgr()],
    resolve: {
        alias: {
            assets: resolve(root, 'assets'),
            components: resolve(root, 'components'),
            constants: resolve(root, 'constants'),
            containers: resolve(root, 'containers'),
            hooks: resolve(root, 'hooks'),
            scss: resolve(root, 'scss'),
            store: resolve(root, 'store'),
        },
    },
});
