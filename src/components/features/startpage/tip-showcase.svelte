<script lang="ts">
	// export let prop: string = '';

	import Button from '@/components/forms/button.svelte';
	import Placeholder from '@/components/layout/placeholder.svelte';
	import Routes from '@/constants/routes';
</script>

<div>
	<div class="h-[460px] grid grid-cols-1 gap-4 max-w md:grid-cols-2">
		<Placeholder />
		<Placeholder />
	</div>

	<div class="text-center mt-8">
		<Button href={Routes.tips}>Check out all tips</Button>
	</div>
</div>

<style lang="scss">
</style>
