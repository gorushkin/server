import app from './app';

const PORT = process.env['PORT'] || '4000';

app.listen(PORT, async () => {
  console.log(`App is running on http://localhost:${PORT}`);
});
