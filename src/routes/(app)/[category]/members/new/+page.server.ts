import type { Actions } from './$types';
import { getCategory } from '$lib/CategoriesService';
import { addNewMember } from '$lib/MembersService';
import { redirect } from '@sveltejs/kit';

export const actions = {
    newCandidate: async({ request, params }) => {
        const candidateData = await request.formData();

        const title = candidateData.get('title')?.toString()
        const name = candidateData.get('name')?.toString()
        const lastName = candidateData.get('lastName')?.toString()
        const bio = candidateData.get('biography')?.toString()
        //TODO: add profile photo later

        // get current category ID
        const currentCategorySlug = params.category;
        const categoryMeta = getCategory(currentCategorySlug);

        //TODO: Catch any errors that may happen later
        addNewMember(
            title,
            name,
            lastName,
            bio,
            categoryMeta!.id
        )

        // redirect to list of candidates
        const redirectURL = `/${currentCategorySlug}/candidates`
        redirect(302, redirectURL);
    }
} satisfies Actions;