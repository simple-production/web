<script lang="ts">
</script>

<h2 class="text-3xl font-bold {$$props.class}">
	<slot name="black-before" />
	{#if $$slots.green}
		<span class="text-simple-light">
			<slot name="green" />
		</span>
	{/if}
	<slot name="black-after" />
</h2>

<style lang="scss">
</style>
