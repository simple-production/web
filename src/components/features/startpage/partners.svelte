<script lang="ts">
	// export let prop: string = '';

	import Placeholder from '@/components/layout/placeholder.svelte';
	import Heading from '@/components/typography/heading.svelte';
</script>

<div class="max-w text-center">
	<Heading>
		<svelte:fragment slot="black-before">Some of our</svelte:fragment>
		<svelte:fragment slot="green">partners</svelte:fragment>
	</Heading>

	<div class="grid grid-cols-2 h-60 gap-8 mt-24 md:grid-cols-4">
		<Placeholder />
		<Placeholder />
		<Placeholder />
		<Placeholder />
	</div>
</div>

<style lang="scss">
</style>
