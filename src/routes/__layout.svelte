<script lang="ts" context="module">
	import { page } from '$app/stores';
	import Footer from '@/components/layout/footer/footer.svelte';
	import Loading from '@/components/layout/loading.svelte';
	import Navbar from '@/components/layout/navbar.svelte';
	import PageTransition from '@/components/layout/page-transition.svelte';
	import Meta from '@/components/meta.svelte';
	import Routes from '@/constants/routes';
	import type { Tip } from '@/models/tip';
	import '@/styles/main.scss';
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ url, fetch }) => {
		const tips = await fetch('/api/tips?take=3').then((res) => res.json());

		return {
			props: {
				tips: tips.data,
				key: url.pathname
			}
		};
	};
</script>

<script lang="ts">
	export let key: string;
	export let tips: Tip[];

	$: isRoot = $page.url.pathname === Routes.home;
	$: isContact = $page.url.pathname === Routes.contact;
</script>

<Meta />

<Loading />

<div class="transition-all relative" class:bg-gray-800={isContact} class:text-white={isContact}>
	<Navbar {isRoot} />

	<PageTransition {key}>
		<main class="min-h-screen" class:pt-28={!isRoot} class:max-w={!isRoot}>
			<slot />
		</main>
	</PageTransition>

	<Footer {tips} />
</div>

<style lang="scss">
</style>
