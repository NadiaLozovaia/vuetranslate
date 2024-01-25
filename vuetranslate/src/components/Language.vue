<template>
  <ul class="justify-center flex p-10">
    <li class="rounded-l-lg bg-gray-100 px-2.5 py-1 border border-l-0 hover:bg-white">
      <span :class="{ 'text-primary': enActive }" @click="setLocale('en')">
        English
      </span>
    </li>
    <li
      class="rounded-r-lg bg-gray-100 px-2.5 py-1 border border-l-0 hover:bg-white"
    >
      <span :class="{ 'text-primary': ltActive }" @click="setLocale('lt')">
        Latin
      </span>
    </li>
  </ul>

</template>

<script setup>
import { computed } from "vue";
import { currentLocale, setLocale } from "../locale/i18n.js";

const enActive = computed(() => currentLocale() === "en");
const ltActive = computed(() => currentLocale() === "lt");
</script>
