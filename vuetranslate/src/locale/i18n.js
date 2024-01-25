import { ref, toValue, watch } from "vue";
// import { getCookies } from "/src/globalFunctions.js";

import en from "./en.js";
import lt from "./lt.js";

function getCookies() {
    let cookies = {};
    document.cookie.split('; ').forEach(value => {
      let pair = value.split('=');
      cookies[pair[0]] = pair[1];
    });
    return cookies;
  }

const locales = ["en", "lt"];

const localeFunctions = {
  en: en,
  lt: lt,
};
const currentLocaleRef = ref(locales[0]);


let cookie = getCookies().locale;
if (cookie && locales.includes(cookie)) {
  currentLocaleRef.value = cookie;
}


export function currentLocale() {
  return currentLocaleRef.value;
}
export function setLocale(locale) {
  currentLocaleRef.value = locale;
  document.cookie = `locale=${locale}; path=/`;
}

export function translate(key, scope, vars) {
  const res = ref("");
  watch(
    currentLocaleRef,
    async () => {
      res.value = localeFunctions[toValue(currentLocaleRef)](key, scope, vars);
    },
    { immediate: true }
  );
  return res;
}

