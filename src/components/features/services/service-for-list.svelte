<script lang="ts">
	import Button from '@/components/forms/button.svelte';
	import Visual from '@/components/layout/visual.svelte';
	import Routes from '@/constants/routes';
	import type { DirectusFile } from '@/models/cms/file';

	export let name: string;
	export let slug: string;
	export let description: string;
	export let coverImage: DirectusFile;
	export let idx: number;
</script>

<div
	class="flex flex-col gap-8 md:flex-row md:items-center"
	class:md:flex-row-reverse={idx % 2 === 0}
>
	<Visual
		url={Routes.asset(coverImage.id, { width: 1200 })}
		mimeType={coverImage.type}
		alt={name}
		class="max-h-[35vh] flex-1 object-cover"
	/>

	<div class="flex flex-1 flex-col gap-2 md:gap-4">
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
