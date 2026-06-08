# VegeeShop 🥦🛒

A fully responsive e-commerce storefront for fresh vegetables, fruits, juices, and dried goods — built with React and powered by a custom REST API deployed on Vercel.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-vegeeshop--app.vercel.app-4CAF50?style=for-the-badge&logo=vercel&logoColor=white)](https://vegeeshop-app.vercel.app)
[![API Repo](https://img.shields.io/badge/Backend%20Repo-vegeeshop--api-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Farzane2630/vegeeshop-api-v2)

---

## Features

- 🛒 Add / remove products from cart with quantity control
- ❤️ Wishlist — save and manage favourite items
- 🔍 Filter products by category (Vegetables, Fruits, Juice, Dried)
- ⏱ Countdown timer for limited best-price deals
- 📧 Newsletter subscription
- 📱 Fully responsive across desktop, tablet, and mobile

## Tech Stack

![React](https://img.shields.io/badge/React-%2320232a.svg?style=flat-square&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-F9DC3e?style=flat-square&logo=typescript&logoColor=blue)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=flat-square&logo=react-router&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=flat-square&logo=SASS&logoColor=white)
![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=flat-square&logo=material-ui&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)

## Architecture

```
vegeeshop-app (React + Vite)  →  vegeeshop-api (Express on Vercel Serverless)
```

The backend was originally a `json-server` prototype. It has since been replaced with a production Express API deployed as a Vercel serverless function, exposing RESTful endpoints for products, categories, cart, and more.

## Screenshots

### 🏠 Homepage
![homepage](https://github.com/Farzane2630/vegeefood/assets/110881082/90d1cf01-e964-4049-b49f-a92d9af1837a)

### 🛒 Cart
![cart](https://github.com/Farzane2630/vegeefood/assets/110881082/e6edab3b-fa1f-4494-89dc-7e0fb9109629)

### ❤️ Wishlist
![wishlist](https://github.com/Farzane2630/vegeefood/assets/110881082/a86559d6-f3e0-4af9-9739-a1540239abf4)

### 💸 Checkout
![checkout](https://github.com/Farzane2630/vegeefood/assets/110881082/ed1e41a1-0bd2-4ea0-bc75-81018358ace4)

### ☎️ Contact
![contact](https://github.com/Farzane2630/vegeefood/assets/110881082/f7b550aa-2bea-4e0f-842c-c6f0b9fba308)

### 🧙‍♀️ About
![about](https://github.com/Farzane2630/vegeefood/assets/110881082/9f127c4e-27ed-4419-a3b8-86971dbb34e2)

## Run Locally

```bash
git clone https://github.com/Farzane2630/vegeeshop-app
cd vegeeshop-app
npm install
npm run dev
```

The app points to the live API by default. No local server setup needed.

## Author

**Farzane Kazemi**

[![GitHub](https://img.shields.io/badge/github-000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Farzane2630)
[![LinkedIn](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/farzane-kazemi/)
