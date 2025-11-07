<script lang="ts">
    import type { Snippet } from 'svelte';
    import type { LayoutData } from './$types';
    import '$styles/main.css'
    import Footer from '$components/Footer.svelte';

    let { data, children }: { data: LayoutData, children: Snippet } = $props();

    let category = $derived(data.selectedCategory.slug);
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

<Footer isLeading={false}/>

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
</style>