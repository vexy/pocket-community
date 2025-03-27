<script lang="ts">
    import { statusString } from "$lib/ProposalService";
    import type { Proposal } from "$models/Proposal";

    let { proposals, currentSlug, showStatus }: { proposals: Proposal[], currentSlug: string, showStatus: boolean } = $props()
</script>

<table>
    <thead>
      <tr>
        <th scope="col">Предлог</th>
        <th scope="col">Датум</th>
        {#if showStatus}
            <th scope="col">Статус</th>
        {/if}
      </tr>
    </thead>

    <tbody>
      {#each proposals as proposal }
        <tr>
          <td><a href="/{currentSlug}/proposals/{proposal.id}" >{ proposal.title }</a></td>
          <td class="centered-text">{proposal.date.toLocaleDateString()}</td>
          {#if showStatus}
            <td class="centered-text">{ statusString(proposal.state) }</td>
          {/if}
        </tr>
      {/each}      
    </tbody>

    <tfoot>
      <tr>
        <th scope="row" colspan={ showStatus ? 2 : 1 }>Укупно предлога</th>
        <td style="text-align: right;">{proposals.length.toLocaleString()}</td>
      </tr>
    </tfoot>
</table>

<style>
    table {
        margin-top: 2.5rem;
        margin-inline: auto;
        width: 95%;

        border-collapse: collapse;
    }

    th, td {
        border: 0.5px solid black;
    }

    td {
        padding-block: 0.5rem;
    }

    .centered-text {
        text-align: center;
    }
</style>