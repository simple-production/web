<script lang="ts">
	import Button from '@/components/forms/button.svelte';
	import Input from '@/components/forms/input.svelte';
	import { createForm } from 'svelte-forms-lib';

	const initialValues = {
		name: '',
		email: '',
		company: '',
		message: ''
	};

	const { form, handleChange, handleSubmit } = createForm({
		initialValues,
		onSubmit: (values) => {}
	});
</script>

<form on:submit={handleSubmit} class="grid grid-cols-2 gap-4">
	<Input label="Name" name="name" bind:value={$form.name} on:change={handleChange} />
	<Input label="Company" name="company" bind:value={$form.company} on:change={handleChange} />
	<Input
		label="Email"
		name="email"
		bind:value={$form.email}
		on:change={handleChange}
		class="col-span-full"
	/>

	<Input
		label="Message"
		name="message"
		bind:value={$form.message}
		on:change={handleChange}
		class="col-span-full"
		isMultiline
	/>
	<div class="col-span-full">
		<Button isSubmit>Send</Button>
	</div>
</form>

<style lang="scss">
</style>
