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
      `insert into ${this.table} (name, duration, description) values (?, ?, ?)`,
      [service.name, service.duration, service.description]
    );

    return result.insertId;
  }

  async readById(id) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the item
    return rows[0];
  }

  async delete(id) {
    await this.database.query(`delete from userService where service_id=?;`, [
      id,
    ]);

    await this.database.query(`delete from ${this.table} where id=?`, [id]);
    // Return the ID of the newly inserted user
    return true;
  }
}

module.exports = ItemManager;
