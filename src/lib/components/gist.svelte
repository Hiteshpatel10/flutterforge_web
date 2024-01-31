<script lang="ts">
	export let src = '';
	export let title = '';
	src = src.slice(src.length - 3) === '.js' ? src : src + '.js';
	title = title === '' ? src : title;
	import { onMount } from 'svelte';
	let frame: any;
	let height = '30px';
	const barGistHeight = 30;
	onMount(() => {
		frame.srcdoc = `<script src='${src}'><${''}/script>`;
	});
	
</script>

<iframe
	title="Code"
	src="about:blank"
	height="825"
	width="423.72"
	bind:this={frame}
/>

<style>
	iframe {
		border: 0;
		width: 100%;
	}
</style>
