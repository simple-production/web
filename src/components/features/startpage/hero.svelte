<script lang="ts">
	// export let prop: string = '';

	import ScrollingText from './scrolling-text.svelte';
</script>

<div class="relative flex h-screen items-center justify-center">
	<div class="absolute inset-0 z-0">
		<video class="h-full w-full object-cover object-center" autoplay muted playsinline loop>
			<source src="/file.mp4" type="video/mp4" />
			<track kind="captions" />
		</video>
	</div>

	<h1
		class="z-[1] w-full px-8 pb-32 text-center text-5xl font-bold text-white drop-shadow-md md:text-7xl"
	>
		<span class="text-simple-light">Powered by</span>
		<br />
		<ScrollingText />
	</h1>
</div>

<style lang="scss">
</style>
