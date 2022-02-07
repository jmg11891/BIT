<template>
	<div class="modal fade" id="generarVentaVehiculo" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div class="modal-dialog modal-lg  modal-dialog-centered">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title text-center" v-text="auto.marca+' '+auto.modelo"></h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					<div class="row">
						<div class="col-lg-4 col-md-6">
							<auto :auto="auto" :actions="false"></auto>
						</div>
						<div class="col-lg-8 col-md-6">
							<form action="" @submit.prevent="venderAuto(auto.id)">
								<div class="row">
									<div class="col-12">
										<div class="form-group">
											<label>Vendedor</label>
											<div class="input-group">
												<div class="input-group-prepend">
													<span class="input-group-text"><i class="fa fa-user"></i></span>
												</div>
												<select class="form-control" v-model="venta.id_vendedor" required>
													<option v-for="vendedor in vendedores" :value="vendedor.id" v-text="vendedor.apellidos+' '+vendedor.nombres"></option>
												</select>
											</div>
										</div>
									</div>

									<div class="col-12">
										<div class="form-group">
											<label>Cliente</label>
											<div class="input-group">
												<div class="input-group-prepend">
													<span class="input-group-text"><i class="fa fa-user"></i></span>
												</div>
												<select class="form-control" v-model="venta.id_cliente" required>
													<option v-for="cliente in clientes" :value="cliente.id" v-text="cliente.apellidos+' '+cliente.nombres"></option>
												</select>
											</div>
										</div>
									</div>

									<div class="col-12">
										<button type="submit" class="btn btn-success m-1 float-right"><i class="fa fa-shopping-cart"></i> vender</button>
										<button type="button" class="btn btn-danger m-1 float-right" data-dismiss="modal"><i class="fa fa-close"></i> Cancelar</button>

									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import {mapActions} from 'vuex'

import auto from './../components/auto-component.vue'

export default{
	props: {
		auto: Object,
		venta: Object,
		venderAuto: Function
	},
	components: {
		auto
	},
	data(){
		return {
			vendedores: [],
			clientes: [],
		}
	},
	methods: {
		...mapActions({
			obtenerVendedores: 'obtenerVendedores',
			obtenerClientes: 'obtenerClientes'
		}),
		async cargarVendedores(){
			await this.obtenerVendedores().then(response => {
				this.vendedores = response.data;
			}).catch(error => {
				console.error(error);
			});
		},

		async cargarClientes(){
			await this.obtenerClientes().then(response => {
				this.clientes = response.data;
			}).catch(error => {
				console.error(error);
			});
		},
	},
	mounted(){
		this.cargarVendedores();
		this.cargarClientes();
	}
}
</script>