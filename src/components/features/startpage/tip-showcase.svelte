<script lang="ts">
	import Button from '@/components/forms/button.svelte';
	import Link from '@/components/layout/link.svelte';
	import Visual from '@/components/layout/visual.svelte';
	import Routes from '@/constants/routes';
	import type { HomeResponseTip } from '@/models/api/home-response';

	export let tips: HomeResponseTip[];
</script>

<div>
	<div class="max-w grid grid-cols-1 gap-4 md:grid-cols-2">
		{#each tips as tip}
			<Link href={Routes.tip(tip.slug)} class="relative h-[480px] overflow-hidden">
				<Visual
					url={Routes.asset(tip.coverImage.id, { width: 1444 })}
					mimeType={tip.coverImage.type}
					alt={tip.title}
					class="h-full w-full object-cover transition-all hover:scale-[1.02]"
					lazyLoad
					autoplay
					loop
				/>
				<div class="absolute bottom-0 bg-white p-4">
					<p>{tip.title}</p>
				</div>
			</Link>
		{/each}
	</div>

	<div class="mt-8 text-center">
		<Button href={Routes.tips}>Check out all tips</Button>
	</div>
</div>

<style lang="scss">
</style>
