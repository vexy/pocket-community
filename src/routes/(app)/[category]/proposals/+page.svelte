<script lang="ts">
    import ProposalsTable from '$components/ProposalsTable.svelte';
    import type { PageProps } from './$types';

    let { data }: PageProps = $props();

    let currentCategory = data.selectedCategory;
    let currentSlug = currentCategory.slug
</script>

<h2>Листа предлога за усвајање</h2>
<h3>Категорија: { currentCategory.title }</h3>

<ProposalsTable
  proposals={data.activeProposals}
  currentSlug={currentSlug}
  showStatus={false}
/>

<section>
  <a class="button-link" href="/{currentSlug}/proposals/new">Додајте нови предлог</a>
  <a class="button-link" href="/{currentSlug}/historical">Усвојени предлози</a>
</section>

<style>
  section {
    margin-top: 2.5rem;
    display: flex;
    justify-content: center;
    gap: 3rem;
  }

  /* section a {
    padding: 0.5rem;
    background-color: #7ba49c;
  } */
</style>