<script lang="ts" context="module">
	export const load: Load = () => {
		return {
			stuff: {
				title: 'Contact'
			}
		};
	};
</script>

<script lang="ts">
	import Heading from '@/components/typography/heading.svelte';
	import type { Load } from '@sveltejs/kit';
</script>

<Heading class="text-center">
	<svelte:fragment slot="black-before">Get in</svelte:fragment>
	<svelte:fragment slot="green">touch</svelte:fragment>
</Heading>

<style lang="scss">
</style>
