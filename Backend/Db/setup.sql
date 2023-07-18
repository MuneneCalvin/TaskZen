create DATABASE TaskZen;
use TaskZen;

-- Tables
create table Users (
    id int PRIMARY KEY identity(1,1),
    username varchar(50) NOT NULL,
    email varchar(50) NOT NULL,
    password varchar(50) NOT NULL,
);

create table Team (
    id INT PRIMARY KEY identity(1,1),
    img varchar(500) NOT NULL,
    lastName varchar(50) NOT NULL,
    firstName varchar(50) NOT NULL,
    email varchar(50) NOT NULL,
    phone varchar(50) NOT NULL,
    createdAt datetime NOT NULL,
    verified bit NOT NULL,
);

INSERT INTO Team (img, lastName, firstName, email, phone, createdAt, verified)
VALUES 
    ('https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load', 'Hubbard', 'Eula', 'kewez@@gmail.com', '123 456 789', '2023-02-01', 1),
    ('https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1600', 'Manning', 'Stella', 'comhuhmit@gmail.com', '123 456 789', '2023-02-01', 1),
    ('https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1600', 'Greer', 'Mary', 'ujudokon@hottmail.com', '123 456 789', '2023-02-01', 1),
    ('https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&w=1600', 'Williamson', 'Mildred', 'tinhavabe@gmail.com', '123 456 789', '2023-02-01', 1),
    ('https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=1600', 'Gross', 'Jose', 'gobtagbes@yahoo.com', '123 456 789', '2023-02-01', 0),
    ('https://images.pexels.com/photos/769745/pexels-photo-769745.jpeg?auto=compress&cs=tinysrgb&w=1600', 'Sharp', 'Jeremy', 'vulca.eder@mail.com', '123 456 789', '2023-02-01', 1),
    ('https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1600', 'Lowe', 'Christina', 'reso.bilic@gmail.com', '123 456 789', '2023-02-01', 0),
    ('https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1600', 'Dean', 'Garrett', 'codaic@mail.com', '123 456 789', '2023-02-01', 1),
    ('https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1600', 'Parsons', 'Leah', 'uzozor@gmail.com', '123 456 789', '2023-02-01', 0),
    ('https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1600', 'Reid', 'Elnora', 'tuhkabapu@gmail.com', '123 456 789', '2023-02-01', 1),
    ('https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1600', 'Dunn', 'Gertrude', 'gibo@gmail.com', '123 456 789', '2023-02-01', 1),
    ('https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg?auto=compress&cs=tinysrgb&w=1600', 'Williams', 'Mark', 'tic.harvey@hotmail.com', '123 456 789', '2023-02-01', 0),
    ('https://images.pexels.com/photos/761977/pexels-photo-761977.jpeg?auto=compress&cs=tinysrgb&w=1600', 'Cruz', 'Charlotte', 'ceuc@gmail.com', '123 456 789', '2023-02-01', 0),
    ('https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1600', 'Harper', 'Sara', 'bafuv@hotmail.com', '123 456 789', '2023-02-01', 0),
    ('https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load', 'Griffin', 'Eric', 'ubi@gmail.com', '123 456 789', '2023-02-01', 0);