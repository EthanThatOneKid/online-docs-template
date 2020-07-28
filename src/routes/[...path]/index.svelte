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
  export let data;
  // const { error, pages, html } = data;
</script>

<div>
  <pre><code>{ JSON.stringify(data, null, 2) }</code></pre>
</div>