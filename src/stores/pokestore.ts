import { writable } from 'svelte/store';

const endpoints = { all: 'https://pokeapi.co/api/v2/pokemon?limit=151' };

import type { PokemonOverview, PokemonOverviewBase } from '../../types/pokemon';

export const pokemon = writable<PokemonOverview[]>([]);

export const fetchPokemon = async (): Promise<void> => {
	const res = await fetch(endpoints.all, { method: 'get' });
	const data: {
		results: PokemonOverviewBase[];
	} = await res.json();

	const loadedPokemon = data.results.map((pokemon, index) => {
		const id = index + 1;
		return {
			name: pokemon.name,
			id,
			image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
		};
	});
	pokemon.set(loadedPokemon);
};
