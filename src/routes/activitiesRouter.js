const { Router } = require("express");

const { createActivitesHandler, getActivitiesHandler, } = require("../Handlers/activitiesHandler");

const activitiesRouter = Router();

activitiesRouter.get("/", getActivitiesHandler);
activitiesRouter.post("/", createActivitesHandler);

module.exports = activitiesRouter;
