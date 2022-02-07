<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\clientes;


class clientesController extends Controller
{
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
        return clientes::where('estado', 'activo')->get();
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
            $cliente = new clientes;
            $cliente->identificacion = $request->identificacion;
            $cliente->nombres = $request->nombres;
            $cliente->apellidos = $request->apellidos;

            $cliente->save();
            return $cliente;

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
            $cliente = clientes::findOrFail($id);
            $cliente->identificacion = $request->identificacion;
            $cliente->nombres = $request->nombres;
            $cliente->apellidos = $request->apellidos;
            $cliente->save();

            return $cliente;

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
            clientes::where("id", $id)->update(['estado' => 'inactivo']);
            return "Se ha eliminado el cliente correctamente.";
        } catch (Exception $e) {
            return $e->message();
        }
    }
}
