import * as fs from "fs";
import * as path from "path";
import { db } from "./database";

const migrationsDir = path.join(__dirname, "migrations");

export function runMigrations() {
  const files = fs
    .readdirSync(migrationsDir)
    .filter(f => f.endsWith(".sql"))
    .sort();

  const applied = db
    .prepare("SELECT name FROM sqlite_master WHERE type='table'")
    .all()
    .map((t: any) => t.name);

  for (const file of files) {
    const sql = fs.readFileSync(
      path.join(migrationsDir, file),
      "utf-8"
    );

    db.exec(sql);
    console.log(`Migration executada: ${file}`);
  }
}

runMigrations();
