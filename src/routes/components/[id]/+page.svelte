<script lang="ts">
	import WidgetCode from '$lib/components/widget_code.svelte';

	import { page } from '$app/stores';
	import Breadcrum from '$lib/components/breadcrum.svelte';
	let slug = $page.params.id;

	export let data;
	const { forgeComponents } = data;


	let breadcrum = [
		{ label: 'Components', path: '/components' },
		{ label: `${slug}`, path: `/${slug}` }
	];
</script>


<Breadcrum breadcrumbs={breadcrum} />

<div class="p-4 md:px-16 md:py-8">
	<div class="mt-10 space-y-16">
		{#each forgeComponents as item}
			<WidgetCode title={item.title} route={item.app_route ?? ""} gist={item.gist ?? ""} />
		{/each}
	</div>
</div>
 