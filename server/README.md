# Server (Backend)

This directory contains the backend of the application, which is a Node.js server built with Express, TypeScript, and Sequelize.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Server](#running-the-server)
- [Database Migrations with Sequelize](#database-migrations-with-sequelize)
  - [Generating a Model and Migration](#generating-a-model-and-migration)
  - [Running Migrations](#running-migrations)
  - [Reverting Migrations](#reverting-migrations)
- [API Endpoints](#api-endpoints)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation

1.  **Navigate to the server directory:**

    ```bash
    cd server
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

### Running the Server

To run the server in development mode with hot-reloading, use:

```bash
npm run dev
```

## Database Migrations with Sequelize

This project uses `sequelize-cli` for database migrations. Since the project is in TypeScript, there are a few extra steps to make it work smoothly.

### Generating a Model and Migration

To generate a new model and its corresponding migration, you can use the `sequelize-cli` command. Note that the generated files will be in JavaScript, and you'll need to convert the model file to TypeScript.

1.  **Generate the files:**

    Run the following command from the `server` directory, replacing `MyModel` and the attributes with your desired model name and fields:

    ```bash
    npx sequelize-cli model:generate --name MyModel --attributes firstName:string,lastName:string,email:string
    ```

2.  **Convert the model to TypeScript:**

    The generated model file (e.g., `src/models/mymodel.js`) will be in JavaScript. You need to rename it to `.ts` (e.g., `src/models/MyModel.ts`) and update the syntax to TypeScript. Here is an example of a TypeScript model:

    ```typescript
    import { DataTypes, Model, Sequelize } from 'sequelize';

    export default (sequelize: Sequelize) => {
        class MyModel extends Model {
            // Define your model's properties here
        }

        MyModel.init({
            // Define your model's attributes here
        }, {
            sequelize,
            modelName: 'MyModel',
        });

        return MyModel;
    };
    ```

### Running Migrations

To run all pending migrations, use the following command from the `server` directory:

```bash
npx sequelize-cli db:migrate
```

### Reverting Migrations

To revert the last migration, use:

```bash
npx sequelize-cli db:migrate:undo
```

To revert all migrations, use:

```bash
npx sequelize-cli db:migrate:undo:all
```

## API Endpoints

The server exposes the following API endpoints:

- **`GET /`**: A simple health check endpoint.
