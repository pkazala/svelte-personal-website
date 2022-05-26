<script>
	import { onMount } from 'svelte';
	import { fade, slide } from 'svelte/transition';
	import Section1 from './section1.svelte';
	import Section2 from './section2.svelte';
	import Section4 from './section4.svelte';

	let visible1 = false;
	let visible2 = false;
	let visible3 = false;
	let visible4 = false;
	let section1 = false;
	let section2 = false;
	let section3 = false;
	let section4 = false;
	let top = 0;
	let left = 0;

	function handleMousemove(e) {
		top = e.clientY;
		left = e.clientX;
	};

	function handleClick1() {
		if (section1) {
			section1 = false;
		} else {
			section1 = true;
		}
	};

	function handleClick2() {
		if (section2) {
			section2 = false;
		} else {
			section2 = true;
		}
	};

	function handleClick3() {
		if (section3) {
			section3 = false;
		} else {
			section3 = true;
		}
	};

	function handleClick4() {
		if (section4) {
			section4 = false;
		} else {
			section4 = true;
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
	<div class="divider bg-black dark:bg-white  h-[1px] opacity-20" />
	<ul class="font-stylish text-4xl" on:mousemove={handleMousemove}>
		<li data-aos="fade-up" class="group mt-20 hlink grid grid-cols-2" on:mouseenter={() => visible1 = true} on:mouseleave={() => visible1 = false} on:click={handleClick1}>
			<h1 class="group-hover:text-gray-500 transition ease-in-out duration-300 z-10">Vue Store</h1>
			{#if visible1 && !section1}
				<p class="justify-self-end z-10" transition:fade>View</p>
				<img src='../Assets/photos/project1.jpg' alt="project-1" class="w-[275px] image rounded-lg" style="top: {top}px; left: {left}px;" transition:fade={{ delay: 150}}>
			{/if}
		</li>
			{#if section1}
				<div class="grid grid-cols-1 justify-items-center animate__animated animate__fadeIn" transition:slide>
					<Section1/>
					<button on:click={() => section1 = false} class="bg-blue-200 dark:bg-rose-400 justify-self-end rounded-full p-2 cursor-none hlink text-black hover:text-white transition ease-in-out duration-300">Hide</button>
				</div>
			{/if}
		<div class="divider bg-black dark:bg-white h-[1px] opacity-20" />
		<li data-aos="fade-up" class="group mt-20 hlink grid grid-cols-2" on:mouseenter={() => visible2 = true} on:mouseleave={() => visible2 = false} on:click={handleClick2}>
			<h1 class="group-hover:text-gray-500 transition ease-in-out duration-300 z-10">Java Banking App</h1>
			{#if visible2 && !section2}
				<p class="justify-self-end z-10" transition:fade>View</p>
				<img src='../Assets/photos/project2.jpg' alt="project-1" class="w-[275px] image rounded-lg" style="top: {top}px; left: {left}px;" transition:fade={{ delay: 150}}>
			{/if}
		</li>
			{#if section2}
				<div class="grid grid-cols-1 justify-items-center animate__animated animate__fadeIn" transition:slide>
					<Section2/>
					<button on:click={() => section2 = false} class="bg-blue-200 dark:bg-rose-400 justify-self-end rounded-full p-2 cursor-none hlink text-black hover:text-white transition ease-in-out duration-300">Hide</button>
				</div>
			{/if}
		<div class="divider bg-black dark:bg-white h-[1px] opacity-20" />
		<li data-aos="fade-up" class="group mt-20 hlink grid grid-cols-2" on:mouseenter={() => visible4 = true} on:mouseleave={() => visible4 = false} on:click={handleClick4}>
			<h1 class="group-hover:text-gray-500 transition ease-in-out duration-300 z-10">Portfolio Website</h1>
			{#if visible4 && !section4}
				<p class="justify-self-end z-10" transition:fade>View</p>
				<img src='../Assets/photos/project4.jpg' alt="project-1" class="w-[275px] image rounded-lg" style="top: {top}px; left: {left}px;" transition:fade={{ delay: 150}}>
			{/if}
		</li>
			{#if section4}
				<div class="grid grid-cols-1 justify-items-center animate__animated animate__fadeIn" transition:slide>
					<Section4/>
					<button on:click={() => section4 = false} class="bg-blue-200 dark:bg-rose-400 justify-self-end rounded-full p-2 cursor-none hlink text-black hover:text-white transition ease-in-out duration-300">Hide</button>
				</div>
			{/if}
		<div class="divider bg-black dark:bg-white h-[1px] opacity-20" />
	</ul>
</div>