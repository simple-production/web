<script lang="ts">
	import Visual from '@/components/layout/visual.svelte';
	import Heading from '@/components/typography/heading.svelte';
	import Routes from '@/constants/routes';
	import type { HomeResponsePartner } from '@/models/api/home-response';

	export let partners: HomeResponsePartner[];
</script>

<div class="max-w text-center">
	<Heading>
		<svelte:fragment slot="black-before">Some of our</svelte:fragment>
		<svelte:fragment slot="green">partners</svelte:fragment>
	</Heading>

	<div class="mt-12 grid grid-cols-2 gap-16 md:grid-cols-3">
		{#each partners as partner}
			<div class="h-60">
				<Visual
					url={Routes.asset(partner.logo.id, { width: 300 })}
					mimeType={partner.logo.type}
					alt={partner.name}
					class="h-full w-full object-contain p-4"
				/>
			</div>
		{/each}
	</div>
</div>

<style lang="scss">
</style>
