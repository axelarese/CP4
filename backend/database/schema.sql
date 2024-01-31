SET FOREIGN_KEY_CHECKS = 0;

create table admin (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  roleUser varchar(255) not null,
  email VARCHAR (100) NOT NULL,
  hashedPassword VARCHAR(255)NOT NULL
);

DROP TABLE IF EXISTS service;
create table service (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name varchar(50) not null,
  duration varchar(50) not null
);

DROP TABLE IF EXISTS adminService;
create table adminService (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  admin_id INT,
  service_id INT,
  CONSTRAINT admin_id FOREIGN KEY (admin_id) REFERENCES admin(id),
  CONSTRAINT service_id FOREIGN KEY (service_id) REFERENCES service(id)
);

SET FOREIGN_KEY_CHECKS = 1;