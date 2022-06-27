<script lang="ts">
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>{$page.stuff.title ?? 'Titel saknas'} - Simple Production</title>
	<meta
		name="description"
		content={$page.stuff.description ??
			'Kreativ och högkvalitativ videoproduktion för dina behov. Vi på Simple Production älskar det vi gör'}
	/>
</svelte:head>
