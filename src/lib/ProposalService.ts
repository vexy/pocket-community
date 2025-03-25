import { ProposalState, type Proposal } from "$models/Proposal";
import { loadDummyProposals } from "./dummyProposals";

// container of all available proposals
let allProposals: Proposal[] = loadDummyProposals();
let lastIndex = 25;

export function getCategoryProposals(categoryID: number, inState: ProposalState): Proposal[] {
    const categoryProposals = allProposals.filter((proposal) => {
        const result =
            proposal.categoryID === categoryID &&
            proposal.state === inState

        return result
    })

    return categoryProposals
}

export function getProposal(id: number): Proposal | undefined {
    const foundProposal = allProposals.find((prop) => { return prop.id === id })
    return foundProposal
}

export function addNewProposal(categoryID: number, title: string, description: string) {
    const newProposal = constructNewProposal(categoryID, title, description)
    allProposals.push(newProposal)
}

function constructNewProposal(categoryID: number, title: string, description: string): Proposal {
    lastIndex++

    const aProposal: Proposal = {
        id: lastIndex,
        categoryID: categoryID,
        title: title,
        description: description,
        scores: { for: 0, against: 0, sustained: 0},
        state: ProposalState.IN_PROGRESS,
        date: new Date
    }

    return aProposal;
}

export function statusString(proposalState: ProposalState): string {
    let returnValue = ""
    switch (proposalState) {
        case ProposalState.ACCEPTED:
            returnValue = "УСВОЈЕН"; break;
        case ProposalState.DENIED:
            returnValue = "ОДБИЈЕН"; break;
        case ProposalState.IN_PROGRESS:
            returnValue = "У ИЗГЛАСАВАЊУ"; break;
    }

    return returnValue;
}