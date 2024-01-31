// types.ts
export type CategoryData = {
    title: string;
    subtitle: string;
    image: string;
    components: {
        image: string;
        title: string;
        slug: string;
    }[];
};
