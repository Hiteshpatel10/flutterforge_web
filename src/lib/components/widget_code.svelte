<script lang="ts">
	import { onMount } from 'svelte';
	import Gist from './gist.svelte';

	let showCode: boolean = true;
	let showPreview: boolean = false;

	export let title: string;
	export let route: string;
	export let gist: string;


	function onShowCode() {
		showPreview = false;
		showCode = true;
		toggle();
	}

	function onShowPreview() {
		showPreview = true;
		showCode = false;
		toggle();
	}

	function toggle() {
		const codeElement: HTMLElement | null = document.getElementById('codeElement');
		const previewElement: HTMLElement | null = document.getElementById('previewElement');

		if (codeElement == null || previewElement == null) {
			return;
		}

		if (showCode) {
			codeElement.style.display = 'block';
			previewElement.style.display = 'none';
		}

		if (showPreview) {
			codeElement.style.display = 'none';
			previewElement.style.display = 'block';
		}
	}

	onMount(() => {
		onShowPreview();
	});

	let switchState: boolean = false;

	function toggleSwitch() {
		switchState = !switchState;
		if (switchState) {
			onShowCode();
		} else {
			onShowPreview();
		}
	}
</script>

<div class="rounded-lg border-gray-200 sm:border">
	<div
		class="flex w-full flex-col items-end justify-between border-b border-gray-200 px-4 py-4 text-lg font-medium text-gray-900 focus:outline-none md:flex-row"
	>
		<p class="self-start pb-2 md:self-center md:pb-0">{title}</p>

		<div class="inline-flex items-center">
			<label class="relative cursor-pointer items-center">
				<input
					id="switch"
					type="checkbox"
					class="peer sr-only"
					on:change={toggleSwitch}
					bind:checked={switchState}
				/>
				<label for="switch" class="hidden"></label>
				<div
					class="peer h-6 w-11 rounded-full border bg-slate-200 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-slate-800 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300"
				></div>
			</label>
			<p class="text-gray-600 pl-4">show code</p>
		</div>
	</div>

	<div id="previewElement" class="py-8 md:flex md:p-12">
		<div class="m-auto text-center md:w-3/5">
			<div
				class="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl mt-12 mb-12"
			>
				<div
					class="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"
				></div>
				<div
					class="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"
				></div>
				<div
					class="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"
				></div>
				<div
					class="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"
				></div>
				<div class="overflow-hidden bg-white dark:bg-gray-800">
					<iframe
						title="frame"
						loading="lazy"
						class="pointer-events-auto m-auto rounded-[1.5rem] w-[272px] h-[572px]"
						src="https://app.flutterforge.online/#{route}"
					></iframe>
				</div>
			</div>
		</div>
	</div>
	<div id="codeElement" class="py-8 md:flex md:p-12" style="display: none;">
		<div class="m-auto text-center md:w-3/5">
			<Gist src={gist} />
		</div>
	</div>
</div>
