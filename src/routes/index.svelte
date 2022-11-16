<script>
	import Nav from '../components/nav.svelte';
	import Intro from '../components/intro.svelte';
	import Hero from '../components/hero.svelte';
	import NewProjects from '../components/newprojects.svelte';
	import Experience from '../components/experience.svelte';
	import NewContact from '../components/newcontact.svelte';
	import Photo from '../components/photogallery.svelte';
	import Footer from '../components/footer.svelte';
	import AOS from 'aos';
	import 'aos/dist/aos.css';
	import { onMount } from 'svelte';
	import VanillaTilt from 'vanilla-tilt';

	onMount(() => {
		AOS.init({
			once: true,
			delay: 100,
			duration: 500
		});
		const cursor = document.querySelector('.cursor');
		document.addEventListener('mousemove', (event) => {
			cursor.setAttribute(
				'style',
				'top: ' + (event.pageY - scrollY) + 'px; left: ' + event.pageX + 'px'
			);

			document.addEventListener('mousedown', () => {
				cursor.classList.remove('projectshrink');
				cursor.classList.remove('shrink');
				cursor.classList.add('expand');
			});
			document.addEventListener('mouseup', () => {
				cursor.classList.remove('expand');
				cursor.classList.add('shrink');
			});
		});
	});
</script>

<div
	id="main"
	class="smooth-scroll-wrapper dark:bg-gray-800 bg-stone-50 hover:cursor-none scroll-smooth"
>
	<Intro />
	<div class="cursor dark:bg-rose-400" />
	<Nav />
	<Hero />
	<Experience />
	<Photo />
	<NewProjects />
	<NewContact />
	<Footer />
</div>
