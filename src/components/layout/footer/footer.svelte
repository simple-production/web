<script lang="ts">
	import type { Tip } from '@/models/tip';
	import FooterBottom from './footer-bottom.svelte';
	import FooterInfo from './footer-info.svelte';
	import FooterLinks from './footer-links.svelte';

	export let tips: Tip[];
</script>

<footer class="pt-32 pb-12 max-w space-y-12">
	<div class="flex justify-between">
		<FooterInfo />
		<FooterLinks {tips} />
	</div>

	<FooterBottom />
</footer>

<style lang="scss">
</style>
