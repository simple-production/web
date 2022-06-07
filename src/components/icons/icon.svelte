<script lang="ts">
	import Icon from 'svelte-icons-pack';

	export let icon: unknown;
	export let title: string;
</script>

<Icon src={icon} {title} color="currentColor" />

<style lang="scss">
</style>
