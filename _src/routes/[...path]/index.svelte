<script context="module">
	export async function preload(page, session) {
		const { path } = page.params;
		const url = `${path.join("/")}.json`;
		const res = await this.fetch(url);
		const data = await res.json();
		return { data };
	}
</script>

<script>
	import Document from "../../components/Document.svelte";
  export let data; // { error, pages, html, anchors }
</script>

<div>
	<Document { data } />
</div>