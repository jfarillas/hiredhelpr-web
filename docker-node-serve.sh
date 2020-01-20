#!/bin/bash
  
set -e

# Run the Nodejs Server
docker exec -i $(docker ps -q --filter="name=ecs-hiredhelpr-staging-task-definition-v3-4-hiredhelprweb-webgui-app-*") bash -c "cd frontend && sudo npm run server > /dev/null 2>&1 &"