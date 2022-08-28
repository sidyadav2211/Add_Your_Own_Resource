import { createApp } from 'vue';
import App from './components/App.vue'
import BaseCard from './components/UI/BaseCard.vue';
const app = createApp(App);

app.component('base-card', BaseCard);
app.mount('#app');
