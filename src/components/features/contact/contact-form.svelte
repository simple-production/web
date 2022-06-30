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

	const { form, isValid, handleChange, handleSubmit, errors } = createForm({
		initialValues,
		onSubmit: async (values) => {
			const response = await fetch('/api/email/send', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(values)
			});
		}
	});
</script>

<form on:submit={handleSubmit} class="grid grid-cols-2 gap-6">
	<Input
		label="Name"
		name="name"
		bind:value={$form.name}
		on:change={handleChange}
		icon={FiUser}
		isRequired
	/>
	<Input
		label="Company"
		name="company"
		bind:value={$form.company}
		on:change={handleChange}
		icon={BiBuilding}
		isRequired={false}
	/>
	<Input
		label="Email"
		name="email"
		bind:value={$form.email}
		on:change={handleChange}
		class="col-span-full"
		icon={FiSend}
		isRequired
	/>

	<Input
		label="Message"
		name="message"
		icon={FiMail}
		bind:value={$form.message}
		on:change={handleChange}
		class="col-span-full"
		isMultiline
		isRequired
	/>
	<div class="col-span-full">
		<Button isSubmit>Send</Button>
	</div>
</form>

<style lang="scss">
</style>
