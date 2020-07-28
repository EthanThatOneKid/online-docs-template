<script>
  export let anchors;
  if (anchors === undefined || anchors === null) {
    anchors = {};
  }
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