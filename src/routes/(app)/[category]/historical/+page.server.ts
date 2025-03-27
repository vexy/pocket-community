import { getCategoryProposals } from '$lib/ProposalService';
import { ProposalState } from '$models/Proposal';
import type { PageServerLoad } from './$types';

export const load = (async ({ parent }) => {
    const parentData = await parent();

    const currentCategoryID = parentData.selectedCategory.id;
    const acceptedProposals = getCategoryProposals(currentCategoryID, ProposalState.ACCEPTED)
    const deniedProposals = getCategoryProposals(currentCategoryID, ProposalState.DENIED)
    //
    const historicalProposals = acceptedProposals.concat(deniedProposals);

    return {
        historicalProposals
    };
}) satisfies PageServerLoad;