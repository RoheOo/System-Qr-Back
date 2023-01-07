import { Router } from "express";
import operationController from "../controllers/operationController.js";

const operationRouter = Router();

//post /qrstock/api/operations / count by type
operationRouter.post("/count-in-out", operationController.countByType);

//GET /qrstock/api/operations
//operationRouter.get("/", operationController);

//GET /qrstock/api/operations LASTID
operationRouter.get("/last-id", operationController.findLastId);

//POST  /qrstock/api/operations / CREATE
operationRouter.post("/", operationController.store);

//GET IN OPERATION
operationRouter.get("/in", operationController.findInOperations);

//GET out OPERATION
operationRouter.get("/out", operationController.findOutOperations);
//post out OPERATION
operationRouter.post("/out-id", operationController.findOutOperationsById);
//post out OPERATION
operationRouter.post("/in-id", operationController.findInOperationsById);
// put delete OEPRATION
operationRouter.put("/delete", operationController.deleteOperation);

export default operationRouter;