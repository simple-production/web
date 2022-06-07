<script lang="ts">
	export let href: string;
	export let label: string | null = null;
</script>

<a {href} {label} class={$$props.class}> <slot /></a>

<style lang="scss">
</style>
