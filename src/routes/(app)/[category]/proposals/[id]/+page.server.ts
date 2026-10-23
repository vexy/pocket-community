import type { PageServerLoad } from './$types';
import { getProposal } from '$lib/ProposalService';

export const load = (async ({ params }) => {
    const proposalID = Number(params.id);

    let chosenProposal = getProposal(proposalID);
    // console.debug("Proposal is: ", chosenProposal)

    return {
        chosenProposal
    };
}) satisfies PageServerLoad;