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
			once: false,
            delay: 100,
            duration: 500
		})
    })
</script>

<div class="dark:bg-gray-800 bg-stone-50">
	<Nav />
	<Header />
	<Technologies />
	<Projects />
	<Contact />
	<Footer />
</div>
