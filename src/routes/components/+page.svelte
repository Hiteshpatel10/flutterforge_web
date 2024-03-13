<script lang="ts">
 
    import Breadcrum from '$lib/components/breadcrum.svelte';
    import Category from '$lib/components/category.svelte';
	import Seo from '$lib/components/seo.svelte';

    export let data;
    const {componets} = data;


    let breadcrum = [
        { label: 'Components', path: '/components' },
    ];

</script>

<Breadcrum breadcrumbs={breadcrum} />

<div class="mx-auto max-w-7xl px-6 py-10 lg:px-4">
    {#each componets as items}
        <Category  forge={items}/>
        <hr class="h-[2px] w-full bg-black" />
    {/each}
</div>



	
	
<Seo
	title="Flutter UI - Beautiful UI components for Flutter"
	description="Flutter UI is a library of beautifully designed Flutter widgets, screens, and apps ready to be dropped into any Flutter project. Kickstart your next project with one of our easy to use app templates. Includes ecommerce apps, social apps, and more."
	imageUrl=""
	url=""
    breadcrumb={breadcrum}
    
/>
