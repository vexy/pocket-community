<script lang="ts">
    const { totalCount }: {totalCount: number} = $props();
</script>

<p>Укупно чланова: <b>{ totalCount }</b></p>
<i>(кликните на кандидата за добијање више информација)</i>

<style>
    p {
        margin: 0;
        margin-top: 1rem;
    }

    i {
        text-align: center;
        margin-bottom: 2.25rem;
    }
</style>