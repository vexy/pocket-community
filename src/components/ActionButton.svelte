<script lang="ts">
    const { link, image, message }: {link: string, image: string, message: string} = $props();
</script>

<a href={link} class="card">
    <img src={`/${image}.svg`} alt="Action" />
    <span>{message}</span>
</a>

<style>
    a {
        padding: 0.45rem;
        color: white;
        background-color: var(--action-button);
        border-radius: 10px;

        text-decoration: none;
        letter-spacing: -0.2px;

        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.5rem;
        margin-inline: 0.25rem;

        font-size: 0.9rem;

        &:hover {
            scale: 1.05;
        }

        > img {
            height: 30px;
        }
    }
</style>