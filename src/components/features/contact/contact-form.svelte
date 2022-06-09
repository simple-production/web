<script lang="ts">
	import Button from '@/components/forms/button.svelte';
	import Input from '@/components/forms/input.svelte';
	import { createForm } from 'svelte-forms-lib';
	import BiBuilding from 'svelte-icons-pack/bi/BiBuilding';
	import FiMail from 'svelte-icons-pack/fi/FiMail';
	import FiSend from 'svelte-icons-pack/fi/FiSend';
	import FiUser from 'svelte-icons-pack/fi/FiUser';

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

<form on:submit={handleSubmit} class="grid grid-cols-2 gap-8">
	<Input label="Name" name="name" bind:value={$form.name} on:change={handleChange} icon={FiUser} />
	<Input
		label="Company"
		name="company"
		bind:value={$form.company}
		on:change={handleChange}
		icon={BiBuilding}
	/>
	<Input
		label="Email"
		name="email"
		bind:value={$form.email}
		on:change={handleChange}
		class="col-span-full"
		icon={FiSend}
	/>

	<Input
		label="Message"
		name="message"
		bind:value={$form.message}
		on:change={handleChange}
		class="col-span-full"
		isMultiline
		icon={FiMail}
	/>
	<div class="col-span-full">
		<Button isSubmit>Send</Button>
	</div>
</form>

<style lang="scss">
</style>
