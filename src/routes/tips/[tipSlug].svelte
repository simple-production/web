<script lang="ts" context="module">
	import TipComponent from '@/components/features/tips/tip.svelte';
	import Icon from '@/components/icons/icon.svelte';
	import Link from '@/components/layout/link.svelte';
	import Routes from '@/constants/routes';
	import type { Tip } from '@/models/tip';
	import type { Load } from '@sveltejs/kit';
	import FiChevronLeft from 'svelte-icons-pack/fi/FiChevronLeft';

	type Params = {
		tipSlug: string;
	};

	export const load: Load<Params> = async ({ params, fetch }) => {
		const { tipSlug } = params;

		try {
			const tip = await fetch(`/api/tips/${tipSlug}`).then((r) => r.json());

			return {
				props: {
					tip: {
						...tip,
						slug: tipSlug
					}
				},
				stuff: {
					title: tip.title,
					description: tip.content.text
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
	export let tip: Tip;
</script>

<Link href={Routes.tips} class="group mb-4 flex items-center gap-2 text-sm">
	<span class="block transition-all group-hover:-translate-x-1">
		<Icon icon={FiChevronLeft} title="Back" />
	</span>
	<span>All tips</span>
</Link>

<TipComponent {...tip} />

<style lang="scss">
</style>
