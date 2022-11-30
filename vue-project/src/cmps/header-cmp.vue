<template>
	<header class="top-banner">
		<div class="header-wrapper">
			<nav class="top-nav">
				<div class="main-logo"><img src="../assets/images/mainLogo.png" /></div>
				<div class="links-container">
					<router-link :to="{ name: 'Home' }">Home</router-link>
					<router-link :to="{ name: 'About' }">About Us</router-link>
					<router-link :to="{ name: 'OurApps' }">Our Apps</router-link>
					<router-link :to="{ name: 'Blog' }">Blog</router-link>
					<router-link :to="{ name: 'Careers' }">Careers</router-link>
					<router-link :to="{ name: 'Contact' }">Contact Us</router-link>
				</div>
			</nav>
			<div class="titles">
				<div class="main-title"><h1>The science begind the Apps</h1></div>
				<div class="sec-title">We build products people can live without</div>
			</div>
			<div
				:style="pattern"
				class="social-container"
			>
				<div class="clr">CLR</div>
				<div>Social Icons>></div>
			</div>
		</div>
	</header>
</template>

<script setup>
	// import ggl from 'graphql-tag';
	import { ref, onMounted, watchEffect } from 'vue';
	import { useQuery } from '@vue/apollo-composable';
	import { queryService } from '../graphql/query.js';

	// 	const projectsPreview = ggl`
	// query{
	//   projects{
	//     data{
	//       id
	//       attributes{
	//         projectFor,
	//         projectName,
	//         projectLogo{
	//           data{
	//             attributes{
	//               mime
	//             }
	//           }
	//         },
	//         projectImg{
	//           data{
	//             attributes{
	//               name,

	//             }
	//           }
	//         }
	//       }
	//     }
	//   }
	// }

	// `;

	const { result } = useQuery(queryService.projectsList);

	const pattern = ref();
	onMounted(async () => {
		pattern.value = { backgroundImage: 'url(src/assets/images/pattern.jpg)' };
	});

	const title = ref('The science behind the Apps');
	watchEffect(() => {
		console.log('res::::', result.value);
	});
</script>
