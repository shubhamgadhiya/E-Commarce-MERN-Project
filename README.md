# E-Commarce App with MERN Stack

This project is a full-stack eCommerce application built with the MERN stack (MongoDB, Express.js, React, and Node.js). The application provides a seamless online shopping experience, including user authentication, product browsing, a shopping cart. The backend is powered by Node.js and Express.js, providing a RESTful API, while MongoDB is used for data storage. The frontend, developed with React, delivers a dynamic and responsive user interface.

<h2>🚀 Demo</h2>

[Website](https://e-commarce-huqg.onrender.com)<br />

## Features

- **User Authentication:** Secure user sign-up, login, and logout using JSON Web Tokens (JWT).
- **Product Browsing:** Display a catalog of products, each with detailed information, using React components.
- **Shopping Cart:** Add, remove, and update products in the cart, with real-time price calculations.
- **Admin Dashboard:** Manage products, categories, users, and orders with admin privileges.
- **Application Management:** Job seekers can manage their job applications, and employers can view and manage received applications.
- **Responsive Design:** Ensures a seamless experience across all devices.

  ## Technologies Used

- **Frontend:** React.js,Redux (for state management), React Router, Bootstrap for styling
- **Backend:** Node.js, Express.js, MongoDB
- **Authentication:** JWT (JSON Web Tokens), Bcrypt (for password hash)
  
  ## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

- Node.js installed on your machine with latest version or v22.2.0 above
- MongoDB Atlas account (or local MongoDB server)


### Installation

1. Clone the repo:
   ```sh
   git clone git remote add origin https://github.com/shubhamgadhiya/Job-Portal-MERN.git
   ```
2. Install NPM packages:
   ```sh
   cd Frontend
   cd Backend
   npm install
   cd..
   cd frontend
   npm install
   ```
3. Set up environment variables:
   - Create a `.env` file after creating a `config folder` in the backend directory, containing the following variables:
   ```env
   PORT = 
   MONGODB_URI = 
   TOKEN_SECRET_KEY = 
   EMAIL = 
   PASSWORD = 
   ```

   Replace each value with your specific configuration details.

4. Run the application:
   ```sh
   npm start
   ```
5. Open your browser and navigate to `http://localhost:4000` to view the app.
