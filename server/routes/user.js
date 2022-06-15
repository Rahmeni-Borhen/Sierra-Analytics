import express from "express";
const router = express.Router();

import { signup, signin, googleSignIn,getalluser,deletuser } from "../controllers/user.js";

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/googleSignIn", googleSignIn);
router.get("/allusers",getalluser);

router.delete("/deletuser/:id",deletuser);

export default router;