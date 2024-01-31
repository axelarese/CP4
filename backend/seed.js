/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

// Load environment variables from .env file
require("dotenv").config();

// Import Faker library for generating fake data
// const { faker } = require("@faker-js/faker");

// Import database client
const database = require("./database/client");

const seed = async () => {
  try {
    // Declare an array to store the query promises
    // See why here: https://eslint.org/docs/latest/rules/no-await-in-loop
    const queries = [];

    /* ************************************************************************* */

    // Generating Seed Data

    await database.query("delete from admin");
    queries.push(
      database.query(
        `INSERT INTO admin (roleUser, email, hashedPassword) VALUES
            ('Administrateur', 'axel@gmail.com', '$2y$10$J0gyH0ZoSBaF4iaiLpCjiuH/b4OHo8CUkNjETIlBa8FEhf7nUSdDa')`
      )
    );

    await database.query("delete from service");
    queries.push(
      database.query(
        `INSERT INTO service (name, duration) VALUES
            ('Auto', '1 heure'),
            ('Moto', '45 minutes'),
            ('Vélo', '30 minutes')`
      )
    );

    await database.query("delete from adminService");
    queries.push(
      database.query(
        `INSERT INTO adminService (admin_id, service_id) VALUES
            ('1', '1'),
            ('1', '2'),
            ('1', '3')`
      )
    );

    // await database.query("delete from adminService");
    // queries.push(
    //   database.query(
    //     `INSERT INTO adminService (admin_id, service_id) VALUES
    //         (1, 2),
    //         (1, 2)`
    //   )
    // );

    // Optional: Truncate tables (remove existing data)
    // await database.query("truncate item");

    // Insert fake data into the 'item' table
    // for (let i = 0; i < 10; i += 1) {
    //   queries.push(
    //     database.query("insert into item(title) values (?)", [
    //       faker.lorem.word(),
    //     ])
    //   );
    // }

    /* ************************************************************************* */

    // Wait for all the insertion queries to complete
    await Promise.all(queries);

    // Close the database connection
    database.end();

    console.info(`${database.databaseName} filled from ${__filename} 🌱`);
  } catch (err) {
    console.error("Error filling the database:", err.message);
  }
};

// Run the seed function
seed();
