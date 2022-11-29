import { createApp, h, provide } from 'vue';
import router from './router';
import App from './App.vue';
import './assets/styles/main.scss';

import { DefaultApolloClient } from '@vue/apollo-composable';
import { ApolloClient, InMemoryCache } from '@apollo/client/core';

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
	cache,
	uri: 'http://localhost:1337/graphql',
});

const app = createApp({
	setup() {
		provide(DefaultApolloClient, apolloClient);
	},

	render: () => h(App),
});
app.use(router);
app.mount('#app');
