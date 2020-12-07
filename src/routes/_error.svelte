<script lang="ts">
	import ErrorPage from '../pages/Error/Error.svelte';
	export let status: number;
	export let error: Error;
</script>

<svelte:head>
	<title>{status}</title>
</svelte:head>

<ErrorPage {status} {error}/>