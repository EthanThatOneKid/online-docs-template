<script>
	import Error from "./Error.svelte";
	import Content from "./Content.svelte";
	import Navigation from "./Navigation.svelte";
	import Anchors from "./Anchors.svelte";

  export let data; // { error, pages, html, anchors }
  export let dev;
</script>

<div>

	{#if data.error !== undefined}
		<Error message={data.error.message} />
  {:else}
    <a href="/">Home</a>
		<Navigation pages={data.pages} />
		<Content html={data.html} />
		<Anchors anchors={data.anchors} />
  {/if}

  {#if dev}
    <pre>
      <code>
        { JSON.stringify(data, null, 2) }
      </code>
    </pre>
  {/if}
  
</div>