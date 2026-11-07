<?php

namespace App\Swagger;

use OpenApi\Attributes as OA;

#[OA\Info(
    version: "1.0.0",
    title: "API REST E-commerce con Stripe y JWT",
    description: "Documentación interactiva de los servicios backend para la tienda en línea."
)]
#[OA\Server(
    url: "http://127.0.0.1:8000/api",
    description: "Servidor Local API"
)]
#[OA\SecurityScheme(
    securityScheme: "bearerAuth",
    type: "http",
    name: "Authorization",
    in: "header",
    scheme: "bearer",
    bearerFormat: "JWT",
    description: "Introduce tu token JWT obtenido en /api/auth/login"
)]
class ApiSwaggerConfig
{
    // Archivo de configuración centralizado para Swagger
}