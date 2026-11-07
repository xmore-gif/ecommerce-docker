# ecommerce-api-stripe-swagger
API de E-commerce Segura con Swagger Completo

# 🛒 API RESTful E-commerce Segura — Laravel 12, JWT, Stripe & Swagger

API RESTful desarrollada para la gestión de un comercio electrónico completo. Incluye autenticación de usuarios mediante **JWT**, catálogo de productos con acceso público y protegido, procesamiento de pagos con la pasarela de **Stripe**, y documentación interactiva mediante **Swagger / OpenAPI**.

---

## 🚀 Requisitos Previos

* PHP >= 8.2
* Composer
* MySQL Server (XAMPP, Laragon, MySQL local, etc.)
* Cuenta y Claves de prueba de [Stripe](https://stripe.com)

---

## 🛠️ Instalación y Configuración

1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/stanleygarcia22-del/ecommerce-api-stripe-swagger.git](https://github.com/stanleygarcia22-del/ecommerce-api-stripe-swagger.git)
   cd ecommerce-api-stripe-swagger

2. Instalar dependencias: 

    composer install

3. Configurar el entorno:
    cp .env.example .env
    php artisan key:generate
    php artisan jwt:secret

4. Configurar Base de Datos y Stripe en .env:

    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=ecommerce_api_db
    DB_USERNAME=root
    DB_PASSWORD=

    STRIPE_KEY=pk_test_tu_clave_publica_aqui
    STRIPE_SECRET=sk_test_tu_clave_secreta_aqui

5. Ejecutar migraciones y datos de prueba (Seeders): 
    php artisan migrate --seed

6. Generar documentación de Swagger:

    php artisan l5-swagger:generate

7. Iniciar el servidor local:

    php artisan serve

Resumen de Endpoints

🟢 Endpoints Públicos

Método,Endpoint,Descripción
POST,/api/auth/register,Registro de nuevo cliente
POST,/api/auth/login,Autenticación y obtención de token JWT
GET,/api/products,Consulta del catálogo completo de productos
GET,/api/products/{id},Consulta detallada de un producto

🔒 Endpoints Protegidos (Header: Authorization: Bearer <TOKEN>)

Método,Endpoint,Descripción
POST,/api/auth/logout,Cerrar sesión e invalidar token
GET,/api/auth/me,Obtener información del usuario actual
POST,/api/products,Agregar un nuevo producto al catálogo
PUT,/api/products/{id},Actualizar un producto existente
DELETE,/api/products/{id},Eliminar un producto del catálogo
POST,/api/orders,Crear orden de compra y procesar pago con Stripe (pm_card_visa)
GET,/api/orders,Consultar el historial de compras del usuario autenticado

🧪 Pruebas de Compras con Stripe

Para probar el pago exitoso en el endpoint POST /api/orders, utiliza en la propiedad payment_method_id el token de tarjeta de prueba oficial de Stripe:

Token de Prueba: pm_card_visa