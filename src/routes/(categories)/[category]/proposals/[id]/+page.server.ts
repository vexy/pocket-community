import type { PageServerLoad } from './$types';
import { getProposal } from '$lib/ProposalService';

export const load = (async ({ params }) => {
    const proposalID = Number(params.id);

    let chosenProposal = getProposal(proposalID);

    return {
        chosenProposal
    };
}) satisfies PageServerLoad;