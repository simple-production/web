<script lang="ts">
	import Routes from '@/constants/routes';
	import type { Route } from '@/models/route';
	import FooterLinkGroup from './footer-link-group.svelte';

	const companyRoutes: Route[] = [
		{
			label: 'About us',
			path: Routes.about
		},
		{
			label: 'Contact',
			path: Routes.contact
		}
	];
</script>

<div class="gap-12 pr-12 hidden md:flex">
	<FooterLinkGroup title={{ label: 'Services', path: Routes.services }} links={companyRoutes} />
	<FooterLinkGroup title={{ label: 'Simple Tips', path: Routes.tips }} links={companyRoutes} />
	<FooterLinkGroup title="Company" links={companyRoutes} />
</div>

<style lang="scss">
</style>
