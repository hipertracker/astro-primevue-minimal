import {map} from "nanostores";


export type MainStore = {
    darkMode: Boolean;
};

export const mainStore = map<MainStore>({
    darkMode: true,
});

export const toggleDarkMode = () => {
    const darkMode = !mainStore.get().darkMode;
    mainStore.set({...mainStore.get(), darkMode});
}
