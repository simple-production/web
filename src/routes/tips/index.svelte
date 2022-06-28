<script lang="ts" context="module">
	import { tryParseInt } from '@/utils/number.util';

	import TipForList from '@/components/features/tips/tip-for-list.svelte';
	import Heading from '@/components/typography/heading.svelte';
	import type { TipsResponse } from '@/models/api/tips-response';
	import type { Load } from '@sveltejs/kit';

	export let load: Load = async ({ url, fetch }) => {
		const page = tryParseInt(url.searchParams.get('page'), 1);

		const response: TipsResponse = await fetch(`/api/tips?page=${page}`)
			.then((res) => res.json())
			.catch(() => []);

		return {
			props: {
				tips: response
			},
			stuff: {
				title: 'Simple Tips'
			}
		};
	};
</script>

<script lang="ts">
	export let tips: TipsResponse;

	$: restOfTips = tips.length ? tips.slice(1) : [];
</script>

<div class="space-y-24">
	<div class="space-y-8">
		<Heading>
			<svelte:fragment slot="black-before">Latest</svelte:fragment>
			<svelte:fragment slot="green">tip</svelte:fragment>
		</Heading>

		{#if tips.length}
			<TipForList {...tips[0]} />
		{/if}
	</div>

	{#if restOfTips.length}
		<div class="space-y-8">
			<Heading>
				<svelte:fragment slot="black-before">More</svelte:fragment>
				<svelte:fragment slot="green">tips</svelte:fragment>
			</Heading>
			<div class="grid grid-cols-2 gap-8">
				{#each restOfTips as tip}
					<TipForList {...tip} />
				{/each}
			</div>
		</div>
	{/if}
</div>

<style lang="scss">
</style>
