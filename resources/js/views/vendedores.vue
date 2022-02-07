<template>
	<div class="row">
		<div class="col-lg-10 offset-1 mb-4">
			<button class="btn btn-success float-right" data-toggle="modal" data-target="#modalGuardarVendedor" @click="unSetSeller">
				<i class="fa fa-plus"></i> Agregar vendedor
			</button>
		</div>
		<div class="col-lg-12" v-if="vendedores.length === 0">
			<div class="alert alert-warning text-center" role="alert">
				No se han registrado vendedores.
			</div>
		</div>
		<div class="col-lg-10 offset-1" v-else>
			<table class=" table table-sm table-bordered table-striped table-hover">
				<thead class="thead-dark text-center">
					<tr>
						<th>Identificación</th>
						<th>Nombres</th>
						<th>Apellidos</th>
						<th style="width: 10px;"><i class="fa fa-cogs"></i></th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="vendedor in vendedores" :key="vendedor.id" >
						<td v-text="vendedor.identificacion"></td>
						<td v-text="vendedor.nombres"></td>
						<td v-text="vendedor.apellidos"></td>
						<td class="justify-content-center">
							<div class="dropdown">
								<button class="btn btn-sm btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-cogs"></i></button>
								<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
									<a class="dropdown-item" href="#" @click="setSellerToUpdate(vendedor)" data-toggle="modal" data-target="#modalGuardarVendedor"><i class="fa fa-pencil"></i> Editar</a>
									<a class="dropdown-item" href="#" @click="deleteSeller(vendedor.id)"><i class="fa fa-trash"></i> Eliminar</a>
								</div>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
		</div>

		<div class="modal fade" id="modalGuardarVendedor" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<form action=""  @submit.prevent="guardarVendedor">
						<div class="modal-header text-center">
							<h5 class="modal-title" id="exampleModalLabel">Guardar vendedor</h5>
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div class="modal-body container-fluid">
							<div class="form-group">
								<label>Número de identificación</label>
								<div class="input-group">
									<div class="input-group-prepend">
										<span class="input-group-text"><i class="fa fa-hashtag"></i></span>
									</div>
									<input type="number" class="form-control" v-model.trim="vendedor.identificacion" required min="1" max="999999999999">
								</div>
							</div>
							<div class="form-group">
								<label>Nombres</label>
								<div class="input-group">
									<div class="input-group-prepend">
										<span class="input-group-text"><i class="fa fa-keyboard-o"></i></span>
									</div>
									<input type="text" class="form-control"  v-model.trim="vendedor.nombres" required>
								</div>
							</div>
							<div class="form-group">
								<label>Apellidos</label>
								<div class="input-group">
									<div class="input-group-prepend">
										<span class="input-group-text"><i class="fa fa-keyboard-o"></i></span>
									</div>
									<input type="text" class="form-control" v-model.trim="vendedor.apellidos" required>
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
	</div>
</template>
<script>
import {mapActions} from 'vuex'
export default{
	data(){
		return {
			vendedores: [],
			vendedor: {
				id: null,
				identificacion: null,
				nombres: "",
				apellidos: ""
			}
		}
	},
	methods: {
		...mapActions({
			obtenerVendedores: 'obtenerVendedores'
		}),
		async cargarVendedores(){
			await this.obtenerVendedores().then(response => {
				this.vendedores = response.data;
			}).catch(error => {
				console.error(error);
			});
		},
		setSellerToUpdate(vendedor){
			this.vendedor.id = vendedor.id;
			this.vendedor.identificacion = vendedor.identificacion;
			this.vendedor.nombres = vendedor.nombres;
			this.vendedor.apellidos = vendedor.apellidos;
		},
		unSetSeller(){
			this.vendedor.id = null;
			this.vendedor.identificacion = null;
			this.vendedor.nombres = '';
			this.vendedor.apellidos = '';
		},
		guardarVendedor(){
			if(!this.vendedor.id){
				axios.post("../api/vendedores", this.vendedor).then(response => {
					alert('Se ha guardado correctamente el vendedor.');
					this.vendedores.push(response.data);
					$("#modalGuardarVendedor").modal("hide");
					this.unSetSeller();
				}).catch((error) => {
					console.error(error);
					alert(error);
				});
			}else{
				axios.put(`../api/vendedores/${this.vendedor.id}`, this.vendedor).then(response => {
					alert('Se ha editado la información del vendedor correctamente.');
					$("#modalGuardarVendedor").modal("hide");
					let index = this.vendedores.findIndex(vendedor => vendedor.id == response.data.id);
					this.vendedores[index] = response.data;
					this.unSetSeller();
				}).catch((error) => {
					console.error(error);
					alert(error);
				});
			}
		},
		deleteSeller(id){
			if(confirm(`¿Está seguro de eliminar el vendedor?`)){
				axios.delete(`../api/vendedores/${id}`).then(response => {
					alert('Se ha elminado el vendedor correctamente.');
					let index = this.vendedores.findIndex(vendedor => vendedor.id == id);
					this.vendedores.splice(index, 1);
				}).catch((error) => {
					console.error(error);
					alert(error);
				});
			}
		}
	},
	mounted(){
		this.cargarVendedores();
	}
}
</script>