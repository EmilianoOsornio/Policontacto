<?php

namespace Policontacto\Managers;


class CuentaManager extends BaseManager
{

    public function getReglas()
    {
        $reglas = [
            'email' => 'required|email|unique:tblusuario,email,' . $this->entidad->id,
            'password' => 'confirmed',
            'password_confirmation' => ''
        ];

        return $reglas;
    }

}