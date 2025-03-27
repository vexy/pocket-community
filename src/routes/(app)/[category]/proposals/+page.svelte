<script lang="ts">
    import type { PageProps } from './$types';

    let { data }: PageProps = $props();

    let currentCategory = data.selectedCategory;
    let currentSlug = currentCategory.slug
</script>

<h1>{ currentCategory.title }</h1>

<a href="/{currentSlug}/proposals/new">+ Нови предлог</a>

<table>
    <caption>
        Листа предлога за усвајање
    </caption>

    <thead>
      <tr>
        <th scope="col">Предлог</th>
        <th scope="col">Датум</th>
      </tr>
    </thead>

    <tbody>
      {#each data.activeProposals as proposal }
        <tr>
          <td><a href="/{currentSlug}/proposals/{proposal.id}" >{ proposal.title }</a></td>
          <td>{proposal.date.toLocaleDateString()}</td>
        </tr>
      {/each}      
    </tbody>

    <tfoot>
      <tr>
        <th scope="row" colspan="2">Укупно предлога</th>
        <td colspan="2">{data.activeProposals.length.toLocaleString()}</td>
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
</style>