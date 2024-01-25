const data = {
  "Something went wrong": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "Back to home":"Torna alla casa"
};
export default function (key, scope, vars) {
  if (scope === "settings" && key === "text with variable") {
    return "Text before variable " + vars[0] + " text after variable";
  }
  let res = data;
  if (scope) res = res[scope];
  return res[key];
}
