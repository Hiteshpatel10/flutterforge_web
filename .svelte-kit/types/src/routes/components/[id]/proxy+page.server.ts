// @ts-nocheck
import type { ForgeComponents } from '$lib/model/forge_components.ts';
import { forgeComponents } from '$lib/server/api_endpoints';

interface PageLoadParams {
	id: string;
}

/** @param {Parameters<import('./$types').PageServerLoad>[0]} event */
export const load = async ({ params }: { params: PageLoadParams }) => {

    const response = await fetch(`${forgeComponents}/${params.id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
	const components: ForgeComponents[] = await  response.json();

    
	return {
		forgeComponents: components
	}; 
}; 
    