<script lang="ts">
	import { page } from '$app/stores';
	import Routes from '@/constants/routes';
	import { socials } from '@/constants/socials';
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

	const closeMenu = () => {
		setTimeout(() => {
			drawer.close();
		}, 300);
	};

	$: if ($drawer) {
		window.scrollTo(0, 0);
	}
</script>

<!-- Menu -->
<div class="gap-8">
	<button
		type="menu"
		class="relative z-[1] block text-3xl transition-all delay-100 duration-500 md:hidden"
		class:text-black={$drawer}
		on:click={drawer.toggle}
	>
		<Icon icon={!$drawer ? FiMenu : FiX} title="Menu" />
	</button>

	<div role="menu" class:translate-x-full={!$drawer} class:translate-x-0={$drawer}>
		{#each routes as { path, label }}
			{@const isActive = path === $page.url.pathname || $page.url.pathname.startsWith(path)}
			<Link class="transition-all" href={path} {isActive} on:click={closeMenu}>
				{label}
			</Link>
		{/each}

		<div class="mt-auto space-y-2 md:hidden">
			<p class="text-sm">Follow us on socials</p>
			<div class="flex items-center gap-4 text-3xl text-gray-800 ">
				{#each socials as { name, url, icon }}
					<Link href={url} label={name}>
						<Icon {icon} title={name} />
					</Link>
				{/each}
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	div[role='menu'] {
		@apply fixed
		inset-0 
		z-0 
		flex 
		flex-col 
		gap-4
		bg-white 
		px-12 
		pt-32 
		pb-12
		text-black 
		transition-all
		duration-700
		md:relative
		md:flex-row;

		@screen md {
			@apply translate-x-0 gap-8 bg-transparent 
			p-0
			text-current 
			transition-none;
		}
	}
</style>
