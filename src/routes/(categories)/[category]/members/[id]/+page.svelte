<script lang="ts">
    import type { PageData } from './$types';
    import { MemberStatus } from '$models/Member';
    import VoteButtons from '$components/VoteButtons.svelte';

    let { data }: { data: PageData } = $props();

    let voteOption = $state(0);

    function processVote(option: number) {
        voteOption = option;

        showDialog(true);
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

<section>
    <img src="/person.svg" alt="Person profile"/>

    <h3>
        <span>{ data.memberData?.title }</span>
        <span>{ data.memberData?.name }</span>
        <span>{ data.memberData?.lastName }</span>
    </h3>

    <p>Радна биографија:</p>
    <summary>
        { data.memberData?.biography }
    </summary>

    {#if data.memberData?.status === MemberStatus.ACTIVE}
        <p>Члан радне група за: <i>{ data.selectedCategory.title }</i></p>
    {:else}
        <p>Кандидат радне група за: <i>{ data.selectedCategory.title }</i></p>

        <span>Опција за изгласавање кандидата:</span>
        <VoteButtons
            infavour={() => processVote(0)}
            against={() => processVote(1)}
            sustain={() => processVote(2)}
        />
    {/if}
</section>

<style>
    section {
        margin-top: 3rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    img {
        width: 180px;
    }
</style>