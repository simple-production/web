<script lang="ts">
	import { onMount } from 'svelte';

	export let url: string;
	export let alt: string;
	export let mimeType: string;
	export let autoplay: boolean = false;
	export let loop: boolean = false;
	export let lazyLoad: boolean = false;

	let videoRef: HTMLVideoElement;

	const handleMouseOver = () => {
		if (videoRef.paused) {
			videoRef.play();
		}
	};

	const handleMouseOut = () => {
		if (!videoRef.paused) {
			videoRef.pause();
		}
	};

	// pause the video even though its on autoplay
	onMount(() => {
		if (isVideo && autoplay && videoRef) {
			setTimeout(() => {
				videoRef.pause();
			}, 1000);
		}
	});

	$: isVideo = mimeType.startsWith('video/');
</script>

{#if !isVideo}
	<img src={url} {alt} class={$$props.class} loading={lazyLoad ? 'lazy' : 'eager'} />
{:else}
	<video
		muted
		playsinline
		{autoplay}
		{loop}
		class={$$props.class}
		bind:this={videoRef}
		on:mouseenter={handleMouseOver}
		on:mouseleave={handleMouseOut}
	>
		<source src={url} />
		<track kind="captions" />
	</video>
{/if}

<style lang="scss">
</style>
