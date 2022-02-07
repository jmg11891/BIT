import Vue from "vue";
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
	{
		path: '/',
		name: '/',
		component: () => import('./views/home.vue')
	},
	{
		path: '/home',
		name: 'home',
		component: () => import('./views/home.vue')
	},
	{
		path: '/clientes',
		name: 'clientes',
		component: () => import('./views/clientes.vue')
	},
	{
		path: '/vendedores',
		name: 'vendedores',
		component: () => import('./views/vendedores.vue')
	},
	{
		path: '/vehiculos',
		name: 'vehiculos',
		component: () => import('./views/vehiculos.vue')
	},
	{
		path: '/ventas',
		name: 'ventas',
		component: () => import('./views/ventas.vue')
	},
	{
		path: '/venta/:id',
		name: 'venta',
		component: () => import('./components/venta-detalle-component.vue')
	},
	{
		path: '*',
		component: () => import('./views/notFound.vue')
	}
	]
});