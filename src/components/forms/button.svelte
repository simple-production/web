<script lang="ts">
	export let href: string | null = null;
	export let isSubmit: boolean = false;

	const classNames = 'bg-simple-light text-white px-8 py-3 rounded-sm font-semibold';
</script>

{#if href}
	<a {href} class="inline-block {classNames}">
		<slot />
	</a>
{:else}
	<button class={classNames} type={isSubmit ? 'submit' : 'button'}>
		<slot />
	</button>
{/if}

<style lang="scss">
</style>
