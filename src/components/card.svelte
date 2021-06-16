<script lang="ts">
	import type { Pokemon } from '../stores/pokestore';

	export let name: Pokemon['name'];
	export let id: Pokemon['id'];
	export let image: Pokemon['image'];
</script>

<a
	class="list-none p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-sm hover:shadow-md flex flex-col items-center"
	href={`/pokemon/${id}`}
>
	<img class="h-40 w-40" src={image} alt={name} />
	<h2 class="uppercase text-2xl">{id}: {name}</h2>
</a>
