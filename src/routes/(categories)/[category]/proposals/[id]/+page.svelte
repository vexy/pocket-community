<script lang="ts">
    import type { PageData } from './$types';
    import VoteButtons from '$components/VoteButtons.svelte';
    import { statusString } from '$lib/ProposalService';
    import { ProposalState } from '$models/Proposal';

    let { data }: { data: PageData } = $props();
    let proposal = data.chosenProposal;

    let voteOption = $state(0);

    function processVote(option: number) {
        //TODO: Process vote for this proposal
        voteOption = option;
        
        //show dummy alert dialog
        showDialog(true)
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

<h1>{ proposal?.title }</h1>
{#if proposal?.state != ProposalState.IN_PROGRESS}
    <h4>Статус: { statusString(proposal!.state) }</h4>
    <p style="text-align: center">Датум: { proposal?.date.toLocaleDateString() }</p>
{/if}

<section>
    { proposal?.description }
</section>

<summary>
    {#if proposal?.state === ProposalState.IN_PROGRESS}
        <VoteButtons
            infavour={() => processVote(0)}
            against={() => processVote(1)}
            sustain={() => processVote(2)}
        />
    {:else}
        <div>
            <span>За: { proposal?.scores.for.toLocaleString() }</span>
            <span>Против: { proposal?.scores.against.toLocaleString() }</span>
            <span>Уздржано: { proposal?.scores.sustained.toLocaleString() }</span>
        </div>
    {/if}
</summary>

<style>
    h1, h4 {
        text-align: center;
    }

    section {
        min-height: 250px;
        border: 0.5px solid black
    }

    summary {
        margin-top: 2.5rem;
        text-align: center;
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
</style>