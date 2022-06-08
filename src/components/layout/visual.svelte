<script lang="ts">
	export let url: string;
	export let alt: string;
	export let mimeType: string;

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

	$: isVideo = mimeType.startsWith('video/');
</script>

{#if !isVideo}
	<img src={url} {alt} class={$$props.class} />
{:else}
	<video
		muted
		playsinline
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
