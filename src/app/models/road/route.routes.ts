import express from 'express';
import { RouteController } from './route.controller.js';

const router = express.Router();

router.post('/create-route', RouteController.CreateRouteController);

export const RouteRouters = router;
