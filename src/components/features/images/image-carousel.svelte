<script lang="ts">
	import Button from '@/components/forms/button.svelte';
	import Visual from '@/components/layout/visual.svelte';
	import type { CMSImage } from '@/models/cms-image';
	import { onMount } from 'svelte';
	import Portal from 'svelte-portal';
	import { fade } from 'svelte/transition';

	export let images: CMSImage[];
	export let currentImage: number = 0;

	onMount(() => {
		const registerKeys = (e: KeyboardEvent) => {
			if (e.key === 'ArrowLeft') {
				prevImage();
			} else if (e.key === 'ArrowRight') {
				nextImage();
			} else if (e.key === 'Escape') {
				handleClose();
			}
		};
		window.addEventListener('keydown', registerKeys);

		return () => {
			window.removeEventListener('keydown', registerKeys);
		};
	});

	const nextImage = () => {
		currentImage = (currentImage + 1) % images.length;
	};

	const prevImage = () => {
		currentImage = (currentImage - 1) % images.length;
	};

	const handleClose = () => {
		currentImage = -1;
	};
</script>

<Portal target="[data-modal]">
	<div class="fixed top-0 left-0 right-0 z-[99]" transition:fade={{ duration: 300 }}>
		<div class="absolute inset-0 bg-black/90" on:click={handleClose} />

		<button
			on:click={handleClose}
			class="absolute top-8 right-8 grid aspect-square w-10 place-items-center rounded-md bg-white/80 text-2xl transition-all hover:bg-white"
		>
			&times;
		</button>

		<div data-images class="grid h-screen w-screen items-center px-4 py-12 md:p-12">
			<span>
				<Button type="secondary" on:click={prevImage}>Prev</Button>
			</span>

			<div class="flex h-full flex-1 overflow-hidden">
				{#each images as image}
					<div
						class="flex h-full w-full flex-shrink-0 items-center justify-center transition-all"
						style="transform: translate(-{currentImage * 100}%);"
					>
						<Visual {...image} alt="Image" class="max-h-[90%] max-w-[90%] object-cover" />
					</div>
				{/each}
			</div>

			<span>
				<Button type="secondary" on:click={nextImage}>Next</Button>
			</span>
		</div>
	</div>
</Portal>

<style lang="scss">
	[data-images] {
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr auto;
		grid-template-areas: 'image image' 'prev-button next-button';

		span {
			align-self: center;
			justify-self: center;
		}

		@screen md {
			grid-template-columns: auto 1fr auto;
			grid-template-areas: 'prev-button image next-button';
		}

		span:first-child {
			grid-area: prev-button;
		}

		span:last-child {
			grid-area: next-button;
		}

		> div {
			grid-area: image;
		}
	}
</style>
