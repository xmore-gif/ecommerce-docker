<?php

namespace App\Http\Controllers;

use OpenApi\Annotations as OA;

/**
 * @OA\Info(
 *      title="API REST E-commerce con Stripe y JWT",
 *      version="1.0.0",
 *      description="Documentación interactiva de la API de Comercio Electrónico",
 *      @OA\Contact(
 *          email="soporte@tienda.com"
 *      )
 * )
 *
 * @OA\Server(
 *      url="http://127.0.0.1:8000/api",
 *      description="Servidor Local API"
 * )
 *
 * @OA\SecurityScheme(
 *      securityScheme="bearerAuth",
 *      type="http",
 *      scheme="bearer",
 *      bearerFormat="JWT",
 *      description="Introduce tu token JWT obtenido en /api/auth/login"
 * )
 */
abstract class Controller
{
    //
}