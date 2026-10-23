import type { Member } from "$models/Member"

export interface Proposal {
    id: number,
    categoryID: number,
    title: string,
    description: string,
    budget: number,
    scores: ProposalScores,
    state: ProposalState,
    date: Date,
    members: Member[]
}

interface ProposalScores {
    for: number,
    against: number,
    sustained: number
}

export enum ProposalState {
    PROPOSED,
    IN_DISCUSSION,
    IN_VOTING,
    ACCEPTED,
    DENIED,
    IMPLEMENTING,
    IN_REVIEW
}