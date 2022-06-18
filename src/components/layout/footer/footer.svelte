<script lang="ts">
import type { Service } from '@/models/service';
import type { Tip } from '@/models/tip';
import Link from '../link.svelte';
import FooterBottom from './footer-bottom.svelte';
import FooterInfo from './footer-info.svelte';
import FooterLinks from './footer-links.svelte';

	export let tips: Tip[];
	export let services: Service[];
</script>

<footer class="max-w pt-32 pb-12">
	<div class="space-y-12">
		<div class="flex justify-between">
			<FooterInfo />
			<FooterLinks {tips} {services} />
		</div>

		<FooterBottom />
	</div>

	<p class="mt-2 text-right text-xs">
		Powered by <Link class="font-semibold" href="https://axel.froborg.com">axel.froborg.com</Link>
	</p>
</footer>

<style lang="scss">
</style>
