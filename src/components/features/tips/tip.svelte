<script lang="ts">
	import { page } from '$app/stores';
	import Icon from '@/components/icons/icon.svelte';
	import Visual from '@/components/layout/visual.svelte';
	import Routes from '@/constants/routes';
	import type { DirectusUser } from '@/models/cms/collection';
	import type { DirectusFile } from '@/models/cms/file';
	import { toDate } from '@/utils/date.util';
	import { onMount } from 'svelte';
	import AiFillHeart from 'svelte-icons-pack/ai/AiFillHeart';
	import AiOutlineHeart from 'svelte-icons-pack/ai/AiOutlineHeart';
	import AiShare from 'svelte-icons-pack/ai/AiOutlineShareAlt';

	export let title: string;
	export let id: string;
	export let coverImage: DirectusFile;
	export let body: string;
	export let likes: number;
	export let createdBy: DirectusUser;
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
		fetch(`/api/tips/${id}/like`, {
			method: 'PUT'
		});

		isLiked = !isLiked;

		if (isLiked) {
			likes++;
		} else {
			likes--;
		}
	};

	const imageUrl = Routes.asset(coverImage.id);
	const avatarUrl = Routes.asset(createdBy.avatar.id);

	const buildLdJson = () => {
		const ldJson = {
			'@context': 'http://schema.org',
			'@type': 'Article',
			headline: title,
			image: imageUrl,
			datePublished: toDate(updatedAt),
			dateModified: toDate(updatedAt),
			keywords: ['Simple', 'Production', 'Simple Production', 'Lund', 'Photo', 'Video'].join(','),
			author: {
				'@type': 'Person',
				name: `${createdBy.first_name} ${createdBy.last_name}`,
				logo: avatarUrl
			},
			publisher: {
				'@type': 'Person',
				name: `${createdBy.first_name} ${createdBy.last_name}`,
				logo: avatarUrl
			},
			description: body,
			mainEntityOfPage: $page.url.origin
		};

		return `<script type="application/ld+json">${JSON.stringify(ldJson)}${'<'}/script>`;
	};
</script>

<svelte:head>
	{@html buildLdJson()}
</svelte:head>

<div class="space-y-8">
	<div class="flex items-start justify-between">
		<div>
			<h3 class="text-2xl">{title}</h3>
			<div class="flex gap-2 text-sm">
				<span data-article-updated-at>{toDate(updatedAt)}</span>

				<span>•</span>

				<span data-article-user>{createdBy.first_name} {createdBy.last_name}</span>
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
					<span class="text-sm" data-article-likes>{likes}</span>
				{/if}

				<button class="" class:text-red-400={isLiked} on:click={handleLike}>
					<Icon icon={isLiked ? AiFillHeart : AiOutlineHeart} title="Like" />
				</button>
			</div>
		</div>
	</div>

	<Visual
		url={imageUrl}
		mimeType={coverImage.type}
		alt={title}
		class="max-h-[50vh] w-full rounded-sm object-cover object-center"
		loop
		autoplay
	/>

	<div class="wysiwyg">
		{@html body}
	</div>
</div>

<style lang="scss">
</style>
