import type { Member } from "./Member"

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
    ACCEPTED = 0,
    DENIED,
    IN_PROGRESS
}