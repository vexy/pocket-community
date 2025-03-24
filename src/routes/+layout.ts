import type { LayoutLoad } from './$types';
import { getAllCategories } from '$lib/CategoriesService';

export const load = (async () => {
    const allCategories = getAllCategories();

    return {
        allCategories
    };
}) satisfies LayoutLoad;