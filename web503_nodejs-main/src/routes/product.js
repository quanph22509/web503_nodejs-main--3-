import express from "express";
import {
  create,
  get,
  getAll,
  remove,
  updatePatch,
} from "../controllers/product.js";
import { checkPermission } from "../middlewares/checkPermission.js";
const router = express.Router();

router.get("/products", getAll);
router.get("/products/:id", get);
router.post("/products", create);
router.put("/products/:id", updatePatch);
router.delete("/products/:id", remove);

export default router;
