import { ProposalState, type Proposal } from "$models/Proposal"

// SCHOOL dummy proposals
const proposal1: Proposal = {
    id: 1,
    categoryID: 1,
    title: "Some proposal 1",
    description: "This is proposal description",
    scores: {
        for: 2456,
        against: 109,
        sustained: 3
    },
    state: ProposalState.IN_PROGRESS,
    date: new Date
}

const proposal2: Proposal = {
    id: 2,
    categoryID: 1,
    title: "Some proposal 2",
    description: "This is description for proposal 2",
    scores: {
        for: 7265,
        against: 419,
        sustained: 9
    },
    state: ProposalState.IN_PROGRESS,
    date: new Date
}

const proposal3: Proposal = {
    id: 3,
    categoryID: 1,
    title: "Proposal 3",
    description: "This is description for proposal 3",
    scores: {
        for: 11304,
        against: 807,
        sustained: 51
    },
    state: ProposalState.ACCEPTED,
    date: new Date
}

const proposal4: Proposal = {
    id: 4,
    categoryID: 1,
    title: "Proposal 3",
    description: "This is description for proposal 3",
    scores: {
        for: 11304,
        against: 807,
        sustained: 51
    },
    state: ProposalState.DENIED,
    date: new Date
}

// HEALTHCARE proposals
const proposal_hc_1: Proposal = {
    id: 5,
    categoryID: 2,
    title: "Some proposal healthcare",
    description: "This is proposal description",
    scores: {
        for: 800,
        against: 31,
        sustained: 0
    },
    state: ProposalState.IN_PROGRESS,
    date: new Date
}

const proposal_hc_2: Proposal = {
    id: 6,
    categoryID: 2,
    title: "Some proposal healthcare 2",
    description: "This is proposal description",
    scores: {
        for: 18300,
        against: 331,
        sustained: 19
    },
    state: ProposalState.IN_PROGRESS,
    date: new Date
}

const proposal_hc_3: Proposal = {
    id: 7,
    categoryID: 2,
    title: "Healthcare 21",
    description: "This is proposal description for DENIED proposal",
    scores: {
        for: 18300,
        against: 331,
        sustained: 19
    },
    state: ProposalState.DENIED,
    date: new Date
}

const proposal_hc_4: Proposal = {
    id: 8,
    categoryID: 2,
    title: "Healthcare 4",
    description: "This is proposal description which is accepted",
    scores: {
        for: 245931,
        against: 1094,
        sustained: 112
    },
    state: ProposalState.ACCEPTED,
    date: new Date
}

// ECONOMY proposals
const proposal_ec_1: Proposal = {
    id: 9,
    categoryID: 3,
    title: "Some proposal economy",
    description: "This is proposal description",
    scores: {
        for: 146245,
        against: 3207,
        sustained: 110
    },
    state: ProposalState.IN_PROGRESS,
    date: new Date
}

const proposal_ec_2: Proposal = {
    id: 10,
    categoryID: 3,
    title: "Some proposal economy 2",
    description: "This is proposal description",
    scores: {
        for: 2301433,
        against: 302865,
        sustained: 1044
    },
    state: ProposalState.IN_PROGRESS,
    date: new Date
}

const proposal_ec_3: Proposal = {
    id: 11,
    categoryID: 3,
    title: "Economy 232",
    description: "This is proposal description for DENIED proposal",
    scores: {
        for: 3451874,
        against: 609501,
        sustained: 3567
    },
    state: ProposalState.DENIED,
    date: new Date
}

const proposal_ec_4: Proposal = {
    id: 12,
    categoryID: 3,
    title: "Economy 44",
    description: "This is proposal description which is accepted",
    scores: {
        for: 245931,
        against: 1094,
        sustained: 112
    },
    state: ProposalState.ACCEPTED,
    date: new Date
}

// SCIENCE proposals
const proposal_sc_1: Proposal = {
    id: 13,
    categoryID: 4,
    title: "Some proposal science",
    description: "This is proposal description",
    scores: {
        for: 146245,
        against: 3207,
        sustained: 110
    },
    state: ProposalState.IN_PROGRESS,
    date: new Date
}

const proposal_sc_2: Proposal = {
    id: 14,
    categoryID: 4,
    title: "Some proposal science 2",
    description: "This is proposal description",
    scores: {
        for: 2301433,
        against: 302865,
        sustained: 1044
    },
    state: ProposalState.IN_PROGRESS,
    date: new Date
}

const proposal_sc_3: Proposal = {
    id: 15,
    categoryID: 4,
    title: "Science proposal",
    description: "This is proposal description for DENIED proposal",
    scores: {
        for: 3451874,
        against: 609501,
        sustained: 3567
    },
    state: ProposalState.DENIED,
    date: new Date
}

const proposal_sc_4: Proposal = {
    id: 12,
    categoryID: 4,
    title: "Science proposal #14",
    description: "This is proposal description which is accepted",
    scores: {
        for: 245931,
        against: 1094,
        sustained: 112
    },
    state: ProposalState.ACCEPTED,
    date: new Date
}

// SPORTS proposals
const sports_1: Proposal = {
    id: 13,
    categoryID: 5,
    title: "Sports proposals for something",
    description: "This is description of sports proposal #1",
    scores: {
        for: 4814500,
        against: 940112,
        sustained: 511
    },
    state: ProposalState.IN_PROGRESS,
    date: new Date
}

const sports_2: Proposal = {
    id: 14,
    categoryID: 5,
    title: "Sports proposals DENIED",
    description: "This is description of sports proposal #1",
    scores: {
        for: 146921,
        against: 2609711,
        sustained: 509
    },
    state: ProposalState.DENIED,
    date: new Date
}

const sports_3: Proposal = {
    id: 15,
    categoryID: 5,
    title: "Sports proposals ACCEPTED",
    description: "This is description of sports proposal #1",
    scores: {
        for: 3734558,
        against: 1004681,
        sustained: 711
    },
    state: ProposalState.ACCEPTED,
    date: new Date
}

// ENVIRONMENT proposals
const env_1: Proposal = {
    id: 16,
    categoryID: 6,
    title: "Environment proposals for something",
    description: "This is description of sports proposal #1",
    scores: {
        for: 3109763,
        against: 1201500,
        sustained: 704
    },
    state: ProposalState.IN_PROGRESS,
    date: new Date
}

const env_2: Proposal = {
    id: 17,
    categoryID: 6,
    title: "Environment proposals DENIED",
    description: "This is description of sports proposal #1",
    scores: {
        for: 673490,
        against: 5861726,
        sustained: 400
    },
    state: ProposalState.DENIED,
    date: new Date
}

const env_3: Proposal = {
    id: 18,
    categoryID: 6,
    title: "Environment proposals ACCEPTED",
    description: "This is description of sports proposal #1",
    scores: {
        for: 3734558,
        against: 1004681,
        sustained: 711
    },
    state: ProposalState.ACCEPTED,
    date: new Date
}

// CULTURE proposals
const culture_1: Proposal = {
    id: 19,
    categoryID: 7,
    title: "Culture proposals for something",
    description: "This is description of sports proposal #1",
    scores: {
        for: 3109763,
        against: 1201500,
        sustained: 704
    },
    state: ProposalState.IN_PROGRESS,
    date: new Date
}

const culture_2: Proposal = {
    id: 20,
    categoryID: 7,
    title: "Culture proposals DENIED",
    description: "This is description of sports proposal #1",
    scores: {
        for: 673490,
        against: 5861726,
        sustained: 400
    },
    state: ProposalState.DENIED,
    date: new Date
}

const culture_3: Proposal = {
    id: 21,
    categoryID: 7,
    title: "Culture proposals ACCEPTED",
    description: "This is description of sports proposal #1",
    scores: {
        for: 3734558,
        against: 1004681,
        sustained: 711
    },
    state: ProposalState.ACCEPTED,
    date: new Date
}

// OTHER proposals
const other_1: Proposal = {
    id: 22,
    categoryID: 8,
    title: "Proposal for something else",
    description: "This proposal suggests something...",
    scores: {
        for: 3109763,
        against: 1201500,
        sustained: 704
    },
    state: ProposalState.IN_PROGRESS,
    date: new Date
}

const other_2: Proposal = {
    id: 23,
    categoryID: 8,
    title: "Security proposal",
    description: "This proposal suggests something...",
    scores: {
        for: 3109763,
        against: 1201500,
        sustained: 704
    },
    state: ProposalState.IN_PROGRESS,
    date: new Date
}

const other_3: Proposal = {
    id: 24,
    categoryID: 8,
    title: "Another proposal",
    description: "This proposal suggests something...",
    scores: {
        for: 3109763,
        against: 1201500,
        sustained: 704
    },
    state: ProposalState.IN_PROGRESS,
    date: new Date
}

const other_4: Proposal = {
    id: 25,
    categoryID: 8,
    title: "Gardening proposal",
    description: "This proposal suggests something...",
    scores: {
        for: 3109763,
        against: 1201500,
        sustained: 704
    },
    state: ProposalState.IN_PROGRESS,
    date: new Date
}


export function loadDummyProposals(): Proposal[] {
    return [
        proposal1, proposal2, proposal3, proposal4,
        proposal_hc_1, proposal_hc_2, proposal_hc_3, proposal_hc_4,
        proposal_ec_1, proposal_ec_2, proposal_ec_3, proposal_ec_4,
        proposal_sc_1, proposal_sc_2, proposal_sc_3, proposal_sc_4,
        sports_1, sports_2, sports_3,
        env_1, env_2, env_3,
        culture_1, culture_2, culture_3,
        other_1, other_2, other_3, other_4
    ] 
}