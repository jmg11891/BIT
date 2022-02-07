<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\ventas;
use App\autos;

class ventasController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return ventas::with(['vendedor:id,nombres,apellidos', 'cliente:id,nombres,apellidos', 'auto'])->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            $venta = new ventas;

            $venta->id_vendedor = $request->id_vendedor;
            $venta->id_cliente = $request->id_cliente;
            $venta->id_auto = $request->id_auto;

            $venta->save();

            $auto = autos::findOrFail($venta->id_auto);
            $auto->estado = 'vendido';
            $auto->save();

            return "La venta se efectuó correctamente.";

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
        $venta = ventas::where('id', $id)->with(['vendedor:id,identificacion,nombres,apellidos', 'cliente:id,identificacion,nombres,apellidos', 'auto'])->first();

        $venta->fecha = $venta->created_at->isoFormat('dddd D \d\e MMMM \d\e\l Y \a \l\a\s H\:m');
        if($venta->auto->imagen){
            $venta->auto->imagen = asset('storage'.$venta->auto->imagen);
        }
        return $venta;
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
