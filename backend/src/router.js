const express = require("express");

const { verifyToken } = require("./services/Auth");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const itemControllers = require("./controllers/itemControllers");
const authControllers = require("./controllers/authControllers");
const serviceControllers = require("./controllers/serviceControllers");
const userControllers = require("./controllers/userControllers");

const loginMiddleware = require("./middlewares/loginMiddleware");

// Route to get a list of items
router.get("/items", itemControllers.browse);

// Route to get a specific item by ID
router.get("/items/:id", itemControllers.read);

// Route to add a new item
router.post("/items", itemControllers.add);

// Route to login
router.post("/login", loginMiddleware, authControllers.login);

// Route to get a specific service
router.get("/allservice/:id", serviceControllers.readServiceById);

// Route to delete service
router.delete("/service/delete/:id", serviceControllers.deleteService);

// Route to update service
router.put("/service/update/:id", serviceControllers.updateService);

// Route to get specific USER with ID
router.get("/users/:id", userControllers.read);

/* ************************************************************************* */

// Route to get all services
router.get("/allservice", verifyToken, serviceControllers.browse);

// Route to post new service
router.post("/service", serviceControllers.add);

module.exports = router;
