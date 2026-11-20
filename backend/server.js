import express from 'express';

const app = express();
const port = Number(process.env.PORT ?? 3000);

app.use(express.json());

app.get('/health', (_request, response) => {
  response.json({ status: 'ok' });
});

app.get('/api/hello', (_request, response) => {
  response.json({ message: 'Your Node.js backend is running.' });
});

app.listen(port, () => {
  console.log(`API listening at http://localhost:${port}`);
});
