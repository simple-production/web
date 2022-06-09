<script lang="ts" context="module">
	export const load: Load = () => {
		return {
			stuff: {
				title: 'Contact'
			}
		};
	};
</script>

<script lang="ts">
	import ContactForm from '@/components/features/contact/contact-form.svelte';
	import ContactInfo from '@/components/features/contact/contact-info.svelte';
	import Heading from '@/components/typography/heading.svelte';
	import type { Load } from '@sveltejs/kit';
</script>

<div class="space-y-12">
	<Heading class="text-center">
		<svelte:fragment slot="black-before">Get in</svelte:fragment>
		<svelte:fragment slot="green">touch</svelte:fragment>
	</Heading>

	<ContactInfo />

	<ContactForm />
</div>

<style lang="scss">
</style>
