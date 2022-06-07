<script lang="ts">
	import { page } from '$app/stores';
	import Footer from '@/components/layout/footer/footer.svelte';
	import Navbar from '@/components/layout/navbar.svelte';
	import Meta from '@/components/meta.svelte';
	import '@/styles/main.scss';

	$: isRoot = $page.url.pathname === '/';
</script>

<Meta />

<Navbar {isRoot} />

<main class:mt-40={!isRoot}>
	<slot />
</main>

<Footer />

<style lang="scss">
</style>
