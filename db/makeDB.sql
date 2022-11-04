CREATE DATABASE BAMX;
USE BAMX;

CREATE TABLE donors (
    id          INT             NOT NULL        PRIMARY KEY     AUTO_INCREMENT,
    name        VARCHAR(20)     NOT NULL,
    last_name   VARCHAR(50)     NOT NULL,
    phone       VARCHAR(10)     NOT NULL,
    product     VARCHAR(20)     NOT NULL
);