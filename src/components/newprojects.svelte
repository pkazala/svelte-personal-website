<script>
	import { onMount } from 'svelte';

	let name = 'VUE STORE';
	let name2 = 'VUE STOREZ';
	let name3 = 'VUE STORES';

	onMount(() => {
		const cursor = document.querySelector('.cursor');
		const links = document.querySelectorAll('.hlink');

		links.forEach((link) => {
			link.addEventListener('mouseover', () => {
				cursor.classList.remove('projectshrink');
				cursor.classList.add('projecthover');
			});
			link.addEventListener('mouseleave', () => {
				cursor.classList.remove('projecthover');
				cursor.classList.add('projectshrink');
			});
		});
	});
</script>

<div
	class="h-fit mt-44 max-w-7xl m-auto grid grid-cols-1 font-stylish text-black px-10 md:px-12 mine:px-14 lg:px-18 xlg:px-24 xl:px-[7.5rem]"
>
	<h1 data-aos="fade-up" class="text-5xl justify-self-end">Projects</h1>
	<ul class="font-stylish text-4xl">
		<li data-aos="fade-up" class="w-fit mt-20 hlink">
			<h1 class="text-black hover:text-gray-500 transition ease-in-out duration-300">My App</h1>
		</li>
		<li data-aos="fade-up" class="w-fit mt-20 hlink">
			<h1 class="text-black hover:text-gray-500 transition ease-in-out duration-300">My Appz</h1>
		</li>
		<li data-aos="fade-up" class="w-fit mt-20 hlink">
			<h1 class="text-black hover:text-gray-500 transition ease-in-out duration-300">My Apps</h1>
		</li>
	</ul>
</div>
