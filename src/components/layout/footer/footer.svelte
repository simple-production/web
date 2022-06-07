<script lang="ts">
	import FooterBottom from './footer-bottom.svelte';
	import FooterInfo from './footer-info.svelte';
	import FooterLinks from './footer-links.svelte';
</script>

<footer class="pt-32 pb-12 max-w space-y-12">
	<div class="flex justify-between">
		<FooterInfo />
		<FooterLinks />
	</div>

	<FooterBottom />
</footer>

<style lang="scss">
</style>
