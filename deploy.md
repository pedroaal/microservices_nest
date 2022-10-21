# Deploy

## Docker
In order to deploy in docker, each proyect has it own dockerfile.

From this file you can build the image, and ```$ docker run ...```. 

You will also need to create a rabbitmq container, in order to comunicate between microservices.

For simplicity you can deploy using the docker-compose file, which will build images, and create containers, including rabbitmq.

## Kubernetes
First create namespace
```sh
  kubectl apply -f micro-namespace.yaml
```

Then create load balancer
```sh
  kubectl -n micro apply -f micro-service-lb.yaml
```