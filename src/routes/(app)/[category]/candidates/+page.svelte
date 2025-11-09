<script lang="ts">
    import ActionButton from '$components/ActionButton.svelte';
    import ListSummary from '$components/ListSummary.svelte';
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

    <ListSummary totalCount={data.candidates.length} />

    <ActionButton 
        link={`/${data.selectedCategory.slug}/members/new`}
        image={'add-person'}
        message={'Предложите кандидата'}
    />
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
