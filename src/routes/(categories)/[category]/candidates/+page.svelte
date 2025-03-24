<script lang="ts">
    import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();
</script>

<h1>Potentials candidates for category: { data.selectedCategory.title }</h1>