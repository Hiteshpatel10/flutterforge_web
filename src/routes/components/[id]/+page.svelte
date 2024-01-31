<script>
	import WidgetCode from '$lib/components/widget_code.svelte';
	import { page } from '$app/stores';
	import Breadcrum from '$lib/components/breadcrum.svelte';
	let slug = $page.params.id;
</script>

<Breadcrum/>

<div class="p-4 md:px-16 md:py-8">
	<div class="mt-10 space-y-16">
		<WidgetCode />
		<WidgetCode />
	</div>
</div>
