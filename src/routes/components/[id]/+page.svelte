<script lang="ts">
	import WidgetCode from '$lib/components/widget_code.svelte';

	import { page } from '$app/stores';
	import Breadcrum from '$lib/components/breadcrum.svelte';
	let slug = $page.params.id;

	export let data;
	const { forgeComp } = data;


	let breadcrum = [
		{ label: 'Components', path: '/components' },
		{ label: `${slug}`, path: `/${slug}` }
	];
</script>


<Breadcrum breadcrumbs={breadcrum} />

<div class="p-4 md:px-16 md:py-8">
	<div class="mt-10 space-y-16">
		{#each forgeComp.forge_components as component}
			<WidgetCode title={component.title} route={component.route} gist={component.gist} />
		{/each}
	</div>
</div>
 