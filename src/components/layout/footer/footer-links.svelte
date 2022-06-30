<script lang="ts">
	import Routes from '@/constants/routes';
	import type { LayoutResponseService, LayoutResponseTip } from '@/models/api/layout-response';
	import type { Route } from '@/models/route';
	import FooterLinkGroup from './footer-link-group.svelte';

	export let tips: LayoutResponseTip[];
	export let services: LayoutResponseService[];

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

<div class="hidden gap-12 pr-12 md:flex">
	<FooterLinkGroup
		title={{ label: 'Services', path: Routes.services }}
		links={services.map((s) => ({ label: s.name, path: Routes.service(s.slug) }))}
	/>
	<FooterLinkGroup
		title={{ label: 'Simple Tips', path: Routes.tips }}
		links={tips.map((t) => ({ label: t.title, path: Routes.tip(t.slug) }))}
	/>
	<FooterLinkGroup title="Company" links={companyRoutes} />
</div>

<style lang="scss">
</style>
