<script>
	import Nav from '../components/nav.svelte';
</script>

<header>
	<Nav />
</header>
<main>
	<slot />
</main>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
