export interface PokemonOverviewBase {
	name: string;
	url: string;
}

export interface PokemonOverview {
	name: string;
	id: number;
	image: string;
}

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

export interface Pokemon {
	name: string;
	types: Type[];
	height: number;
	weight: number;
	sprites: Sprites;
}
