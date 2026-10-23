<script lang="ts">
    import { colorFor, statusString } from "$lib/ProposalService";
    import { ProposalState } from "$models/Proposal";

    let { currentState } : { currentState: ProposalState } = $props()

    const stuff = Object.entries(ProposalState).filter(([key]) => isNaN(Number(key)));
</script>

<section>
    {#each stuff as [_, value] }
        <div
            data-active={value === currentState}
            data-colorHex={colorFor(value)}
        >
            {statusString(value)}
        </div>
    {/each}
</section>

<style>
    section {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        margin-block: 15px;
        gap: 0.25rem;

        background: #f7f9fa;
        border-radius: 5px;
    }

    div {
        margin: 10px;
        padding: 10px;
        border-radius: 10px;
        background: #999999;
        color: white;
    }

    div[data-active='true'] {
        background: attr(data-colorHex type(<color>));
    }
</style>