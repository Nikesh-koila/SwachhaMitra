import express from 'express';
const router = express.Router();
import mockHouseData from '../data/mockHouseData.js';


router.get('/', (req, res) => {
  const ward = parseInt(req.query.ward);

  if (!ward) {
    return res.status(400).json({ error: 'Ward number is required' });
  }

  const housesInWard = mockHouseData.filter(h => h.ward === ward);

  res.json(housesInWard);
});

export default router;
