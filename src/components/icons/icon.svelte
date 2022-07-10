<script lang="ts">
	import Icon from 'svelte-icons-pack';

	export let icon: unknown;
	export let title: string;
	export let size: string = '1em';
</script>

<Icon src={icon} {title} color="currentColor" {size} />

<style lang="scss">
</style>
