import PrimeVue from 'primevue/config';
import type {App} from 'vue';

import 'primeicons/primeicons.css'

export default (app: App) => {
    app.use(PrimeVue);
};
