# 7-Eleven Clone Web Application

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Architecture](#architecture)
- [Setup and Installation](#setup-and-installation)
- [Codebase Usage](#codebase-usage)
- [Executing Project](#executing-project)


## Introduction

This project is a web application that simulates the functionalities of a convenience store like 7-Eleven. Users can register, log in, browse products, add items to their cart, and place orders. The application is designed to provide a seamless shopping experience. Note: Due to proprietary images of the 7-Eleven brand, I have used common items in my project that includes elecronic items as well. Bu the functionality and shopping experience will remain the same.

## Features

- User Authentication
  - Sign up with a unique username, email, and password
  - Log in to access the application

- Profile Management
  - View and edit profile information

- Product Browsing
  - Browse a list of available products with details

- Shopping Cart
  - Add products to the cart
  - View and update cart items

- Checkout Process
  - Place orders and receive confirmation

## Technology Stack

- **Frontend**
  - React
  - JavaScript
  - HTML
  - CSS

- **Backend**
  - NodeJS
  - MongoDB

## Architecture
```
+------------------+                       +---------------------+
|                  |  HTTP Requests (REST) |                     |
|     Frontend     | <-------------------> |      Backend API    |
|      (React)     |                       |   (NodeJS, MongoDB) |
|                  |                       |    (Stripe, Cloud)  |
+------------------+                       +---------------------+
         |                                               |
         |                                               |
         |                                               |
         |                                               |
+-------------------+                       +---------------------+
|  User Interface   |                       |     Database        |
| (Product List,    |                       |   (MongoDB -Users,  |
| Cart, Checkout    |                       |   Products, Orders) |
| Search, Payment)  |                       +---------------------+
+-------------------+                       

```
The application follows a client-server architecture with a RESTful API.


## Setup and Installation

### Prerequisites

- Node.js and npm
- Python 3.x
- MongoDB

### Installation

If you are using Github link to download the codebase and use it to run and test then below is the first step:

1. **Clone the repository**

Open the VS Code and
 ```sh
 git clone https://github.com/im-manojbharadwaj/UAB.git
 ```

But if you use the codebase that is uploaded on Canvas (zip file) then you can just unzip the file and open the `7-eleven-app` directory from VS Code.

2. **Creating Virtual Environment**

Assuming you have conda installed
 ```sh
 cd CS621
 cd 7-eleven-app
 conda create -n web_venv python=3.8
 conda activate web_venv # On Windows, use `venv\Scripts\activate`
 ```

3. **Backend Setup**

While you are in VS Code, click on view and then terminal

You can simply use the npm command to install all the required libraries (Easy Approach)
 ```sh
 cd backend
 npm i
 ```

Or you can use requirements.txt to install all the libraries like below: 
 ```sh
 cd backend
 pip install -r requirements.txt
 ```

4. **Frontend Setup**

Within the same terminal:
 ```sh
 cd ../frontend
 npm i
 ```

5. **API Keys**

I have already included the `.env` having my API keys for below sites:
-   MongoDB (database)
-   Token Seret (for sessions)
-   Stripe API Key (payment gateway)
-   Stripe webhook key (logs payment status)
-   Cloudinary API (Cloud API for storing images)
-   Stripe Public Key (payment gateway)

6. **Stripe Configuration**

Register and Login to https://dashboard.stripe.com/
Once you are logged in go to https://dashboard.stripe.com/test/webhooks/create?endpoint_location=local
Click on `Download the CLI`
Scroll down till you see `Install the Stripe CLI`
Choose your OS and click on GitHub
Download and install if you are using Windows OS or Download and Extract if you are using Mac OS.

If you're on Windows OS, go to the directory of Stripe that you installed and follow the same instructions provided on https://docs.stripe.com/stripe-cli under the point number `2. Log in to CLI`

If you're on Mac OS, use below commands in sequence: (I have extracted the taz.gz file in my downloads directory)
1. `/Users/manoj/Downloads/stripe login`
2. `/Users/manoj/Downloads/stripe listen --forward-to localhost:8080/api/webhook`

Once you do both the above steps you should be seeing the steps as completed on https://dashboard.stripe.com/test/webhooks/create?endpoint_location=local 

**NOTE: Doing the above step is necessary because the order placement, payment and writing on MongoDB goes through this webhook.**

## Codebase Usage

With above set up you are ready to execute the project. Best way to run is to open two terminals in VS Code. One pointing at `frontend` directory and one pointing at `backend` directory like below:
 ```sh
 +-------------Terminal_1------------+-------------Terminal_2-----------+
 |                                   |                                  |
 |(web_venv)Manoj% cd frontend       |(web_venv)Manoj% cd backend       |
 |                                   |                                  |
 +-----------------------------------+----------------------------------+
 ```

## Executing Project

On the terminal pointing to `backend` run by using below command:
 ```sh
 npm run dev
 ```
On the terminal pointing to `frontend` run by using below command:
 ```sh
 npm start
 ```

 It will look something like below:
  ```sh
  +-------------Terminal_1---------------+-------------Terminal_2--------------------+
  |                                      |                                           |
  |(web_venv)Manoj frontend % npm start  |(web_venv)Manoj backend % npm run dev      |
  |                                      |                                           |
  +--------------------------------------+-------------------------------------------+
  ```

If everything looks good, the application will open the default browser and direct to  `http://localhost:3000/`. Meanwhile the backend opens on `http://localhost:8080/`