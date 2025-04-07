# 🐳 Kubernetes Node App with NGINX Reverse Proxy – Minikube Setup

This is a minimal but complete guide on how I deployed a simple Node.js app on Kubernetes using NGINX as a reverse proxy — all locally with Minikube.

I wrote this as a walkthrough of *exactly* what I did, along with explanations for future-me and anyone else stuck with Minikube weirdness.

---

Contents 
- Node.js app (basic HTTP server)
- NGINX (as reverse proxy inside K8s)
- Kubernetes (Minikube)
- Docker (locally built images)
- curl (for testing)
- `kubectl`

---

What this Does
- Deploys a basic Node.js app as a service
- Deploys NGINX which reverse proxies to the Node app
- Exposes NGINX using `LoadBalancer` + `minikube tunnel`
- Testable on `localhost:80`

---

## How I did it

- Started off learning Kubernetes architecture: https://www.youtube.com/watch?v=a-nWPre5QYI&t=1020s
- Installed minikube & kubectl CLI: https://kubernetes.io/docs/tasks/tools/
- The first step was to start Minikube, which provides a local Kubernetes cluster for development and testing.
- Since I was running Minikube locally, I needed to ensure Docker builds are executed in the Minikube VM environment
- To deploy and expose both the Node.js app and NGINX, I created Kubernetes deployment and service configuration files.

The node-app-deployment.yaml deploys a single replica of the Node.js app.
The node-app-service.yaml exposes the Node.js app as a service so that other components, like NGINX, can communicate with it.

The nginx-proxy-deployment.yaml deploys NGINX in a container and exposes it on port 80.
The nginx-proxy-service.yaml makes NGINX available as a LoadBalancer type service to allow external access to NGINX.

- Before exposing the service to the outside world, I verified that NGINX could connect to the Node.js app internally. This test ensured that the reverse proxy configuration was working as expected within the Kubernetes cluster.
- I needed to expose NGINX externally so I could access it from my browser. Since I was using Minikube locally, I used the LoadBalancer service type and the minikube tunnel command to make the service accessible via localhost.

In the end it was all accesible on port 80.

## What I Learned
Minikube and Networking: Minikube’s internal networking setup can be tricky, especially when it comes to exposing services. The LoadBalancer type with minikube tunnel is the best way to expose services externally in Minikube.

NodePort vs LoadBalancer: NodePort opens the port on the Minikube VM, not on localhost. It works when you access Minikube’s internal IP, but for local testing, LoadBalancer is better.

NGINX Reverse Proxy: NGINX is a great tool for managing traffic between services. Setting it up in Kubernetes was straightforward, but I had to test internal connectivity to ensure proper routing.
