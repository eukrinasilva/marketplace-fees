import * as fs from "fs";
import * as path from "path";
import { db } from "./database";

const migrationsDir = path.join(__dirname, "migrations");

export function runMigrations() {
  console.log("🔄 Verificando migrações...");

  db.exec(`
    CREATE TABLE IF NOT EXISTS migrations (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL UNIQUE,
      executed_at TEXT DEFAULT CURRENT_TIMESTAMP
    );
  `);

  const executedMigrations = db
    .prepare("SELECT name FROM migrations")
    .all()
    .map((row: any) => row.name);

  // 3. Lê arquivos
  const files = fs
    .readdirSync(migrationsDir)
    .filter((file) => file.endsWith(".sql"))
    .sort();

  let count = 0;

  for (const file of files) {
    if (executedMigrations.includes(file)) {
      continue;
    }

    const sql = fs.readFileSync(path.join(migrationsDir, file), "utf-8");

    try {
      db.transaction(() => {
        db.exec(sql);
        db.prepare("INSERT INTO migrations (name) VALUES (?)").run(file);
      })();
      
      console.log(`✅ Migration aplicada: ${file}`);
      count++;
    } catch (error) {
      console.error(`❌ Erro crítico ao aplicar migration: ${file}`);
      console.error(error);
      process.exit(1);
    }
  }

  if (count === 0) {
    console.log("✨ Nenhuma nova migração pendente.");
  } else {
    console.log(`🚀 ${count} migrações aplicadas com sucesso.`);
  }
}

if (require.main === module) {
  runMigrations();
}