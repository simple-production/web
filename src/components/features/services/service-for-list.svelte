<script lang="ts">
	import Button from '@/components/forms/button.svelte';
	import Visual from '@/components/layout/visual.svelte';
	import Routes from '@/constants/routes';
	import type { CMSImage } from '@/models/cms-image';
				
	export let name: string;
	export let slug: string;
	export let description: string;
	export let coverImage: CMSImage;
	export let idx: number;
</script>

<div class="flex flex-col items-center gap-8 md:flex-row" class:md:flex-row-reverse={idx % 2 === 0}>
	<Visual {...coverImage} alt={name} class="max-h-[35vh] flex-1 object-cover" />

	<div class="flex flex-1 flex-col gap-4">
		<h2 class="text-2xl font-bold">
			{name}
		</h2>

		<p class="wysiwyg">
			{@html description}
		</p>

		<div>
			<Button href={Routes.service(slug)}>Check out {name.toLowerCase()}</Button>
		</div>
	</div>
</div>

<style lang="scss">
</style>
