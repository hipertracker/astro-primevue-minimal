<script lang="ts" setup>
import {useStore} from '@nanostores/vue'
import {mainStore, toggleDarkMode} from '../stores/main_store.ts'
import {usePrimeVue} from "primevue/config";
import {computed} from "vue";
import {PrimeIcons} from 'primevue/api';

const PrimeVue = usePrimeVue();
const $store = useStore(mainStore)

const iconClass = computed(() => {
  return $store.value.darkMode ? PrimeIcons.MOON : PrimeIcons.SUN;
})

function clicked() {
  const darkMode = $store.value.darkMode;
  const currentTheme = darkMode ? 'lara-dark-blue' : 'lara-light-blue';
  const newTheme = !darkMode ? 'lara-dark-blue' : 'lara-light-blue';
  PrimeVue.changeTheme(currentTheme, newTheme, 'theme-link', () => {
    console.log('theme changed!');
    toggleDarkMode()
  });
}
</script>

<template>
  <i :class="iconClass" aria-label="dark mode" @click="clicked"/>
</template>
