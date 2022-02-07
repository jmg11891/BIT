<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\vendedor;

class VendedorController extends Controller
{
    //
    public function __construct()
    {
        // $this->middleware('auth');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return vendedor::where('estado', 'activo')->get();
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
            $vendedor = new vendedor;
            $vendedor->identificacion = $request->identificacion;
            $vendedor->nombres = $request->nombres;
            $vendedor->apellidos = $request->apellidos;

            $vendedor->save();
            return $vendedor;

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
        try {
            $vendedor = vendedor::findOrFail($id);
            $vendedor->identificacion = $request->identificacion;
            $vendedor->nombres = $request->nombres;
            $vendedor->apellidos = $request->apellidos;
            $vendedor->save();

            return $vendedor;

        } catch (Exception $e) {
            return $e->message();
        }
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
            vendedor::where("id", $id)->update(['estado' => 'inactivo']);
            return "Se ha eliminado el vendedor correctamente.";
        } catch (Exception $e) {
            return $e->message();
        }
    }
}
