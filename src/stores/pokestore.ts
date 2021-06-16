import { writable } from 'svelte/store';

const endpoints = { all: 'https://pokeapi.co/api/v2/pokemon?limit=151' };

export interface Pokemon {
	name: string;
	id: number;
	image: string;
}
interface PokemonResult {
	name: string;
	url: string;
}
interface JsonResult<Results> {
	results: Results;
}

export const pokemon = writable<Pokemon[]>([]);

export const fetchPokemon = async (): Promise<void> => {
	const res = await fetch(endpoints.all, { method: 'get' });
	const data: JsonResult<PokemonResult[]> = await res.json();

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

// export const fetchPokemonById = async (id: string) => {
// 	// if (pokemonDetails[id]) return pokemonDetails[id];
// };
