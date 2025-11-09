<script lang="ts">
    let { infavour, against, sustain } = $props();
</script>

<p>Опције гласања</p>
<div>
    <button onclick={infavour}>За 👍</button>
    <button onclick={against}>Против 👎</button>
    <button onclick={sustain}>Уздржано 😶</button>
</div>

<style>
    p {
        text-align: center;
    }

    div {
        display: flex;
        flex-direction: row;
        justify-content: center;

        gap: 0.75rem;
        margin-block: 0.5rem;

        /* border: 1px dotted black; */
    }

    button {
        border-radius: 8px;
        border: 1px solid gray;
        padding: 0.5rem;
        min-width: 80px;
    }

    button:hover {
        scale: 1.05;
    }
</style>
