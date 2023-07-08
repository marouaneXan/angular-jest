# Angular Application with Jest and JSON-Server

This is a simple Angular application that uses JSON-Server as a full fake REST API and Jest for testing.

## Prerequisites

Before you begin, ensure you have met the following requirements:

* Node.js installed (10.x or later)
* npm (6.x or later) or yarn (1.15 or later)

## Installing the application

To install the application, follow these steps:

```bash
# Clone the repository
git clone https://github.com/marouaneXan/angular-jest.git

# Go into the repository
cd angular-jest

# Install dependencies
npm install

# Run the app
ng serve

# Run specific test
npm test -- -t "it function ex: get list of users"
