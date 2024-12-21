# E-Commerce Backend

This repository contains the backend for an e-commerce platform. It includes features such as user authentication, product management, cart functionality, order control, and reviews, providing a seamless experience for both users and administrators.

---

## Features

- **Authentication**:
  - User registration, login, and JWT-based authentication.

- **Cart Management**:
  - Add, update, and remove items from the cart.

- **Admin Order Control**:
  - Manage orders, update order statuses, and monitor sales.

- **Order Management**:
  - Place orders and track order history.

- **Product Management**:
  - CRUD operations for products..
  - Product categories, pricing, and inventory tracking.

- **Ratings & Reviews**:
  - Add, update, and delete ratings and reviews for products.

- **User Management**:
  - User profile updates and account management.

---

## Technologies Used

- **Backend Framework**: Node.js with Express
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Environment Management**: dotenv
- **Other Tools**: bcrypt, Mongoose

---

## Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v14 or above)
- **npm** or **yarn**
- **MongoDB** (local or hosted)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Maman08/E-commerce.git
   cd E-commerce


2. Install dependencies:
   ```bash
   npm install

3. Setup .env file
   PORT=5000
   MONGO_URI=your-mongodb-connection-string
   JWT_SECRET=your-secret-key
   

3. Start the development server:
   ```bash
   nodemon index.js
   
   
