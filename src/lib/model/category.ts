export interface CategoryComponents {
	result: Result;
	status: number;
}

export interface Result {
	result: category[];
}

export interface category {
	components: Component[];
	id: number;
	image: string;
	slug: string;
	subtitle: string;
	title: string;
	updated_at: string;
}

export interface Component {
	id: number;
	image: string;
	slug: string;
	subtitle: string;
	title: string;
	updated_at: string;
}

export type ForgeComponents = {
	result: {
		forge_components: Array<{
			category_component_id: number;
			gist: string;
			title: string;
			id: number;
			route: string;
			updated_at: string;
		}>;
	};
	status: number;
};


