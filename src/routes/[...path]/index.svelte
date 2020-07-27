<script context="module">
	export async function preload(page, session) {
		const { path } = page.params;
		const res = await this.fetch(`${path.join("/")}.json`);
		const data = await res.json();
		return data;
	}
</script>

<script>
  export let data;
  // const { error, pages, html } = data;
</script>

<div>
  <pre><code>{ JSON.stringify(data, null, 2) }</code></pre>
</div>