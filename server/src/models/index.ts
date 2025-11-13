import fs from 'fs';
import path from 'path';
import { Sequelize, DataTypes } from 'sequelize';
import configFile from '../config/config';
import type { Config } from '../config/config';

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config: Config = configFile[env] as Config;

interface DB {
  [key: string]: any;
  sequelize: Sequelize;
  Sequelize: typeof Sequelize;
}

const db: DB = {} as DB;
let sequelize: Sequelize;

const {
  database,
  username,
  password,
  use_env_variable,
  ...options
} = config;


if (use_env_variable && process.env[use_env_variable]) {
  sequelize = new Sequelize(process.env[use_env_variable] as string, options);
} else if (database && username && password) {
  sequelize = new Sequelize(database, username, password, options);
} else if (database) {
  sequelize = new Sequelize(database, username ?? '', password ?? '', options);
} else {
    throw new Error(`Database configuration for environment '${env}' is incomplete.`); // Fixed syntax
}

// Read all model files and import them using require (CommonJS)
const modelFiles = fs
  .readdirSync(__dirname)
  .filter((file: string) => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      (file.slice(-3) === '.ts' || file.slice(-3) === '.js') &&
      file.indexOf('.test.') === -1
    );
  });

modelFiles.forEach((file: string) => {
  const modelModule = require(path.join(__dirname, file));
  // Handle both CommonJS (module.exports) and ES6 (export default)
  const modelFunction = modelModule.default || modelModule;
  const model = modelFunction(sequelize, DataTypes);
  db[model.name] = model;
});

// Set up associations
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;