# ---- PHP 7 ----
FROM php:7.2-fpm
# FROM php:7.3-apache
VOLUME /usr/src/app
LABEL maintainer="Joseph Ian Farillas <joseph.farillas@tiburondata.com>"
#Install git
RUN apt-get update \
    && apt-get install -y sudo \
    && apt-get install -y systemd \
    && apt-get install -y iputils-ping \
    && apt-get install -y net-tools \
    && apt-get install -y git \
    && apt-get install -y libpng-dev \
    && apt-get install -y libicu-dev \
    && apt-get install -y libxml2-dev \
    && apt-get install -y libzip-dev   
RUN docker-php-ext-install pdo pdo_mysql mysqli bcmath gd intl xml hash zip dom session opcache
# RUN a2enmod rewrite
# Install Composer
RUN apt-get install -y curl
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
# RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
# RUN php composer-setup.php --install-dir=. --filename=composer
# RUN mv composer /usr/local/bin/
# Install PPA
RUN apt-get install -y software-properties-common

# Install the LTS release (version 10), use this PPA
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash -

#Install Nodejs
RUN apt install -y nodejs

#Copy apache config for vhost
# COPY api.hiredhelpr.tiburondata.com.conf /etc/apache2/sites-available/api.hiredhelpr.tiburondata.com.conf
#Enable site/s
# RUN a2ensite api.hiredhelpr.tiburondata.com.conf

# Go to the current direcory
WORKDIR /usr/src/app

# Copy host directory to the Docker directory
COPY . .

# Install app dependencies
COPY composer.json .

# These following steps are intended on local development only
# Install Laravel dependencies
# RUN composer install \
#     && composer dump-autoload

# Run DB migration script
# CMD php artisan migrate

# Run the Laravel app
# CMD nohup php artisan serve &
# CMD php artisan serve --host=0.0.0.0 --port=8000
EXPOSE 8000