<script lang="ts">
	import Icon from '@/components/icons/icon.svelte';
	import BiLogoInstagram from 'svelte-icons-pack/bi/BiLogoInstagram';
	import BiLogoLinkedin from 'svelte-icons-pack/bi/BiLogoLinkedin';
	import BiLogoYoutube from 'svelte-icons-pack/bi/BiLogoYoutube';
	import Link from '../link.svelte';
	const thisYear = new Date().getFullYear();

	const socials = [
		{
			name: 'Instagram',
			url: '',
			icon: BiLogoInstagram
		},
		{
			name: 'LinkedIn',
			url: 'https://www.linkedin.com/company/simple-production-ab',
			icon: BiLogoLinkedin
		},
		{
			name: 'YouTube',
			url: 'https://www.youtube.com/channel/UC0WzFBXHs4oT42qKlmc4Zmw',
			icon: BiLogoYoutube
		}
	];
</script>

<div
	class="py-4 px-6 text-sm bg-simple-light rounded-md text-black md:p-6 flex items-center justify-between"
>
	<span>&copy; {thisYear} Simple Production AB</span>

	<div class="flex gap-4 text-lg">
		{#each socials as { name, url, icon }}
			<Link href={url} label={name}>
				<Icon {icon} title={name} />
			</Link>
		{/each}
	</div>
</div>

<style lang="scss">
</style>
