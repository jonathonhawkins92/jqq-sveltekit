<script lang="ts">
	import type { PokemonOverview } from '../../types/pokemon';
	import { fade, scale } from 'svelte/transition';

	export let name: PokemonOverview['name'];
	export let id: PokemonOverview['id'];
	export let image: PokemonOverview['image'];
</script>

<a
	class="list-none p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center"
	href={`/pokemon/${id}`}
	transition:fade
>
	<img class="h-40 w-40" src={image} alt={name} transition:scale />
	<h2 class="capitalize text-2xl">{id}: {name}</h2>
</a>
