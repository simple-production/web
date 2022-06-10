<script lang="ts">
	export let href: string;
	export let label: string | null = null;
	export let isActive: boolean | null = null;

	$: isExternal = href.startsWith('http');
</script>

<a
	{href}
	{label}
	class={$$props.class}
	class:with-transition={isActive !== null}
	class:active={isActive}
	target={isExternal ? '_blank' : ''}
	on:click
>
	<slot /></a
>

<style lang="scss">
	a.with-transition {
		@screen md {
			&::before {
				content: '';
				@apply w-full origin-left scale-x-0 transition-all duration-1000;
			}

			&.active {
				@apply relative;

				&::before {
					@apply absolute -bottom-1 h-0.5 scale-x-100 bg-simple-light;
				}
			}
		}
	}
</style>
