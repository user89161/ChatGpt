export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.9eadc6dd.js","imports":["_app/immutable/entry/start.9eadc6dd.js","_app/immutable/chunks/index.fe9ef46a.js","_app/immutable/chunks/singletons.316a923d.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.9772bed6.js","imports":["_app/immutable/entry/app.9772bed6.js","_app/immutable/chunks/index.fe9ef46a.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
