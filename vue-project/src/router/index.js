import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import OurApps from '../views/OurApp.vue';
import Careers from '../views/Careers.vue';
import Blog from '../views/Blog.vue';
import Contact from '../views/Contact.vue';

const router = createRouter({
	history: createWebHashHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home,
		},

		{
			path: '/about-us',
			name: 'About',
			component: About,
		},
		{
			path: '/our-apps',
			name: 'OurApps',
			component: OurApps,
		},
		{
			path: '/careers',
			name: 'Careers',
			component: Careers,
		},
		{
			path: '/blog',
			name: 'Blog',
			component: Blog,
		},
		{
			path: '/contact',
			name: 'Contact',
			component: Contact,
		},
	],
});

export default router;

// import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';

// import Dashboard from './views/Dashboard.vue';
// import Project from './views/Project.vue';

// import Login from './views/Login.vue';
// import Register from './views/Register.vue';
// import AuthLayout from './cmps/AuthLayout.vue';
// // import NotFound from './views/NotFound.vue';
// import DefaultLayout from './cmps/DefaultLayout.vue';
// import Projects from './views/Projects.vue';
// import { store } from './store/store.js';

// const routes = [
// 	{
// 		path: '/',
// 		redirect: '/dashboard',
// 		component: DefaultLayout,
// 		meta: { requiresAuth: true },
// 		children: [
// 			{
// 				path: '/dashboard',
// 				name: 'Dashboard',
// 				component: Dashboard,
// 			},

// 			{
// 				path: '/projects',
// 				name: 'Projects',
// 				component: Projects,
// 			},
// 			{
// 				path: '/projects/create',
// 				name: 'ProjectCreate',
// 				component: Project,
// 			},
// 			{
// 				path: '/projects/:id',
// 				name: 'ProjectEdit',
// 				component: Project,
// 			},
// 		],
// 	},
// 	{
// 		path: '/auth',
// 		redirect: '/login',
// 		name: 'Auth',
// 		component: AuthLayout,
// 		meta: { isGuest: true },
// 		children: [
// 			{
// 				path: '/login',
// 				name: 'Login',
// 				component: Login,
// 			},
// 			{
// 				path: '/register',
// 				name: 'Register',
// 				component: Register,
// 			},
// 		],
// 	},

// 	// {
// 	// 	path: '/:pathMatch(.*)*',
// 	// 	component: NotFound,
// 	// },
// ];

// const router = createRouter({
// 	history: createWebHistory(),
// 	routes,
// });

// router.beforeEach((to, from, next) => {
// 	if (to.meta.requiresAuth && !store.getters.getToken) {
// 		next({ name: 'Login' });
// 	} else if (store.getters.getToken && to.meta.isGuest) {
// 		next({ name: 'Dashboard' });
// 	} else {
// 		next();
// 	}
// });

// // router.beforeEach((to, from, next) => {
// // 	if (
// // 		to.meta.requiresAuth &&

// // 	) {
// // 		next({ name: 'Login' });
// // 	} else if (userToken && isGuest) {
// // 		next({ name: 'Dashboard' });
// // 	} else next();
// // });

// export default router;
