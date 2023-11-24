import express from 'express';
import { loadData } from '../dataHandler.mjs';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const data = await loadData(); 
    res.json(data.omraden);
  } catch (error) {
    console.error('Error loading omarden:', error);
    res.status(500).send('Serverfel vid hämtning av omraden');
  }
});

export default router;
