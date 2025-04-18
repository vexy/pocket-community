import { loadDummyProposals } from "./dummyProposals";
import { ProposalState, type Proposal } from "$models/Proposal";
import type { Member } from "$models/Member";
import { getMember } from "./MembersService";

// container of all available proposals
let allProposals: Proposal[] = loadDummyProposals();
let lastIndex = 29;

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

export function addNewProposal(categoryID: number, title: string, description: string, budget: number, memberIDs: number[]) {
    const proposalMembers = parseProposalMembers(memberIDs);

    const newProposal = constructNewProposal(categoryID, title, description, budget, proposalMembers);
    allProposals.push(newProposal)
}

function parseProposalMembers(memberIDs: number[]) {
    let proposalMembers: Member[] = []

    // pull member object from service
    for(let memberID of memberIDs) {
        const aMember = getMember(Number(memberID));
        proposalMembers.push(aMember);
    }

    return proposalMembers
}

function constructNewProposal(categoryID: number, title: string, description: string, budget: number, members: Member[]): Proposal {
    // increase last used index
    lastIndex++

    const aProposal: Proposal = {
        id: lastIndex,
        categoryID: categoryID,
        title: title,
        description: description,
        budget: budget,
        scores: { for: 0, against: 0, sustained: 0},
        state: ProposalState.IN_PROGRESS,
        date: new Date,
        members: members
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