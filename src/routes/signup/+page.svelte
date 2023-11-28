<script>
	import { enhance } from '$app/forms';
</script>

<svelte:head>
	<title>Sign up</title>
</svelte:head>

<h1>Sign up</h1>

<div>
	<form use:enhance method="post">
		<input type="text" name="sign" required placeholder="Sign" />
		<input type="text" name="name" required placeholder="Name" />
		<input type="email" name="email" required placeholder="Email" />
		<input type="password" name="password" required placeholder="Password" />
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
