<script lang="ts" setup>
import { useStore } from "@nanostores/vue";
import { usePrimeVue } from "primevue/config";
import { onMounted } from "vue";
import {
  mainStore,
  setDarkMode,
  setLightMode,
  toggleDarkMode,
} from "../stores/main_store.ts";

const PrimeVue = usePrimeVue();
const store = useStore(mainStore);

function clicked() {
  toggleDarkMode(PrimeVue);
}

onMounted(() => {
  if (store.value.dark === "yes") {
    setDarkMode(PrimeVue);
  } else {
    setLightMode(PrimeVue);
  }
});
</script>

<template>
  <i :class="store.icon + ' cursor-pointer'" aria-label="dark mode" @click="clicked" />
</template>
