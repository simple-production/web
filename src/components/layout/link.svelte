<script lang="ts">
	export let href: string;
	export let label: string | null = null;
	export let isActive: boolean | null = null;
</script>

<a
	{href}
	{label}
	class={$$props.class}
	class:with-transition={isActive !== null}
	class:active={isActive}
>
	<slot /></a
>

<style lang="scss">
	a.with-transition {
		&::before {
			content: '';
			@apply w-full scale-x-0 transition-all origin-left duration-1000;
		}

		&.active {
			@apply relative;

			&::before {
				@apply h-0.5 bg-simple-light absolute -bottom-1 scale-x-100;
			}
		}
	}
</style>
