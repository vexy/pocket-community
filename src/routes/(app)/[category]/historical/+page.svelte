<script lang="ts">
    import { statusString } from '$lib/ProposalService';
    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();
    let currentSlug = data.selectedCategory.slug;
</script>

<h1>Претходно изгласани предлози</h1>

<table>
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
          <td style="text-align: right">{proposal.date.toLocaleDateString()}</td>
          <td style="text-align: right">{ statusString(proposal.state) }</td>
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
    h1 {
      text-align: center;  
    }

    table {
      margin-top: 3rem;
      width: 100%;
      border: 1px solid black;
    }
</style>