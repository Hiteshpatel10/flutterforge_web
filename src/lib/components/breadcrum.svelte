<script lang="ts">
	import type {BreadcrumbItem} from '$lib/model/types';
	export let breadcrumbs: BreadcrumbItem[] = [];
</script>

<nav class="flex" aria-label="Breadcrumb">
	<ol class="inline-flex items-center space-x-1 md:space-x-3 px-6">
		<li class="inline-flex items-center">
			<a
				href="/"
				class="ml-1 inline-flex text-sm font-medium text-gray-800 hover:underline md:ml-2"
			>
				Home
			</a>
		</li>
		{#each breadcrumbs as { label, path }, index}
			<!-- Other breadcrumb items -->
			<li>
				<div class="flex items-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="h-4 w-4"
					>
						<polyline points="9 18 15 12 9 6"></polyline>
					</svg>
					<a href={path} class="ml-1 text-sm font-medium text-gray-800 hover:underline md:ml-2"
						>{label}</a
					>
				</div>
			</li>
		{/each}
	</ol>
</nav>
