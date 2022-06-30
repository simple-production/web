<script lang="ts" context="module">
	import { page } from '$app/stores';
	import Footer from '@/components/layout/footer/footer.svelte';
	import Loading from '@/components/layout/loading.svelte';
	import Navbar from '@/components/layout/navbar/navbar.svelte';
	import PageTransition from '@/components/layout/page-transition.svelte';
	import Meta from '@/components/meta.svelte';
	import Routes from '@/constants/routes';
	import type {
		LayoutResponse,
		LayoutResponseService,
		LayoutResponseTip
	} from '@/models/api/layout-response';
	import { bodyScroll } from '@/stores/bodyscroll.store';
	import { drawer } from '@/stores/drawer.store';
	import '@/styles/main.scss';
	import type { Load } from '@sveltejs/kit';
	import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

	export const load: Load = async ({ url, fetch }) => {
		const { tips, services }: LayoutResponse = await fetch('/api/layout').then((res) => res.json());

		return {
			props: {
				tips,
				services,
				key: url.pathname
			}
		};
	};
</script>

<script lang="ts">
	export let key: string;
	export let tips: LayoutResponseTip[];
	export let services: LayoutResponseService[];

	let ref: HTMLDivElement;

	const updateBodyScrollLock = (allowBodyScroll: boolean) => {
		if (!ref) {
			return;
		}

		if (!allowBodyScroll) {
			disableBodyScroll(ref);
		} else {
			enableBodyScroll(ref);
		}
	};

	$: $bodyScroll = !$drawer;
	$: updateBodyScrollLock($bodyScroll);
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

	<Footer {tips} {services} />
</div>

<div data-modal />

<style lang="scss">
</style>
