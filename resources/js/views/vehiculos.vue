<template>
	<div class="row">
		<div class="col-lg-10 offset-1 mb-4">
			<button class="btn btn-success float-right" data-toggle="modal" data-target="#modalGuardarAuto" @click="unsetAuto()">
				<i class="fa fa-plus"></i> Registrar nuevo vehiculo
			</button>
		</div>

		<div class="col-lg-12" v-if="autos.length === 0">
			<div class="alert alert-warning text-center" role="alert">
				No se han registrado vehiculos.
			</div>
		</div>

		<div class="col-lg-4 col-md-6 col-sm-12" v-for="auto in autos">
			<auto :auto="auto" :deleteAuto="deleteAuto" :updateAuto="setAutoToUpdate" :actions="true"></auto>
		</div>

		<div class="modal fade" id="modalGuardarAuto" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div class="modal-dialog  modal-dialog-centered">
				<div class="modal-content">
					<form action=""  @submit.prevent="guardarAuto">
						<div class="modal-header text-center">
							<h5 class="modal-title">Registrar vehiculo</h5>
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div class="modal-body container-fluid">
							<div class="form-group">
								<label>Marca</label>
								<div class="input-group">
									<div class="input-group-prepend">
										<span class="input-group-text"><i class="fa fa-keyboard-o"></i></span>
									</div>
									<input type="text" class="form-control" v-model.trim="auto.marca" required>
								</div>
							</div>
							<div class="form-group">
								<label>Valor</label>
								<div class="input-group">
									<div class="input-group-prepend">
										<span class="input-group-text"><i class="fa fa-usd"></i></span>
									</div>
									<input type="number" class="form-control" v-model.trim="auto.valor" required min="1">
								</div>
							</div>
							<div class="form-group">
								<label>Modelo</label>
								<div class="input-group">
									<div class="input-group-prepend">
										<span class="input-group-text"><i class="fa fa-keyboard-o"></i></span>
									</div>
									<input type="text" class="form-control" v-model.trim="auto.modelo" required>
								</div>
							</div>
							<div class="form-group">
								<label>Imagen</label>
								<div class="input-group">
									<div class="input-group-prepend">
										<span class="input-group-text"><i class="fa fa-keyboard-o"></i></span>
									</div>
									<input type="file" class="form-control" ref="imagen_auto" @change="setImagenAuto" accept="image/png, image/jpeg">
								</div>
							</div>
							<div class="form-group">
								<label>Año</label>
								<div class="input-group">
									<div class="input-group-prepend">
										<span class="input-group-text"><i class="fa fa-calendar"></i></span>
									</div>
									<input type="number" class="form-control" v-model.trim="auto.anio" required min="1800" max="9999">
								</div>
							</div>
						</div>
						<div class="modal-footer">
							<button type="button" class="btn btn-secondary float-left" data-dismiss="modal"><i class="fa fa-close"></i> Cerrar</button>
							<button type="submit" class="btn btn-success float-right" ><i class="fa fa-floppy-o"></i> Guardar</button>
						</div>
					</form>
				</div>
			</div>
		</div>

		<venta :auto="auto" :venderAuto="venderAuto" :venta="venta"></venta>

	</div>
</template>
<script>

import {mapActions} from 'vuex'

import auto from './../components/auto-component.vue'
import venta from './../components/venta-component.vue'

export default{
	data (){
		return {
			autos: [],
			auto: {
				id: null,
				marca: '',
				valor: 0,
				modelo: '',
				anio: 0,
				estado: '',
				imagen: null,
				adjunto_imagen: null
			},
			venta: {
				id_vendedor: null,
				id_cliente: null,
				id_auto: null
			}
		}
	},
	components: {
		auto,
		venta
	},
	methods: {
		...mapActions({
			obtenerVehiculos: 'obtenerVehiculos'
		}),
		async cargarVehiculos(){
			await this.obtenerVehiculos().then(response => {
				this.autos = response.data;
			}).catch(error => {
				console.error(error);
			});
		},

		setImagenAuto (){
			this.auto.adjunto_imagen = this.$refs.imagen_auto.files[0];
		},
		setAutoToUpdate(auto){
			this.auto.id = auto.id;
			this.auto.marca = auto.marca;
			this.auto.valor = auto.valor;
			this.auto.modelo = auto.modelo;
			this.auto.anio = auto.anio;
			this.auto.estado = auto.estado;
			this.auto.imagen = auto.imagen;
		},
		unsetAuto(){
			this.auto.id = null;
			this.auto.marca = '';
			this.auto.valor = 0;
			this.auto.modelo = '';
			this.auto.anio = 0;
			this.auto.estado = '';
			this.auto.imagen = null;
			this.auto.adjunto_imagen = null;
		},
		unsetVenta(){
			this.venta.id_vendedor = null;
			this.venta.id_cliente = null;
			this.venta.id_auto = null;
		},
		guardarAuto(){
			let formData = new FormData();
			formData.append('data', JSON.stringify(this.auto));
			formData.append('imagen', this.auto.adjunto_imagen);

			if(this.auto.id){
				axios.post(`../api/autos`, formData).then(response => {
					alert('Se ha actualizado correctamente el vehículo.');
					$("#modalGuardarAuto").modal("hide");
					let index = this.autos.findIndex(auto => auto.id == response.data.id);
					this.autos[index] = response.data;
					this.unsetAuto();
				}).catch((error) => {
					console.error(error);
					alert("Se presentó un error.");
				});
			}else{
				axios.post("../api/autos", formData).then(response => {
					alert('Se ha guardado correctamente el vehículo.');
					this.autos.push(response.data);
					$("#modalGuardarAuto").modal("hide");
					this.unsetAuto();
				}).catch((error) => {
					console.error(error);
					alert("Se presentó un error.");
				});
			}
		},
		deleteAuto(autoEliminar){
			if(autoEliminar.estado == 'disponible'){
				if(confirm(`¿Está seguro de eliminar el vehículo ${autoEliminar.marca}?`)){
					axios.delete(`../api/autos/${autoEliminar.id}`).then(response => {
						alert(response.data);
						let index = this.autos.findIndex(auto => auto.id == autoEliminar.id);
						this.autos.splice(index, 1);
					}).catch((error) => {
						console.error(error);
						alert(error);
					});
				}
			}else{
				alert('No se puede elminar este auto.');
			}
		},
		venderAuto(id){
			this.venta.id_auto = id;
			axios.post("../api/ventas", this.venta).then(response => {
				alert(response.data);
				this.cargarVehiculos();
				$("#generarVentaVehiculo").modal("hide");
				this.unsetVenta();
			}).catch((error) => {
				console.error(error);
				alert("Se presentó un error.");
			});
		}
	},
	mounted (){
		this.cargarVehiculos();
	}
}
</script>