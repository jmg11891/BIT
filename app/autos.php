<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class autos extends Model
{
    //

	public static function guardarImagenAuto($imagen, $autoID)
	{
		try {
			if($imagen){
				$nombre_archivo = "/autos/".$autoID.uniqid().".".$imagen->extension();

				\Storage::disk('local')->put($nombre_archivo, \File::get($imagen));
				$response = array("bool" => true, "message" => $nombre_archivo);
			}else{
				$response = array("bool" => false, "message" => ">No se detectó un archivo.");
			}
			return (object) $response;
		} catch (Exception $e) {
			$response = array("bool" => false, "message" => $e->message());
			return (object) $response;
		}
	}
}
