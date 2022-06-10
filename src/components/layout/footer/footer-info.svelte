<script>
	import Routes from '@/constants/routes';
	import Link from '../link.svelte';
	const simpleGroupUrl = 'https://www.simplegroup.se/';
</script>

<div class="space-y-8">
	<Link href={Routes.home}>
		<img src="/simple.webp" alt="Simple Production Logo" class="h-12" />
	</Link>

	<div class="max-w-sm space-y-2 text-sm">
		<p>
			Simple Production is a video production company focused on helping companies and organizations
			reach a younger audience through video. And with that, make it easy for our clients, no
			complicated deals or hidden fees.
		</p>
		<p>
			By keeping the team light footed, equipment at minimal and always work hard, we can offer high
			quality production at a relatively low cost and fast turnover.
		</p>
		<p>A part of <Link href={simpleGroupUrl} class="font-semibold">Simple Group</Link></p>
	</div>
</div>
