import express from 'express';
import routesConfig from './routes';

const app = express();

routesConfig(express, app);

export default app;