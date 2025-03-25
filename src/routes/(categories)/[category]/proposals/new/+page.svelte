<script lang="ts">
    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();
</script>

<h1>New proposal for: { data.selectedCategory.title }</h1>

<form method="POST" action="?/submitProposal">
    <label for="title">Унесите наслов предлога</label>
    <input type="text" placeholder="Наслов" id="title" name="title"/>
    
    
    <label for="details">Унесите опис предлога</label>
    <input type="text" placeholder="Опис" class="proposal-details" id="details" name="description"/>

    <button type="submit">Пошаљи</button>
</form>

<style>
    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .proposal-details {
        min-height: 300px;
    }
</style>