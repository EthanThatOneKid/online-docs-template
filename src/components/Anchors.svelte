<script>
  export let anchors;
</script>

<ul>
  {#each Object.entries(anchors) as [id, content]}
    <li>
      <a href={`#${id}`}>
        {@html content}
      </a>
    </li>
  {/each}
</ul>