<script>
	function toggle() {
		window.document.body.classList.toggle('dark');
	}
</script>

<input type="checkbox" class="toggle toggle-sm mt-1 ml-3 bg-white" checked on:click={toggle}>
