<script lang="ts">
	import WidgetCode from '$lib/components/widget_code.svelte';
	import type { WidgetModal } from '$lib/model/types';
	import widgetData from '$lib/data/widgets.json';

	import { page } from '$app/stores';
	import Breadcrum from '$lib/components/breadcrum.svelte';
	let slug = $page.params.id;
	let widgets: WidgetModal = widgetData['blur-container'];
	let breadcrum = [
		{ label: 'Components', path: '/components' },
		{ label: `${widgets.title}`, path: `/${slug}` }
	];
</script>

<Breadcrum breadcrumbs={breadcrum} />

<div class="p-4 md:px-16 md:py-8">
	<div class="mt-10 space-y-16">
		{#each widgets.components as component}
			<WidgetCode title={component.title} route={component.route} gist={component.gist} />
		{/each}
	</div>
</div>
