#!/bin/bash 
  
set -e

# Execute NPM commands for Angular
docker exec -i $(docker ps -aq --filter="name=ecs-hiredhelpr-staging-task-definition-v3-4-hiredhelprweb-webgui-app-*" --filter="status=running") bash -c "cd frontend && sudo npm install"