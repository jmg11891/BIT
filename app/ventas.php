<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ventas extends Model
{
    //

    public function vendedor()
    {
    	return $this->hasOne(vendedor::class, 'id', 'id_vendedor');
    }

    public function cliente()
    {
    	return $this->hasOne(clientes::class, 'id', 'id_cliente');
    }

    public function auto()
    {
    	return $this->hasOne(autos::class, 'id', 'id_auto');
    }
}
