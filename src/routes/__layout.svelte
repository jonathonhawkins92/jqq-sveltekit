<script lang="ts">
	import Nav from '../components/nav.svelte';
</script>

<main class="p-8 max-w-3xl mx-auto">
	<header>
		<Nav />
	</header>
	<slot />
</main>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
