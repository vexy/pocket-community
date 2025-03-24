<script lang="ts">
    import type { Snippet } from 'svelte';
    import type { LayoutData } from './$types';

    let { data, children }: { data: LayoutData, children: Snippet } = $props();

    let category = data.selectedCategory.slug;
</script>

<nav>
    <a href="/">Назад</a>
    
    <a href="/{category}/proposals">Предлози</a>
    <a href="/{category}/historical">Усвојени предлози</a>
    <a href="/{category}/members">Чланови</a>
    <a href="/{category}/candidates">Кандидати</a>
</nav>

{@render children()}

<style>
    nav {
        min-width: 100vw;

        display: flex;
        flex-direction: row;

        background-color: beige;
    }
</style>