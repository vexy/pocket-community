<script lang="ts">
    import ActionButton from '$components/ActionButton.svelte';
    import ProposalsTable from '$components/ProposalsTable.svelte';
    import type { PageProps } from './$types';

    let { data }: PageProps = $props();

    const currentCategory = $derived(data.selectedCategory);
    const currentSlug = $derived(currentCategory.slug)
</script>

<header>
  <h2>Предлози заједнице</h2>
</header>

<ProposalsTable
    proposals={data.activeProposals}
    currentSlug={currentSlug}
/>

<section class='action-bar' aria-label="Proposal actions">
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
</section>

<style>
  .action-bar {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    gap: 3rem;
  }
</style>