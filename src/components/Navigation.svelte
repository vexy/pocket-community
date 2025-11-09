<script lang="ts">
    import type { Category } from "$models/Category";

    const { category } : { category: Category } = $props();
</script>

<nav>
    <div class='lead-navigation'>
        <!-- TODO: convert into navigation link with platform logo -->
        <a href="/">
            <img src="/favicon.svg" alt="Platform logo" height="30px" />
        </a>
        <h3>Тренутна категорија: <i>{category.title}</i></h3>
    </div>

    <div class='category-actions'>
        <a href="/{category.slug}/proposals">Предлози</a>
        <a href="/{category.slug}/members">Чланови</a>
        <a href="/{category.slug}/candidates">Кандидати</a>
    </div>
</nav>

<style>
    nav {
        width: 100vw;
        padding-top: 10px;

        display: flex;
        flex-direction: column;
        gap: 0.3rem;

        /* background: linear-gradient(0deg,rgba(42, 155, 76, 1) 0%, rgba(87, 199, 133, 1) 50%); */
        background: rgb(36, 152, 36);
    }

    h3 {
        margin-block: 0.25rem;
        color: white
    }

    .lead-navigation {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.65rem;
    }

    .category-actions {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        padding-bottom: 7px;
        /* background-color: #a4de9c; */
    }

    a {
        color: white;
        margin-inline: 5px;
        width: fit-content;
        --webkit-line-clamp: 1;
    }
</style>