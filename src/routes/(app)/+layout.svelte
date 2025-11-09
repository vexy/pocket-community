<script lang="ts">
    import type { Snippet } from 'svelte';
    import type { LayoutData } from './$types';
    import '$styles/main.css'
    import Footer from '$components/Footer.svelte';
    import Navigation from '$components/Navigation.svelte';

    let { data, children }: { data: LayoutData, children: Snippet } = $props();

    const categoryObject = $derived(data.selectedCategory);
</script>

<Navigation category={categoryObject} />

<main>
    {@render children()}
</main>

<Footer isLeading={false}/>

<style>
    main {
        flex-grow: 1;
    }
</style>