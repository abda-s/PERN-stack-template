# Client (Frontend)

This directory contains the frontend of the application, which is a React application built with Vite and TypeScript.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Client](#running-the-client)
- [Building for Production](#building-for-production)
- [Linting](#linting)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation

1.  **Navigate to the client directory:**

    ```bash
    cd client
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

### Running the Client

To run the client in development mode with hot-reloading, use:

```bash
npm run dev
```

The client will be available at [http://localhost:5173](http://localhost:5173).

## Building for Production

To build the client for production, use the following command:

```bash
npm run build
```

The production-ready files will be located in the `dist` directory.

## Linting

To run the linter, use:

```bash
npm run lint
```