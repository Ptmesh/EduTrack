import pool from "../config/db.js";
import { getAllUsers } from "../models/userModels.js";

export const getHome = (req, res) => {
  res.send("Hello World!");
};

export const testDbConnection = async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json(result.rows);
  } catch (err) {
    console.error("Error connecting to DB", err);
    res.status(500).json({ error: "Database connection failed" });
  }
};

export const fetchAllUsers = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Failed to fetch users" });
  }
};
