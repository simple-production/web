<script lang="ts">
	import { fade } from 'svelte/transition';
	export let key: string;

	const TRANSITION_DURATION = 300;
</script>

{#key key}
	<div
		class=""
		in:fade={{ duration: TRANSITION_DURATION, delay: TRANSITION_DURATION }}
		out:fade={{ duration: TRANSITION_DURATION }}
	>
		<slot />
	</div>
{/key}

<style lang="scss">
</style>
