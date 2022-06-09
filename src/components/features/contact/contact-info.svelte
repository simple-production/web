<script lang="ts">
	import Icon from '@/components/icons/icon.svelte';
	import FiMail from 'svelte-icons-pack/fi/FiMail';
	import FiMapPin from 'svelte-icons-pack/fi/FiMapPin';
	import FiPhone from 'svelte-icons-pack/fi/FiPhone';

	const contactInformation = [
		{
			name: 'Address',
			icon: FiMapPin,
			value: 'Källby Ängaväg 10',
			value2: ' 222 71 Lund',
			isMarked: false
		},
		{
			name: 'Email',
			icon: FiMail,
			value: 'lukas@simplegroup.se',
			isMarked: true
		},
		{
			name: 'Phone',
			icon: FiPhone,
			value: '123-456-7890',
			isMarked: false
		}
	];
</script>

<div class="hidden md:grid grid-cols-3 max-w-3xl mx-auto">
	{#each contactInformation as { name, value, value2, icon, isMarked }}
		<div
			class="flex items-center flex-col gap-4 h-fit p-8 rounded-md"
			class:bg-simple-light={isMarked}
			class:text-gray-800={isMarked}
			class:pb-4={value2}
		>
			<span class="text-3xl"><Icon {icon} title={name} /></span>
			<span class="text-base max-w-[20ch] text-center">
				{value}
				{#if value2}
					<br />
					{value2}
				{/if}
			</span>
		</div>
	{/each}
</div>

<style lang="scss">
</style>
