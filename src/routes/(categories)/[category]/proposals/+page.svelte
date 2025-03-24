<script lang="ts">
    import type { PageProps } from './$types';

    let { data }: PageProps = $props();
</script>

<h1>Proposals for category: { data.selectedCategory.title }</h1>