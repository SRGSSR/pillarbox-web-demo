import { defineConfig } from 'vite';
import blitsVitePlugins from '@lightningjs/blits/vite';

export default defineConfig({
  plugins: [...blitsVitePlugins],
});
