const AbstractManager = require("./AbstractManager");

class ItemManager extends AbstractManager {
  constructor() {
    super({ table: "service" });
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of items
    return rows;
  }

  async create(service) {
    const [result] = await this.database.query(
      `insert into ${this.table} (name, duration) values (?, ?)`,
      [service.name, service.duration]
    );

    return result.insertId;
  }
}

module.exports = ItemManager;
