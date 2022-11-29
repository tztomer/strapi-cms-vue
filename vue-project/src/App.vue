<template>
	<div class="container">
		<section class="main-banner">
			<div class="inner-wrapper">
				<headerCmp></headerCmp>
				<router-view />
			</div>
		</section>
	</div>
</template>

<script>
	import headerCmp from './cmps/header-cmp.vue';
	export default {
		name: 'main-app',
		props: [],
		components: { headerCmp },
		created() {
			// this.$store.dispatch({ type: 'loadToys' });
		},
	};
</script>
<style></style>
