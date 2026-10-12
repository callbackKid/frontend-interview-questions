import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages serves this project from https://callbackkid.github.io/frontend-interview-questions/
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/frontend-interview-questions/' : '/',
  plugins: [react()],
}));
