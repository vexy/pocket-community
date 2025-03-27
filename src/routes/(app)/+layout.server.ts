import type { LayoutServerLoad } from './$types';
import type { Category } from '$models/Category';
import { getCategory } from '$lib/CategoriesService';

export const load = (async ( { params } ) => {
    const selectedCategory: Category = getCategory(params.category)

    return {
        selectedCategory
    };
}) satisfies LayoutServerLoad;