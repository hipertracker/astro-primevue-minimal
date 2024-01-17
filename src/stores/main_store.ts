import { persistentMap } from '@nanostores/persistent';
import { PrimeIcons } from "primevue/api";

export type MainStore = {
    dark: string;
    icon: string;
};

export const mainStore = persistentMap<MainStore>("mainStore:", {
    dark: "yes",
    icon: PrimeIcons.MOON,
});

export function toggleDarkMode (PrimeVue: any) {
    if (mainStore.get().dark === "yes") {
        setLightMode(PrimeVue);
    } else {
        setDarkMode(PrimeVue);
    }
};

export function setDarkMode (PrimeVue: any) {
    PrimeVue.changeTheme("lara-light-blue", "lara-dark-blue", "theme-link");
    mainStore.set({ dark: 'yes', icon: PrimeIcons.MOON });
}

export function setLightMode (PrimeVue: any) {
    PrimeVue.changeTheme("lara-dark-blue", "lara-light-blue", "theme-link");
    mainStore.set({ dark: 'no', icon: PrimeIcons.SUN });
}