<script lang="ts">
    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();
</script>

<h1>Листа кандидата за радну групу: { data.selectedCategory.title }</h1>


<section>
    <ul>
        {#each data.candidates as candidate }    
        <li>
            <a href="/{data.selectedCategory.slug}/members/{candidate.id}">
                <span>{ candidate.title }</span>
                <span>{ candidate.name }</span>
                <span>{ candidate.lastName }</span>
            </a>
        </li>
        {/each}
    </ul>

    <p>Укупно кандидата: { data.candidates.length }</p>

    <a class="button-link" href="/{data.selectedCategory.slug}/members/new">Предложите кандидата</a>
</section>


<style>
    section {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
