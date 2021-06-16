<script lang="ts">
	import { onMount } from 'svelte';
	import Card from '../components/card.svelte';

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
<div class="grid gap-4 md:grid-cols-2 grid-cols-1">
	{#each $pokemon as pokeman}
		<Card name={pokeman.name} id={pokeman.id} image={pokeman.image} />
	{/each}
</div>
