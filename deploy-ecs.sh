#!/bin/bash

set -e

# possible -b (base / app name) -i (image version), -e (deploy env), -s (service id), -r (aws region), -m (Image) and -v (Version)
while getopts b:i:e:s:r:m:v: option
do
case "${option}"
in
b) BASE_NAME=${OPTARG};;
i) IMG_VERSION=${OPTARG};;
e) DEPLOY_ENV=${OPTARG};;
#s) SERVICE_ID=${OPTARG};;
r) REGION=${OPTARG};;
m) IMG=${OPTARG};;
v) VER=${OPTARG};;
esac
done

echo "BASE_NAME: " $BASE_NAME
echo "IMG_VERSION: " $IMG_VERSION
echo "DEPLOY_ENV: " $DEPLOY_ENV
#echo "SERVICE_ID: " $SERVICE_ID
echo "REGION: " $REGION
echo "IMG: " $IMG
echo "VER: " $VER

if [ -z "$BASE_NAME" ]; then
    echo "exit: No BASE_NAME specified"
    exit;
fi

#if [ -z "$SERVICE_ID" ]; then
#    echo "exit: No SERVICE_ID specified"
#    exit;
#fi

if [ -z "$DEPLOY_ENV" ]; then
    echo "exit: No DEPLOY_ENV specified"
    exit;
fi

if [ -z "$IMG_VERSION" ]; then
    echo "exit: No IMG_VERSION specified"
    exit;
fi

if [ -z "$REGION" ]; then
    echo "exit: No REGION specified"
    exit;
fi

if [ -z "$IMG" ]; then
    echo "exit: No IMAGE specified"
    exit;
fi

if [ -z "$VER" ]; then
    echo "exit: No IMAGE specified"
    exit;
fi

# Define variables
TASK_FAMILY=${BASE_NAME}-${DEPLOY_ENV}-task-definition-v3
SERVICE_NAME=${BASE_NAME}-${DEPLOY_ENV}-service-${VER}
CLUSTER_NAME=${BASE_NAME}-${DEPLOY_ENV}-${VER}

IMGAGE_PACEHOLDER="<IMGAGE_VERSION>"

CONTAINER_DEFINITION_FILE=$(cat ${BASE_NAME}web-webgui.container-definition.json)
CONTAINER_DEFINITION="${CONTAINER_DEFINITION_FILE//$IMGAGE_PACEHOLDER/$IMG_VERSION}"

#export TASK_VERSION=$(aws ecs register-task-definition --family ${TASK_FAMILY} --container-definitions "$CONTAINER_DEFINITION" | jq --raw-output '.taskDefinition.revision')
export TASK_VERSION=4
export CLUSTER_CHECK=$(aws ecs describe-clusters --cluster $CLUSTER_NAME --region $REGION)
echo "Registered ECS Task Definition: " $TASK_VERSION

if [ -n "$TASK_VERSION" ]; then
    echo "$CLUSTER_CHECK"
    echo "Update ECS Cluster: " $CLUSTER_NAME
    echo "Service: " $SERVICE_NAME
    echo "Task Definition: " $TASK_FAMILY:$TASK_VERSION
    
    # Update Service in the Cluster
    DEPLOYED_INIT_SERVICE=$(aws ecs update-service --cluster $CLUSTER_NAME --region $REGION --service $SERVICE_NAME --task-definition $TASK_FAMILY:$TASK_VERSION | jq --raw-output '.service.serviceName')
    echo "$DEPLOYED_INIT_SERVICE"

    DECRIBED_SERVICE=$(aws ecs describe-services --region $REGION --cluster $CLUSTER_NAME --services $SERVICE_NAME)
    echo "$DECRIBED_SERVICE"
    CURRENT_DESIRED_COUNT=$(echo $DECRIBED_SERVICE | jq --raw-output ".services[0].desiredCount")
    #    - echo $CURRENT_DESIRED_COUNT

    CURRENT_TASK_REVISION=$(echo $DECRIBED_SERVICE | jq -r ".services[0].taskDefinition")
    echo "Current Task definition in Service" + $CURRENT_TASK_REVISION

    CURRENT_RUNNING_TASK=$(echo $DECRIBED_SERVICE | jq -r ".services[0].runningCount")
    echo $CURRENT_RUNNING_TASK

    CURRENT_STALE_TASK=$(echo $DECRIBED_SERVICE | jq -r ".services[0].deployments | .[] | select(.taskDefinition != \"$CURRENT_TASK_REVISION\") | .taskDefinition")
    echo "Task defn apart from current service Taskdefn" +  $CURRENT_STALE_TASK
    #   - echo $CURRENT_STALE_TASK

    tasks=$(aws ecs --region $REGION list-tasks --cluster $CLUSTER_NAME | jq -r '.taskArns | map(.[40:]) | reduce .[] as $item (""; . + $item + " ")')
    echo "Tasks are as follows" 
    echo $tasks
    # TASKS=$(aws ecs --region $REGION describe-tasks --cluster $CLUSTER_NAME --task $tasks);
    
    # OLDER_TASK=$(echo $TASKS | jq -r ".tasks[] | select(.taskDefinitionArn = \"$CURRENT_TASK_REVISION\") | .taskArn | split(\"/\") | .[1] ")
    # echo "Older Task running  " + $OLDER_TASK
    # for old_task in $OLDER_TASK; do
    #    DELETE_CURRENT_TASK=$(aws ecs --region $REGION stop-task --cluster $CLUSTER_NAME --task $old_task)
    #    echo "$DELETE_CURRENT_TASK"
    # done
     
    # Run new tasks with the updated new Task-definition
    DEPLOYED_SERVICE=$(aws ecs update-service --cluster $CLUSTER_NAME --region $REGION --service $SERVICE_NAME --task-definition $TASK_FAMILY:$TASK_VERSION | jq --raw-output '.service.serviceName')
    
    echo "$DEPLOYED_SERVICE deployment complete"

    # Time needed for the current task to run
    SLEEP_TIME=30
    SLEEP=$(sleep $SLEEP_TIME)
    echo "Time needed for the current task to run: $SLEEP_TIME secs"

else
    echo "exit: No task definition"
    exit;
fi