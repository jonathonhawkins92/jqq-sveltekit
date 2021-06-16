import type {
	PokemonOverviewBase,
	PokemonOverview,
} from '../../../types/pokemon';

interface Result {
	status: number;
}

interface Success extends Result {
	body: PokemonOverview[];
}
interface Error extends Result {
	error: string;
}

export async function get(): Promise<Success | Error> {
	try {
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
			status: 200,
			body: pokemon,
		};
	} catch (error) {
		return {
			status: 500,
			error: error.message,
		};
	}
}
