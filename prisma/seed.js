const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  await prisma.food.createMany({
    data: [
      { name: "Nasi Goreng", calories: 300, imageUrl: "https://example.com/nasigoreng.jpg" },
      { name: "Ayam Goreng", calories: 250, imageUrl: "https://example.com/ayamgoreng.jpg" },
      { name: "Mie Goreng", calories: 350, imageUrl: "https://example.com/miegoreng.jpg" },
    ],
  });
  console.log("✅ Data awal berhasil dimasukkan!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
