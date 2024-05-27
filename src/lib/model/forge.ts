export interface ForgeCategory {
    id:                number;
    title:             string;
    description:       string;
    logo:              null;
    slug:              string;
    forge_subcategory: ForgeSubcategory[];
}

export interface ForgeSubcategory {
    id:                number;
    title:             string;
    slug:              string;
    image:             string;
    forge_category_id: number;
    description:       string;
}
