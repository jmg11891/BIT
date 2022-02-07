<template>
	<div class="row">

		<div class="col-lg-10 offset-1 mb-4">
			<button class="btn btn-success float-right" @click="reporte()">
				<i class="fa fa-file-excel-o"></i> Generar reporte
			</button>
		</div>

		<div class="col-lg-12" v-if="ventas.length === 0">
			<div class="alert alert-warning text-center" role="alert">
				No se han efectuado ventas.
			</div>
		</div>
		<div class="col-lg-10 offset-1" v-else>
			<table class=" table table-sm table-bordered table-striped table-hover">
				<thead class="thead-dark text-center">
					<tr>
						<th>Vendedor</th>
						<th>Cliente</th>
						<th>Vehículo</th>
						<th style="width: 10px;"><i class="fa fa-cogs"></i></th>
					</tr>
				</thead>
				<tbody class="text-center">
					<tr v-for="venta in ventas" :key="venta.id">
						<td v-text="venta.vendedor.apellidos+' '+venta.vendedor.nombres"></td>
						<td v-text="venta.cliente.apellidos+' '+venta.cliente.nombres"></td>
						<td v-text="venta.auto.marca+' - '+venta.auto.modelo"></td>
						<td>
							<router-link :to="{ name: 'venta', params: {id: venta.id } }">
								<span class="btn btn-light"><i class="fa fa-eye"></i></span>
							</router-link>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>
<script>
import {mapActions} from 'vuex'

export default{
	data(){
		return {
			ventas: Array
		}
	},
	methods: {
		...mapActions({
			obtenerVentas: 'obtenerVentas'
		}),
		async cargarVentas(){
			await this.obtenerVentas().then(response => {
				this.ventas = response.data;
			}).catch(error => {
				console.error(error);
			});
		},
		reporte(){

		}
	},
	mounted(){
		this.cargarVentas();
	}
}
</script>