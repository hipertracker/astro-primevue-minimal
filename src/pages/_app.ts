import 'primevue/resources/themes/lara-dark-green/theme.css';

import PrimeVue from 'primevue/config';
import type { App } from 'vue';

export default (app: App) => {
  app.use(PrimeVue);
};