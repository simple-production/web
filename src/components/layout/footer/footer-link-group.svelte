<script lang="ts">
	import type { Route } from '@/models/route';
	import Link from '../link.svelte';

	export let title: Route | string;
	export let links: Route[];
</script>

<ul class="text-sm space-y-2">
	<li class="font-medium text-lg">
		{#if typeof title === 'object'}
			<Link href={title.path}>{title.label}</Link>
		{:else}
			{title}
		{/if}
	</li>

	{#each links as { label, path }}
		<li>
			<Link href={path}>{label}</Link>
		</li>
	{/each}
</ul>

<style lang="scss">
</style>
