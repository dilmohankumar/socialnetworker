import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import serviceRoutes from './routes/serviceRoutes.js';
import verticalRoutes from './routes/verticalRoutes.js';
import locationRoutes from './routes/locationRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import pageContentRoutes from './routes/pageContentRoutes.js';
import teamMemberRoutes from './routes/teamMemberRoutes.js';
import partnerRoutes from './routes/partnerRoutes.js';
import newsPostRoutes from './routes/newsPostRoutes.js';
import eventRoutes from './routes/eventRoutes.js';
import workProjectRoutes from './routes/workProjectRoutes.js';
import jobPostingRoutes from './routes/jobPostingRoutes.js';
import { notFound, errorHandler } from './middleware/errorHandler.js';

const app = express();

app.use(helmet());
app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173',
  })
);
app.use(express.json());
app.use(morgan('dev'));

app.get('/api/health', (req, res) => res.json({ status: 'ok' }));

app.use('/api/services', serviceRoutes);
app.use('/api/verticals', verticalRoutes);
app.use('/api/locations', locationRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/pages', pageContentRoutes);
app.use('/api/team', teamMemberRoutes);
app.use('/api/partners', partnerRoutes);
app.use('/api/news', newsPostRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/work-projects', workProjectRoutes);
app.use('/api/jobs', jobPostingRoutes);

app.use(notFound);
app.use(errorHandler);

export default app;
