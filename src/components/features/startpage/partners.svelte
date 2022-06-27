<script lang="ts">
	import Visual from '@/components/layout/visual.svelte';
	import Heading from '@/components/typography/heading.svelte';
	import type { Partner } from '@/models/partner';

	export let partners: Partner[];
</script>

<div class="max-w text-center">
	<Heading>
		<svelte:fragment slot="black-before">Some of our</svelte:fragment>
		<svelte:fragment slot="green">partners</svelte:fragment>
	</Heading>

	<div class="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
		{#each partners as partner}
			<div class="h-60">
				<Visual {...partner.logo} alt={partner.name} class="h-full w-full object-cover p-4" />
			</div>
		{/each}
	</div>
</div>

<style lang="scss">
</style>
