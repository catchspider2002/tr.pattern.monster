import { writable } from 'svelte/store';

export const themeStore = writable("light");
export const langStore = writable("tr");
export const webStore = writable("https://tr.pattern.monster");
