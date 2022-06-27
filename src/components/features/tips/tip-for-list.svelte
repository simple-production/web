<script lang="ts">
	import Icon from '@/components/icons/icon.svelte';
	import Link from '@/components/layout/link.svelte';
	import Visual from '@/components/layout/visual.svelte';
	import Routes from '@/constants/routes';
	import type { Tip } from '@/models/tip';
	import AiFillHeart from 'svelte-icons-pack/ai/AiFillHeart';
	import AiOutlineHeart from 'svelte-icons-pack/ai/AiOutlineHeart';

	export let title: string;
	export let slug: string;
	export let coverImage: Tip['coverImage'];
	export let isLiked: boolean;

	const handleLike = async () => {
		fetch(`/api/tips/${slug}/like`, {
			method: 'PUT'
		});
		isLiked = !isLiked;
	};

	$: href = Routes.tip(slug);
</script>

<Link {href} class="group block space-y-4">
	<div class="max-h-[60vh] overflow-hidden rounded-sm">
		<Visual
			{...coverImage}
			alt={title}
			class="h-full w-full object-cover object-center transition-all duration-500 group-hover:scale-[1.05]"
			autoplay
			loop
		/>
	</div>

	<div class="flex items-center justify-between">
		<h3 class="text-lg">{title}</h3>

		<button class="text-2xl" on:click|preventDefault={handleLike} class:text-red-400={isLiked}>
			<Icon icon={isLiked ? AiFillHeart : AiOutlineHeart} title="Like" />
		</button>
	</div>
</Link>

<style lang="scss">
</style>
