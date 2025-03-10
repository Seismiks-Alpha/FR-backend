const express = require("express");
const { PrismaClient } = require("@prisma/client");
const cors = require("cors");

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// API untuk menambah makanan
app.post("/add-food", async (req, res) => {
  const { name, calories, imageUrl } = req.body;
  const food = await prisma.food.create({
    data: { name, calories, imageUrl },
  });
  res.json(food);
});

// API untuk mendapatkan semua makanan
app.get("/foods", async (req, res) => {
  const foods = await prisma.food.findMany();
  res.json(foods);
});

app.listen(5000, () => {
  console.log("Server berjalan di port 5000");
});
