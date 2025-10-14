import { defineConfig } from 'vite';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname  = dirname(__filename)

export default defineConfig({
    resolve: { alias: { '@': resolve(__dirname, 'src') } },
    build: {
        rollupOptions: {
            input: {
                main:     resolve(__dirname, 'index.html'),
                about:    resolve(__dirname, 'about.html'),
                contacts: resolve(__dirname, 'contacts.html'),
            },
        },
    },
});