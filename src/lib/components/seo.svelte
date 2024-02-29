<script lang="ts">
    import type { BreadcrumbItem } from '$lib/model/types';

    export let title: string;
    export let description: string;
    export let url: string;
    export let imageUrl: string;
    export let breadcrumb: BreadcrumbItem[] = [];
</script>

<svelte:head>
    <title>{title}</title>
    <meta name="robots" content="index,follow" />
    <meta name="description" content={description} />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@geekaid10" />
    <meta name="twitter:creator" content="@geekaid10" />

    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={url} />
    <meta property="og:type" content="website" />
    <meta property="og:image" content={imageUrl} />
    <meta property="og:image:alt" content="Flutter Forge" />

    {@html `<script type="application/ld+json">
        {
            "@context": "http://schema.org",
            "@type": "WebPage",
            "name": "About Patrick",
            "description": "In addition to Patrick's work in the SEO field, he also enjoys classical jazz dancing and organic farming ",
            "publisher": {
                "@type": "ProfilePage",
                "name": "Patrick's Website"
            }
        }
        </script>`}

    {#if breadcrumb.length > 0}
        {@html `<script type="application/ld+json">
            {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": ${JSON.stringify(breadcrumb.map((item, index) => ({
                    "@type": "ListItem",
                    "position": index + 1,
                    "item": {
                        "@id": item.path,
                        "name": item.label
                    }
                })))}
            }
            </script>`}
    {/if}
</svelte:head>
