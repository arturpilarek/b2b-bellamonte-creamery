# 🧀 Bellamonte Creamery – B2B E-commerce Platform

This is a full-stack B2B web application for managing and ordering premium alpine cheese, built with Vue 3, Node.js, Azure Cosmos DB, and deployed via Azure DevOps.

## 🗂 Structure

b2b-bellamonte-creamery/
│
├── apps/
│ ├── frontend/ # Vue 3 app (SPA)
│ └── backend/ # Express.js API
│
├── shared/ # Shared config/types
├── infra/ # Azure DevOps pipelines / IAC in the future


## 📦 Installation
See individual `README.md` in `/apps/frontend` and `/apps/backend`

## 🏗 Architectural Choices

The purpose of this project is to highlight and train the following technologies: **Vue 3**, **Node.js (Express)**, and **Azure services with DevOps**.

To serve that goal, I made several intentional decisions:

- **Frontend and backend are fully decoupled**, rather than using Nuxt.js or another meta-framework. This better simulates a modern B2B architecture with clearly separated concerns.
  
- **Node.js with Express is used as the backend**, even though Azure Functions or other serverless approaches might be more efficient. Express allows me to demonstrate routing, middleware, REST API structure, and session handling in a clear, extensible way.

- **Monorepo structure** is used to maintain a unified codebase for both frontend and backend, enabling clean CI/CD separation and easier project showcase with a single repo. I'm running separate dependency managment to abstract monorepo complexity away (nx / turborepo)

- **Azure Cosmos DB is used as the primary data store in the MVP**, serving both products and orders. While this setup is simple and fast for development, the architecture is designed to evolve. In a real-world enterprise environment, the most optimal solution would involve integrating a headless e-commerce platform (e.g. **Magento**, **Swell**) or a modern CMS like **Hygraph** for dynamic product content and stock management. In Phase 2, Cosmos DB will shift into a **caching layer** by implementation of sync logic, while **SAP** becomes the authoritative source of truth for products, pricing, and inventory.

