<script lang="ts">
	import Features from '$lib/components/features.svelte';
	import Hero from '$lib/components/hero.svelte';
	import { onMount } from 'svelte';
	import Seo from '$lib/components/seo.svelte';

	// // Function to dynamically load a script
	// function loadScript(url: string) {
	// 	return new Promise((resolve, reject) => {
	// 		const script = document.createElement('script');
	// 		script.src = url;
	// 		script.onload = resolve;
	// 		script.onerror = reject;
	// 		document.body.appendChild(script);
	// 	});
	// }

	// onMount(async () => {
	// 	try {
	// 		await loadScript('https://gist.github.com/Hiteshpatel10/59a340f68e61fa6d4bd865df9bd9c409.js');
	// 	} catch (error) {
	// 		console.error('Failed to load script:', error);
	// 	}
	// });
</script>

<Hero />
<Features />

<Seo
	title="Flutter Forge "
	description="Explore a world of easy-to-use Flutter components and widgets on FlutterForge."
	imageUrl="https://i.imgur.com/afnPRdN.png"
	url=""
/>
