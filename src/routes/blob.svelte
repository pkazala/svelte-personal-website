<script>
	let value = 'Blob';

	function becomeGrzyb() {
		value = 'Grzyb';
	}

	function becomeBlob() {
		value = 'Blob';
	}
</script>

<div class="grid grid-cols-1 mt-5 place-items-center">
	<h1 class="text-3xl font-bold text-pink-200">{value}</h1>
	<p>
		Visit blob at: <a class="hover:text-pink-200" href="https://www.facebook.com/martyna.wrona.14"
			>Stronka bloba</a
		> to read the documentation
	</p>
	{#if value === 'Blob'}
		<button on:click={becomeGrzyb}> Click to make a Grzyb </button>
	{:else}
		<button on:click={becomeBlob}> Click to make a Blob </button>
	{/if}
</div>