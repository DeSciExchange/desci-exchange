import { PrismaClient } from "@prisma/client";

export async function customSeed() {
  const client = new PrismaClient();
  const username = process.env.ADMIN_USER || "admin";

  //replace this sample code to populate your database
  //with data that is required for your service to start
  await client.user.update({
    where: { username: username },
    data: {
      username,
      password: process.env.ADMIN_PASS || "admin",
    },
  });

  client.$disconnect();
}
