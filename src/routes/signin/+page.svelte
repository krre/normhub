<script lang="ts">
	import { enhance } from '$app/forms';
	const title = 'Sign in';
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div class="centered">
	<h1>{title}</h1>
	<form method="POST" use:enhance>
		<input type="email" name="email" required placeholder="Email" />
		<input type="password" name="password" required placeholder="Password" />
		<div>
			<button>{title}</button>
		</div>
	</form>
</div>

<style>
	.centered {
		max-width: 20em;
		margin: 0 auto;
	}

	form {
		display: flex;
		flex-direction: column;
		row-gap: 1em;
	}
</style>
