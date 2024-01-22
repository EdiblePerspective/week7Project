import pg from "pg";
const dbConnectionString=process.env.DATABASE_URL;
export const db= new pg.Pool({connectionString: dbConnectionString});

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config(); 
const app = express();
app.use(cors())
const PORT = 8080;

app.get("/", (request, response) => {
    response.json("Root route response");
});

app.get("/categories", async (request, response) => {
    const result = await db.query("SELECT * FROM categories");
    response.json(result.rows);
  });
app.get("/posts", async (request, response) => {
    const result = await db.query("SELECT * FROM posts");
    response.json(result.rows);
  });


// start server
app.listen(PORT, () => console.log(`App is running on PORT ${PORT}`));