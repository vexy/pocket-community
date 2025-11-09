<script lang="ts">
    import ActionButton from '$components/ActionButton.svelte';
    import ProposalsTable from '$components/ProposalsTable.svelte';
    import type { PageProps } from './$types';

    let { data }: PageProps = $props();

    const currentCategory = data.selectedCategory;
    const currentSlug = currentCategory.slug
</script>

<h2>Листа предлога за усвајање</h2>

<div class='action-bar'>
  <ActionButton
      link={`/${currentSlug}/proposals/new`}
      image={'add-new'}
      message={'Додајте нови предлог'}
  />

  <ActionButton
      link={`/${currentSlug}/historical`}
      image={'document-list'}
      message={'Изгласани предлози'}
  />
</div>

<ProposalsTable
  proposals={data.activeProposals}
  currentSlug={currentSlug}
  showStatus={false}
/>

<style>
  .action-bar {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    gap: 3rem;
  }
</style>