<script lang="ts" context="module">
	import ServiceForList from '@/components/features/services/service-for-list.svelte';
	import Heading from '@/components/typography/heading.svelte';
	import type { ServicesResponse } from '@/models/api/services-response';
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ fetch }) => {
		const response: ServicesResponse = await fetch('/api/services')
			.then((res) => res.json())
			.catch(() => []);

		return {
			props: {
				services: response
			},
			stuff: {
				title: 'Services'
			}
		};
	};
</script>

<script lang="ts">
	export let services: ServicesResponse;
</script>

<div class="space-y-24 pt-8">
	<div>
		<Heading>
			<svelte:fragment slot="black-before">What we</svelte:fragment>
			<svelte:fragment slot="green">do</svelte:fragment>
		</Heading>
		<div class="max-w-xl space-y-4">
			<p>
				Our mission is to produce visual content that resonates with viewers, regardless of genre,
				scale or platform. From creating the overall strategy, to organizing and executing the
				shoot, to managing the multifaceted post-production process, we ensure our clients' projects
				are seamless from start to finish.
			</p>
			<p>
				Whether you're starting with a vague idea or a fully-fleshed out concept, Simple Production
				can bring your vision to life. If you have an upcoming project, get in touch today so we can
				work together.
			</p>
		</div>
	</div>

	<div class="flex flex-col gap-24">
		{#each services as service, i}
			<ServiceForList {...service} idx={i} />
		{/each}
	</div>
</div>

<style lang="scss">
</style>
