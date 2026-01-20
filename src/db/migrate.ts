import * as fs from "fs";
import * as path from "path";
import { db } from "./database";

const migrationsDir = path.join(__dirname, "migrations");

export function runMigrations() {

  // Garantir tabela de controle
  db.exec(`
    CREATE TABLE IF NOT EXISTS migrations (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL UNIQUE,
      executed_at TEXT DEFAULT CURRENT_TIMESTAMP
    );
  `);

  // Buscar migrations já executadas
  const executedMigrations = db
    .prepare("SELECT name FROM migrations")
    .all()
    .map((row: any) => row.name);

  // Ler arquivos do diretório
  const files = fs
    .readdirSync(migrationsDir)
    .filter(file => file.endsWith(".sql"))
    .sort();

  // Executar apenas pendentes
  for (const file of files) {
    if (executedMigrations.includes(file)) {
      continue;
    }

    const sql = fs.readFileSync(
      path.join(migrationsDir, file),
      "utf-8"
    );

    db.transaction(() => {
      db.exec(sql);
      db.prepare(
        "INSERT INTO migrations (name) VALUES (?)"
      ).run(file);
    })();

    console.log(`Migration aplicada: ${file}`);
  }
}

// ponto de entrada
runMigrations();
