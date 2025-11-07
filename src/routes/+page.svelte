<script lang="ts">
    import type { LayoutProps } from './$types';
    import '$styles/main.css'
    import Footer from '$components/Footer.svelte';

    const { data }: LayoutProps = $props();
</script>

<img
    class="logo"
    src="/favicon.svg" 
    alt="Community logo"
    width="175px"
    height="175px"
/>

<h1>Добродошли у вашу заједницу</h1>

<section>
    <p>Изаберите категорију од интереса:</p>

    <ul>
        {#each data.allCategories as category }
            <li>
                <span>{category.favicon}</span>
                <a href="/{category.slug}/proposals">{category.title}</a>
            </li>
        {/each}
    </ul>

    <a class='learn-more' href="/learn-more">
        <img src="/learn-more.svg" alt="Learn more" height="20px" />
        <span>Сазнај више о платформи</span>
    </a>
</section>

<Footer isLeading={true}/>

<style>
    .logo {
        margin-top: 2.5rem;
        align-self: center;
    }

    section {
        align-self: center;
        flex-grow: 1;
    }

    .learn-more {
        margin-top: 2.5rem;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        text-decoration: none;
        gap: 0.35rem;
    }

    .learn-more:hover {
        scale: 1.1;
    }
</style>