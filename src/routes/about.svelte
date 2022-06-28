<script lang="ts" context="module">
	import Button from '@/components/forms/button.svelte';
	import Heading from '@/components/typography/heading.svelte';
	import Routes from '@/constants/routes';
	import type { AboutResponse } from '@/models/api/about-response';
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ fetch }) => {
		const res: AboutResponse = await fetch('/api/about').then((res) => res.json());

		return {
			props: res,
			stuff: {
				title: 'About'
			}
		};
	};
</script>

<script lang="ts">
	export let whoWeAre: string;
	export let ourMission: string;
</script>

<div>
	<div class="flex h-[70vh] items-center justify-center">
		<h1 class="text-7xl font-bold md:text-9xl">
			Creative and
			<br />
			<span class="text-simple-light">Simple</span>
		</h1>
	</div>

	<div class="space-y-24">
		<div class="bg-simple-light relative p-12 text-white">
			<img
				src="/person.webp"
				alt="Photographer"
				class="absolute right-0 top-[-80%] hidden h-[512px] md:block xl:h-[640px]"
			/>
			<Heading>
				<svelte:fragment slot="black-before">Who we are</svelte:fragment>
			</Heading>

			<div class="wysiwyg mt-2 max-w-md space-y-4">
				{@html whoWeAre}
			</div>
		</div>

		<div class="max-w-md space-y-4 px-8 md:px-0">
			<Heading>
				<svelte:fragment slot="green">Our</svelte:fragment>
				<svelte:fragment slot="black-after">Mission</svelte:fragment>
			</Heading>
			<div class="wysiwyg">
				{@html ourMission}
			</div>
		</div>

		<div class="flex flex-col items-center justify-center gap-4 bg-gray-100 p-12">
			<Heading>
				<svelte:fragment slot="black-before">Sounds</svelte:fragment>
				<svelte:fragment slot="green">cool?</svelte:fragment>
			</Heading>

			<Button href={Routes.contact}>Get in touch</Button>
		</div>
	</div>
</div>

<style lang="scss">
</style>
