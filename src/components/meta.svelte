<script lang="ts">
	import { page } from '$app/stores';
	const DEFAULT_DESCRIPTION =
		'Simple Production is a collection of creative individuals that love creating content. With focus on ROI for our customers we always try to challenge our clients to step out the comfort zone and create content that actually makes an impact. We like to grow with our customers, which means that your success is our success.';
</script>

<svelte:head>
	<title>{$page.stuff.title ?? 'Titel saknas'} - Simple Production</title>
	<meta name="description" content={$page.stuff.description ?? DEFAULT_DESCRIPTION} />
</svelte:head>
