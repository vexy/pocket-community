<script lang="ts">
    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();
</script>

<h1>Радна група за: { data.selectedCategory.title }</h1>

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

    <p>Укупно чланова: { data.members.length }</p>

    <a class="button-link" href="/{data.selectedCategory.slug}/members/new">Додајте члана</a>
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>