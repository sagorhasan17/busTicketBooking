import express, { type Application } from 'express';
import dotenv from 'dotenv';
import { UserRoutes } from './user/user.routes.js';

dotenv.config();
const app = express();

// JSON body parser --need for req.body
app.use(express.json());

// -------------------- ROUTES --------------------
app.use("/api/v1/users", UserRoutes)

// -------------------- DEFAULT ROUTE --------------------
app.get('/', (req, res) => {
  res.send('This Server is properly running...');
});

// -------------------- EXPORT APP --------------------
export default app;
