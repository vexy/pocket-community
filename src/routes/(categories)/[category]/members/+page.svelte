<script lang="ts">
    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();
</script>

<h1>Радна група за: { data.selectedCategory.title }</h1>

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

<p>
    <b>НАПОМЕНА: </b>
    <span>Личности су фиктивне и служе у илустративне сврхе.</span>
    <span>Свака сличност са стварним особама нема за циљ њихову личну промоцију нити деградацију.</span>
</p>