<script lang="ts">
    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();
    let proposal = data.chosenProposal;
</script>

<h1>{ proposal?.title }</h1>

<section>
    { proposal?.description }
</section>

<summary>
    <span>Za: { proposal?.scores.for.toLocaleString() }</span>
    <span>Protiv: { proposal?.scores.against.toLocaleString() }</span>
    <span>Uzdrzano: { proposal?.scores.sustained.toLocaleString() }</span>
</summary>

<p>Датум: { proposal?.date.toLocaleDateString() }</p>

<style>
    h1 {
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
</style>