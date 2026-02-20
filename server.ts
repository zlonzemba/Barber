import express from "express";
import { createServer as createViteServer } from "vite";
import Database from "better-sqlite3";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const db = new Database("barber.db");

// Initialize database
db.exec(`
  CREATE TABLE IF NOT EXISTS bookings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    service TEXT NOT NULL,
    date TEXT NOT NULL,
    time TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.get("/api/bookings", (req, res) => {
    const bookings = db.prepare("SELECT * FROM bookings ORDER BY date DESC, time DESC").all();
    res.json(bookings);
  });

  app.post("/api/bookings", (req, res) => {
    const { name, email, service, date, time } = req.body;
    if (!name || !email || !service || !date || !time) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    try {
      const info = db.prepare(
        "INSERT INTO bookings (name, email, service, date, time) VALUES (?, ?, ?, ?, ?)"
      ).run(name, email, service, date, time);
      res.status(201).json({ id: info.lastInsertRowid });
    } catch (err) {
      res.status(500).json({ error: "Database error" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
