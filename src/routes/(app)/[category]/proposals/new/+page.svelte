<script lang="ts">
    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();
</script>

<section>
    <h1>Нови предлог</h1>
    <h4>Категорија: { data.selectedCategory.title }</h4>

    <form method="POST" action="?/submitProposal">
        <label for="title">Наслов:</label>
        <input type="text" placeholder="Унесите наслов предлога" id="title" name="title"/>
        
        <label for="details">Опис предлога:</label>
        <textarea placeholder="Унесите опис предлога. До 3000 карактера..." class="proposal-details" id="details" name="description"></textarea>

        <button type="submit">Пошаљи</button>
    </form>
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    form {
        display: flex;
        flex-direction: column;
        width: 80%;
        gap: 0.5rem;
    }

    button {
        align-self: center;
    }

    .proposal-details {
        font-family: inherit;
        font-size: inherit;
        text-rendering: inherit;
        min-height: 250px;
    }
</style>