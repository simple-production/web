<script lang="ts" context="module">
	import type { Service } from '@/models/service';

	import ServiceForList from '@/components/features/services/service-for-list.svelte';
	import Heading from '@/components/typography/heading.svelte';
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ fetch }) => {
		const response: Service[] = await fetch('/api/services')
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
	export let services: Service[];
</script>

<div class="space-y-24 pt-12">
	<div>
		<Heading>
			<svelte:fragment slot="black-before">What we</svelte:fragment>
			<svelte:fragment slot="green">do</svelte:fragment>
		</Heading>
		<p class="max-w-md">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint consequatur soluta, recusandae
			atque eveniet necessitatibus minus? Cupiditate
		</p>
	</div>

	<div class="flex flex-col gap-24">
		{#each services as service, i}
			<ServiceForList {...service} idx={i} />
		{/each}
	</div>
</div>

<style lang="scss">
</style>
