import { loadDummyProposals } from "./dummyProposals";
import { ProposalState, type Proposal } from "$models/Proposal";
import type { Member } from "$models/Member";
import { getMember } from "./MembersService";

// container of all available proposals
let allProposals: Proposal[] = loadDummyProposals();
let lastIndex = 29;

export function getCategoryProposals(categoryID: number): Proposal[] {
    const categoryProposals = allProposals.filter((proposal) => {
        const result =
            proposal.categoryID === categoryID

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
        state: ProposalState.PROPOSED,
        date: new Date,
        members: members
    }

    return aProposal;
}

export function statusString(proposalState: ProposalState): string {
    let returnValue = ""
    switch (proposalState) {
        case ProposalState.PROPOSED:
            returnValue = "ПРЕДЛОЖЕН"; break;
        case ProposalState.IN_DISCUSSION:
            returnValue = "У РАЗМАТРАЊУ"; break;
        case ProposalState.IN_VOTING:
            returnValue = "НА ГЛАСАЊУ"; break;
        case ProposalState.ACCEPTED:
            returnValue = "УСВОЈЕН"; break;
        case ProposalState.DENIED:
            returnValue = "ОДБИЈЕН"; break;
        case ProposalState.IMPLEMENTING:
            returnValue = "У СПРОВОЂЕЊУ"; break;
        case ProposalState.IN_REVIEW:
            returnValue = "У ПРОВЕРИ"; break;
    }

    return returnValue;
}

export function colorFor(proposalState: ProposalState): string {
    let returnValue = ""
    switch (proposalState) {
        case ProposalState.PROPOSED:
            returnValue = '#eed67c'; break;
        case ProposalState.IN_DISCUSSION:
            returnValue = '#6b447a'; break;
        case ProposalState.IN_VOTING:
            returnValue = '#6cd2a4'; break;
        case ProposalState.ACCEPTED:
            returnValue = '#07633e'; break;
        case ProposalState.DENIED:
            returnValue = '#ca4471'; break;
        case ProposalState.IMPLEMENTING:
            returnValue = '#0c033e'; break;
        case ProposalState.IN_REVIEW:
            returnValue = '#b1770b'; break;
    }

    return returnValue;
}