<script>
	import { stores } from "@sapper/app";

	// You may not want to use `segment`, but it is passed for the time being and will
	// create a warning if not expected: https://github.com/sveltejs/sapper-template/issues/210
	// https://github.com/sveltejs/sapper/issues/824
	export let segment = "";
	// Silence unused export property warning
	if (segment) {};
	const { page } = stores();
	let path;
	$: path = $page.path.slice(1);
</script>

<style>
	/* main {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	} */
</style>

<svelte:head>
	<title>
		{path ? path.charAt(0).toUpperCase() + path.slice(1) : "Home"}
	</title>
</svelte:head>

<!-- ts-ignore --> 
<main>
	<slot></slot>
</main>