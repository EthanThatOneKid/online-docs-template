<script context="module">
	export async function preload(page, session) {
		const url = "/home.json";
		const res = await this.fetch(url);
    const data = await res.json();
		return { data };
	}
</script>

<script>
  export let data;
</script>

<div>
  <pre><code>{ JSON.stringify(data, null, 2) }</code></pre>
</div>