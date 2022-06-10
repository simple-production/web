<script lang="ts">
	import Icon from '../icons/icon.svelte';

	export let value: string;
	export let label: string | null = null;
	export let name: string;
	export let isMultiline: boolean = false;
	export let icon: unknown = null;
	export let isRequired: boolean | null = null;

	const classes =
		'px-4 py-4 w-full bg-white/20 rounded-sm outline-none border-2 transition-all border-white/20 focus:border-white/60';
</script>

<div class="group relative mt-4 {$$props.class}">
	{#if label}
		<span
			class="label-wrapper pointer-events-none absolute top-5 left-4 flex items-center gap-2 text-sm font-medium transition-all duration-300"
			class:has-value={value.length > 0}
		>
			{#if icon}
				<Icon {icon} title={label} />
			{/if}
			<label for={name} required={isRequired}>{label}</label>
		</span>
	{/if}

	{#if !isMultiline}
		<input {name} type="text" bind:value on:change class={classes} />
	{:else}
		<textarea {name} bind:value on:change rows="3" class="{classes} resize-none" />
	{/if}

	{#if isRequired != null && !value.length}
		<span class="absolute right-4 top-[22px] text-[0.7em] text-white/70"
			>{isRequired ? 'required' : 'optional'}</span
		>
	{/if}
</div>

<style lang="scss">
	div:focus-within .label-wrapper,
	.label-wrapper.has-value {
		@apply -top-6 left-0;
	}
</style>
