<script lang="ts" context="module">
	export const load: Load = () => {
		return {
			stuff: {
				title: 'Home'
			}
		};
	};
</script>

<script lang="ts">
	import Hero from '@/components/features/startpage/hero.svelte';
	import Info from '@/components/features/startpage/info.svelte';
	import Partners from '@/components/features/startpage/partners.svelte';
	import TipShowcase from '@/components/features/startpage/tip-showcase.svelte';
	import type { Load } from '@sveltejs/kit';
</script>

<div class="space-y-32">
	<Hero />
	<Partners />
	<Info />
	<TipShowcase />
</div>

<style lang="scss">
</style>
