import type { PageServerLoad } from './$types';
import { getCategoryProposals } from '$lib/ProposalService';
import { getCategory } from '$lib/CategoriesService';
import { ProposalState } from '$models/Proposal';

export const load = (async ({ params }) => {
    const categorySlug = params.category;
    const selectedCategory = getCategory(categorySlug)

    const activeProposals = getCategoryProposals(selectedCategory!.id, ProposalState.IN_PROGRESS);

    return {
        activeProposals
    };
}) satisfies PageServerLoad;