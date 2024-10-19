import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// PrimeVue imports
import Aura from '@primevue/themes/aura';
import PrimeVue from 'primevue/config';
import Ripple from 'primevue/ripple';

// Variables and Function
const app = createApp(App);
app.directive('ripple', Ripple);
app.use(router);
app.use(PrimeVue, {
	theme: {
		preset: Aura,
	},
	ripple: true,
});
app.mount('#app');
