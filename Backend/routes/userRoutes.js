import express from "express";
import {
  fetchAllUsers,
  getHome,
  testDbConnection,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/", getHome);
router.get("/test-db", testDbConnection);
router.get("/users", fetchAllUsers);

export default router;
