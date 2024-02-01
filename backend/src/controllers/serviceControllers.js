// Import access to database tables
const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    const items = await tables.service.readAll();

    res.status(200).json(items);
  } catch (err) {
    next(err);
  }
};

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  const item = req.body;

  try {
    const insertId = await tables.service.create(item);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const deleteService = async (req, res, next) => {
  // Extract the user data from the request body
  const { id } = req.body;

  try {
    // Insert the user into the database

    const result = await tables.service.delete(id);
    res.status(201).json(result);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted user
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const readServiceById = async (req, res, next) => {
  try {
    // Fetch a specific item from the database based on the provided ID
    const item = await tables.service.readById(req.params.id);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (item == null) {
      res.sendStatus(404);
    } else {
      res.json(item);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const updateService = async (req, res, next) => {
  const { name, duration, description } = req.body;
  const { id } = req.params;

  try {
    // Fetch a specific item from the database based on the provided ID
    const item = await tables.service.update(name, duration, description, id);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (item == null) {
      res.sendStatus(404);
    } else {
      res.json(item);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// Ready to export the controller functions
module.exports = {
  add,
  browse,
  deleteService,
  readServiceById,
  updateService,
};
