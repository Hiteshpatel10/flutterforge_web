<script lang="ts">
	import type { CategoryData } from '$lib/model/types';
	export let category: CategoryData;
</script>

<div class="mx-auto max-w-7xl px-6 py-10 lg:px-4">
	<div class="flex flex-col pb-10 lg:flex-row lg:space-x-10">
		<div class="sticky-container lg:w-[30%]">
			<div class="sticky top-24">
				<img
					alt="WomenWithLaptop"
					loading="lazy"
					width="120"
					height="120"
					decoding="async"
					data-nimg="1"
					src={category.image}
					style="color: transparent;"
				/>
				<h1 class="mt-4 font-heading text-2xl font-bold md:text-3xl">{category.title}</h1>
				<p class="mt-4 font-sans text-sm font-semibold text-gray-600">
					{category.subtitle}
				</p>
			</div>
		</div>
		<div class="mt-10 w-full lg:mt-0 lg:w-[70%]">
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-4 lg:gap-y-4">
				{#each category.components as component}
				<div class="rounded-md p-2 hover:bg-gray-100/50">
					<a href="/components/{component.slug}">
						<div class="rounded-t-md border border-gray-200 bg-white">
							<div style=" display: flex; justify-content: center; align-items: center; overflow: hidden;">
								<img
									alt={component.slug}
									loading="lazy"
									decoding="async"
									data-nimg="1"
									class="rounded-md"
									src="{component.image}"
									height="655"
									width="345"
									style="max-width: 100%; max-height: 100%; object-fit: contain; margin: auto;"
									/>
							</div>
							<hr />
							<p class="mt-2 p-2 pt-0 text-sm font-semibold text-gray-600">{component.title}</p>
						</div>
					</a>
				</div>
				
				{/each}
			</div>
		</div>
	</div>
</div>
