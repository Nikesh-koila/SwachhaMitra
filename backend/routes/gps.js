import express from 'express';
const router = express.Router();
import mockGPSData from '../data/mockGPSData.js';
import mockHouseData from '../data/mockHouseData.js';

router.post('/', (req, res) => {

      const randomIndex = Math.floor(Math.random() * mockGPSData.length);
    const fallback = mockGPSData[randomIndex];
    
   const house = mockHouseData.find(
    h => h.ward === fallback.ward && h.house === fallback.house
  );

  if (house) {
    house.visited = true;
  }
  res.json({ house: fallback.house, ward: fallback.ward });
  
});

export default router;