/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
const argon2 = require("argon2");
// Load environment variables from .env file
require("dotenv").config();

// Import Faker library for generating fake data
// const { faker } = require("@faker-js/faker");

// Code permettant de hacher le mot de passe de notre utilisateur fictif

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 19 * 2 ** 10, // 19 Mio en kio (19 * 1024 kio)
  timeCost: 2,
  parallelism: 1,
};

const passwordToHash = "Wild2024!";

argon2
  .hash(passwordToHash, hashingOptions)
  .then((hash) => {
    console.info("Mot de passe haché:", hash);
  })
  .catch((err) => {
    console.error("Erreur de hachage du mot de passe:", err);
  });

// Import database client
const database = require("./database/client");

const seed = async () => {
  try {
    // Declare an array to store the query promises
    // See why here: https://eslint.org/docs/latest/rules/no-await-in-loop
    const queries = [];

    /* ************************************************************************* */

    // Generating Seed Data

    await database.query("delete from user");
    queries.push(
      database.query(
        `INSERT INTO user (roleUser, email, hashedPassword) VALUES
            ('Administrateur', 'axel@gmail.com', '$argon2id$v=19$m=19456,t=2,p=1$DxbqRdC87+PnwXt/OB1Ntg$lxGiR/lM9YeGFHi2zRsmk+PQxLp4ySV1vcZhGHFsy2M')`
      )
    );

    await database.query("delete from service");
    queries.push(
      database.query(
        `INSERT INTO service (name, duration, description) VALUES
            ('Auto - Intérieur', '2 heures', 'Le detailling auto intérieur comprend notamment l''aspiration complète, la désinfection du volant et de poignées, le brossage des cuirs et tissus ou encore le cirage des plastiques.'),
            ('Auto - Extérieur', '1 heure 30 minutes', 'Le detailling extérieur comprend notamment le prélavage à la main, le nettoyage des passages de roues ou encore le rinçage à haute pression après le lavage.'),
            ('Moto', '1 heure', 'Le detailling moto comprend le lavage extérieur de l''intégralité de votre moto pour que vous ayez l''impression qu''elle sort du garage.')`
      )
    );

    await database.query("delete from userService");
    queries.push(
      database.query(
        `INSERT INTO userService (user_id, service_id) VALUES
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
