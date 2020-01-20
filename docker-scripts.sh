#!/bin/bash
  
set -e

#check if the MySQL 8 Docker image exists
if [[ "$(docker inspect --type=image mysql:8.0)" != "[]" ]]; then
        echo "Mysql 8 image exists."
else
        # Pull MySQL 8 from Docker Hub
        docker pull mysql:8.0
fi

#Check if the MySQL is already running
if [ "$(docker inspect -f "{{.State.Running}}" hiredhelpr-data)" = "true" ]; then
        echo "Hiredhelpr-data is already running."
else
        # Run MySQL 8
        echo "Run MySQL data for Hiredhelpr API"
        docker run --name hiredhelpr-data -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=hiredhelpr_db -d mysql:8.0 mysqld --default-authentication-plugin=mysql_native_password --character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci
fi

# Execute Composer/Artisan commands for Laravel API
docker exec -i $(docker ps -aq --filter="name=ecs-hiredhelpr-staging-task-definition-v3-4-hiredhelprweb-webgui-app-*" --filter="status=running") bash -c "composer install --optimize-autoloader && cp .env.pipelines .env && php artisan migrate --force"