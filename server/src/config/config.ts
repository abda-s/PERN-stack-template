import dotenv from 'dotenv';
// Load environment variables immediately
dotenv.config();

// Define the interface for the Sequelize configuration object
export interface Config {
  username?: string | undefined;
  password?: string | undefined | null;
  database: string;
  host: string;
  dialect: 'postgres';
  // Note: use_env_variable is optional and can be added here if needed
  use_env_variable?: string; // It's an optional string property
}

// Define the structure for all environments
export interface AllConfigs {
  development: Config;
  test: Config;
  production: Config;
  [key: string]: Config; // Allows dynamic access like configFile[env]
}

const config: AllConfigs = {
  "development": {
    "username": process.env.DB_USER, // These are now correctly typed as string | undefined
    "password": process.env.DB_PASS,
    "database": process.env.DB_NAME as string, // Cast to string as a safeguard, Sequelize expects a string
    // "host": process.env.DB_HOST as string,
    "host": process.env.DB_HOST || "localhost", // Temporary hardcoded value for local development
    "dialect": "postgres"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
};

export default config;