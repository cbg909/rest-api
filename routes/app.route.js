const express = require('express');
const router = express.Router();
const AppController = new(require('../controllers/app.controller')).AppController();


//fetch all release notes
router.get("/version/:id", async (request, response) => {
    try {
        let app = await AppController.getReleaseNoteByAppIdAndVersion(request);
        return response.status(200).json({ status: 200, data: app, message: "Successfully Release Notes Retrieved" });
    } catch (error) {
        response.status(500).send({message: error.message});
    }
});

//create an app
router.post("/", async (request, response) => {
    try {
        let app = await AppController.createApp(request);
        return response.status(201).json({ status: 201, data: app, message: "Successfully App Created" });
    } catch (error) {
        response.status(500).send({message: error.message});
    }
});

// get all apps
router.get("/", async (request, response) => {
    try {
        let apps = await AppController.getApps();
        return response.status(200).json({ status: 200, data: apps, message: "Successfully Apps Retrieved" });
    } catch (error) {
        response.status(500).send({message: error.message});
    }
});

//get app by id
router.get("/:id", async (request, response) => {
    try {
        let app = await AppController.getAppById(request);
        return response.send({ status: 200, data: app, message: "Successfully App Retrieved" });
    } catch (error) {
        response.status(500).send({message: error.message});
    }
});

//delete app by id
router.delete("/:id", async (request, response) => {
    try {
        let app = await AppController.deleteAppById(request);
        return response.status(201).json({ status: 201, data: app, message: "Successfully App Deleted" });
    } catch (error) {
        response.status(500).send({message: error.message});
    }
});

//delete all apps
router.delete("/", async (request, response) => {
    try {
        let app = await AppController.deleteAllAps();
        return response.status(201).json({ status: 201, data: {}, message: "Successfully Apps Deleted" });
    } catch (error) {
        response.status(500).send({message: error.message});
    }
});




module.exports = router;
