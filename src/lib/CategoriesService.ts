import type { Category } from "$models/Category";

//TODO: Pull this from some backend or so
const schools: Category = {
    id: 1,
    title: "Школство",
    slug: "schools",
    favicon: "📚"
}

const healthcare: Category = {
    id: 2,
    title: "Здравство",
    slug: "healthcare",
    favicon: "🏥"
}

const economy: Category = {
    id: 3,
    title: "Привреда и пољопривреда",
    slug: "economy",
    favicon: "🪙"
}

const science: Category = {
    id: 4,
    title: "Наука",
    slug: "science",
    favicon: "🔬"
}

const sports: Category = {
    id: 5,
    title: "Спорт",
    slug: "sports",
    favicon: "⚽️🏀"
}

const environment: Category = {
    id: 6,
    title: "Животна средина",
    slug: "environment",
    favicon: "🏞️"
}

const culture: Category = {
    id: 7,
    title: "Култура",
    slug: "culture",
    favicon: "🎭"
}

const other: Category = {
    id: 8,
    title: "Остало",
    slug: "other",
    favicon: "",
}

export function getAllCategories(): Category[] {
    return [
        schools,
        healthcare,
        economy,
        science,
        sports,
        environment,
        culture,
        other
    ]
}

//TODO: Refactor if needed
export function getCategoryBySlug(slug: string): Category {
    let chosenCategory: Category;

    switch (slug) {
        case "schools":
            chosenCategory = schools;
            break;
        case 'healthcare':
            chosenCategory = healthcare;
            break;
        case 'economy':
            chosenCategory = economy;
            break;
        case 'science':
            chosenCategory = science;
            break;
        case 'sports':
            chosenCategory = sports;
            break;
        case 'environment':
            chosenCategory = environment;
            break;
        case 'culture':
            chosenCategory = culture;
            break;
        case 'other':
            chosenCategory = other
            break;
    }

    return chosenCategory;
}