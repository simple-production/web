<script lang="ts" context="module">
	import TipComponent from '@/components/features/tips/tip.svelte';
	import type { Tip } from '@/models/tip';
	import type { Load } from '@sveltejs/kit';

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

<TipComponent {...tip} />

<style lang="scss">
</style>
