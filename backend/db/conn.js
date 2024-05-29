
const dotEnv = require('dotenv').config()
const mongoose = require("mongoose");


async function main() {
  try {
    mongoose.set("strictQuery", true);

    const dbUser = process.env.DB_USER;
    const dbPassword = process.env.DB_PASSWORD;

    await mongoose.connect(
      `mongodb+srv://${dbUser}:${dbPassword}@cluster0.vbbp4iw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    );
    console.log("Conectado ao banco");
  } catch (error) {
    console.log(`Erro: ${error}`);
  }
}

module.exports = main;
