<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	const TEXTS = ['The next generation', 'trends', 'creativity', 'stories', 'the new generation'];
	const TRANSITION_DURATION = 300;

	let currentIndex = 0;

	onMount(() => {
		const timer = setInterval(() => {
			currentIndex = (currentIndex + 1) % TEXTS.length;
		}, 4000);

		return () => {
			clearInterval(timer);
		};
	});

	$: text = TEXTS[currentIndex];
</script>

{#key text}
	<span
		class="absolute inset-x-8 inline-block"
		in:fly={{ y: -50, duration: TRANSITION_DURATION }}
		out:fly={{ y: 50, duration: TRANSITION_DURATION }}
	>
		{text}
	</span>
{/key}

<style lang="scss">
</style>
