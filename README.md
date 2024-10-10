# Library API
A RESTful API for managing books, authors, and reviews in a library.

# Project Description
The Library API is Node.js and Express.js project that provides a simple and intuitive way to manage books, authors, and reviews in a library. The API allows users to create, read, update, and delete books, authors, and reviews.

# Installation
Clone the repository: git clone https://github.com/Binary-05/Library-api.git
Install dependencies: npm install
Start the server: node app.js

# Environment variables
Create a .env file with the following variable:
MONGO_URI: the URI of your MongoDB instance

# Running the API
Start the server: node app.js
Access the API at http://localhost:7979

# Endpoints
Books:
POST /books: Create a new book
GET /books: Retrieve a list of all books
GET /books/:id: Retrieve a single book by ID
PATCH /books/:id: Update a single book by ID
DELETE /books/:id: Delete a single book by ID

Authors:
POST /authors: Create a new author
GET /authors: Retrieve a list of all authors
GET /authors/:id: Retrieve a single author by ID
PATCH /authors/:id: Update a single author by ID
DELETE /authors/:id: Delete a single author by ID

Reviews: 
POST /reviews: Create a new review
GET /reviews: Retrieve a list of all reviews for a book
GET /reviewqs/:id: Retrieve a single review for a book by ID
PATCH /reviews/:id: Update a single review for book by ID
DELETE /reviews/:id: Delete a single review for a book by ID

# Guidelines
Follow the Node.js coding standards
Write unit tests for new features and bug fixes
Submit pull requests with clear descriptions and relevant changes

# Reporting Issues
Open an issue on the GitHub repository with a clear description of the problem
Provide steps to reproduce the issue and any relevant error messages

# Credits
Developers & Maintainers:
Francis Amekeh (franciskojoamekeh@gmail.com)
Scherazade Loise Dzama Odoi (scherazadeodoi366@gmail.com)
Henrrike Quarshie (henrrikequarshie@gmail.com)
Jessica Akosua (jessica.a.adika@gmail.com)
Rodney Hinson (rodneyhinson22@gmail.com)

# Troubleshooting
Common Issues
Error: "Invalid token" - Check that the JSON Web Token is valid and properly formatted
Error: "Unauthorized" - Check that the user is authenticated and authorized to access the requested resource

# Getting Help
Open an issue on the GitHub repository