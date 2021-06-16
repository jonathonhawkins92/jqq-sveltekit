<script lang="ts">
	import { onMount } from 'svelte';
	import Card from '../components/card.svelte';
	import type { PokemonDetails } from '../stores/pokestore';

	import { fetchPokemon, pokemon } from '../stores/pokestore';

	onMount(() => {
		fetchPokemon();
	});

	let searchTerm = '';
	let filteredPokemon: PokemonDetails[] = [];

	$: {
		if (searchTerm) {
			filteredPokemon = $pokemon.filter((p) =>
				p.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()),
			);
		} else {
			filteredPokemon = [...$pokemon];
		}
	}
</script>

<svelte:head>
	<title>SlevteKit Pokedex</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">Pokemon!</h1>

<input
	class="w-full rounded-md text-lg p-4 border-2 border-gray-200"
	type="text"
	bind:value={searchTerm}
	placeholder="Search"
/>

<div class="py-4 grid gap-4 md:grid-cols-2 grid-cols-1">
	{#each filteredPokemon as p}
		<Card name={p.name} id={p.id} image={p.image} />
	{/each}
</div>
