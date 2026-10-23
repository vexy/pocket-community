<script lang="ts">
    import type { Category } from "$models/Category";

    const { category } : { category: Category } = $props();
</script>

<nav>
    <header>
        <a href="/">
            <img src="/favicon.svg" alt="Platform logo" height="30px" />
        </a>
        <h3>{category.title}</h3>
    </header>

    <section class='category-actions'>
        <a href="/{category.slug}/proposals">Предлози</a>
        <a href="/{category.slug}/members">Чланови</a>
        <a href="/{category.slug}/candidates">Кандидати</a>
    </section>
</nav>

<style>
    nav {
        width: 100vw;
        padding-block: 10px;
        position: sticky;
        top: 0;

        display: flex;
        flex-direction: column;
        gap: 0.25rem;

        background: var(--nav-background);
    }

    h3 {
        height: fit-content;
        margin-block: 0.25rem;
        color: white
    }

    header {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.65rem;
    }

    .category-actions {
        display: flex;
        flex-direction: row;
        justify-content: space-around;

        a {
            padding: 5px;
            text-decoration: none;
            text-transform: uppercase;
            margin-inline: 5px;
            color: white;
            border-radius: 5px;
            --webkit-line-clamp: 1;

            transition: 0.15s ease-out;

            &:hover {
                transform: translateY(-10%);
                background: var(--nav-hover);
            }
        }
    }
</style>