<script lang="ts" context="module">
	export const load: Load = ({ url }) => {
		return {
			props: {
				key: url.pathname
			}
		};
	};
</script>

<script lang="ts">
	import { page } from '$app/stores';
	import Footer from '@/components/layout/footer/footer.svelte';
	import Navbar from '@/components/layout/navbar.svelte';
	import PageTransition from '@/components/layout/page-transition.svelte';
	import Meta from '@/components/meta.svelte';
	import Routes from '@/constants/routes';
	import '@/styles/main.scss';
	import type { Load } from '@sveltejs/kit';

	export let key: string;

	$: isRoot = $page.url.pathname === Routes.home;
	$: isContact = $page.url.pathname === Routes.contact;
</script>

<Meta />

<div class="transition-all" class:bg-gray-800={isContact} class:text-white={isContact}>
	<Navbar {isRoot} />

	<PageTransition {key}>
		<main>
			<slot />
		</main>
	</PageTransition>

	<Footer />
</div>

<style lang="scss">
</style>
