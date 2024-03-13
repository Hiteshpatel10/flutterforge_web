import type { ForgeCategory } from '$lib/model/forge';
import { category } from '$lib/server/api_endpoints';

export const load = async () => {
	const getCategoryComponents = async () => {
		const response = await fetch(category, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		});

		const data = await response.json();

		return data;
	};

	const forge: ForgeCategory[] = await getCategoryComponents();

	return {
		componets: forge
	};
};
