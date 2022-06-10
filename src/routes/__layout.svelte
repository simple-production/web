<script lang="ts" context="module">
	import { page } from '$app/stores';
	import Footer from '@/components/layout/footer/footer.svelte';
	import Loading from '@/components/layout/loading.svelte';
	import Navbar from '@/components/layout/navbar/navbar.svelte';
	import PageTransition from '@/components/layout/page-transition.svelte';
	import Meta from '@/components/meta.svelte';
	import Routes from '@/constants/routes';
	import type { Tip } from '@/models/tip';
	import { drawer } from '@/stores/drawer.store';
	import '@/styles/main.scss';
	import type { Load } from '@sveltejs/kit';
	import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

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

	let ref: HTMLDivElement;

	const updateBodyScrollLock = (drawerOpen: boolean) => {
		if (!ref) {
			return;
		}

		if (drawerOpen) {
			disableBodyScroll(ref);
		} else {
			enableBodyScroll(ref);
		}
	};

	$: updateBodyScrollLock($drawer);
	$: isRoot = $page.url.pathname === Routes.home;
	$: isContact = $page.url.pathname === Routes.contact;
</script>

<Meta />

<Loading />

<div
	class="relative transition-all"
	class:bg-gray-800={isContact}
	class:text-white={isContact}
	bind:this={ref}
>
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
