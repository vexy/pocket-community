import type { Actions, PageServerLoad } from './$types';
import { addNewProposal } from '$lib/ProposalService';
import { getCategory } from '$lib/CategoriesService';
import { redirect } from '@sveltejs/kit';
import { getCategoryMembers } from '$lib/MembersService';

export const actions = {
    submitProposal: async({ request, params }) => {
        const proposalData = await request.formData();
        //
        const title = proposalData.get('title')?.toString()
        const description = proposalData.get('description')?.toString();
        const budget = Number(proposalData.get('budget'));
        const peopleIDs = proposalData.getAll('people');
        console.debug("PeopeIDs: ", peopleIDs)

        // get current category ID
        const currentCategorySlug = params.category;
        const categoryMeta = getCategory(currentCategorySlug);

        // call the service to add data
        addNewProposal(categoryMeta?.id, title, description, budget, peopleIDs)

        // return { success: true }
        // redirect to list of proposals
        const redirectURL = `/${currentCategorySlug}/proposals`
        redirect(302, redirectURL);
    }
} satisfies Actions;

export const load = ( async ({ parent }) => {
    const parentData = await parent();

    // load all members for this category
    const categoryID = parentData.selectedCategory.id
    const categoryMembers = getCategoryMembers(categoryID);

    return {
        categoryMembers
    }
}) satisfies PageServerLoad