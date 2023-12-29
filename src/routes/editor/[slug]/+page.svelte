<script lang="ts">
	import { onMount } from 'svelte';

	export let data;
	const title = 'Editor';
	let error: string;

	onMount(() => {
		gpuInit();
	});

	async function gpuInit() {
		if (!navigator.gpu) {
			error = 'WebGPU not supported';
			return;
		}

		const adapter = await navigator.gpu.requestAdapter();

		if (!adapter) {
			error = "Couldn't request WebGPU adapter";
			return;
		}

		const device = await adapter.requestDevice();

		if (!device) {
			error = "Couldn't request WebGPU device";
			return;
		}

		console.log('device', device);
	}
</script>

<h1>{title}</h1>

<p>Project ID: {data.id}</p>

{#if error}
	<p>Error: {error}</p>
{/if}
