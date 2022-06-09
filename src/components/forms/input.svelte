<script lang="ts">
	import Icon from '../icons/icon.svelte';

	export let value: string;
	export let label: string | null = null;
	export let name: string;
	export let isMultiline: boolean = false;
	export let icon: unknown = null;
	export let isRequired: boolean | null = null;

	const classes =
		'px-4 py-4 w-full bg-white/20 rounded-sm outline-none border-2 transition-all border-white/30 focus:border-white/60';
</script>

<div class="relative group mt-4 {$$props.class}">
	{#if label}
		<span
			class="label-wrapper absolute text-sm font-medium duration-300 top-[18px] left-4 transition-all flex items-center gap-2"
			class:has-value={value.length > 0}
		>
			{#if icon}
				<Icon {icon} title={label} />
			{/if}
			<label class="" for={name} required={isRequired}>{label}</label>
		</span>
	{/if}

	{#if !isMultiline}
		<input {name} type="text" bind:value on:change class={classes} />
	{:else}
		<textarea {name} bind:value on:change rows="3" class="{classes} resize-none" />
	{/if}

	{#if isRequired != null && !value.length}
		<span class="absolute right-4 text-xs text-white/70 top-[22px]"
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
