<script>
	function toggle() {
		window.document.body.classList.toggle('dark');
	}
</script>

<input type="checkbox" class="cursor-none toggle toggle-sm mt-1 ml-3 bg-white transition-all duration-500" checked on:click={toggle}>
