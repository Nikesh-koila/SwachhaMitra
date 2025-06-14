import express from "express";
import cors from "cors";
import gpsRouter from "./routes/gps.js";
import housesRouter from "./routes/houses.js";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use("/api/gps", gpsRouter);
app.use("/api/houses", housesRouter);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
