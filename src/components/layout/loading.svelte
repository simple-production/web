<script lang="ts">
	import { navigating } from '$app/stores';
	import FiLoader from 'svelte-icons-pack/fi/FiLoader';
	import { fade } from 'svelte/transition';
	import Icon from '../icons/icon.svelte';

	$: isLoading = $navigating != null;
</script>

{#if isLoading}
	<div
		transition:fade={{ duration: 100 }}
		class="fixed w-screen h-screen bg-black/50 inset-0 z-[999] flex flex-col items-center justify-center gap-4 text-white"
	>
		<span class="text-4xl animate-spin block">
			<Icon icon={FiLoader} title="Loading..." />
		</span>

		<h3 class="text-xl font-semibold">Loading...</h3>
	</div>
{/if}

<style lang="scss">
</style>
