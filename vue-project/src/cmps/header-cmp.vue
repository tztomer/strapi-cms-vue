<template>
	<header class="top-banner">
		<div class="header-wrapper">
			<nav class="top-nav">
				<div class="main-logo"><img src="../assets/images/mainLogo.png" /></div>
				<div class="links-container">
					<router-link :to="{ name: 'Home' }">Home</router-link>
					<router-link :to="{ name: 'About' }">About Us</router-link>
					<router-link :to="{ name: 'OurApps' }">Our Apps</router-link>
					<router-link :to="{ name: 'Careers' }">Careers</router-link>
					<router-link :to="{ name: 'Contact' }">Contact Us</router-link>
				</div>
			</nav>
			<div class="titles">
				<div class="main-title"><h1>The science begind the Apps</h1></div>
				<div class="sec-title">We build products people can live without</div>
			</div>
			<div class="social-container">dsf</div>
		</div>
	</header>
</template>

<script setup>
	import { ref, onMounted } from 'vue';
	// import About from '../views/About.vue';
	onMounted(async () => {});

	const title = ref('The science behind the Apps');
</script>
