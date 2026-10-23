<script lang="ts">
    import type { PageData } from './$types';
    import ProposalState from '$components/ProposalState.svelte';
    import ProposalMoreInfo from '$components/ProposalMoreInfo.svelte';

    let { data }: { data: PageData } = $props();
    let proposal = $derived(data.chosenProposal);
</script>

<header>
    <a href="/{data.selectedCategory.slug}/proposals">
        <img src="/left-arrow-circle.svg" alt="" />
    </a>
    <h1>{ proposal?.title }</h1>
</header>

<ProposalState currentState={proposal?.state} />

<h3>Опис</h3>
<section class="card">
    { proposal?.description }
</section>

<h3>Процењени трошкови</h3>
<section class="card">
    <span>
        { proposal?.budget.toLocaleString() } дин.
    </span>
</section>

<h3>Радна група</h3>
<section class='card'>
    {#if proposal?.members.length === 0}
        <p>
            <span>Нема предложених кандидата.</span>
            <a href="/{data.selectedCategory.slug}/members/new">Предложите кандидате ?</a>
        </p>
    {:else}
        {#each proposal.members as member }
            <a href="/{data.selectedCategory.slug}/members/{member.id}">
                <span>{ member.title }</span>
                <span>{ member.name }</span>
                <span>{ member.lastName }</span>
            </a>
        {/each}
    {/if}
</section>

<ProposalMoreInfo proposal={proposal} />

<style>
    header {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;

        & h1 {
            margin: 0;
        }

        & a {
            margin: 0;
            box-sizing: content-box;
        }

        & img {
            height: 25px;
            margin: 0;

            &:hover {
                scale: 1.2;
            }
        }
    }

    h3 {
        align-self: flex-start;
        text-align: unset;
    }

    section {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        white-space: pre-line;
        field-sizing: content;
    }

    p {
        margin-left: 0.5rem;
    }
</style>