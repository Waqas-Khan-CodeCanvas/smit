# User Authentication System

A simple, client-side user authentication system built with HTML, Bootstrap 5, and vanilla JavaScript. This project demonstrates user registration, login functionality, and protected routes using browser localStorage for data persistence.

## Features

- User registration with validation
- User login with authentication
- Protected home page (redirects to login if not authenticated)
- User profile display
- Logout functionality
- Client-side data persistence using localStorage

## Pages

- **Login**: User authentication interface
- **Register**: New user registration with form validation
- **Home**: Welcome page accessible only to authenticated users

## Technologies Used

- HTML5
- Bootstrap 5.3.5 for responsive UI
- Vanilla JavaScript for functionality
- localStorage for client-side data persistence

## How to Use

1. Clone this repository
2. Open `index.html` in your browser (you'll be redirected to login page if not authenticated)
3. Register a new user account
4. Login with your credentials
5. Explore the protected home page

## Implementation Details

- User data is stored in the browser's localStorage
- Password validation ensures minimum length of 6 characters
- Email validation using regex pattern
- Automatic redirection to appropriate pages based on authentication status

## Note

This is a front-end only implementation intended for educational purposes. In a production environment, proper server-side authentication would be required for security.
