import express from 'express';
import cors from 'cors';
import db from './models';
import morgan from "morgan";

const app = express();
const PORT = process.env.SERVER_PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

console.log(`starting server in ${process.env.NODE_ENV} mode`);

const startServer = () => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
};

app.get('/', (req, res) => {
    res.send('API is running...');
});

// Different behavior based on environment
const syncDatabase = async () => {
    const env = process.env.NODE_ENV || 'development';
    
    try {
        if (env === 'development') {
            // Auto-alter tables in development
            await db.sequelize.sync({ alter: true });
            console.log('✅ Database synced (alter mode for development)');
        } else if (env === 'test') {
            // Drop and recreate for tests
            await db.sequelize.sync({ force: true });
            console.log('✅ Database synced (force mode for testing)');
        } else {
            // Production: just check connection, use migrations
            await db.sequelize.authenticate();
            console.log('✅ Database connection verified (use migrations for schema changes)');
        }
        
        startServer();
    } catch (error: any) {
        console.error('❌ FATAL ERROR: Failed to connect to database.', error.message);
        console.log('⚠️ Starting server anyway, but database routes may fail.');
        startServer();
    }
};

syncDatabase();