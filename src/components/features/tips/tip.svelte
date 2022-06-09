<script lang="ts">
	import { page } from '$app/stores';
	import Icon from '@/components/icons/icon.svelte';
	import Visual from '@/components/layout/visual.svelte';
	import type { Tip } from '@/models/tip';
	import type { User } from '@/models/user';
	import { toDate } from '@/utils/date.util';
	import { onMount } from 'svelte';
	import AiFillHeart from 'svelte-icons-pack/ai/AiFillHeart';
	import AiOutlineHeart from 'svelte-icons-pack/ai/AiOutlineHeart';
	import AiShare from 'svelte-icons-pack/ai/AiOutlineShareAlt';

	export let title: string;
	export let slug: string;
	export let coverImage: Tip['coverImage'];
	export let content: Tip['content'];
	export let likes: number;
	export let createdBy: User;
	export let updatedAt: string;
	export let isLiked: boolean;

	let hasNavigator = false;

	onMount(() => {
		hasNavigator = typeof navigator !== 'undefined' && !!navigator.share;
	});

	const handleShare = () => {
		if (hasNavigator) {
			navigator.share({
				title: `${$page.stuff.title}`,
				text: 'Check out this really cool tip from Simple Production!',
				url: $page.url.href
			});
		}
	};

	const handleLike = () => {
		fetch(`/api/tips/${slug}/like`, {
			method: 'PUT'
		});

		isLiked = !isLiked;

		if (isLiked) {
			likes++;
		} else {
			likes--;
		}
	};
</script>

<div class="space-y-8">
	<div class="flex justify-between items-start">
		<div>
			<h3 class="text-2xl">{title}</h3>
			<div class="text-sm flex gap-2">
				<span>{toDate(updatedAt)}</span>

				<span>•</span>

				<span>{createdBy.name}</span>
			</div>
		</div>

		<div class="flex gap-4 text-2xl">
			{#if hasNavigator}
				<button type="button" on:click={handleShare}>
					<Icon icon={AiShare} title="Share" />
				</button>
			{/if}

			<div class="flex items-center gap-2">
				{#if likes > 0}
					<span class="text-sm">{likes}</span>
				{/if}

				<button class="" class:text-red-400={isLiked} on:click={handleLike}>
					<Icon icon={isLiked ? AiFillHeart : AiOutlineHeart} title="Like" />
				</button>
			</div>
		</div>
	</div>

	<Visual
		{...coverImage}
		alt={title}
		class="max-h-[50vh] w-full object-cover object-center rounded-sm"
		loop
		autoplay
	/>

	<div class="wysiwyg">
		{@html content.html}
	</div>
</div>

<style lang="scss">
</style>
