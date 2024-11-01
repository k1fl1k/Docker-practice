# Docker Practice Project

This is a simple Node.js application that demonstrates the use of Docker for containerization. The application serves static files, a custom 404 page, and proxies requests to a Node.js server using Nginx.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Features

- Serve static files from the `/static` directory.
- Custom 404 error page served from the `/html/404error` directory.
- Nginx configured as a reverse proxy to the Node.js application.
- Docker Compose setup for easy development and deployment.

## Prerequisites

- [Docker](https://www.docker.com/get-started) installed on your machine.
- [Docker Compose](https://docs.docker.com/compose/install/) installed on your machine.

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Ensure you have the necessary files:

   - `Dockerfile`: For building the Node.js app image.
   - `docker-compose.yml`: For defining the services (Node.js and Nginx).
   - `nginx.conf`: Nginx configuration file.
   - `html/404error/404.html`: Custom 404 error page.
   - `static/favicon.ico`: Example static file.

## Usage

1. Build and start the application using Docker Compose:

   ```bash
   docker-compose up --build -d
   ```

2. Access the application:

   - Open your web browser and navigate to `http://localhost`. This will route to your Node.js app.
   - Access static files at `http://localhost/static/favicon.ico`.
   - Access the custom 404 page by navigating to a non-existent route, e.g., `http://localhost/nonexistent`.

3. To stop and remove the containers, use:

   ```bash
   docker-compose down
   ```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
