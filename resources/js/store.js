import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		listado_compras: []
	},
	mutations: {

	},
	actions: {
		async obtenerClientes(){
			return new Promise((resolve,reject) =>{
				axios.get("../api/clientes").then((response) => {
					resolve(response);
				}).catch((error) => {
					reject(error);
				});
			});
		},

		async obtenerVendedores(){
			return new Promise((resolve,reject) =>{
				axios.get("../api/vendedores").then((response) => {
					resolve(response);
				}).catch((error) => {
					reject(error);
				});
			});
		},

		async obtenerVehiculos(){
			return new Promise((resolve,reject) =>{
				axios.get("../api/autos").then((response) => {
					resolve(response);
				}).catch((error) => {
					reject(error);
				});
			});
		},

		async obtenerVentas(){
			return new Promise((resolve,reject) =>{
				axios.get("../api/ventas").then((response) => {
					resolve(response);
				}).catch((error) => {
					reject(error);
				});
			});
		},

		obtenerDetalleVenta({}, id){
			return new Promise((resolve,reject) =>{
				axios.get(`../api/ventas/${id}`).then((response) => {
					resolve(response);
				}).catch((error) => {
					reject(error);
				});
			});
		},

	}
})