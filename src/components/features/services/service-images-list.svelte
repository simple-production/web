<script lang="ts">
	import Button from '@/components/forms/button.svelte';
	import Visual from '@/components/layout/visual.svelte';
	import Heading from '@/components/typography/heading.svelte';
	import Routes from '@/constants/routes';
	import type { DirectusFile } from '@/models/cms/file';
	import { createEventDispatcher } from 'svelte';
	import ImageCarousel from '../images/image-carousel.svelte';

	const PER_PAGE = 9;

	export let images: DirectusFile[];
	export let page: number;

	const dispatch = createEventDispatcher();

	let currentImage = -1;

	const onPageChange = (page: number) => () => {
		dispatch('load-more', page);
	};

	const setCurrentIndex = (i: number) => () => {
		currentImage = i;
	};

	$: imagesShown = PER_PAGE * page;
</script>

<div class="grid grid-cols-1 gap-2 md:grid-cols-3">
	<Heading class="col-span-full mb-4">
		<svelte:fragment slot="black-before">Images</svelte:fragment>
	</Heading>

	{#each images.slice(0, imagesShown) as { type, id }, i}
		<button on:click={setCurrentIndex(i)} class="overflow-hidden">
			<Visual
				url={Routes.asset(id)}
				mimeType={type}
				alt="Image {i}"
				class="h-full w-full object-cover transition-all hover:scale-[1.02] hover:saturate-150"
			/>
		</button>
	{/each}

	{#if imagesShown < images.length}
		<div class="col-span-full mx-auto mt-2">
			<Button on:click={onPageChange(page + 1)}>Load more</Button>
		</div>
	{/if}
</div>

{#if currentImage > -1}
	<ImageCarousel {images} bind:currentImage />
{/if}

<style lang="scss">
</style>
