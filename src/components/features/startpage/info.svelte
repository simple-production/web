<script lang="ts">
	import Button from '@/components/forms/button.svelte';
	import Heading from '@/components/typography/heading.svelte';
	import Routes from '@/constants/routes';
</script>

<div class="max-w space-y-8">
	<Heading>
		<svelte:fragment slot="black-before">
			Building brands
			<br />
			with
		</svelte:fragment>

		<svelte:fragment slot="green">personality</svelte:fragment>
	</Heading>

	<div class="max-w-sm">
		<p>
			We help you boost your brand with a creative touch. Maybe you need to display your services in
			a clear and creative way? Or want to boost your brand awareness through social media?
		</p>

		<p>Dont worry, we can help you.</p>
	</div>

	<Button href={Routes.contact}>Get in touch</Button>
</div>

<style lang="scss">
</style>
