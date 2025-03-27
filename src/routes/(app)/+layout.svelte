<script lang="ts">
    import type { Snippet } from 'svelte';
    import type { LayoutData } from './$types';
    import '$styles/main.css'

    let { data, children }: { data: LayoutData, children: Snippet } = $props();

    let category = data.selectedCategory.slug;
</script>

<nav>
    <a href="/">Почетна</a>
    
    <a href="/{category}/proposals">Предлози</a>
    <a href="/{category}/members">Чланови</a>
    <a href="/{category}/candidates">Кандидати</a>
</nav>

<main>
    {@render children()}
</main>

<footer>
    <img src="/info.svg" alt="Important notice" />
    <span>
        <b>НАПОМЕНА:</b>
        <span>
            Сви предлози и личности су фиктивне и служе у илустративне сврхе.
            Свако подударање са свакодневним околностима је случајно.
            Свака сличност са стварним особама нема за циљ њихову личну промоцију нити деградацију.
        </span>
    </span>
</footer>

<style>
    nav {
        width: 100vw;
        padding-block: 5px;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        background-color: #dff5dc;
    }

    a {
        margin-inline: 5px;
        width: fit-content;
        --webkit-line-clamp: 1;
    }

    main {
        flex-grow: 1;
    }

    footer {
        display: flex;
        flex-direction: row;
        align-items: center;

        padding: 5px;
        background-color: #dedddd;
        font-size: smaller;
    }

    img {
        height: 30px;
        margin-inline: 0.5rem;
    }
</style>