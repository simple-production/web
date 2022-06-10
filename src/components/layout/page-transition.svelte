<script lang="ts">
	import { drawer } from '@/stores/drawer.store';
	import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
	import { fade } from 'svelte/transition';

	export let key: string;

	const TRANSITION_DURATION = 300;

	let ref: HTMLDivElement;

	$: $drawer ? disableBodyScroll(ref) : enableBodyScroll(ref);
</script>

{#key key}
	<div
		bind:this={ref}
		class="duration-700"
		class:-translate-x-full={$drawer}
		in:fade={{ duration: TRANSITION_DURATION, delay: TRANSITION_DURATION }}
		out:fade={{ duration: TRANSITION_DURATION }}
	>
		<slot />
	</div>
{/key}

<style lang="scss">
</style>
