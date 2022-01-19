// import { createRouter, createWebHistory } from 'vue-router';
import Vue from "vue";
import VueRouter from "vue-router";
import MainPage from "../components/MainPage";
import Works from "../components/Works";

Vue.use(VueRouter);

const Signup = { template: "<div>Signup</div>" };
const Contacts = { template: "<div>Contacts</div>" };
const Academy = { template: "<div>Academy</div>" };

const routes = [
  {
    name: "main-page",
    path: "/",
    component: MainPage
  },
  {
    name: "works",
    path: "/works",
    component: Works,
	props: { name: "hhh" }
  },
  {
    name: "Signup",
    path: "/Signup",
    component: Signup
  },
  {
    name: "Contacts",
    path: "/Contacts",
    component: Contacts
  },
  {
    name: "Academy",
    path: "/Academy",
    component: Academy
  }
];

// let routes = [
// 	{
// 		name: 'main-page',
// 		path: '/main-page',
// 		component: Bar
// 		// component: MainPage
// 	},
// 	{ path: '/bar', component: Bar }
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
// ];

// export default routes

export default new VueRouter({
  routes,
  mode: "history"
});
