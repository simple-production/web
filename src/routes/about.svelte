<script lang="ts" context="module">
	import Button from '@/components/forms/button.svelte';
	import Heading from '@/components/typography/heading.svelte';
	import Routes from '@/constants/routes';
	import type { Load } from '@sveltejs/kit';

	export const load: Load = () => {
		return {
			stuff: {
				title: 'About'
			}
		};
	};
</script>

<script lang="ts">
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
		<div class="relative bg-simple-light p-8 text-white">
			<img
				src="/person.webp"
				alt="Photographer"
				class="absolute right-0 top-[-50%] hidden h-[512px] md:block xl:h-[640px]"
			/>
			<Heading>
				<svelte:fragment slot="black-before">Who we are</svelte:fragment>
			</Heading>

			<div class="mt-2 max-w-md space-y-4">
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo exercitationem repellat
					blanditiis nisi veniam dolore, accusantium unde eveniet! Mollitia vel eligendi dicta optio
					quos praesentium fuga, dolor repellendus doloribus officiis facilis commodi libero eveniet
					quisquam necessitatibus, eum quod eaque repellat iure consectetur delectus ex. Quis facere
					quam hic saepe laboriosam!
				</p>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio ab eveniet
					consequatur nisi rerum eos porro ipsa, fuga repellat neque nobis soluta culpa dolores a
					suscipit, laborum corrupti excepturi nihil.
				</p>
			</div>
		</div>

		<div class="max-w-md space-y-4 px-8 md:px-0">
			<Heading>
				<svelte:fragment slot="green">Our</svelte:fragment>
				<svelte:fragment slot="black-after">Mission</svelte:fragment>
			</Heading>
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
