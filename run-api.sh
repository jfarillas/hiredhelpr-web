#!/bin/bash

set -e

# possible -s (Sleep time), -l (SSH login URL) and -u (EC2 user)
while getopts s:l:u:k: option
do
case "${option}"
in
s) SLEEP_TIME=${OPTARG};;
l) SSH_LOGIN_URL=${OPTARG};;
u) EC2_USER=${OPTARG};;
esac
done

if [ -z "$SLEEP_TIME" ]; then
    echo "exit: No SLEEP_TIME specified"
    exit;
fi

if [ -z "$SSH_LOGIN_URL" ]; then
    echo "exit: No SSH_LOGIN_URL specified"
    exit;
fi

if [ -z "$EC2_USER" ]; then
    echo "exit: No EC2_USER specified"
    exit;
fi

# Run the Laravel app through docker-compose up --build
echo "Run the Laravel app through docker-compose up --build api & --build mysql services."

# DOCKER_COMPOSE_DATA=$(docker-compose up --build -d mysql)
# echo "$DOCKER_COMPOSE_DATA"

DOCKER_COMPOSE_API=$(docker-compose up --build -d api)
echo "$DOCKER_COMPOSE_API"

# SSH login (with key pair updated)
# SSH_LOGIN=$(ssh -T -o StrictHostKeyChecking=no $EC2_USER@$SSH_LOGIN_URL 'sh /var/local/docker-scripts.sh && sh /var/local/docker-serve.sh')
# echo "$SSH_LOGIN"

# Time needed for the app to start
SLEEP=$(sleep $SLEEP_TIME)
echo "Time needed for the API to start: $SLEEP_TIME secs"
echo "The Hiredhelpr API has been started."

# Run the Angular app through docker-compose up --build
echo "Run the Angular app through docker-compose up --build app services."

DOCKER_COMPOSE_APP=$(docker-compose up --build -d app)
echo "$DOCKER_COMPOSE_APP"

# SSH login (with key pair updated)
# SSH_LOGIN_NODE=$(ssh -T -o StrictHostKeyChecking=no $EC2_USER@$SSH_LOGIN_URL 'sh /var/local/docker-node-scripts.sh && sh /var/local/docker-node-serve.sh')
# echo "$SSH_LOGIN_NODE"

# Time needed for the app to start
SLEEP_NEXT=$(sleep $SLEEP_TIME)
echo "Time needed for the App to start: $SLEEP_TIME secs"
echo "The Hiredhelpr App has been started."