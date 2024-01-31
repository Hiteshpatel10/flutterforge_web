<script lang="ts">
    import type { CategoryData } from '$lib/data/types';
    import componentsData from '$lib/data/components.json';

    import Breadcrum from '$lib/components/breadcrum.svelte';
    import Category from '$lib/components/category.svelte';

    let breadcrum = [
        { label: 'Components', path: '/components' },
    ];

    let categories: CategoryData[] = componentsData;
</script>

<Breadcrum breadcrumbs={breadcrum} />
<div class="mx-auto max-w-7xl px-6 py-10 lg:px-4">
    {#each categories as category}
        <Category  category={category}/>
        <hr class="h-[2px] w-full bg-black" />
    {/each}
</div>



	
	
