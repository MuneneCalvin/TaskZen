create DATABASE TaskZen;
use TaskZen;

-- Tables
create table Users (
    id int PRIMARY KEY identity(1,1),
    username varchar(50) NOT NULL,
    email varchar(50) NOT NULL,
    password varchar(50) NOT NULL,
);

