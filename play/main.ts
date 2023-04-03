import { createApp } from 'vue';
import App from './app.vue';
import berniUi from '@berni-ui/components';
import 'ant-design-vue/dist/antd.css'; // or 'ant-design-vue/dist/antd.less'

const app = createApp(App);
app.use(berniUi);
app.mount('#app');
