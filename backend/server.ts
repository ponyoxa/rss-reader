import express, { Express } from 'express';
import rssRoutes from './routes/rss';

const app: Express = express();
app.use('/rss', rssRoutes);

const port: string | number = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));