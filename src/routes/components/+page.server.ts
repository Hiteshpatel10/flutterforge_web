import type { CategoryComponents } from "$lib/model/category";

export const load = async ({ fetch, params }) => {

    const getCategoryComponents = async () => {
    
        const response = await fetch('https://server.geekaid.in/category', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = await response.json(); 
        return data;
    };

	
	const categoryComponents: CategoryComponents = await getCategoryComponents();


	return {
		componets: categoryComponents.result,
	};
};
