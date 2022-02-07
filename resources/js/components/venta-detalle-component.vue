<template>
	<div class="row">
		<div class="col-lg-10 offset-1">
			<div class="card">
				<div class="card-body">
					<div class="row">

						<div class="col-lg-4 col-md-6 col-sm-12">
							<auto :auto="venta.auto" :actions="false" v-if="venta.auto"></auto>
						</div>
						<div class="col-lg-8 col-md-6 col-sm-12" v-if="Object.keys(venta).length > 0">
							<div class="row">
								<div class="card-header col-12">
									<p class="h4">Reporte de venta</p>
								</div>
								<div class="col-12 m-3">

									<p class="h5">Información del vendedor</p>
									<b>Identificación: </b>
									<span v-text="venta.vendedor.identificacion"></span><br>
									<b>Nombre: </b>
									<span v-text="venta.vendedor.apellidos+' '+venta.vendedor.nombres"></span>
								</div>
								<div class="col-12 m-3">
									<p class="h5">Información del cliente</p>
									<b>Identificación: </b>
									<span v-text="venta.cliente.identificacion"></span><br>
									<b>Nombre: </b>
									<span v-text="venta.cliente.apellidos+' '+venta.cliente.nombres"></span>
								</div>
								<div class="col-12 m-3">
									<b>Fecha: </b>
									<span v-text="venta.fecha"></span>
								</div>
							</div>
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

	data(){
		return {
			venta: Object,
			id: this.$route.params.id
		}
	},
	components: {
		auto
	},
	methods: {
		...mapActions({
			obtenerDetalleVenta: 'obtenerDetalleVenta'
		}),
		obtenerVenta(){
			console.log(this.id, 'este es el id')
			this.obtenerDetalleVenta(this.id).then(response => {
				this.venta = response.data;
			}).catch(error => {
				console.error(error);
			});
		}
	},
	mounted(){
		this.obtenerVenta();
	}
}
</script>