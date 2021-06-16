<script>
	import { onMount } from 'svelte';

	import { fetchPokemon, pokemon } from '../stores/pokestore';

	onMount(() => {
		fetchPokemon();
	});
</script>

<svelte:head>
	<title>SlevteKit Pokedex</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">Welcome to SvelteKit</h1>
<p>
	Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
	or don't I'm not your dad.
</p>
{#each $pokemon as pokeman}
	<p>{pokeman.id}: {pokeman.name}</p>
	<img src={pokeman.image} alt={pokeman.name} />
{/each}

<style>
	h1 {
		color: hotpink;
	}
</style>
