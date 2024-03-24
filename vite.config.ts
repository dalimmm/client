import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

import fs from 'node:fs';

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
});
