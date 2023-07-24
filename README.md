Please complete the following assignment by 3 pm on Monday, i.e. 24th July 2023.
Please upload your code on GitHub and revert the link here.

Assignment: User Management API with PostgreSQL and JWT

Objective:
Create a RESTful API using Node.js that allows users to perform CRUD operations (Create, Read, Update, Delete) on a user management system. The API should support the following endpoints:

1. *POST /auth/register*: Register a new user.
2. *POST /auth/login*: Authenticate and generate a JWT token for the user.
3. *GET /users*: Retrieve a list of all users.
4. *GET /users/:id*: Retrieve a specific user by their ID.
5. *POST /users*: Create a new user.
6. *PUT /users/:id*: Update an existing user by their ID.
7. *DELETE /users/:id*: Delete a user by their ID.

Requirements:
1. Use Express.js as the web framework.
2. Use PostgreSQL as the database to store user data.
3. Implement user registration and authentication using JWT (JSON Web Tokens). Store hashed passwords in the database.
4. Implement proper error handling and return appropriate HTTP status codes for different scenarios (e.g., 200 for successful requests, 404 for not found, 500 for internal server errors).
5. Use JSON for data representation in both request and response bodies.
6. Implement input validation and return meaningful error messages for validation failures (e.g., missing required fields, invalid email format).
7. Use the `pg` or `pg-promise` library to interact with the PostgreSQL database.
8. Write unit tests for your API endpoints using a testing framework like Mocha or Jest.
9. Use asynchronous programming and Promises or async/await to handle asynchronous operations (e.g., database queries).

Guidelines:
1. Create GitHub repository to your own GitHub account.
2. Implement the API in your created repository.
3. Include a README file with instructions on how to set up and run the API locally, including any database setup instructions.
4. Commit your changes regularly and push them to your forked repository.
5. Once you've completed the assignment, share the link to your forked repository with the interviewers.

Bonus (Optional):
If you want to go above and beyond, you can consider adding the following features to your API:

1. Pagination support for retrieving users in chunks.
2. Filtering and sorting options for the GET /users endpoint (e.g., filter by name, sort by age).
3. Implement password reset functionality using email verification.
4. Swagger documentation for your API using tools like Swagger UI or OpenAPI.

Good luck!