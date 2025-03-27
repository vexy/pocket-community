import type { Actions } from './$types';
import { addNewProposal } from '$lib/ProposalService';
import { redirect } from '@sveltejs/kit';
import { getCategory } from '$lib/CategoriesService';

export const actions = {
    submitProposal: async({ request, params }) => {
        const proposalData = await request.formData();
        const title = proposalData.get('title')?.toString()
        const description = proposalData.get('description')?.toString();

        // get current category ID
        const currentCategorySlug = params.category;
        const categoryMeta = getCategory(currentCategorySlug);

        // call the service to add data
        addNewProposal(categoryMeta?.id, title, description)

        // return { success: true }
        // redirect to list of proposals
        const redirectURL = `/${currentCategorySlug}/proposals`
        redirect(302, redirectURL);
    }
} satisfies Actions;