# PERN Stack Template with Docker and TypeScript

This project is a full-stack application template using the PERN stack (PostgreSQL, Express, React, Node.js) with Docker and TypeScript. It's designed to be a starting point for new projects, providing a solid foundation with a containerized development environment.

## Table of Contents

- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Setup](#setup)
- [Usage](#usage)
  - [Running the Application](#running-the-application)
  - [Stopping the Application](#stopping-the-application)
  - [Viewing Logs](#viewing-logs)
  -- [Accessing Services](#accessing-services)
- [Database Management](#database-management)
  - [Database Backups](#database-backups)
  - [Database GUI](#database-gui)
- [Contributing](#contributing)

## Project Structure

The project is organized into the following directories:

- **`/client`**: Contains the React frontend application.
- **`/server`**: Contains the Node.js/Express backend application.
- **`/pgbackup`**: Stores database backups.
- **`docker-compose-dev.yml`**: The main Docker Compose file for the development environment.
- **`.env.example`**: An example environment file.

## Getting Started

### Prerequisites

- [Docker](https://www.docker.com/get-started)
- [Node.js](https://nodejs.org/) (for local development without Docker)

### Setup

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd <repository-name>
    ```

2.  **Create an environment file:**

    Copy the `.env.example` file to a new file named `.env` and update the variables as needed.

    ```bash
    cp .env.example .env
    ```

## Usage

### Running the Application

To build and run all services in detached mode, use the following command:

```bash
docker compose -f docker-compose-dev.yml up --build -d
```

### Stopping the Application

To stop and remove all containers, networks, and volumes, use:

```bash
docker compose -f docker-compose-dev.yml down
```

### Viewing Logs

To view the logs of all running services, use:

```bash
docker compose -f docker-compose-dev.yml logs -f
```

### Accessing Services

- **Frontend:** [http://localhost:5173](http://localhost:5173)
- **Backend:** [http://localhost:3001](http://localhost:3001)
- **pgAdmin:** [http://localhost:8081](http://localhost:8081)

## Database Management

### Database Backups

The `pgbackup` service automatically creates backups of the database every hour. Backups are stored in the `/pgbackup` directory and are automatically deleted after 7 days.

### Database GUI

You can use pgAdmin to manage the database. Access it at [http://localhost:8081](http://localhost:8081) and log in with the credentials you provided in the `.env` file.

## Contributing

Contributions are welcome! Please feel free to submit a pull request.
