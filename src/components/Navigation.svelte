<script>
  export let pages;
  export let root;

  if (root === undefined) {
    root = "./";
  }
</script>

<ul>
  {#each Object.entries(pages) as [title, link]}
    <li>
      {#if typeof link === "string"}
        <a href={link}>{ title }</a>
      {:else}
        <svelte:self
          pages={link}
          root={`${root}/${title}`}
        />
      {/if}
    </li>
  {/each}
</ul>