<script context="module" lang="ts">
	export async function load({ page }) {
		const { id } = page.params;
		const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
		const res = await fetch(url);
		const pokemon = await res.json();
		return {
			props: {
				pokemon,
			},
		};
	}
</script>

<script lang="ts">
	import type { PokemonDetails } from '../../stores/pokestore';

	interface Type {
		slot: number;
		type: {
			name: string;
			url: string;
		};
	}
	interface Sprites {
		front_default: string;
		front_shiny: string;
		front_female: string | null;
		front_shiny_female: string | null;
		back_default: string;
		back_shiny: string;
		back_female: string | null;
		back_shiny_female: string | null;
	}
	interface Pokemon extends PokemonDetails {
		types: Type[];
		height: number;
		weight: number;
		sprites: Sprites;
	}

	export let pokemon: Pokemon;
	console.log(pokemon);
	const type = pokemon.types[0].type.name;
</script>

<svelte:head>
	<title>Pokedex - {pokemon.name}</title>
</svelte:head>

<div class="flex flex-col items-center">
	<h1 class="text-4xl text-center my-8 uppercase">{pokemon.name}</h1>
	<p>
		Main Type: <strong>{type}</strong> | Height:
		<strong>{pokemon.height}</strong>
		| Weight: <strong>{pokemon.weight}</strong>
	</p>
	<img
		class="card-image"
		src={pokemon.sprites['front_default']}
		alt={pokemon.name}
	/>
	<img
		class="card-image"
		src={pokemon.sprites['back_default']}
		alt={pokemon.name}
	/>
</div>
