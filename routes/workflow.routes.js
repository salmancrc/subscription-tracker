import { Router } from "express";
import { SendReminders } from "../controllers/workflow.controller.js";

const workflowRouter = Router();

workflowRouter.post("/subscription/reminder", SendReminders);

export default workflowRouter;