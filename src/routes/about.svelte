<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = () => {
		return {
			stuff: {
				title: 'About'
			}
		};
	};
</script>

<script lang="ts">
</script>

<div>
	<div class="flex h-[50vh] items-center justify-center">
		<h1 class="text-7xl font-bold md:text-9xl">
			Creative and
			<br />
			<span class="text-simple-light">Simple</span>
		</h1>
	</div>

	<div class="max-w-md space-y-4 px-8 md:px-0">
		<p>
			Our mission is to produce visual content that resonates with viewers, regardless of genre,
			scale or platform. From creating the overall strategy, to organizing and executing the shoot,
			to managing the multifaceted post-production process, we ensure our clients’ projects are
			seamless from start to finish.
		</p>
		<p>
			Whether you're starting with a vague idea or a fully-fleshed out concept, Simple Production
			can bring your vision to life. If you have an upcoming project, get in touch today so we can
			work together.
		</p>
	</div>
</div>

<style lang="scss">
</style>
