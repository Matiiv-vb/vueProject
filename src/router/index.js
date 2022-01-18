import { createRouter, createWebHistory } from 'vue-router'; 
import Vue from 'vue'
import VueRouter from 'vue-router'
// import MainPage from "./src/components/MainPage";

Vue.use(VueRouter)

const Bar = { template: '<div>bar</div>' }


let routes = [
	{
		name: 'main-page',
		path: '/main-page',
		component: Bar
		// component: MainPage
	},
	{ path: '/bar', component: Bar }
	// {
	// 	name: 'checkout',
	// 	path: '/order',
	// 	component: Checkout,
	// 	children: [
	// 		{	
	// 			name: 'step-1',
	// 			path: 'step-1',
	// 			component: CheckoutStep1
	// 		},
	// 		{	
	// 			name: 'step-2',
	// 			path: 'step-2',
	// 			component: CheckoutStep2
	// 		}
	// 	]
	// },
	
	// {
	// 	name: 'er',
	// 	path: '/er',
	// 	component: E404
	// },
	// {
	// 	path: '/:pathMatch(.*)*',
	// 	component: E404
	// }

	/*
		// hw, 
		path: any -> '/:pathMatch(.*)*'
		component: E404
	*/
];

// export default routes




export default new VueRouter({
	routes // short for `routes: routes`
  })