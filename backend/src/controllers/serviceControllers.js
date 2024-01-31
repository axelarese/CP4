// Import access to database tables
const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    const items = await tables.service.readAll();

    res.json(items);
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

// Ready to export the controller functions
module.exports = {
  add,
  browse,
};
