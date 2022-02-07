<template>
	<div class="card m-2">
		<img :src="auto.imagen" class="card-img-top" v-if="auto.imagen" style="max-height: 200px;">
		<img src="storage/images/image_not_found.png" class="card-img-top" v-else  style="max-height: 200px;">
		<div class="card-body">
			<h5 class="card-title bg-light" v-text="auto.marca+' - '+auto.modelo"></h5>
			<p class="card-text">
				<b>Año: </b><span v-text="auto.anio"></span><br>
				<b>Valor: </b>$ <span v-text="auto.valor"></span>
			</p>
			<div class="row" v-if="actions">
				<div class="col-12" v-if="auto.estado == 'disponible'">
					<button class="btn btn-sm btn-success m-1 float-right" @click="updateAuto(auto)" data-toggle="modal" data-target="#generarVentaVehiculo">
						<i class="fa fa-shopping-cart" data-toggle="tooltip" data-placement="top" title="Vender auto"></i>
					</button>
					<button class="btn btn-sm btn-primary m-1 float-right" @click="updateAuto(auto)" data-toggle="modal" data-target="#modalGuardarAuto">
						<i class="fa fa-pencil" data-toggle="tooltip" data-placement="top" title="Editar información"></i>
					</button>
					<button class="btn btn-sm btn-danger m-1 float-right" @click="deleteAuto(auto)">
						<i class="fa fa-trash" data-toggle="tooltip" data-placement="top" title="Eliminar"></i>
					</button>
				</div>
				<div class="col-12" v-else>
					<b class="text-success" v-text="auto.estado" style="text-transform: uppercase;"></b>
				</div>
			</div>

		</div>
	</div>
</template>
<script>
export default{
	props: {
		'auto': Object,
		updateAuto: Function,
		deleteAuto: Function,
		actions: Boolean
	}
}
</script>