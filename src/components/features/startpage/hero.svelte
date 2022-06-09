<script lang="ts">
	// export let prop: string = '';

	import ScrollingText from './scrolling-text.svelte';
</script>

<div class="relative flex items-center justify-center h-screen">
	<div class="absolute inset-0 z-0">
		<video class="h-full w-full object-cover object-center" autoplay muted playsinline loop>
			<source src="/file.mp4" type="video/mp4" />
			<track kind="captions" />
		</video>
	</div>

	<h1
		class="z-[1] text-5xl font-bold text-white text-center drop-shadow-md px-8 md:text-7xl w-full pb-32"
	>
		<span class="text-simple-light">Powered by</span>
		<br />
		<ScrollingText />
	</h1>
</div>

<style lang="scss">
</style>
