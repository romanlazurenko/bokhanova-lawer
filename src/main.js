import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";
import "primeicons/primeicons.css";
import { definePreset } from '@primeuix/themes';

const MyPreset = definePreset(Aura, {
    semantic: {
      primary: {
        50: '{slate.50}',
        100: '{slate.100}',
        200: '{slate.200}',
        300: '{slate.300}',
        400: '{slate.400}',
        500: '{slate.500}',
        600: '{slate.600}',
        700: '{slate.700}',
        800: '{slate.800}',
        900: '{slate.900}',
        950: '{slate.950}'
      }
    }
  });

const app = createApp(App);

app.use(PrimeVue, {
  theme: {
    preset: MyPreset,
    options: {
      darkModeSelector: ".dark",
    },
  },
});

app.mount("#app");