<script>
	import { onMount } from 'svelte';
	import { fade, slide } from 'svelte/transition';
	import Section1 from './section1.svelte';

	let visible1 = false;
	let visible2 = false;
	let visible3 = false;
	let section1 = false;
	let top = 0;
	let left = 0;

	function handleMousemove(e) {
		top = e.clientY;
		left = e.clientX;
	};

	function handleClick() {
		if (section1) {
			section1 = false;
		} else {
			section1 = true;
		}
	};

	onMount(() => {
		const cursor = document.querySelector('.cursor');
		const links = document.querySelectorAll('.hlink');
		const image = document.querySelector('.image');

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
	class="h-fit mt-44 max-w-7xl m-auto grid grid-cols-1 font-stylish text-black dark:text-white px-10 md:px-12 mine:px-14 lg:px-18 xlg:px-24 xl:px-[7.5rem]"
>
	<h1 data-aos="fade-up" class="text-5xl justify-self-end z-10">Projects</h1>
	<div class="divider bg-black h-[1px] opacity-20" />
	<ul class="font-stylish text-4xl" on:mousemove={handleMousemove}>
		<li data-aos="fade-up" class="group mt-20 hlink grid grid-cols-2" on:mouseenter={() => visible1 = true} on:mouseleave={() => visible1 = false} on:click={handleClick}>
			<h1 class="group-hover:text-gray-500 transition ease-in-out duration-300 z-10">Vue Store</h1>
			{#if visible1 && !section1}
				<p class="justify-self-end z-10" transition:fade>View</p>
				<img src="../src/Assets/photos/project1.jpg" alt="project-1" class="w-[300px] image" style="top: {top}px; left: {left}px;" transition:fade={{ delay: 150}}>
			{/if}
		</li>
			{#if section1}
				<div class="grid grid-cols-1 justify-items-center animate__animated animate__fadeIn" transition:slide>
					<Section1/>
					<button on:click={() => section1 = false} class="bg-blue-200 justify-self-end rounded-full p-2 cursor-none hlink text-black hover:text-white transition ease-in-out duration-300">Hide</button>
				</div>
			{/if}
		<div class="divider bg-black h-[1px] opacity-20" />
		<li data-aos="fade-up" class="group mt-20 hlink grid grid-cols-2" on:mouseenter={() => visible2 = true} on:mouseleave={() => visible2 = false}>
			<h1 class="group-hover:text-gray-500 transition ease-in-out duration-300 z-10">Java Bank Application</h1>
			{#if visible2}
				<p class="justify-self-end z-10" transition:fade>View</p>
				<img src="../src/Assets/photos/2.jpg" alt="project-1" class="w-[300px] image" style="top: {top}px; left: {left}px;" transition:fade={{ delay: 150}}>
			{/if}
		</li>
		<div class="divider bg-black h-[1px] opacity-20" />
		<li data-aos="fade-up" class="group mt-20 hlink grid grid-cols-2" on:mouseenter={() => visible3 = true} on:mouseleave={() => visible3 = false}>
			<h1 class="group-hover:text-gray-500 transition ease-in-out duration-300 z-10">Joobo.dev</h1>
			{#if visible3}
				<p class="justify-self-end z-10" transition:fade>View</p>
				<img src="../src/Assets/photos/1.jpg" alt="project-1" class="w-[300px] image" style="top: {top}px; left: {left}px;" transition:fade={{ delay: 150}}>
			{/if}
		</li>
		<div class="divider bg-black h-[1px] opacity-20" />
	</ul>
</div>
