<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import * as dfd from "danfojs";

export default defineComponent({
  name: "MainLayout",

  setup() {
    const worker = new Worker(
      new URL("../worker/load_data.js", import.meta.url)
    );

    worker.postMessage({
      links: ["https://forum.quasar-framework.org/assets/uploads/system/site-logo.svg?v=rgjip6dvq7o"],
    });
    const a = ref(new dfd.DataFrame([]));
    return {
      a,
    };
  },
});
</script>
