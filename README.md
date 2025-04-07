# 🐳 Kubernetes Node App with NGINX Reverse Proxy – Minikube Setup

This is a minimal but complete guide on how I deployed a simple Node.js app on Kubernetes using NGINX as a reverse proxy — all locally with Minikube.

I wrote this as a walkthrough of *exactly* what I did, along with explanations for future-me and anyone else stuck with Minikube weirdness.

---

## 🧱 Tech Stack

- Node.js app (basic HTTP server)
- NGINX (as reverse proxy inside K8s)
- Kubernetes (Minikube)
- Docker (locally built images)
- curl (for testing)
- `kubectl`

---

## 🧪 What This Does

- Deploys a basic Node.js app as a service
- Deploys NGINX which reverse proxies to the Node app
- Exposes NGINX using `LoadBalancer` + `minikube tunnel`
- Testable on `localhost:80`

---
