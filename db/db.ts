import { drizzle } from "drizzle-orm/node-postgres";
import { client } from "./index.js";
import * as schema from "../schemas/schema.js";
import { z } from "zod";

// Conectar ao banco de dados
client
  .connect()
  .then(() => {
    console.log("Conexão com o PostgreSQL bem-sucedida");
  })
  .catch((err) => {
    console.error("Erro ao conectar com o PostgreSQL:", err);
  });

// Configurar a conexão do Drizzle ORM
export const db = drizzle(client, { schema });
