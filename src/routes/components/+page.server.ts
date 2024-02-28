import type { CategoryComponents } from '$lib/model/category';
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

	const categoryComponents: CategoryComponents = await getCategoryComponents();

	return {
		componets: categoryComponents.result
	};
};
