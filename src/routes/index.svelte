<script lang="ts" context="module">
	import Hero from '@/components/features/startpage/hero.svelte';
	import Info from '@/components/features/startpage/info.svelte';
	import Partners from '@/components/features/startpage/partners.svelte';
	import TipShowcase from '@/components/features/startpage/tip-showcase.svelte';
	import type {
		HomeResponse,
		HomeResponsePartner,
		HomeResponseTip
	} from '@/models/api/home-response';
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ fetch }) => {
		const { partners, tips }: HomeResponse = await fetch('/api/home').then((res) => res.json());

		return {
			props: {
				partners,
				tips
			},
			stuff: {
				title: 'Home'
			}
		};
	};
</script>

<script lang="ts">
	export let partners: HomeResponsePartner[];
	export let tips: HomeResponseTip[];
</script>

<div class="space-y-32">
	<Hero />
	<Partners {partners} />
	<Info />
	<TipShowcase {tips} />
</div>

<style lang="scss">
</style>
