<script lang="ts">
	import type { Tip } from '@/models/tip';
	import Link from '../link.svelte';
	import FooterBottom from './footer-bottom.svelte';
	import FooterInfo from './footer-info.svelte';
	import FooterLinks from './footer-links.svelte';

	export let tips: Tip[];
</script>

<footer class="pt-32 pb-12 max-w">
	<div class="space-y-12">
		<div class="flex justify-between">
			<FooterInfo />
			<FooterLinks {tips} />
		</div>

		<FooterBottom />
	</div>

	<p class="text-right text-xs mt-2">
		Powered by <Link class="font-semibold" href="https://axel.froborg.com">axel.froborg.com</Link>
	</p>
</footer>

<style lang="scss">
</style>
