<script lang="ts">
	export let href: string | null = null;
	export let isSubmit: boolean = false;
	export let type: 'primary' | 'secondary' = 'primary';
</script>

{#if href}
	<a {href} class="inline-block {type}">
		<slot />
	</a>
{:else}
	<button class={type} type={isSubmit ? 'submit' : 'button'} on:click>
		<slot />
	</button>
{/if}

<style lang="scss">
	@function boxShadow($shadows: 5) {
		$box-shadow: null;

		@for $i from 1 through $shadows * 2 {
			$box-shadow: $box-shadow, #{$i * 0.5}px #{$i * 0.5}px 0 0 var(--shadow-color);
		}

		@return $box-shadow;
	}
	button,
	a {
		--text-color: theme('colors.black');
		--bg-color: theme('colors.gray.200');
		--shadow-color: theme('colors.gray.400');
		--translate: 0, 0;

		--box-shadow: #{boxShadow()};

		color: var(--text-color);
		background-color: var(--bg-color);
		transform: translate3d(var(--translate), 0);

		box-shadow: var(--box-shadow);

		@apply relative px-8 py-3 font-semibold transition-all;

		&:hover {
			--box-shadow: #{boxShadow(3)};
			--translate: 3px, 3px;
		}

		&:focus,
		&:active {
			--box-shadow: none;
			--translate: 5px, 5px;
			outline: none;
		}

		&.primary {
			--text-color: theme('colors.white');
			--bg-color: theme('colors.simple.light');
			--shadow-color: theme('colors.simple.dark');
		}
	}
</style>
