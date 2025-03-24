<script lang="ts">
    import type { PageProps } from './$types';

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

<p>
    <b>Напомена:</b>
    <span>Платформа је у активној изради и тренутно је у</span>
    <i>ПРОБНОЈ ВЕРЗИЈИ</i>
</p>