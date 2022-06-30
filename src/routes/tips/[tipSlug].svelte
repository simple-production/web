<script lang="ts" context="module">
	import TipComponent from '@/components/features/tips/tip.svelte';
	import Icon from '@/components/icons/icon.svelte';
	import Link from '@/components/layout/link.svelte';
	import Routes from '@/constants/routes';
	import type { TipResponse } from '@/models/api/tips-response';
	import type { Load } from '@sveltejs/kit';
	import FiChevronLeft from 'svelte-icons-pack/fi/FiChevronLeft';

	type Params = {
		tipSlug: string;
	};

	export const load: Load<Params> = async ({ params, fetch }) => {
		const { tipSlug } = params;

		try {
			const tip: TipResponse = await fetch(`/api/tips/${tipSlug}`).then((r) => r.json());

			return {
				props: {
					tip: {
						...tip,
						slug: tipSlug
					}
				},
				stuff: {
					title: tip.title,
					description: tip.body
				}
			};
		} catch {
			return {
				status: 404,
				error: 'Tip not found'
			};
		}
	};
</script>

<script lang="ts">
	export let tip: TipResponse;
</script>

<Link href={Routes.tips} class="group mb-4 flex items-center gap-2 text-sm">
	<span class="block transition-all group-hover:-translate-x-1">
		<Icon icon={FiChevronLeft} title="Back" />
	</span>
	<span>All tips</span>
</Link>

<TipComponent {...tip} createdBy={tip.user_created} updatedAt={tip.date_created} />

<style lang="scss">
</style>
