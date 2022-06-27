<script lang="ts" context="module">
	import Button from '@/components/forms/button.svelte';
	import Routes from '@/constants/routes';
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ error, status }) => {
		return {
			props: {
				status,
				error
			}
		};
	};
</script>

<script lang="ts">
	export let status: number;
	export let error: Error;
</script>

<div class="-mt-28 flex h-screen flex-col items-center justify-center gap-2">
	<h1
		class="to-simple-dark via-simple-light bg-gradient-to-br from-black bg-clip-text text-8xl font-bold text-transparent"
	>
		Woops!
	</h1>
	<p class="text-2xl font-semibold">{error.message}</p>

	<p>That's awkward...</p>

	<div class="mt-4">
		<Button href={Routes.home} type="secondary">Go back to safety</Button>
	</div>
</div>

<style lang="scss">
</style>
