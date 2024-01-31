SET FOREIGN_KEY_CHECKS = 0;

create table user (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  roleUser varchar(255) not null,
  email VARCHAR (100) NOT NULL,
  hashedPassword VARCHAR(255)NOT NULL
);

DROP TABLE IF EXISTS service;
create table service (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  duration varchar(50) NOT NULL,
  description varchar(255) NOT NULL
);

DROP TABLE IF EXISTS userService;
create table userService (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  user_id INT,
  service_id INT,
  CONSTRAINT user_id FOREIGN KEY (user_id) REFERENCES user(id),
  CONSTRAINT service_id FOREIGN KEY (service_id) REFERENCES service(id)
);

SET FOREIGN_KEY_CHECKS = 1;