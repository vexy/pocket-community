<script lang="ts">
    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();
</script>

<h1>Листа кандидата за радну групу: { data.selectedCategory.title }</h1>

<a href="/{data.selectedCategory.slug}/members/new">+ Нови кандидат</a>

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
