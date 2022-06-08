<script lang="ts">
	import { page } from '$app/stores';
	import Routes from '@/constants/routes';
	import type { Route } from '@/models/route';
	import { drawer } from '@/stores/drawer.store';
	import FiMenu from 'svelte-icons-pack/fi/FiMenu';
	import FiX from 'svelte-icons-pack/fi/FiX';
	import Icon from '../icons/icon.svelte';
	import Link from './link.svelte';

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
</script>

<header
	class="absolute top-0 left-0 right-0 z-[99]"
	class:text-white={isRoot}
	class:bg-gradient-to-b={isRoot}
>
	<div class="max-w flex items-center justify-between py-8">
		<Link href={Routes.home} class="flex items-end gap-2">
			<img src="/simple.webp" alt="Simple Production Logo" class="h-16" />
			<span class="hidden text-xl font-medium pb-2 drop-shadow-sm transition-all md:block">
				imple Production
			</span>
		</Link>

		<div class="gap-8">
			<button type="menu" class="block text-3xl z-[1] md:hidden relative" on:click={drawer.toggle}>
				<Icon icon={!$drawer ? FiMenu : FiX} title="Menu" />
			</button>

			<div
				class="flex fixed inset-0 bg-simple-light flex-col gap-8 pt-32 text-2xl px-12 md:flex-row md:relative z-0 transition-all md:transition-none md:bg-transparent md:translate-x-0 md:!p-0 md:text-base"
				class:translate-x-full={!$drawer}
				classtranslate-x-0={$drawer}
			>
				{#each routes as { path, label }}
					{@const isActive = path === $page.url.pathname || $page.url.pathname.startsWith(path)}
					<Link class="drop-shadow-sm transition-all" href={path} {isActive}>{label}</Link>
				{/each}
			</div>
		</div>
	</div>
</header>

<style lang="scss">
</style>
