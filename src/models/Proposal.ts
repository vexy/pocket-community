export interface Proposal {
    id: number,
    categoryID: number,
    title: string,
    description: string,
    scores: ProposalScores,
    state: ProposalState,
    date: Date
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