<script lang="ts">
    import type { PageData } from './$types';
    import { MemberStatus } from '$models/Member';
    import VoteButtons from '$components/VoteButtons.svelte';

    let { data }: { data: PageData } = $props();

    let voteOption = $state(0);

    function processVote(option: number) {
        voteOption = option;

        showDialog(true);
    }

    function showDialog(flag: boolean) {
        const dialog = document.getElementById("dialogBox") as HTMLDialogElement

        if(flag) {
            dialog.showModal();
        } else {
            dialog.close();
        }
    }
</script>

<dialog id="dialogBox">
    <p>Хвала што сте гласали !</p>
    <p>Ваш избор је: {voteOption}</p>

    <button onclick={() => showDialog(false)}>Затвори</button>
</dialog>

<img class='candidate-image' src="/person.svg" alt="Person profile"/>

<h2>
    <span>{ data.memberData?.title }</span>
    <span>{ data.memberData?.name }</span>
    <span>{ data.memberData?.lastName }</span>
</h2>

<summary>
    <div>
        <h3>Радна биографија</h3>
        { data.memberData?.biography }
    </div>

    {#if data.memberData?.status === MemberStatus.ACTIVE}
        <p>Члан радне групе у категорији: <i>{ data.selectedCategory.title }</i></p>
    {:else}
        <p>Кандидат радне групе у категорији: <i>{ data.selectedCategory.title }</i></p>

        <VoteButtons
            infavour={() => processVote(0)}
            against={() => processVote(1)}
            sustain={() => processVote(2)}
        />
    {/if}
</summary>

<style>
    summary {
        margin-left: 1.25rem;
    }

    div > h3 {
        text-align: unset;
        margin-bottom: 15px;
    }
</style>