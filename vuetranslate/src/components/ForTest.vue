<template>
  <div class="px-10">
    <p class="text-xl text-red-500">
      {{ toValue(translate("Back to home")) }}
    </p>
  </div>

  <Language class="mt-2" />
</template>

<script setup>
import { toValue } from "vue";
import Language from "./Language.vue";
import { translate } from "../locale/i18n.js";
// import { useRouter } from "vue-router";
// import { useToast } from "vue-toastification";

// const toast = useToast();
// const router = useRouter();
</script>
