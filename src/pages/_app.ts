import PrimeVue from 'primevue/config';
import type {App} from 'vue';
import 'primeicons/primeicons.css'

// WARNING: use older @nanostores/vue/devtools == 6.5.1
// because the new one will not work at the time of
// this writing (2024-01-12)
import {devtools} from '@nanostores/vue/devtools'

import { mainStore } from '../stores/main_store';

export default (app: App) => {
    app.use(PrimeVue);
    app.use(devtools, { mainStore });
};

if (globalThis.window) {
    console.log('Hello client-side!');
}
if (!globalThis.window) {
    console.log('Hello server-side!');
}

