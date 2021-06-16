<script context="module" lang="ts">
	import type { Pokemon } from '../../../types/pokemon';

	export async function load({ page }) {
		const { id } = page.params;
		const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
		const res = await fetch(url);
		const data: Pokemon = await res.json();
		return {
			props: {
				pokemon: data,
			},
		};
	}
</script>

<script lang="ts">
	export let pokemon: Pokemon;
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
