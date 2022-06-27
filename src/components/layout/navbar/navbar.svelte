<script lang="ts">
import SimpleIcon from '@/components/icons/simple-icon.svelte';
import Routes from '@/constants/routes';
import { drawer } from '@/stores/drawer.store';
import Link from '../link.svelte';
import NavbarDrawer from './navbar-drawer.svelte';

	export let isRoot: boolean;

	const closeMenu = () => {
		setTimeout(() => {
			drawer.close();
		}, 300);
	};
</script>

<header class="absolute top-0 left-0 right-0 z-[99]" class:text-white={isRoot}>
	<div class="max-w flex items-center justify-between py-8">
		<Link href={Routes.home} class="group z-[10] flex items-end gap-2">
			<div class="w-8 transition-all group-hover:-rotate-6">
				<SimpleIcon />
			</div>
			<span class="hidden text-xl font-medium drop-shadow-sm transition-all md:block">
				imple Production
			</span>
		</Link>

		<NavbarDrawer />
	</div>
</header>

<style lang="scss">
</style>
