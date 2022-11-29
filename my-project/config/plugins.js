// path: ./config/plugins.js

module.exports = {
	//
	graphql: {
		config: {
			endpoint: '/graphql',
			shadowCRUD: true,
			playgroundAlways: false,
			depthLimit: 7,
			amountLimit: 100,
			apolloServer: {
				tracing: false,
			},
		},
	},
};