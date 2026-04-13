import express, { Request, Response } from 'express';
import 'dotenv/config';

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('chaindox api services');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});