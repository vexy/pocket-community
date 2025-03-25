<script lang="ts">
    import { ProposalState } from '$models/Proposal';
    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();
    let currentSlug = data.selectedCategory.slug;

    function statusString(proposalState: ProposalState): string {
        let returnValue = ""
        switch (proposalState) {
            case ProposalState.ACCEPTED:
                returnValue = "УСВОЈЕН"; break;
            case ProposalState.DENIED:
                returnValue = "ОДБИЈЕН"; break;
            case ProposalState.IN_PROGRESS:
                returnValue = "У ИЗГЛАСАВАЊУ"; break;
        }

        return returnValue;
    }
</script>

<h1>Past votes for category: { data.selectedCategory.title }</h1>

<table>
    <caption>
        Претходно усвојени предлози
    </caption>

    <thead>
      <tr>
        <th scope="col">Предлог</th>
        <th scope="col">Датум</th>
        <th scope="col">Статус</th>
      </tr>
    </thead>

    <tbody>
      {#each data.historicalProposals as proposal }
        <tr>
          <td><a href="/{currentSlug}/proposals/{proposal.id}" >{ proposal.title }</a></td>
          <td>{proposal.date.toLocaleDateString()}</td>
          <td>{ statusString(proposal.state) }</td>
        </tr>
      {/each}      
    </tbody>

    <tfoot>
      <tr>
        <th scope="row" colspan="2">Укупно предлога</th>
        <td colspan="2">{data.historicalProposals.length.toLocaleString()}</td>
      </tr>
    </tfoot>
</table>

<style>
    table {
      margin-top: 3rem;
      width: 100%;
      border: 1px solid black;
    }
  
    caption {
      font-size: 1.3rem;
    }
  
    td:nth-child(2) {
      text-align: right;
    }

    td:nth-child(3) {
      text-align: right;
    }

  </style>