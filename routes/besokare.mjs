import express from 'express';
import { loadData, saveData } from '../dataHandler.mjs';  

const router = express.Router();

router.post('/', (req, res) => {
    try {
        const newVisitor = req.body;
        const data = loadData();

        if (!data.besokare || !Array.isArray(data.besokare)) {
            data.besokare = [];
        }

        data.besokare.push(newVisitor);
        saveData(data);

        res.json({ message: 'Data mottagen och sparad!', updatedData: data });
    } catch (error) {
        console.error(error);
        res.status(500).send('Ett internt serverfel inträffade');
    }
});

router.get('/', (req, res) => {
    try {
        const data = loadData();
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Ett internt serverfel inträffade');
    }
});
export default router;
