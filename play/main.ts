import { createApp } from 'vue';
import App from './app.vue';
import berni from '@berni/components';
const app = createApp(App);
app.use(berni);
app.mount('#app');
