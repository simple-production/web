/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare namespace App {
	// interface Locals {}
	// interface Platform {}
	// interface Session {}
	interface Stuff {
		title: string;
		description?: string;
	}
}

declare module 'svelte-icons-pack';
declare module 'svelte-icons-pack/*';
