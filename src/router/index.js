import { createRouter, createWebHistory } from 'vue-router'; 

import Cart from '@/views/Cart';
import Checkout from '@/views/checkout/Base';
import ProductsList from '@/views/ProductsList';
import Product from '@/views/Product';
import CheckoutStep1 from '@/views/checkout/Step1';
import CheckoutStep2 from '@/views/checkout/Step2';
import E404 from '@/views/E404';
import Posts from '@/views/Posts';
import LearnCss from '@/views/LearnCss';
import TestQv from '@/views/TestQv';

let routes = [
	{
		name: 'cart',
		path: '/cart',
		component: Cart
	},
	{
		name: 'checkout',
		path: '/order',
		component: Checkout,
		children: [
			{	
				name: 'step-1',
				path: 'step-1',
				component: CheckoutStep1
			},
			{	
				name: 'step-2',
				path: 'step-2',
				component: CheckoutStep2
			}
		]
	},
	{
		name: 'catalog',
		path: '/',
		component: ProductsList
	},
	{
		path: '/product/:id',
		component: Product,
	},
	{
		path: '/:pathMatch(.*)*',
		component: E404,
	},
	{
		name: 'posts',
		path: '/posts',
		component: Posts
	},
	{
		name: 'learnCss',
		path: '/LearnCss',
		component: LearnCss
	},
	{
		name: 'testQv',
		path: '/TestQv',
		component: TestQv
	},
	{
		name: 'er',
		path: '/er',
		component: E404
	},
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

export default createRouter({
	routes,
	history: createWebHistory(process.env.BASE_URL)
});