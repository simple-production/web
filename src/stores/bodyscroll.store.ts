import { writable } from 'svelte/store';
import { drawer } from './drawer.store';

const { set, subscribe, update } = writable<boolean>(false);

export const bodyScroll = {
	subscribe,
	disable: set(false),
	enable: set(true),
	toggle: update((isOpen) => !isOpen),
	set
};
