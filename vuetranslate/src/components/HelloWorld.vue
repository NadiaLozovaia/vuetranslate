<template>
  {{ toValue(translate("Back to home")) }}

  <div class="p-10">
    {{ toValue(translate("Something went wrong")) }}
  </div>
  <div class="p-10">Static simple test</div>
  <Language />
</template>
<script setup>
import { ref, toValue } from "vue";
import Language from "./Language.vue";
import { translate } from "../locale/i18n.js";

const count = ref(0);
</script>

<style>
.lbl-form {
  @apply block text-sm font-medium leading-6 text-gray-900;
}

input.inpt-form {
  @apply block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6  invalid:[&:not(:focus):not(:placeholder-shown)]:ring-red-400 [&:not(:placeholder-shown):not(:focus):invalid~span]:block disabled:bg-gray-100;
}
input.inpt-chbox {
  @apply rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6;
}
.lbl-chbox {
  @apply text-sm font-medium leading-6 text-gray-900;
}
button.btn-sbmt-form {
  @apply flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-75 group-invalid:pointer-events-none group-invalid:opacity-75;
}
.h2-title-ctr {
  @apply mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900;
}
</style>
