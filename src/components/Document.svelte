<script>
	import Error from "./Error.svelte";
	import Content from "./Content.svelte";
	import Navigation from "./Navigation.svelte";
	import Anchors from "./Anchors.svelte";

  export let data; // { error, pages, html, anchors }
</script>

<div>
	{#if data.error !== undefined}
		<Error message={data.error.message} />
	{:else}
		<Navigation pages={data.pages} />
		<Content html={data.html} />
		<Anchors anchors={data.anchors} />
	{/if}
</div>