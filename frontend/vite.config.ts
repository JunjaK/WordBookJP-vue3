import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import WindiCSS from 'vite-plugin-windicss';
import ViteComponents, {
  AntDesignVueResolver,
} from 'vite-plugin-components';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    WindiCSS(),
    ViteComponents({
      globalComponentsDeclaration: true,
      customComponentResolvers: [
        AntDesignVueResolver(),
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
  },
  css: {
    preprocessorOptions: {
      less: {
        // ant design vars
        modifyVars: {
          'primary-color': '#8AC6D1',
          'link-color': '#8AC6D1',
          'secondary-color': '#FE8A71',
          'success-color': '#9CBB59',
          'warning-color': '#faad14',
          'error-color': '#C0504D',
          'font-size-base': '14px',
          'heading-color': 'rgba(0, 0, 0, 0.85)',
          'text-color': 'rgba(0, 0, 0, 0.85)',
          'text-color-secondary': 'rgba(0, 0, 0, 0.45)',
          'disabled-color': 'rgba(0, 0, 0, 0.25)',
          'border-radius-base': '4px',
          'border-color-base': '#d9d9d9',
          'box-shadow-base': '0 2px 8px rgba(0, 0, 0, 0.15)',
        },
      },
      scss: {},
    },
  },
});
