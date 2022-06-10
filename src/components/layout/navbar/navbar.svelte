<script lang="ts">
	import Routes from '@/constants/routes';
	import type { Route } from '@/models/route';
	import { drawer } from '@/stores/drawer.store';
	import Link from '../link.svelte';
	import NavbarDrawer from './navbar-drawer.svelte';

	const routes: Route[] = [
		{
			path: Routes.services,
			label: 'Services'
		},
		{
			path: Routes.tips,
			label: 'Simple Tips'
		},
		{
			path: Routes.about,
			label: 'About'
		},
		{
			path: Routes.contact,
			label: 'Contact'
		}
	];

	export let isRoot: boolean;

	const closeMenu = () => {
		setTimeout(() => {
			drawer.close();
		}, 300);
	};
</script>

<header
	class="absolute top-0 left-0 right-0 z-[99]"
	class:text-white={isRoot}
	class:bg-gradient-to-b={isRoot}
>
	<div class="max-w flex items-center justify-between py-8">
		<!-- Logo -->
		<Link href={Routes.home} class="group flex items-end gap-2">
			<img
				src="/simple.webp"
				alt="Simple Production Logo"
				class="h-10 transition-all group-hover:-rotate-6"
			/>
			<span class="hidden text-xl font-medium drop-shadow-sm transition-all md:block">
				imple Production
			</span>
		</Link>

		<NavbarDrawer {isRoot} />
	</div>
</header>

<style lang="scss">
</style>
