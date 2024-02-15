import { defineConfig } from 'vite';
import { glob } from 'glob';

const showcases = glob.sync('./static/**/*.html');

/**
 * Vite configuration file.
 *
 * @see https://vitejs.dev/config/
 */
export default defineConfig({
  base: './',
  build: {
    sourcemap: true,
    rollupOptions: {
      input: ['./index.html', ...showcases]
    }
  }
});
