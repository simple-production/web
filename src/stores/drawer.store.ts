import { writable } from 'svelte/store';

const { set, subscribe, update } = writable<boolean>(false);

export const drawer = {
	subscribe,
	toggle: () => update((v) => !v),
	close: () => set(false)
};
