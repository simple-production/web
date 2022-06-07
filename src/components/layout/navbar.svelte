<script lang="ts">
	import Routes from '@/constants/routes';
	import type { Route } from '@/models/route';
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

		<div class="hidden gap-8 md:flex">
			{#each routes as { path, label }}
				<Link class="drop-shadow-sm transition-all font-medium" href={path}>{label}</Link>
			{/each}
		</div>
	</div>
</header>

<style lang="scss">
</style>
