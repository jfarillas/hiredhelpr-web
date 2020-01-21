#!/bin/bash 
  
set -e

# Remove the stopped containers which are excited
docker rm $(docker ps -a | grep Exited | awk '{print $1}')

# Remove all stopped containers, all volumes not used by at least one container, all networks not used by at least one container, all dangling images
docker system prune -f

# Remove dangling volumes
docker volume rm $(docker volume ls -qf dangling=true)