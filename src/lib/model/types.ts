export type CategoryData = {
    title: string;
    subtitle: string;
    image: string;
    components: {
        title: string;
        subtitle: string;
        slug: string;
        image?: string; // Make the image property optional
    }[];
};

export type WidgetModal = {
    title: string;
    components: {
        title: string;
        route: string;
        gist: string;
    }[];
};
