import { ProposalState, type Proposal } from "$models/Proposal"
import { loadEconomyMembers, loadHelthcareMembers, loadSchoolMembers, loadSportMembers } from "./dummyMembers"

// SCHOOL dummy proposals
const proposal1: Proposal = {
    id: 1,
    categoryID: 1,
    title: "Увођење предмета ”Кување” у основне школе",
    description: "Увођење предмета који учи основе припреме хране и има за циљ повећање способности особа у свакодневном животу",
    budget: 1450000,
    scores: {
        for: 223456,
        against: 156,
        sustained: 14
    },
    state: ProposalState.IN_PROGRESS,
    date: new Date,
    members: loadSchoolMembers()
}

const proposal2: Proposal = {
    id: 2,
    categoryID: 1,
    title: "Базени у основним и средњим школама",
    description: "Предлог за изградњу пливалишта у свим школским установама у земљи",
    budget: 250000,
    scores: {
        for: 7265,
        against: 419,
        sustained: 9
    },
    state: ProposalState.IN_PROGRESS,
    date: new Date,
    members: loadSchoolMembers()
}

const proposal3: Proposal = {
    id: 3,
    categoryID: 1,
    title: "Промена наставног програма",
    description: "Предлог за промену наставног програма. (Детаљи ће бити приказани овде)",
    budget: 2500000,
    scores: {
        for: 11304,
        against: 807,
        sustained: 51
    },
    state: ProposalState.ACCEPTED,
    date: new Date,
    members: loadSchoolMembers()
}

const proposal4: Proposal = {
    id: 4,
    categoryID: 1,
    title: "Избацивање историје из наставног програма",
    description: "Овај предлог има за циљ уклањање изучавања Србске историје из наставног програма.",
    budget: 700000,
    scores: {
        for: 11304,
        against: 2534809,
        sustained: 81
    },
    state: ProposalState.DENIED,
    date: new Date,
    members: loadSchoolMembers()
}

// HEALTHCARE proposals
const proposal_hc_1: Proposal = {
    id: 5,
    categoryID: 2,
    title: "Смањење листе чекања за операције кука",
    description: "Предлог за смањење времена проведеног до операције....",
    budget: 14750000,
    scores: {
        for: 1245800,
        against: 901,
        sustained: 0
    },
    state: ProposalState.IN_PROGRESS,
    date: new Date,
    members: loadHelthcareMembers()
}

const proposal_hc_2: Proposal = {
    id: 6,
    categoryID: 2,
    title: "Изградња новог породилишта у Сопоту",
    description: "Детаљи предлога ће бити приказани овде...",
    budget: 3850000,
    scores: {
        for: 18300,
        against: 331,
        sustained: 19
    },
    state: ProposalState.IN_PROGRESS,
    date: new Date,
    members: loadHelthcareMembers()
}

const proposal_hc_3: Proposal = {
    id: 7,
    categoryID: 2,
    title: "Набавка 3 нова Гама ножа",
    description: "Предлог за расписивање тендера о набавци Гама ножева од страних произвођача",
    budget: 650000,
    scores: {
        for: 18300,
        against: 331,
        sustained: 19
    },
    state: ProposalState.DENIED,
    date: new Date,
    members: loadHelthcareMembers()
}

const proposal_hc_4: Proposal = {
    id: 8,
    categoryID: 2,
    title: "Дечије клинике",
    description: "Предлог за повећање броја специјализованих дечијих клиника у целој земљи",
    budget: 1000000,
    scores: {
        for: 245931,
        against: 1094,
        sustained: 112
    },
    state: ProposalState.ACCEPTED,
    date: new Date,
    members: loadHelthcareMembers()
}

// ECONOMY proposals
const proposal_ec_1: Proposal = {
    id: 9,
    categoryID: 3,
    title: "Смањење пореских стопа",
    description: "Предлог за растерећење пореских давања у свим економским делатностима",
    budget: 2000000,
    scores: {
        for: 146245,
        against: 3207,
        sustained: 110
    },
    state: ProposalState.IN_PROGRESS,
    date: new Date,
    members: loadEconomyMembers()
}

const proposal_ec_2: Proposal = {
    id: 10,
    categoryID: 3,
    title: "Порекло имовине",
    description: "Увођење строжијих правила о пореклу имовине...",
    budget: 0,
    scores: {
        for: 2301433,
        against: 302865,
        sustained: 1044
    },
    state: ProposalState.IN_PROGRESS,
    date: new Date,
    members: loadEconomyMembers()
}

const proposal_ec_3: Proposal = {
    id: 11,
    categoryID: 3,
    title: "Повећање пореских стопа",
    description: "Предлог за повећање пореских стопа са 10% на 15%",
    budget: 0,
    scores: {
        for: 894561,
        against: 3254911,
        sustained: 2011
    },
    state: ProposalState.DENIED,
    date: new Date,
    members: loadEconomyMembers()
}

const proposal_ec_4: Proposal = {
    id: 12,
    categoryID: 3,
    title: "Увођење задруга",
    description: "Предлог за увођење задруга у пољопривреди",
    budget: 3170000,
    scores: {
        for: 245931,
        against: 1094,
        sustained: 112
    },
    state: ProposalState.ACCEPTED,
    date: new Date,
    members: loadEconomyMembers()
}

// SCIENCE proposals
const proposal_sc_1: Proposal = {
    id: 13,
    categoryID: 4,
    title: "Научна конференција о новим методама лечења рака",
    description: "Предлог за организовање међународне конференције у Вршцу, која окупља лекаре из разних земаља...",
    budget: 5000000,
    scores: {
        for: 146245,
        against: 3207,
        sustained: 110
    },
    state: ProposalState.IN_PROGRESS,
    date: new Date,
    members: []
}

const proposal_sc_2: Proposal = {
    id: 14,
    categoryID: 4,
    title: "Курсеви о нано технологијама",
    description: "Предлог за организовање учесталих курсева на тему развоја технологија у нано скали.",
    budget: 280000,
    scores: {
        for: 2301433,
        against: 302865,
        sustained: 1044
    },
    state: ProposalState.IN_PROGRESS,
    date: new Date,
    members: []
}

const proposal_sc_3: Proposal = {
    id: 15,
    categoryID: 4,
    title: "Наставак постојања Академије наука",
    description: "У овом предлогу покушавамо да сачувамо постојање Академије наука",
    budget: 0,
    scores: {
        for: 14506,
        against: 4905761,
        sustained: 58010
    },
    state: ProposalState.DENIED,
    date: new Date,
    members: []
}

const proposal_sc_4: Proposal = {
    id: 16,
    categoryID: 4,
    title: "Неки научни предлог...",
    description: "Детаљи предлога су приказани овде...",
    budget: 0,
    scores: {
        for: 245931,
        against: 1094,
        sustained: 112
    },
    state: ProposalState.ACCEPTED,
    date: new Date,
    members: []
}

// SPORTS proposals
const sports_1: Proposal = {
    id: 17,
    categoryID: 5,
    title: "Изградња кошаркашких терена",
    description: "Предлог за изградњу нових кошаркашких терена",
    budget: 900000,
    scores: {
        for: 4814500,
        against: 940112,
        sustained: 511
    },
    state: ProposalState.IN_PROGRESS,
    date: new Date,
    members: loadSportMembers()
}

const sports_2: Proposal = {
    id: 18,
    categoryID: 5,
    title: "Укидање стаза за трчање",
    description: "Предлог за уклањање стаза за трчање",
    budget: 2350000,
    scores: {
        for: 5803,
        against: 2911680,
        sustained: 9
    },
    state: ProposalState.DENIED,
    date: new Date,
    members: loadSportMembers()
}

const sports_3: Proposal = {
    id: 19,
    categoryID: 5,
    title: "Организација светског првенства у уметничком клизању",
    description: "Предлог за организовање међународног такмичења у уметничком клизању у Јагодини",
    budget: 2750800,
    scores: {
        for: 3734558,
        against: 1004681,
        sustained: 711
    },
    state: ProposalState.ACCEPTED,
    date: new Date,
    members: loadSportMembers()
}

const sports_4: Proposal = {
    id: 20,
    categoryID: 5,
    title: "Организација светског првенства у фудбалу",
    description: "Кандидатура за организовање светског фудбалског првенства у Србији",
    budget: 14250000,
    scores: {
        for: 3734558,
        against: 1004681,
        sustained: 711
    },
    state: ProposalState.ACCEPTED,
    date: new Date,
    members: loadSportMembers()
}

// ENVIRONMENT proposals
const env_1: Proposal = {
    id: 21,
    categoryID: 6,
    title: "Нуклеарни отпад",
    description: "Предлог за елиминацију нуклеарног отпада из земље...",
    budget: 5680000,
    scores: {
        for: 3109763,
        against: 201500,
        sustained: 704
    },
    state: ProposalState.IN_PROGRESS,
    date: new Date,
    members: []
}

const env_2: Proposal = {
    id: 22,
    categoryID: 6,
    title: "Пројекат ”Јакад”",
    description: "Предлог за отпочињање ископавања волфрама из рудника Србије",
    budget: 8000000,
    scores: {
        for: 14206,
        against: 4380751,
        sustained: 400
    },
    state: ProposalState.DENIED,
    date: new Date,
    members: []
}

const env_3: Proposal = {
    id: 23,
    categoryID: 6,
    title: "Увођење строжијих еколошких стандарда",
    description: "Предлог за увођење строжијих еколошких норми у областима прераде метала.",
    budget: 0,
    scores: {
        for: 3734558,
        against: 1004681,
        sustained: 711
    },
    state: ProposalState.ACCEPTED,
    date: new Date,
    members: []
}

// CULTURE proposals
const culture_1: Proposal = {
    id: 24,
    categoryID: 7,
    title: "Снимање ТВ серије о Светом Сави",
    description: "Предлог за отпочињање снимања ТВ серије у више сезона...",
    budget: 2500000,
    scores: {
        for: 3109763,
        against: 1201500,
        sustained: 704
    },
    state: ProposalState.IN_PROGRESS,
    date: new Date,
    members: []
}

const culture_2: Proposal = {
    id: 25,
    categoryID: 7,
    title: "Изградња новог позоришта у Краљеву",
    description: "Предлог за изградњу новог позоришта у центру Краљева...",
    budget: 3000000,
    scores: {
        for: 5734901,
        against: 309,
        sustained: 6
    },
    state: ProposalState.ACCEPTED,
    date: new Date,
    members: []
}

const culture_3: Proposal = {
    id: 26,
    categoryID: 7,
    title: "Реконструкција Културног центра у Ваљеву",
    description: "Предлог за унапређење услова у области културе у Ваљеву",
    budget: 3000000,
    scores: {
        for: 3734558,
        against: 1004681,
        sustained: 711
    },
    state: ProposalState.IN_PROGRESS,
    date: new Date,
    members: []
}

// OTHER proposals
const other_1: Proposal = {
    id: 27,
    categoryID: 8,
    title: "Уређење паркова за псе",
    description: "Предлог за побољшање паркова за кућне љубимце",
    budget: 750000,
    scores: {
        for: 3109763,
        against: 1201500,
        sustained: 704
    },
    state: ProposalState.IN_PROGRESS,
    date: new Date,
    members: []
}

const other_2: Proposal = {
    id: 28,
    categoryID: 8,
    title: "Увођење борилачких вештина у основне школе",
    description: "Детаљи предлога су приказани овде....",
    budget: 250000,
    scores: {
        for: 3109763,
        against: 1201500,
        sustained: 704
    },
    state: ProposalState.IN_PROGRESS,
    date: new Date,
    members: []
}

const other_3: Proposal = {
    id: 29,
    categoryID: 8,
    title: "Реконструкција Ботаничког центра у Чачку",
    description: "Предлог за реконструкцију....",
    budget: 710000,
    scores: {
        for: 3109763,
        against: 1201500,
        sustained: 704
    },
    state: ProposalState.IN_PROGRESS,
    date: new Date,
    members: []
}


export function loadDummyProposals(): Proposal[] {
    return [
        proposal1, proposal2, proposal3, proposal4,
        proposal_hc_1, proposal_hc_2, proposal_hc_3, proposal_hc_4,
        proposal_ec_1, proposal_ec_2, proposal_ec_3, proposal_ec_4,
        proposal_sc_1, proposal_sc_2, proposal_sc_3, proposal_sc_4,
        sports_1, sports_2, sports_3, sports_4,
        env_1, env_2, env_3,
        culture_1, culture_2, culture_3,
        other_1, other_2, other_3
    ] 
}