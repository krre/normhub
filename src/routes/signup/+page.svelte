<script>
	import { enhance } from '$app/forms';
</script>

<svelte:head>
	<title>Sign up</title>
</svelte:head>

<h1>Sign up</h1>

<div>
	<form use:enhance method="post">
		<input type="text" name="login" required placeholder="Login" />
		<input type="text" name="full_name" required placeholder="Full name" />
		<input type="email" name="email" required placeholder="Email" />
		<input type="password" name="password" required placeholder="Password" />
		<input type="password" name="confirm_password" required placeholder="Confirm password" />
		<div>
			<button>Sign up</button>
		</div>
	</form>
</div>

<style>
	form {
		display: flex;
		flex-direction: column;
		max-width: 350px;
		row-gap: 1em;
		margin: 0 auto;
	}
</style>
