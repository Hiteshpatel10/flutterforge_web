<script lang="ts">
 
    import Breadcrum from '$lib/components/breadcrum.svelte';
    import Category from '$lib/components/category.svelte';

    export let data;
    const {componets} = data;


    let breadcrum = [
        { label: 'Components', path: '/components' },
    ];

</script>

<Breadcrum breadcrumbs={breadcrum} />

<div class="mx-auto max-w-7xl px-6 py-10 lg:px-4">
    {#each componets.result as category}
        <Category  category={category}/>
        <hr class="h-[2px] w-full bg-black" />
    {/each}
</div>



	
	
