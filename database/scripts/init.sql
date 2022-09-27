CREATE DATABASE IF NOT EXISTS db_proxy_reverse;

USE db_proxy_reverse;

CREATE TABLE IF NOT EXISTS people (
    id int not null auto_increment primary key,
    name varchar(255)
);	

INSERT IGNORE INTO people (id, name) VALUES (1, 'Jiovan Michel da Silva');