<script lang="ts">
    const { link, image, message }: {link: string, image: string, message: string} = $props();
</script>

<a class="button-link" href={link}>
    <img src={`/${image}.svg`} alt="Action" />
    <span>{message}</span>
</a>

<style>
    .button-link {
        padding: 0.45rem;
        color: white;
        background-color: #52a293;
        border-radius: 10px;

        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.5rem;
        margin-inline: 0.25rem;
    }

    .button-link > img {
        height: 30px;
    }

    .button-link:hover {
        scale: 1.05;
    }
</style>