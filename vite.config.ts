/// <reference types="vitest" />
/// <reference types="vite/client" />

import fs from 'node:fs';
import path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const key = fs.readFileSync('localhost-key.pem');
const cert = fs.readFileSync('localhost-cert.pem');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    https: {
      key,
      cert,
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/base'),
      '~': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
});
