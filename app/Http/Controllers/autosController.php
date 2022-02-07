<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\autos;

class autosController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return autos::where('estado', '!=', 'eliminado')->get()->map( function($auto){
            if($auto->imagen){
                $auto->imagen = asset('storage'.$auto->imagen);
            }else{
                $auto->imagen = null;
            }
            return $auto;
        });

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if($request->file('imagen')){
            if(!in_array($request->file('imagen')->extension(), ['jpg', 'jepg', 'gif', 'png'])){
                throw new Exception('El archivo no es válido.');
            }
        }

        try {
            $data = json_decode($request->data);
            if(isset($data->id) && !empty($data->id)){
                $auto = autos::findOrFail($data->id);
            }else{
                $auto = new autos;
                $auto->estado = "disponible";
            }
            $auto->marca = $data->marca;
            $auto->valor = $data->valor;
            $auto->modelo = $data->modelo;
            $auto->anio = $data->anio;

            $auto->save();

            if($request->file('imagen')){
                $objGuardarImagen = autos::guardarImagenAuto($request->file('imagen'), $auto->id);
                if($objGuardarImagen->bool){
                    $auto->imagen = $objGuardarImagen->message;
                    $auto->save();

                }else{
                    throw new Exception($objGuardarImagen->message);
                }
            }
            if($auto->imagen != ""){
                $auto->imagen = asset('storage'.$auto->imagen);
            }
            return $auto;

        } catch (Exception $e) {
            return $e->message();
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            autos::where("id", $id)->update(['estado' => 'eliminado']);
            return "Se ha eliminado el vehículo correctamente.";
        } catch (Exception $e) {
            return $e->message();
        }
    }
}
