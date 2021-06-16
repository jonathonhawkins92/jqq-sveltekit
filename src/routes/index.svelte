<script context="module" lang="ts">
	import type {
		PokemonOverviewBase,
		PokemonOverview,
	} from '../../types/pokemon';

	export async function load() {
		const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';
		const res = await fetch(url);
		const data: { results: PokemonOverviewBase[] } = await res.json();
		const pokemon: PokemonOverview[] = data.results.map((p, index) => {
			const id = index + 1;
			return {
				name: p.name,
				id,
				image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
			};
		});
		return {
			props: {
				pokemon,
			},
		};
	}
</script>

<script lang="ts">
	import Card from '../components/card.svelte';

	export let pokemon: PokemonOverview[];

	let searchTerm = '';
	let filteredPokemon: PokemonOverview[] = [];

	$: {
		if (searchTerm) {
			filteredPokemon = pokemon.filter((p) =>
				p.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()),
			);
		} else {
			filteredPokemon = [...pokemon];
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
