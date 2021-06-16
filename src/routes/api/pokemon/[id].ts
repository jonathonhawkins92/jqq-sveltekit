import type { Pokemon } from '../../../../types/pokemon';

interface Result {
	status: number;
}

interface Success extends Result {
	body: Pokemon;
}
interface Error extends Result {
	error: string;
}

export async function get({
	params,
}: {
	params: { id: string };
}): Promise<Success | Error> {
	try {
		const { id } = params;
		const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
		const res = await fetch(url);
		const pokemon: Pokemon = await res.json();
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
