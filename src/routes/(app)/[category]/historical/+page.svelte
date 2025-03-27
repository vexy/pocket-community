<script lang="ts">
    import ProposalsTable from '$components/ProposalsTable.svelte';
    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();
</script>

<h1>Претходно изгласани предлози</h1>

<ProposalsTable
  proposals={data.historicalProposals}
  currentSlug={data.selectedCategory.slug}
  showStatus={true}
/>