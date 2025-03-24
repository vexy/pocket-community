import type { LayoutServerLoad } from './$types';
import type { Category } from '$models/Category';
import { getCategoryBySlug } from '$lib/CategoriesService';

export const load = (async ( { params } ) => {
    // console.log("Selected category: ", params.category)
    const selectedCategory: Category = getCategoryBySlug(params.category)

    return {
        selectedCategory
    };
}) satisfies LayoutServerLoad;