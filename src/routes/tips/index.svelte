<script lang="ts" context="module">
	import { tryParseInt } from '@/utils/number.util';

	import TipComponent from '@/components/features/tips/tip-for-list.svelte';
	import Heading from '@/components/typography/heading.svelte';
	import type { PaginatedResponse, Pagination } from '@/models/paginated-response';
	import type { Tip } from '@/models/tip';
	import type { Load } from '@sveltejs/kit';

	export let load: Load = async ({ url, fetch }) => {
		const page = tryParseInt(url.searchParams.get('page'), 1);

		const response: PaginatedResponse<Tip> = await fetch(`/api/tips?page=${page}`)
			.then((res) => res.json())
			.catch(() => []);

		return {
			props: {
				tips: response.data,
				pagination: response.pagination
			},
			stuff: {
				title: 'Simple Tips'
			}
		};
	};
</script>

<script lang="ts">
	export let tips: Tip[];
	export let pagination: Pagination;
</script>

<div class="max-w space-y-24 pt-40">
	<div class="space-y-8">
		<Heading>
			<svelte:fragment slot="black-before">Latest</svelte:fragment>
			<svelte:fragment slot="green">tip</svelte:fragment>
		</Heading>

		<TipComponent {...tips[0]} />
	</div>

	<div class="space-y-8">
		<Heading>
			<svelte:fragment slot="black-before">More</svelte:fragment>
			<svelte:fragment slot="green">tips</svelte:fragment>
		</Heading>
		<div class="grid grid-cols-2 gap-8">
			<TipComponent {...tips[0]} />
			<TipComponent {...tips[0]} />
		</div>
	</div>
</div>

<style lang="scss">
</style>
