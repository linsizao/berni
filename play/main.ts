import { createApp } from 'vue';
import App from './app.vue';
import berni from '@berni/components';
import 'ant-design-vue/dist/antd.css'; // or 'ant-design-vue/dist/antd.less'

const app = createApp(App);
app.use(berni);
app.mount('#app');
