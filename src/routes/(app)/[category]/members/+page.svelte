<script lang="ts">
    import ActionButton from '$components/ActionButton.svelte';
    import ListSummary from '$components/ListSummary.svelte';
    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();
</script>

<h1>Чланови радне групе у области: { data.selectedCategory.title }</h1>

<section>
    <ul>
        {#each data.members as member }
            <li>
                <a href="/{data.selectedCategory.slug}/members/{member.id}">
                    <span>{ member.title }</span>
                    <span>{ member.name }</span>
                    <span>{ member.lastName }</span>
                </a>
            </li>
        {/each}
    </ul>

    <ListSummary totalCount={data.members.length} />

    <ActionButton
        link={`/${data.selectedCategory.slug}/members/new`}
        image={'add-person'}
        message={'Додајте члана'}
    />
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>