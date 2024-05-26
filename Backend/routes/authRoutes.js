import bcrypt from "bcryptjs";
import express from "express";
import pool from "../config/db.js";

const router = express.Router();
const saltRound = 10;

router.post("/register", async (req, res) => {
  try {
    const { username, password, email, role } = req.body;

    const existingUser = await pool.query(
      "SELECT * FROM users WHERE username = $1 OR email = $2",
      [username, email]
    );
    if (existingUser.rows.length !== 0) {
      return res
        .status(400)
        .json({ error: "Username or email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, saltRound);
    await pool.query(
      "INSERT INTO users (username, password, email, role) VALUES ($1, $2, $3, $4)",
      [username, hashedPassword, email, role]
    );
    res.status(201).json({ message: "User registered successfully" });
    req.session.userId = user.rows[0].id;
    req.session.username = user.rows[0].username;
    req.session.role = user.rows[0].role;
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await pool.query("SELECT * FROM users WHERE username = $1", [
      username,
    ]);

    if (user.rows.length === 0) {
      return res.status(401).json({ error: "Invalid username or password" });
    }
    const validPassword = await bcrypt.compare(password, user.rows[0].password);
    if (!validPassword) {
      return res.status(401).json({ error: "Invalid username or password" });
    }
    req.session.userId = user.rows[0].id;
    req.session.username = user.rows[0].username;
    req.session.role = user.rows[0].role;
    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error("Error destroying session:", err);
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.status(200).json({ message: "Logout successful" });
    }
  });
});

export default router;
