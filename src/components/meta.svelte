<script lang="ts">
	import { page } from '$app/stores';

	// export let prop: string = '';
</script>

<svelte:head>
	<title>{$page.stuff.title ?? 'Titel saknas'} - Simple Production</title>
	<meta name="description" content={$page.stuff.description ?? ''} />
</svelte:head>
