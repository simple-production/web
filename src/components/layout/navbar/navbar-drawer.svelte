<script lang="ts">
	import { page } from '$app/stores';
	import Routes from '@/constants/routes';
	import type { Route } from '@/models/route';
	import { drawer } from '@/stores/drawer.store';
	import FiMenu from 'svelte-icons-pack/fi/FiMenu';
	import FiX from 'svelte-icons-pack/fi/FiX';
	import Icon from '../../icons/icon.svelte';
	import Link from '../link.svelte';

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

<!-- Menu -->
<div class="gap-8">
	<button type="menu" class="relative z-[1] block text-3xl md:hidden" on:click={drawer.toggle}>
		<Icon icon={!$drawer ? FiMenu : FiX} title="Menu" />
	</button>

	<div role="menu" class="" class:translate-x-full={!$drawer} class:translate-x-0={$drawer}>
		{#each routes as { path, label }}
			{@const isActive = path === $page.url.pathname || $page.url.pathname.startsWith(path)}
			<Link class="drop-shadow-md transition-all" href={path} {isActive} on:click={closeMenu}>
				{label}
			</Link>
		{/each}
	</div>
</div>

<style lang="scss">
	div[role='menu'] {
		@apply fixed 
		inset-0 
		z-0 
		flex 
		flex-col 
		gap-8 
		bg-simple-light 
		px-12 
		pt-32 
		text-xl 
		transition-all 
		md:relative 
		md:flex-row;
		@screen md {
			@apply translate-x-0 bg-transparent 
			p-0 
			text-base 
			transition-none;
		}
	}
</style>
