<script lang="ts">
    import { colorFor, statusString } from "$lib/ProposalService";
    import { ProposalState, type Proposal } from "$models/Proposal";

    let {
      proposals,
      currentSlug,
    } :
    {
      proposals: Proposal[],
      currentSlug: string,
    } = $props()

    // Function will sumup all the proposals budget that are either
    // in accepted or in progress state
    function totalCosts(): number {
      let initialValue = 0
      const totalSum = proposals.reduce(
        (prevoious, current) =>
          prevoious + (current.state != ProposalState.DENIED ? current.budget : 0), initialValue
      );

      return totalSum
    }
</script>

<table>
    <thead>
      <tr>
        <th>Предлог</th>
        <th>Статус</th>
        <th>Трошкови увођења</th>
      </tr>
    </thead>

    <tbody>
      {#each proposals as proposal }
        <tr>
          <td><a href="/{currentSlug}/proposals/{proposal.id}" >{ proposal.title }</a></td>
          <td
            class="centered-text"
            style="color: {colorFor(proposal.state)}"
          >
            { statusString(proposal.state) }
          </td>
          <td class="right-centered">{ proposal.budget.toLocaleString() }</td>
        </tr>
      {/each}      
    </tbody>

    <tfoot>
      <tr>
        <th scope="row" colspan='2'>Укупни трошкови</th>
        <td class="right-centered">{totalCosts().toLocaleString()}</td>
      </tr>
      <tr>
        <th scope="row" colspan='2'>Укупно предлога</th>
        <td class="right-centered">{proposals.length.toLocaleString()}</td>
      </tr>
    </tfoot>
</table>

<style>
    table {
        margin-top: 2.5rem;
        margin-inline: auto;
        width: 95%;

        border-collapse: collapse;
        overflow: hidden;
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

    .right-centered {
      text-align: right;
    }
</style>