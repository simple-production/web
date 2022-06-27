<script lang="ts">
	import Routes from '@/constants/routes';
	import type { Route } from '@/models/route';
	import type { Service } from '@/models/service';
	import type { Tip } from '@/models/tip';
	import FooterLinkGroup from './footer-link-group.svelte';

	export let tips: Tip[];
	export let services: Service[];

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
