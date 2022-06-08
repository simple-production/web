<script lang="ts">
	export let value: string;
	export let label: string | null = null;
	export let name: string;
	export let isMultiline: boolean = false;

	const classes =
		'px-4 py-4 w-full bg-white/20 rounded-sm outline-none border-2 transition-all border-white/30 focus:border-white/60';
</script>

<div class="relative group mt-4 {$$props.class}">
	{#if label}
		<label
			class="absolute text-sm font-medium duration-300 top-[18px] left-4 transition-all group-focus-within:-top-6 group-focus-within:left-0"
			for={name}>{label}</label
		>
	{/if}

	{#if !isMultiline}
		<input {name} type="text" bind:value on:change class={classes} />
	{:else}
		<textarea {name} bind:value on:change rows="3" class="{classes} resize-none" />
	{/if}
</div>

<style lang="scss">
</style>
