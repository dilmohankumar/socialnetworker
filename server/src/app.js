import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import apiRoutes from './routes/index.js';
import { notFound, errorHandler } from './middleware/errorHandler.js';

const app = express();

app.set('trust proxy', 1);
app.use(helmet());
// In production set CLIENT_ORIGIN (comma-separated) so only your site can call the API from a browser.
const allowedOrigins = process.env.CLIENT_ORIGIN?.split(',').map((o) => o.trim()).filter(Boolean);
app.use(cors({ origin: allowedOrigins?.length ? allowedOrigins : true }));
app.use(express.json({ limit: '100kb' }));
app.use(morgan('dev'));

app.use('/api', apiRoutes);

app.use(notFound);
app.use(errorHandler);

export default app;
