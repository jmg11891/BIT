<template>
	<div class="row">
		<div class="col-lg-10 offset-1 mb-4">
			<button class="btn btn-success float-right" data-toggle="modal" data-target="#modalGuardarCliente" @click="unSetCliente">
				<i class="fa fa-plus"></i> Agregar cliente
			</button>
		</div>
		<div class="col-lg-12" v-if="clientes.length === 0">
			<div class="alert alert-warning text-center" role="alert">
				No se han registrado clientes.
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
					<tr v-for="cliente in clientes" :key="cliente.id" >
						<td v-text="cliente.identificacion"></td>
						<td v-text="cliente.nombres"></td>
						<td v-text="cliente.apellidos"></td>
						<td class="justify-content-center">
							<div class="dropdown">
								<button class="btn btn-sm btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false"><i class="fa fa-cogs"></i></button>
								<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
									<a class="dropdown-item" href="#" @click="setClienteToUpdate(cliente)" data-toggle="modal" data-target="#modalGuardarCliente"><i class="fa fa-pencil"></i> Editar</a>
									<a class="dropdown-item" href="#" @click="deleteCliente(cliente.id)"><i class="fa fa-trash"></i> Eliminar</a>
								</div>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<div class="modal fade" id="modalGuardarCliente" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<form action=""  @submit.prevent="guardarCliente">
						<div class="modal-header text-center">
							<h5 class="modal-title" id="exampleModalLabel">Guardar cliente</h5>
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
									<input type="number" class="form-control" v-model.trim="cliente.identificacion" required min="1" max="999999999999">
								</div>
							</div>
							<div class="form-group">
								<label>Nombres</label>
								<div class="input-group">
									<div class="input-group-prepend">
										<span class="input-group-text"><i class="fa fa-keyboard-o"></i></span>
									</div>
									<input type="text" class="form-control"  v-model.trim="cliente.nombres" required>
								</div>
							</div>
							<div class="form-group">
								<label>Apellidos</label>
								<div class="input-group">
									<div class="input-group-prepend">
										<span class="input-group-text"><i class="fa fa-keyboard-o"></i></span>
									</div>
									<input type="text" class="form-control" v-model.trim="cliente.apellidos" required>
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

export default {
	data (){
		return {
			clientes: [],
			cliente: {
				id: null,
				identificacion: null,
				nombres: "",
				apellidos: ""
			}
		}
	},
	methods: {
		...mapActions({
			obtenerClientes: 'obtenerClientes'
		}),
		async cargarClientes(){
			await this.obtenerClientes().then(response => {
				this.clientes = response.data;
			}).catch(error => {
				console.error(error);
			});
		},
		setClienteToUpdate(cliente){
			this.cliente.id = cliente.id;
			this.cliente.identificacion = cliente.identificacion;
			this.cliente.nombres = cliente.nombres;
			this.cliente.apellidos = cliente.apellidos;
		},
		unSetCliente(){
			this.cliente.id = null;
			this.cliente.identificacion = null;
			this.cliente.nombres = '';
			this.cliente.apellidos = '';
		},
		guardarCliente(){
			if(!this.cliente.id){
				axios.post("../api/clientes", this.cliente).then(response => {
					alert('Se ha guardado correctamente el cliente.');
					this.clientes.push(response.data);
					$("#modalGuardarCliente").modal("hide");
					this.unSetCliente();
				}).catch((error) => {
					console.error(error);
					alert(error);
				});
			}else{
				axios.put(`../api/clientes/${this.cliente.id}`, this.cliente).then(response => {
					alert('Se ha editado la información del cliente correctamente.');
					$("#modalGuardarCliente").modal("hide");
					let index = this.clientes.findIndex(cliente => cliente.id == response.data.id);
					this.clientes[index] = response.data;
					this.unSetCliente();
				}).catch((error) => {
					console.error(error);
					alert(error);
				});
			}
		},
		deleteCliente(id){
			if(confirm(`¿Está seguro de eliminar el cliente?`)){
				axios.delete(`../api/clientes/${id}`).then(response => {
					alert('Se ha elminado el cliente correctamente.');
					let index = this.clientes.findIndex(cliente => cliente.id == id);
					this.clientes.splice(index, 1);
				}).catch((error) => {
					console.error(error);
					alert(error);
				});
			}
		}
	},
	mounted (){
		this.cargarClientes();
	}
}
</script>