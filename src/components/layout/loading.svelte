<script lang="ts">
	import { navigating } from '$app/stores';
	import { fade } from 'svelte/transition';
	import SimpleIcon from '../icons/simple-icon.svelte';

	$: isLoading = $navigating != null;
</script>

{#if !isLoading}
	<div
		transition:fade={{ duration: 100 }}
		class="fixed inset-0 z-[999] flex h-screen w-screen flex-col items-center justify-center gap-4 bg-black/50 text-white"
	>
		<span class="block w-8 animate-bounce text-4xl">
			<SimpleIcon />
		</span>

		<h3 class="text-xl font-semibold">Loading</h3>
	</div>
{/if}

<style lang="scss">
</style>
