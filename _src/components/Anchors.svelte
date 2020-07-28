<script>
  export let anchors;

  if (anchors === undefined || anchors === null) {
    anchors = {};
  }

  function scrollIntoView({ target }) {
		const el = document.querySelector(target.getAttribute('href'));
		if (!!el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
</script>

<ul>
  {#each Object.entries(anchors) as [id, content]}
    <li>
      <a
        href={`#${id}`}
        on:click|preventDefault={scrollIntoView}
      >
        {@html content}
      </a>
    </li>
  {/each}
</ul>