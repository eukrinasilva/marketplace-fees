CREATE TABLE IF NOT EXISTS fees (

  id TEXT PRIMARY KEY, 
  
  name TEXT NOT NULL, 
  
  marketplace TEXT NOT NULL,
  
  fixed_fee_cents INTEGER NOT NULL DEFAULT 0,
  
  percentage_fee REAL NOT NULL DEFAULT 0,
  
  is_active INTEGER NOT NULL DEFAULT 1,
  
  created_at TEXT DEFAULT CURRENT_TIMESTAMP
);