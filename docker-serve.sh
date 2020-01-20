#!/bin/bash
  
set -e

# Run the Laravel Server
docker exec -i $(docker ps -q --filter="name=ecs-hiredhelpr-staging-task-definition-v3-4-hiredhelprweb-webgui-app-*") bash -c "php artisan serve --host=0.0.0.0 --port=8000 > /dev/null 2>&1 &"