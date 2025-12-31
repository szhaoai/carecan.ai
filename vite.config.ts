import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    base: '/carecan.ai/',        // needed for GitHub Pages under /carecan.ai/ [web:113][web:144]
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [react()],
    // Remove API key defines for demo (or keep them commented out)
    // define: {
    //   'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    //   'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
    // },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
  };
});

