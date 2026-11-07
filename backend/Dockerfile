
# ==========================================
# ETAPA 1: BASE PHP Y EXTENSIONES
# ==========================================
FROM php:8.3-fpm-alpine AS php-base

RUN apk add --no-cache \
    nginx \
    supervisor \
    curl \
    libxml2 \
    oniguruma \
    && apk add --no-cache --virtual .build-deps \
    $PHPIZE_DEPS \
    libxml2-dev \
    oniguruma-dev \
    curl-dev \
    && docker-php-ext-install -j$(nproc) \
        bcmath \
        curl \
        exif \
        mbstring \
        pdo_mysql \
        pcntl \
        xml \
    && apk del .build-deps

WORKDIR /var/www/html

# ==========================================
# ETAPA 2: DEPENDENCIAS COMPOSER
# ==========================================
FROM php-base AS vendor

COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

COPY composer.json composer.lock ./

RUN --mount=type=cache,target=/tmp/composer-cache \
    COMPOSER_CACHE_DIR=/tmp/composer-cache \
    composer install \
    --no-dev \
    --no-interaction \
    --no-progress \
    --prefer-dist \
    --optimize-autoloader \
    --no-scripts

COPY . .

RUN rm -f bootstrap/cache/*.php \
    && composer dump-autoload \
        --no-dev \
        --optimize \
        --no-scripts \
    && php artisan package:discover --ansi

# ==========================================
# ETAPA 3: PRODUCCION
# ==========================================
FROM php-base AS production

WORKDIR /var/www/html

COPY --from=vendor /var/www/html /var/www/html

COPY docker/nginx/nginx.conf /etc/nginx/nginx.conf
COPY docker/nginx/default.conf /etc/nginx/http.d/default.conf

COPY docker/supervisord.conf /etc/supervisord.conf

RUN mkdir -p \
    storage/framework/cache/data \
    storage/framework/sessions \
    storage/framework/views \
    storage/logs \
    bootstrap/cache \
    /run/nginx \
    /var/lib/nginx/tmp \
    && chown -R www-data:www-data storage bootstrap/cache \
    && chown -R www-data:www-data /var/lib/nginx \
    && chmod -R 775 storage bootstrap/cache

EXPOSE 8000

CMD ["supervisord", "-c", "/etc/supervisord.conf"]

