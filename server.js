import express from 'express';
import { loadData } from './dataHandler.js';
import cors from 'cors';
import besokareRouter from './routes/besokare.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors())
app.use('/api/besokare', besokareRouter);

app.get('/api/massInfo', (req, res) => {
  const data = loadData();
  res.json(data.mässInfo);
});


app.get('/api/omraden', (req, res) => {
  const data = loadData();
  res.json(data.områden);
});


app.get('/api/omraden/:id', (req, res) => {
  const data = loadData();
  const område = data.områden.find(o => o.id === parseInt(req.params.id));
  if (!område) {
    return res.status(404).send('Området hittades inte.');
  }
  res.json(område);
});

app.post('/api/besokare', (req, res) => {
  const formData = req.body;
  console.log(formData);
 
  res.json({ message: 'Data mottagen!' });
});



app.listen(port, () => {
  console.log(`Server körs på port ${port}`);
});
