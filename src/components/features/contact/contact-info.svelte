<script lang="ts">
	import Icon from '@/components/icons/icon.svelte';
	import FiMail from 'svelte-icons-pack/fi/FiMail';
	import FiMapPin from 'svelte-icons-pack/fi/FiMapPin';
	import FiPhone from 'svelte-icons-pack/fi/FiPhone';

	export let email: string;
	export let phone: string;
	export let address: string;

	const contactInformation = [
		{
			name: 'Address',
			icon: FiMapPin,
			value: address,
			isMarked: false
		},
		{
			name: 'Email',
			icon: FiMail,
			value: email,
			isMarked: true
		},
		{
			name: 'Phone',
			icon: FiPhone,
			value: phone,
			isMarked: false
		}
	];
</script>

<div class="mx-auto hidden max-w-3xl grid-cols-3 md:grid">
	{#each contactInformation as { name, value, icon, isMarked }}
		<div
			class="flex h-fit flex-col items-center gap-4 rounded-md p-8"
			class:bg-simple-light={isMarked}
			class:text-gray-800={isMarked}
		>
			<span class="text-3xl"><Icon {icon} title={name} /></span>
			<span class="max-w-[20ch] text-center text-base">
				{@html value}
			</span>
		</div>
	{/each}
</div>

<style lang="scss">
</style>
