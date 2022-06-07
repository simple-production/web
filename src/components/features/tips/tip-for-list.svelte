<script lang="ts">
	import Icon from '@/components/icons/icon.svelte';
	import Link from '@/components/layout/link.svelte';
	import Routes from '@/constants/routes';
	import AiFillHeart from 'svelte-icons-pack/ai/AiFillHeart';
	import AiOutlineHeart from 'svelte-icons-pack/ai/AiOutlineHeart';

	export let title: string;
	export let slug: string;
	export let coverImage: string;

	let isLiked = false;

	const handleLike = () => {
		isLiked = !isLiked;
	};

	$: href = Routes.tip(slug);
</script>

<Link {href} class="block space-y-4 group">
	<div class="overflow-hidden max-h-[60vh] rounded-sm">
		<img
			src={coverImage}
			alt={title}
			class="w-full h-full object-center object-cover group-hover:scale-[1.01] transition-all duration-500"
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
