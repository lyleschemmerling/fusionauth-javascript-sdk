import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
  build: {
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: '@fusionauth/vanilla-sdk',
      fileName: 'index',
      formats: ['es'],
    },
  },
  plugins: [
    dts({
      exclude: ['**/*.test.ts'],
    }),
  ],
});
