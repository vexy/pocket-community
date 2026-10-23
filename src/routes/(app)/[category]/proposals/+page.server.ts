import type { PageServerLoad } from './$types';
import { getCategoryProposals } from '$lib/ProposalService';
import { getCategory } from '$lib/CategoriesService';
import { ProposalState } from '$models/Proposal';

export const load = (async ({ params }) => {
    const categorySlug = params.category;
    const selectedCategory = getCategory(categorySlug)

    // console.group("Proposals load");
    // console.debug("Slug:", categorySlug)
    // console.debug("Selected category:", selectedCategory)

    const activeProposals = getCategoryProposals(selectedCategory!.id);

    // console.debug("All proposals: ", activeProposals)
    // console.debug("Loaded proposals count:", activeProposals.length)
    // console.groupEnd()

    return {
        activeProposals
    };
}) satisfies PageServerLoad;