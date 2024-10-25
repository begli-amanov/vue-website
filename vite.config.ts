import { PrimeVueResolver } from '@primevue/auto-import-resolver';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';
import Components from 'unplugin-vue-components/vite';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		Components({
			resolvers: [PrimeVueResolver()],
		}),
	],
	base: '/vue-website/',
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
});
