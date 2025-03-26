<script lang="ts">
    let { infavour, against, sustain } = $props();
</script>

<div>
    <button onclick={infavour}>За 👍</button>
    <button onclick={against}>Против 👎</button>
    <button onclick={sustain}>Уздржано 😶</button>
</div>

<style>
    div {
        display: flex;
        flex-direction: row;
        justify-content: center;

        gap: 0.75rem;
        margin-block: 0.75rem;
    }
</style>
