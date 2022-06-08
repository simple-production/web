<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = () => {
		return {
			stuff: {
				title: 'About'
			}
		};
	};
</script>

<script lang="ts">
	// export let prop: string = '';
</script>

<div class="about">Replace with your HTML</div>

<style lang="scss">
</style>
