<script lang="ts">
    import { ProposalState, type Proposal } from "$models/Proposal";
    import VoteButtons from "$components/VoteButtons.svelte";

    let { proposal } : { proposal: Proposal } = $props();

    const currentState = $derived(proposal.state);

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

    // Returns true if proposal is not yet in VOTING state
    function isActiveProposal(): boolean {
        if (Number(currentState) < 2) {
            return true;
        } else {
            return false;
        }
    }
</script>

<dialog id='dialogBox' popover="manual">
    <h3>Хвала што сте гласали !</h3>
    <button commandfor="dialogBox" command='close'>Затвори</button>
</dialog>

<!-- FIGURE OUT DIFFERENT LAYOUTS DEPENDING ON THE PROPOSAL STATE -->

{#if currentState === ProposalState.IN_VOTING}
    <h3>Гласање је у току</h3>
    <VoteButtons
        infavour={() => processVote(0)}
        against={() => processVote(1)}
        sustain={() => processVote(2)}
    />
{:else}
    {#if isActiveProposal()}
        <h4>Више информација ће бити приказано касније</h4>
    {:else}
        <h4>Резултати гласања:</h4>
        <div class='card vote-results'>
            <span>За:</span> <span class='vote-count'><b>{ proposal?.scores.for.toLocaleString() }</b></span>
            <span>Против:</span> <span class='vote-count'><b>{ proposal?.scores.against.toLocaleString()}</b></span>
            <span>Уздржано:</span> <span class='vote-count'><b>{ proposal?.scores.sustained.toLocaleString()}</b></span>
        </div>
    {/if}
{/if}

<style>
    .vote-results {
        align-self: center;

        margin-block: 2rem;
        display: inline-grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 1.25rem;
    }

    .vote-count {
        justify-self: flex-end;
    }
</style>