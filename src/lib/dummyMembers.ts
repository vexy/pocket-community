import { MemberStatus, type Member } from "$models/Member";

// SCHOOL members
const member_sch: Member = {
    id: 1,
    categoryID: 1,
    title: "",
    name: "Иван",
    lastName: "Гојковић",
    biography: "Учитељ географије у ОШ Милош Обилић у Зајечару. Предлагач ”ротационог система” у основним школама.",
    status: MemberStatus.ACTIVE
}

const member_sch2: Member = {
    id: 2,
    categoryID: 1,
    title: "проф. др.",
    name: "Милица",
    lastName: "Пешић",
    biography: "Редовни професор на факултету Драмских уметности универзитета у Београду. Сарадник у развоју младих талената у области културе.",
    status: MemberStatus.ACTIVE
}
const member_sch3: Member = {
    id: 3,
    categoryID: 1,
    title: "проф. др.",
    name: "Михајло",
    lastName: "Јанковић",
    biography: "Универзитетски професор у пензији. Провео радну каријеру предавајући на универзитету у Крагујевцу.",
    status: MemberStatus.ACTIVE
}

const member_sch4: Member = {
    id: 11,
    categoryID: 1,
    title: "педагог",
    name: "Ана",
    lastName: "Павловић",
    biography: "Стручњак из области педагогије средњошколаца. Дипломирала дефектологију на универзитету у Нишу. Предлагач другачијег система школовања у основним школама.",
    status: MemberStatus.ACTIVE
}

const member_sch5: Member = {
    id: 12,
    categoryID: 1,
    title: "психолог",
    name: "Никола",
    lastName: "Ивановић",
    biography: "Дипломирани психолог и сарадник у настави у средној школи Никола Тесла у Крагујевцу. Залаже се за другачији систем школства у нашој земљи.",
    status: MemberStatus.ACTIVE
}

const member_sch6: Member = {
    id: 13,
    categoryID: 1,
    title: "проф. др.",
    name: "Златко",
    lastName: "Милеуснић",
    biography: "Редовни професор Ракетног наоружања на катедри Машинског факултета у Београду. Предавач на више интернационалних форума из области индустријске производње артиљеријског оружја.",
    status: MemberStatus.ACTIVE
}

const member_sch7: Member = {
    id: 14,
    categoryID: 1,
    title: "др.",
    name: "Божидар",
    lastName: "Арсенијевић",
    biography: "Доктор наука у области Информационих система. Публиковао више научних радова на тему машинског учења.",
    status: MemberStatus.ACTIVE
}

// HEALTHCARE proposals
const member_hc1: Member = {
    id: 4,
    categoryID: 2,
    title: "др.",
    name: "Павле",
    lastName: "Аксентијевић",
    biography: "Кардиохирург у болници Драгиша Мишовић. Вишедеценијско искуство у области кардиохирургије и предавач на тему ендоскопске хирургије.",
    status: MemberStatus.ACTIVE
}

const member_hc2: Member = {
    id: 5,
    categoryID: 2,
    title: "др.",
    name: "Јована",
    lastName: "Ивановић",
    biography: "Примаријус хематологије. Публиковала више научних радова на тему хематологије. Део управног одбора опште болнице у Суботици.",
    status: MemberStatus.ACTIVE
}
const member_hc3: Member = {
    id: 6,
    categoryID: 2,
    title: "др.",
    name: "Маја",
    lastName: "Анђелковић",
    biography: "Акушер у болници у Крагујевцу. Члан радне групе за унапређење целокупног здравственог система.",
    status: MemberStatus.ACTIVE
}

const member_hc4: Member = {
    id: 15,
    categoryID: 2,
    title: "проф. др.",
    name: "Ивона",
    lastName: "Марјановић",
    biography: "Предовни професор на Медицинском факултету у Београду. Члан интернационалне групе доктора медицине из области лечења деце.",
    status: MemberStatus.ACTIVE
}

// ECONOMY members
const member_ecc1: Member = {
    id: 7,
    categoryID: 3,
    title: "",
    name: "Аница",
    lastName: "Милошевић",
    biography: "Узгајивач воћа из околине Новог Сада",
    status: MemberStatus.ACTIVE
}

const member_ecc2: Member = {
    id: 8,
    categoryID: 3,
    title: "",
    name: "Петар",
    lastName: "Јурковић",
    biography: "Економиста из области јавних финансија",
    status: MemberStatus.ACTIVE
}

const member_ecc3: Member = {
    id: 9,
    categoryID: 3,
    title: "",
    name: "Лазар",
    lastName: "Цветковић",
    biography: "Извођач грађевинских радова",
    status: MemberStatus.ACTIVE
}

const member_ecc4: Member = {
    id: 9,
    categoryID: 3,
    title: "",
    name: "Јана",
    lastName: "Златановић",
    biography: "Предузетник у области комуникација и медија. 7 година искуства у области организације јавних скупова.",
    status: MemberStatus.ACTIVE
}

// SPORTS members
const member_sp1: Member = {
    id: 16,
    categoryID: 5,
    title: "",
    name: "Елеонора",
    lastName: "Петровић",
    biography: "Бивша атлетичарарка и тренер. Члан радне групе за унапређење спортских активности у основним школама.",
    status: MemberStatus.ACTIVE
}

const member_sp2: Member = {
    id: 17,
    categoryID: 5,
    title: "",
    name: "Никола",
    lastName: "Бранковић",
    biography: "Професионални спортиста. Освајач више медаља на међународним такмичењима у области стрељаштва",
    status: MemberStatus.ACTIVE
}

const member_sp3: Member = {
    id: 18,
    categoryID: 5,
    title: "",
    name: "Горан",
    lastName: "Стојковић",
    biography: "Бициклиста. Предлагач уређења бициклистичких стаза широм земље.",
    status: MemberStatus.ACTIVE
}

// ADD OTHER MEMBERS LATER...

export function loadDummyMembers(): Member[] {
    return [
        member_sch, member_sch2, member_sch3, member_sch4, member_sch5, member_sch6, member_sch7,
        member_hc1, member_hc2, member_hc3, member_hc4,
        member_ecc1, member_ecc2, member_ecc3, member_ecc4,
        member_sp1, member_sp2, member_sp3,
    ]
}

export function loadSchoolMembers(): Member[] {
    return [
        member_sch, member_sch2, member_sch3, member_sch4, member_sch5, member_sch6, member_sch7
    ]
}

export function loadHelthcareMembers(): Member[] {
    return [
        member_hc1, member_hc2, member_hc3, member_hc4
    ]
}

export function loadEconomyMembers(): Member[] {
    return [
        member_ecc1, member_ecc2, member_ecc3, member_ecc4
    ]
}

export function loadSportMembers(): Member[] {
    return [
        member_sp1, member_sp2, member_sp3
    ]
}
