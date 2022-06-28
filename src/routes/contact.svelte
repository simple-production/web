<script lang="ts" context="module">
	export const load: Load = async ({ fetch }) => {
		const response = await fetch('/api/contact').then((res) => res.json());

		return {
			props: response,
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

	export let email: string;
	export let address: string;
	export let phone: string;
</script>

<div class="space-y-12">
	<Heading class="text-center">
		<svelte:fragment slot="black-before">Get in</svelte:fragment>
		<svelte:fragment slot="green">touch</svelte:fragment>
	</Heading>

	<ContactInfo {email} {address} {phone} />

	<ContactForm />
</div>

<style lang="scss">
</style>
