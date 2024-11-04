import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        dts({
            include: 'lib',
            // exclude: ['src', 'cypress'],
        }),
    ],
    resolve: {
        alias: {
            drdtc: resolve(__dirname, 'lib/main.ts'),
            '@': resolve(__dirname, 'src'),
            '@lib': resolve(__dirname, 'lib'),
        },
    },
    build: {
        lib: {
            entry: resolve(__dirname, 'lib/main.ts'),
            name: 'drdtc',
            fileName: 'drdtc',
        },
        copyPublicDir: false,
        rollupOptions: {
            external: ['react', 'react-dom', 'react/jsx-runtime'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    'react/jsx-runtime': 'react/jsx-runtime',
                },
            },
        },
    },
});
