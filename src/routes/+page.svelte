<script lang="ts">
    import type { PageProps } from './$types';
    import '$styles/main.css'

    let { data }: PageProps = $props();
</script>

<h1>Добродошли у вашу заједницу</h1>

<section>
    <p>Изаберите категорију:</p>

    <ul>
        {#each data.allCategories as category }
            <li>
                <span>{category.favicon}</span>
                <a href="/{category.slug}/proposals">{category.title}</a>
            </li>
        {/each}
    </ul>
</section>

<footer>
    <img src="/info.svg" alt="Info" />
    <span>
        <b>Напомена:</b>
        <span>Платформа је у активној изради и тренутно је у</span>
        <i>ПРОБНОЈ ВЕРЗИЈИ</i><br>
        <span>Унос нових података или интеракција са деловима сајта неће бити трајно запамћена</span>
    </span>
</footer>

<style>
    section {
        align-self: center;
        flex-grow: 1;
    }

    footer {
        display: flex;
        align-items: center;
        padding: 10px;
        background-color: bisque;
    }

    img {
        height: 40px;
        margin-right: 1rem;
    }
</style>