import express, { type Application } from 'express';
import dotenv from 'dotenv';
import { UserRoutes } from './user/user.routes.js';
import { BookingRoutes } from './booking/booking.routes.js';
import { BusRoutes } from './bus/bus.route.js';
import { RouteRouters } from './road/route.routes.js';
import { AuthRoute } from './auth/auth.routes.js';
import { PaymentRoutes } from './payment/payment.routes.js';

dotenv.config();
const app = express();

// JSON body parser --need for req.body
app.use(express.json());

// -------------------- ROUTES --------------------
app.use("/api/v1/users", UserRoutes)
app.use("/api/v1/login", AuthRoute)
app.use("/api/v1/booking", BookingRoutes)
app.use("/api/v1/bus", BusRoutes)
app.use("/api/v1/route", RouteRouters)
app.use("/api/v1/payment", PaymentRoutes)


// -------------------- DEFAULT ROUTE --------------------
app.get('/', (req, res) => {
  res.send('This Server is properly running...');
});

// -------------------- EXPORT APP --------------------
export default app;
