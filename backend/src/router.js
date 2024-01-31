const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const itemControllers = require("./controllers/itemControllers");
const authControllers = require("./controllers/authControllers");
const serviceControllers = require("./controllers/serviceControllers");

// Route to get a list of items
router.get("/items", itemControllers.browse);

// Route to get a specific item by ID
router.get("/items/:id", itemControllers.read);

// Route to add a new item
router.post("/items", itemControllers.add);

// Route to login
router.post("/login", authControllers.login);

// Route to get all services
router.get("/allservice", serviceControllers.browse);

// Route to post new service
router.post("/service", serviceControllers.add);

/* ************************************************************************* */

module.exports = router;
