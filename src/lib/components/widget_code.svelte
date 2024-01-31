<script lang="ts">
    
	import { onMount } from "svelte";
	import Gist from "./gist.svelte";

    let showCode: boolean = true;
    let showPreview: boolean = false;

    function onShowCode() {
        showPreview = false;
        showCode = true
        toggle();
        
    }

    function onShowPreview() {
        showPreview = true;
        showCode = false
        toggle();
    }

    function toggle(){
        const codeButton: HTMLElement | null = document.getElementById('codeButton');
        const previewButton : HTMLElement | null = document.getElementById('previewButton');
        const codeElement: HTMLElement | null = document.getElementById('codeElement');
        const previewElement: HTMLElement | null = document.getElementById('previewElement');

        if(codeButton == null || previewButton == null || codeElement == null || previewElement == null){
            return;
        }

        if (showCode) {
            codeButton.classList.add('bg-green');
            previewButton.classList.remove('bg-green');
            codeElement.style.display = 'block';
            previewElement.style.display = 'none';
        } 
        
        if(showPreview){
            codeButton.classList.remove('bg-green');
            previewButton.classList.add('bg-green');
            codeElement.style.display = 'none';
            previewElement.style.display = 'block';
        }
    }


    onMount(()=>{
        onShowPreview();
    })
    
</script>



<div class="rounded-lg border-gray-200 sm:border">
    <div
        class="flex w-full flex-col items-end justify-between border-b border-gray-200 px-4 py-4 text-lg font-medium text-gray-900 focus:outline-none md:flex-row"
    >
        <p class="self-start pb-2 md:self-center md:pb-0">Simple AppBar</p>
        <div class="inline-flex">
            <button id="previewButton" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" on:click={()=>onShowPreview()}>
              Preview
            </button>
            <button id="codeButton" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"on:click={()=>onShowCode()}>
              Code
            </button>
        </div>
    </div>
    <div id="previewElement" class="py-8 md:flex md:p-12">
        <div class="m-auto text-center md:w-3/5">
            <iframe
                title="frame"
                class="pointer-events-auto m-auto rounded-2xl border-4 border-gray-400"
                height="825"
                width="423.72"
                src="https://app.flutterui.design/#/simple_appbar"
            ></iframe>
        </div>
    </div>
    <div id="codeElement" class="py-8 md:flex md:p-12" style="display: none;">
        <div class="m-auto text-center md:w-3/5">
            <Gist src="https://gist.github.com/Harshgupta2902/1e6d7abbf1ad26b32f07862350675ec8.js"/>
        </div>
    </div>
</div>
