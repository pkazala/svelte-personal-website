<script>
	import Nav from '../components/nav.svelte';
	import Header from '../components/header.svelte';
	import Technologies from '../components/technologies.svelte';
	import Projects from '../components/projects.svelte';
	import Contact from '../components/contact.svelte';
	import Footer from '../components/footer.svelte';
	import AOS from 'aos';
	import 'aos/dist/aos.css';
	import { onMount } from 'svelte';

	onMount(() => {
		AOS.init({
			once: true,
			delay: 100,
			duration: 500
		});
		const cursor = document.querySelector('.cursor');
		document.addEventListener('mousemove', (event) => {
			cursor.setAttribute("style","top: "+(event.pageY - scrollY)+"px; left: "+(event.pageX)+"px");

			document.addEventListener('mousedown', () => {
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

<div class="dark:bg-gray-800 bg-stone-50 hover:cursor-none scroll-smooth">
	<div class="cursor dark:bg-white" />
	<Nav />
	<Header />
	<Technologies />
	<Projects />
	<Contact />
	<Footer />
</div>
