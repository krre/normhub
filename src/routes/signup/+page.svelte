<script lang="ts">
	import { enhance } from '$app/forms';
</script>

<svelte:head>
	<title>Sign up</title>
</svelte:head>

<div class="centered">
	<h1>Sign up</h1>
	<form method="POST" use:enhance>
		<input type="text" name="login" required placeholder="Login" />
		<input type="text" name="full-name" required placeholder="Full name" />
		<input type="email" name="email" required placeholder="Email" />
		<input type="password" name="password" required placeholder="Password" />
		<input type="password" name="confirm-password" required placeholder="Confirm password" />
		<div>
			<button>Sign up</button>
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
		max-width: 20em;
		row-gap: 1em;
		margin: 0 auto;
	}
</style>
