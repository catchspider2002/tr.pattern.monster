import { writable } from 'svelte/store';
// import { onMount } from "svelte";

export const themeStore = writable("light");
export const langStore = writable("tr");
export const webStore = writable("https://tr.pattern.monster");

// export let themeStore;
