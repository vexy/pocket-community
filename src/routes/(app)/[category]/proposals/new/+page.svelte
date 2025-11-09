<script lang="ts">
    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();
</script>

<h1>Нови предлог</h1>

<form method="POST" action="?/submitProposal">
    <label for="title">Наслов:</label>
    <input type="text" placeholder="Унесите наслов предлога" id="title" name="title"/>
    
    <label for="details">Опис предлога:</label>
    <textarea class="proposal-details" placeholder="Унесите опис предлога. До 3000 карактера..." id="details" name="description"></textarea>

    <label for="budget">Трошкови:</label>
    <input type="number" placeholder="Унесите процену трошкова" id="budget" name="budget"/>
    
    <label for="people">Изаберите чланове радне групе:</label>
    <div class='people-list'>
        {#each data.categoryMembers as aMember }
            <div class='people-checkmark'>
                <input type="checkbox" id="people" name="people" value={aMember.id}/>{ aMember.name } { aMember.lastName }
            </div>
        {/each}
    </div>

    <button class='submit-button' type="submit">
        <img src="/send.svg" alt="Send proposal" height="30px" />
        <span>Пошаљи</span>
    </button>
</form>

<style>
    form {
        margin-inline: 2.5rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    input {
        padding: 0.5rem;
        border-radius: 5px;
        border: 1px solid gray;
    }

    .proposal-details {
        padding: 0.5rem;
        border-radius: 5px;
        border: 1px solid gray;
        font-family: inherit;
        font-size: inherit;
        text-rendering: inherit;
        min-height: 210px;
    }

    .people-list {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        max-height: 100px;
        margin-block: 0.4rem;
    }

    .people-checkmark {
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        gap: 0.15rem;

        /* TODO: shrink or cutoff excessive content */
        flex-shrink: 1;
        min-width: 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>