<script>
	import { onMount } from 'svelte';

	onMount(() => {
		const intro = document.querySelector('.intro');
		const logoSpan = document.querySelectorAll('.logo');
        document.body.style.overflow = "hidden";
		setTimeout(() => {
			logoSpan.forEach((span, index) => {
				setTimeout(() => {
					span.classList.add('active');
				}, (index + 1) * 50);
			});
			setTimeout(() => {
				logoSpan.forEach((span, index) => {
					setTimeout(() => {
						span.classList.remove('active');
						span.classList.add('fade');
					}, (index + 1) * 50);
				});
			}, 1700);
			setTimeout(() => {
				intro.classList.add('end');
			}, 1800);
            setTimeout(() => {
                document.body.style.overflow = "auto";
            }, 2400)
		});
	});
</script>

<div>
	<div class="intro font-stylish font-bold flex flex-row text-center">
		<h1 class="logo-header">
			<div>
				<span class="logo">P</span>
				<span class="logo">i</span>
				<span class="logo">o</span>
				<span class="logo">t</span>
				<span class="logo">r&nbsp;</span>
			</div>
			<div>
				<span class="logo">K</span>
				<span class="logo">a</span>
				<span class="logo">z</span>
				<span class="logo">a</span>
				<span class="logo">l</span>
				<span class="logo">a</span>
			</div>
		</h1>
	</div>
</div>
