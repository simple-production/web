<script lang="ts">
	import { page } from '$app/stores';
	import Icon from '@/components/icons/icon.svelte';
	import type { Tip } from '@/models/tip';
	import type { User } from '@/models/user';
	import { toDate } from '@/utils/date.util';
	import { onMount } from 'svelte';
	import AiFillHeart from 'svelte-icons-pack/ai/AiFillHeart';
	import AiOutlineHeart from 'svelte-icons-pack/ai/AiOutlineHeart';
	import AiShare from 'svelte-icons-pack/ai/AiOutlineShareAlt';

	export let title: string;
	export let coverImage: Tip['coverImage'];
	export let content: Tip['content'];
	export let likes: number;
	export let updatedBy: User;
	export let updatedAt: string;
	export let isLiked: boolean = false;

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
</script>

<div class="space-y-8">
	<div class="flex justify-between items-start">
		<div>
			<h3 class="text-2xl">{title}</h3>
			<div class="text-sm flex gap-2">
				<span>{toDate(updatedAt)}</span>

				<span>•</span>

				<span>{updatedBy.name}</span>
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

				<button class="" class:text-red-400={isLiked}>
					<Icon icon={isLiked ? AiFillHeart : AiOutlineHeart} title="Like" />
				</button>
			</div>
		</div>
	</div>

	<img
		src={coverImage.url}
		alt={title}
		height="420px"
		class="max-h-[50vh] w-full object-cover object-center rounded-sm"
	/>

	<div class="wysiwyg">
		{@html content.html}
	</div>
</div>

<style lang="scss">
</style>
