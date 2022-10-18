<script>
	// @ts-nocheck

	import { onMount } from 'svelte';
	onMount(() => {
		let images = [...document.querySelectorAll('.image')];
		let images2 = [...document.querySelectorAll('.image2')];
		let images3 = [...document.querySelectorAll('.image3')];
		let slider = document.querySelector('.slider');
		let slider2 = document.querySelector('.slider2');
		let slider3 = document.querySelector('.slider3');
		let sliderWidth;
		let imageWidth;
		let current = 0;
		let current2 = 0;
		let current3 = 0;
		let target = 0;
		let target2 = 0;
		let target3 = 0;
		let ease = 0.05;
		let ease2 = 0.04;
		let ease3 = 0.03;

		function lerp(start, end, t) {
			return start * (1 - t) + end * t;
		}

		function setTransform(el, transform) {
			el.style.transform = transform;
		}

		function init() {
			sliderWidth = slider.getBoundingClientRect().width;
			imageWidth = sliderWidth / images.length;
			document.body.style.height = `${sliderWidth - (window.innerWidth - window.innerHeight)}px`;
		}

		function init2() {
			sliderWidth = slider2.getBoundingClientRect().width;
			imageWidth = sliderWidth / images2.length;
			document.body.style.height = `${sliderWidth - (window.innerWidth - window.innerHeight)}px`;
		}

		function init3() {
			sliderWidth = slider3.getBoundingClientRect().width;
			imageWidth = sliderWidth / images3.length;
			document.body.style.height = `${sliderWidth - (window.innerWidth - window.innerHeight)}px`;
		}

		function animate() {
			current = parseFloat(lerp(current, target, ease)).toFixed(2);
			target = window.scrollY;
			setTransform(slider, `translateX(-${current}px)`);
			requestAnimationFrame(animate);
		}

		function animate2() {
			current2 = parseFloat(lerp(current2, target2, ease2)).toFixed(2);
			target2 = window.scrollY;
			setTransform(slider2, `translateX(-${current2}px)`);
			requestAnimationFrame(animate2);
		}

		function animate3() {
			current3 = parseFloat(lerp(current3, target3, ease3)).toFixed(2);
			target3 = window.scrollY;
			setTransform(slider3, `translateX(-${current3}px)`);
			requestAnimationFrame(animate3);
		}

		init();
		animate();
		init2();
		animate2();
		init3();
		animate3();
	});
</script>

<div
	class="mt-44 max-w-7xl m-auto font-stylish text-black dark:text-white px-10 md:px-12 mine:px-14 lg:px-18 xlg:px-24 xl:px-[7.5rem]"
>
	<h1 data-aos="fade-up" class="text-5xl text-right z-10">Pictures</h1>
	<section
		class="relative overflow-hidden h-[24.4rem] mt-4 max-w-7xl m-auto grid grid-cols-1 font-stylish text-black dark:text-white px-10 md:px-12 mine:px-14 lg:px-18 xlg:px-24 xl:px-[7.5rem]"
	>
		<div class="slider absolute top-0 left-0 w-[3500px] h-full">
			<div class="slider-inner absolute top-[50%] h-full w-full flex justify-around">
				<div class="item relative w-96 h-full overflow-hidden">
					<img src="/Images/23.jpg" alt="" class="image w-96" />
				</div>
				<div class="item relative w-96 h-96 overflow-hidden">
					<img src="/Images/23.jpg" alt="" class="image w-96" />
				</div>
				<div class="item relative w-96 h-96 overflow-hidden">
					<img src="/Images/23.jpg" alt="" class="image w-96" />
				</div>
				<div class="item relative w-96 h-96 overflow-hidden">
					<img src="/Images/23.jpg" alt="" class="image w-96" />
				</div>
				<div class="item relative w-96 h-96 overflow-hidden">
					<img src="/Images/23.jpg" alt="" class="image w-96" />
				</div>
				<div class="item relative w-96 h-96 overflow-hidden">
					<img src="/Images/23.jpg" alt="" class="image w-96" />
				</div>
				<div class="item relative w-96 h-96 overflow-hidden">
					<img src="/Images/23.jpg" alt="" class="image w-96" />
				</div>
				<div class="item relative w-96 h-96 overflow-hidden">
					<img src="/Images/23.jpg" alt="" class="image w-96" />
				</div>
				<div class="item relative w-96 h-96 overflow-hidden">
					<img src="/Images/23.jpg" alt="" class="image w-96" />
				</div>
			</div>
		</div>
	</section>
	<section
		class="relative overflow-hidden h-[24.4rem] max-w-7xl m-auto grid grid-cols-1 font-stylish text-black dark:text-white px-10 md:px-12 mine:px-14 lg:px-18 xlg:px-24 xl:px-[7.5rem]"
	>
		<div class="slider2 absolute top-0 left-0 w-[3500px] h-full">
			<div class="slider-inner absolute top-[1%] h-full w-full flex justify-around">
				<div class="item relative w-96 h-full overflow-hidden">
					<img src="/Images/23.jpg" alt="" class="image2 w-96" />
				</div>
				<div class="item relative w-96 h-full overflow-hidden">
					<img src="/Images/23.jpg" alt="" class="image2 w-96" />
				</div>
				<div class="item relative w-96 h-full overflow-hidden">
					<img src="/Images/23.jpg" alt="" class="image2 w-96" />
				</div>
				<div class="item relative w-96 h-full overflow-hidden">
					<img src="/Images/23.jpg" alt="" class="image2 w-96" />
				</div>
				<div class="item relative w-96 h-full overflow-hidden">
					<img src="/Images/23.jpg" alt="" class="image2 w-96" />
				</div>
				<div class="item relative w-96 h-full overflow-hidden">
					<img src="/Images/23.jpg" alt="" class="image2 w-96" />
				</div>
				<div class="item relative w-96 h-full overflow-hidden">
					<img src="/Images/23.jpg" alt="" class="image2 w-96" />
				</div>
				<div class="item relative w-96 h-full overflow-hidden">
					<img src="/Images/23.jpg" alt="" class="image2 w-96" />
				</div>
				<div class="item relative w-96 h-full overflow-hidden">
					<img src="/Images/23.jpg" alt="" class="image2 w-96" />
				</div>
			</div>
		</div>
	</section>
	<section
		class="relative overflow-hidden h-[24.4rem] max-w-7xl m-auto grid grid-cols-1 font-stylish text-black dark:text-white px-10 md:px-12 mine:px-14 lg:px-18 xlg:px-24 xl:px-[7.5rem]"
	>
		<div class="slider3 absolute top-0 left-0 w-[3500px] h-full">
			<div class="slider-inner absolute top-[1%] h-full w-full flex justify-around">
				<div class="item relative w-96 h-full overflow-hidden">
					<img src="/Images/23.jpg" alt="" class="image3 w-96" />
				</div>
				<div class="item relative w-96 h-full overflow-hidden">
					<img src="/Images/23.jpg" alt="" class="image3 w-96" />
				</div>
				<div class="item relative w-96 h-full overflow-hidden">
					<img src="/Images/23.jpg" alt="" class="image3 w-96" />
				</div>
				<div class="item relative w-96 h-full overflow-hidden">
					<img src="/Images/23.jpg" alt="" class="image3 w-96" />
				</div>
				<div class="item relative w-96 h-full overflow-hidden">
					<img src="/Images/23.jpg" alt="" class="image3 w-96" />
				</div>
				<div class="item relative w-96 h-full overflow-hidden">
					<img src="/Images/23.jpg" alt="" class="image3 w-96" />
				</div>
				<div class="item relative w-96 h-full overflow-hidden">
					<img src="/Images/23.jpg" alt="" class="image3 w-96" />
				</div>
				<div class="item relative w-96 h-full overflow-hidden">
					<img src="/Images/23.jpg" alt="" class="image3 w-96" />
				</div>
				<div class="item relative w-96 h-full overflow-hidden">
					<img src="/Images/23.jpg" alt="" class="image3 w-96" />
				</div>
			</div>
		</div>
	</section>
</div>
