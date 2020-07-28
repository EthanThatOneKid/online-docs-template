<script>
  export let pages;
  export let root;

  if (pages === undefined) {
    pages = {};
  }
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
        { title }
        <svelte:self
          pages={link}
          root={`${root}/${title}`}
        />
      {/if}
    </li>
  {/each}
</ul>