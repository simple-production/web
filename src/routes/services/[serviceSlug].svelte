<script lang="ts" context="module">
	import { goto } from '$app/navigation';
	import ServiceImagesList from '@/components/features/services/service-images-list.svelte';
	import Icon from '@/components/icons/icon.svelte';
	import Link from '@/components/layout/link.svelte';
	import Heading from '@/components/typography/heading.svelte';
	import Routes from '@/constants/routes';
	import type { Service } from '@/models/service';
	import { tryParseInt } from '@/utils/number.util';
	import type { Load } from '@sveltejs/kit';
	import FiChevronLeft from 'svelte-icons-pack/fi/FiChevronLeft';

	export const load: Load = async ({ params, fetch, url }) => {
		const { serviceSlug } = params;
		const imagesPage = tryParseInt(url.searchParams.get('images-page'), 1);

		try {
			const response: Service = await fetch(`/api/services/${serviceSlug}`).then((res) =>
				res.json()
			);

			return {
				props: {
					service: response,
					imagesPage
				},
				stuff: {
					title: response.name,
					description: response.description
				}
			};
		} catch {
			return {
				status: 404,
				error: 'Service not found'
			};
		}
	};
</script>

<script lang="ts">
	export let service: Service;
	export let imagesPage: number;

	const loadMoreImages = (e: CustomEvent<number>) => {
		const { detail } = e;

		goto(`${Routes.service(service.slug)}?images-page=${detail}`, {
			noscroll: true,
			keepfocus: true
		});
	};

	$: firstWord = service.name.split(' ')[0];
	$: rest = service.name.split(' ').slice(1).join(' ');
</script>

<div class="space-y-24 pt-8">
	<div class="space-y-2">
		<Link href={Routes.services} class="group mb-4 flex items-center gap-2 text-sm">
			<span class="block transition-all group-hover:-translate-x-1">
				<Icon icon={FiChevronLeft} title="Back" />
			</span>
			<span>All services</span>
		</Link>

		<Heading>
			<svelte:fragment slot="green">{firstWord}</svelte:fragment>
			<svelte:fragment slot="black-after">{rest.toLowerCase()}</svelte:fragment>
		</Heading>

		<p class="max-w-xl">{service.description}</p>
	</div>

	{#if service.images?.length}
		<ServiceImagesList images={service.images} on:load-more={loadMoreImages} page={imagesPage} />
	{/if}

	{#if service.cases?.length}
		<div class="grid grid-cols-1 md:grid-cols-3">
			<Heading class="col-span-full">
				<svelte:fragment slot="black-before">Cases</svelte:fragment>
			</Heading>
		</div>
	{/if}
</div>

<style lang="scss">
</style>
