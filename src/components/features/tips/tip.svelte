<script lang="ts">
	import Icon from '@/components/icons/icon.svelte';
	import type { User } from '@/models/user';
	import { toDate } from '@/utils/date.util';
	import AiFillHeart from 'svelte-icons-pack/ai/AiFillHeart';
	import AiOutlineHeart from 'svelte-icons-pack/ai/AiOutlineHeart';

	export let title: string;
	export let coverImage: string;
	export let content: string;
	export let likes: number;
	export let updatedBy: User;
	export let updatedAt: string;
	export let isLiked: boolean = false;
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

		<div class="flex items-center gap-2">
			{#if likes > 0}
				<span>{likes}</span>
			{/if}

			<button class="text-2xl" class:text-red-400={isLiked}>
				<Icon icon={isLiked ? AiFillHeart : AiOutlineHeart} title="Like" />
			</button>
		</div>
	</div>

	<img
		src={coverImage}
		alt={title}
		height="420px"
		class="max-h-[50vh] w-full object-cover object-center rounded-sm"
	/>

	<div class="wysiwyg">
		{@html content}
	</div>
</div>

<style lang="scss">
</style>
