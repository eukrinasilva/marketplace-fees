import Database = require("better-sqlite3");

export const db = new Database("database.sqlite");

db.pragma("journal_mode = WAL");

db.pragma("foreign_keys = ON");