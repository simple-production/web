<script lang="ts">
	import Icon from '@/components/icons/icon.svelte';
	import { socials } from '@/constants/socials';
	import Link from '../link.svelte';
	const thisYear = new Date().getFullYear();
</script>

<div
	class="flex items-center justify-between rounded-md bg-simple-light py-4 px-6 text-sm text-black md:p-6"
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
