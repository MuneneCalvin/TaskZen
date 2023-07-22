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

create table Projects (
    id int PRIMARY KEY identity(1,1),
    img varchar(500) NOT NULL,
    title varchar(50) NOT NULL,
    priority varchar(50) NOT NULL,
    deadline datetime NOT NULL,
    members varchar(500) NOT NULL,
    createdAt datetime NOT NULL,
    verified bit NOT NULL,
);

create table Tasks (
    id int PRIMARY KEY identity(1,1),
    img varchar(500) NOT NULL,
    title varchar(50) NOT NULL,
    priority varchar(50) NOT NULL,
    deadline datetime NOT NULL,
    createdAt datetime NOT NULL,
    status varchar(50) NOT NULL,
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

INSERT INTO Projects (img, title, priority, deadline, members, createdAt, verified)
VALUES
    ('https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png', 'Nebula X', 'high', '2023-06-01', '$250.99', '2023-06-06', 1),
    ('https://www.pngmart.com/files/6/Dell-Laptop-PNG-Image.png', 'Quantum Shift', 'medium', '2023-03-31', '$499.99', '2023-05-01', 1),
    ('http://images.samsung.com/is/image/samsung/uk-led-tv-hg40ed670ck-hg40ed670ckxxu-001-front', 'Project Phoenix', 'low', '2023-07-08', '$999.49', '2023-03-01', 1),
    ('https://raylo.imgix.net/iphone-14-blue.png', 'Elysium Labs', 'high', '2023-11-02', '$799.49', '2022-01-02', 1),
    ('https://www.signify.com/b-dam/signify/en-aa/about/news/2020/20200903-movie-night-essentials-popcorn-ice-cream-and-the-new-philips-hue-play-gradient-lightstrip/packaging-lighstrip.png', 'Stellar Quest', 'low', '2023-02-01', '$39.99', '2023-02-01', 0),
    ('https://www.smartworld.it/wp-content/uploads/2019/09/High_Resolution_PNG-MX-Master-3-LEFT-GRAPHITE.png', 'Project Genesis', 'low', '2023-01-02', '$59.49', '2023-02-01', 1),
    ('https://www.pngarts.com/files/7/Podcast-Mic-PNG-Picture.png', 'Infinite Horizons', 'medium', '2023-06-05', '$119.49', '2023-06-05', 0),
    ('https://5.imimg.com/data5/SW/VM/MY-5774620/toshiba-split-ac-2-ton-3-star-rated-ras-24s3ks-500x500.png', 'Zenith Ventures', 'high', '2023-02-01', '$899.99', '2023-03-01', 1),
    ('https://img.productz.com/review_image/102489/preview_sony-kdl-50w800b-50-inch-hdtv-review-superb-picture-102489.png', 'Fusion Nexus', 'low', '2023-02-01', '$970.49', '2023-01-02', 0),
    ('https://venturebeat.com/wp-content/uploads/2015/07/As_AO1-131_gray_nonglare_win10_03.png?fit=1338%2C1055&strip=all', 'Project Aurora', 'low', '2023-02-01', '$599.99', '2023-02-01', 1);


INSERT INTO Tasks (img, title, priority, deadline, createdAt, status)
VALUES
    ('https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png', 'Task 1', 'high', '2023-06-01', '2023-06-06', 'In Progress'),
    ('https://www.pngmart.com/files/6/Dell-Laptop-PNG-Image.png', 'Task 2', 'medium', '2023-03-31', '2023-05-01', 'Completed'),
    ('http://images.samsung.com/is/image/samsung/uk-led-tv-hg40ed670ck-hg40ed670ckxxu-001-front', 'Task 3', 'low', '2023-07-08', '2023-03-01', 'Pending'),
    ('https://raylo.imgix.net/iphone-14-blue.png', 'Task 4', 'high', '2023-11-02', '2022-01-02', 'In Progress'),
    ('https://www.signify.com/b-dam/signify/en-aa/about/news/2020/20200903-movie-night-essentials-popcorn-ice-cream-and-the-new-philips-hue-play-gradient-lightstrip/packaging-lighstrip.png', 'Task 5', 'low', '2023-02-01', '2023-02-01', 'Pending'),
    ('https://www.smartworld.it/wp-content/uploads/2019/09/High_Resolution_PNG-MX-Master-3-LEFT-GRAPHITE.png', 'Task 6', 'low', '2023-01-02', '2023-02-01', 'Completed'),
    ('https://www.pngarts.com/files/7/Podcast-Mic-PNG-Picture.png', 'Task 7', 'medium', '2023-06-05', '2023-06-05', 'In Progress'),
    ('https://5.imimg.com/data5/SW/VM/MY-5774620/toshiba-split-ac-2-ton-3-star-rated-ras-24s3ks-500x500.png', 'Task 8', 'high', '2023-02-01', '2023-03-01', 'Pending'),
    ('https://img.productz.com/review_image/102489/preview_sony-kdl-50w800b-50-inch-hdtv-review-superb-picture-102489.png', 'Task 9', 'low', '2023-02-01', '2023-01-02', 'In Progress'),
    ('https://venturebeat.com/wp-content/uploads/2015/07/As_AO1-131_gray_nonglare_win10_03.png?fit=1338%2C1055&strip=all', 'Task 10', 'low', '2023-02-01', '2023-02-01', 'Completed');






-- Path: Backend/Db/setup.sql
-- Task Manager
create DATABASE TaskManager;
use TaskManager;

-- Create table for users
CREATE table Users (
    id int PRIMARY key IDENTITY(1, 1),
    profilePic BINARY,
    username VARCHAR(50) not null,
    email VARCHAR(50) not null,
    phone VARCHAR(50) not null,
    password VARCHAR(500) not null,
);

create table Team (
    id int PRIMARY key IDENTITY(1, 1),
    img varchar(500),
    lastName varchar(50) NOT NULL,
    firstName varchar(50) NOT NULL,
    email varchar(50) NOT NULL,
    phone varchar(50) NOT NULL,
    createdAt datetime NOT NULL,
);

-- Insert data into the table
INSERT INTO Team (img, lastName, firstName, email, phone, createdAt)
VALUES 
    ('https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load', 'Hubbard', 'Eula', 'kewez@gmail.com', '123 456 789', '2023-02-01'),
    ('https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1600', 'Manning', 'Stella', 'comhuhmit@gmail.com', '123 456 789', '2023-02-01'),
    ('https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1600', 'Greer', 'Mary', 'ujudokon@hotmail.com', '123 456 789', '2023-02-01'),
    ('https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&w=1600', 'Williamson', 'Mildred', 'tinhavabe@gmail.com', '123 456 789', '2023-02-01'),
    ('https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=1600', 'Gross', 'Jose', 'gobtagbes@yahoo.com', '123 456 789', '2023-02-01'),
    ('https://images.pexels.com/photos/769745/pexels-photo-769745.jpeg?auto=compress&cs=tinysrgb&w=1600', 'Sharp', 'Jeremy', 'vulca.eder@mail.com', '123 456 789', '2023-02-01'),
    ('https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1600', 'Lowe', 'Christina', 'reso.bilic@gmail.com', '123 456 789', '2023-02-01'),
    ('https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1600', 'Dean', 'Garrett', 'codaic@mail.com', '123 456 789', '2023-02-01'),
    ('https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1600', 'Parsons', 'Leah', 'uzozor@gmail.com', '123 456 789', '2023-02-01'),
    ('https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1600', 'Reid', 'Elnora', 'tuhkabapu@gmail.com', '123 456 789', '2023-02-01'),
    ('https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1600', 'Dunn', 'Gertrude', 'gibo@gmail.com', '123 456 789', '2023-02-01'),
    ('https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg?auto=compress&cs=tinysrgb&w=1600', 'Williams', 'Mark', 'tic.harvey@hotmail.com', '123 456 789', '2023-02-01'),
    ('https://images.pexels.com/photos/761977/pexels-photo-761977.jpeg?auto=compress&cs=tinysrgb&w=1600', 'Cruz', 'Charlotte', 'ceuc@gmail.com', '123 456 789', '2023-02-01'),
    ('https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1600', 'Harper', 'Sara', 'bafuv@hotmail.com', '123 456 789', '2023-02-01'),
    ('https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load', 'Griffin', 'Eric', 'ubi@gmail.com', '123 456 789', '2023-02-01');


create table Projects (
    id int PRIMARY KEY identity(1,1),
    img varchar(500),
    name varchar(50) NOT NULL,
    priority varchar(50) NOT NULL,
    deadline datetime NOT NULL,
    assignedTo varchar(150) NOT NULL,
    createdAt datetime NOT NULL,
);

-- Insert data into the table
INSERT INTO Projects (img, name, priority, deadline, assignedTo, createdAt)
VALUES
    ('https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png', 'Nebula X', 'high', '2023-06-01', 'Eula Hubbard', '2023-06-06'),
    ('https://www.pngmart.com/files/6/Dell-Laptop-PNG-Image.png', 'Quantum Shift', 'medium', '2023-03-31', 'Stella Manning', '2023-05-01'),
    ('http://images.samsung.com/is/image/samsung/uk-led-tv-hg40ed670ck-hg40ed670ckxxu-001-front', 'Project Phoenix', 'low', '2023-07-08', 'Mary Greer', '2023-03-01'),
    ('https://raylo.imgix.net/iphone-14-blue.png', 'Elysium Labs', 'high', '2023-11-02', 'Mildred Williamson', '2022-01-02'),
    ('https://www.signify.com/b-dam/signify/en-aa/about/news/2020/20200903-movie-night-essentials-popcorn-ice-cream-and-the-new-philips-hue-play-gradient-lightstrip/packaging-lighstrip.png', 'Stellar Quest', 'low', '2023-02-01', 'Jose Gross', '2023-02-01'),
    ('https://www.smartworld.it/wp-content/uploads/2019/09/High_Resolution_PNG-MX-Master-3-LEFT-GRAPHITE.png', 'Project Genesis', 'low', '2023-01-02', 'Jeremy Sharp', '2023-02-01'),
    ('https://www.pngarts.com/files/7/Podcast-Mic-PNG-Picture.png', 'Infinite Horizons', 'medium', '2023-06-05', 'Christina Lowe', '2023-06-05'),
    ('https://5.imimg.com/data5/SW/VM/MY-5774620/toshiba-split-ac-2-ton-3-star-rated-ras-24s3ks-500x500.png', 'Zenith Ventures', 'high', '2023-02-01', 'Garrett Dean', '2023-03-01'),
    ('https://img.productz.com/review_image/102489/preview_sony-kdl-50w800b-50-inch-hdtv-review-superb-picture-102489.png', 'Fusion Nexus', 'low', '2023-02-01', 'Leah Parsons', '2023-01-02'),
    ('https://venturebeat.com/wp-content/uploads/2015/07/As_AO1-131_gray_nonglare_win10_03.png?fit=1338%2C1055&strip=all', 'Project Aurora', 'low', '2023-02-01', 'Elnora Reid', '2023-02-01');


create table Tasks (
    id int PRIMARY KEY identity(1,1),
    img varchar(500),
    name varchar(50) NOT NULL,
    priority varchar(50) NOT NULL,
    deadline datetime NOT NULL,
    createdAt datetime NOT NULL,
    status varchar(50) NOT NULL,
);

-- Insert data into the table
INSERT INTO Tasks (img, name, priority, deadline, createdAt, status)
VALUES
    ('https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png', 'Task 1', 'high', '2023-06-01', '2023-06-06', 'In Progress'),
    ('https://www.pngmart.com/files/6/Dell-Laptop-PNG-Image.png', 'Task 2', 'medium', '2023-03-31', '2023-05-01', 'Completed'),
    ('http://images.samsung.com/is/image/samsung/uk-led-tv-hg40ed670ck-hg40ed670ckxxu-001-front', 'Task 3', 'low', '2023-07-08', '2023-03-01', 'Pending'),
    ('https://raylo.imgix.net/iphone-14-blue.png', 'Task 4', 'high', '2023-11-02', '2022-01-02', 'In Progress'),
    ('https://www.signify.com/b-dam/signify/en-aa/about/news/2020/20200903-movie-night-essentials-popcorn-ice-cream-and-the-new-philips-hue-play-gradient-lightstrip/packaging-lighstrip.png', 'Task 5', 'low', '2023-02-01', '2023-02-01', 'Pending'),
    ('https://www.smartworld.it/wp-content/uploads/2019/09/High_Resolution_PNG-MX-Master-3-LEFT-GRAPHITE.png', 'Task 6', 'low', '2023-01-02', '2023-02-01', 'Completed'),
    ('https://www.pngarts.com/files/7/Podcast-Mic-PNG-Picture.png', 'Task 7', 'medium', '2023-06-05', '2023-06-05', 'In Progress'),
    ('https://5.imimg.com/data5/SW/VM/MY-5774620/toshiba-split-ac-2-ton-3-star-rated-ras-24s3ks-500x500.png', 'Task 8', 'high', '2023-02-01', '2023-03-01', 'Pending'),
    ('https://img.productz.com/review_image/102489/preview_sony-kdl-50w800b-50-inch-hdtv-review-superb-picture-102489.png', 'Task 9', 'low', '2023-02-01', '2023-01-02', 'In Progress'),
    ('https://venturebeat.com/wp-content/uploads/2015/07/As_AO1-131_gray_nonglare_win10_03.png?fit=1338%2C1055&strip=all', 'Task 10', 'low', '2023-02-01', '2023-02-01', 'Completed');


create table Comments (
    id int PRIMARY KEY identity(1,1),
    comment varchar(500) NOT NULL,
    createdAt datetime NOT NULL,
    projectId int FOREIGN KEY REFERENCES Projects(id) not null,
    teamId int FOREIGN KEY REFERENCES Team(id) not null,
);

-- Insert data into the table
INSERT INTO Comments (comment, createdAt, projectId, teamId)
VALUES 
    ('Great work!', '2023-06-06', 1, 1),
    ('Completed successfully!', '2023-03-31', 2, 2),
    ('Pending review.', '2023-07-08', 3, 3),
    ('In progress, looking good!', '2023-11-02', 4, 4),
    ('Waiting for further instructions.', '2023-02-01', 5, 5),
    ('Completed and tested.', '2023-01-02', 6, 6),
    ('Reviewing...', '2023-06-05', 7, 7),
    ('Almost done!', '2023-02-01', 8, 8),
    ('Still in progress.', '2023-02-01', 9, 9),
    ('Testing phase.', '2023-02-01', 10, 10),
    ('Excellent job!', '2023-02-01', 1, 1),
    ('Completed ahead of schedule.', '2023-02-01', 2, 2),
    ('Pending further information.', '2023-02-01', 3, 3),
    ('Making good progress.', '2023-02-01', 4, 4),
    ('Need more resources.', '2023-02-01', 5, 5),
    ('Completed with minor tweaks.', '2023-02-01', 6, 6),
    ('Reviewing documentation.', '2023-02-01', 7, 7),
    ('Almost there!', '2023-02-01', 8, 8),
    ('Still working on it.', '2023-02-01', 9, 9),
    ('Testing in progress.', '2023-02-01', 10, 10);
    

create table Notifications (
    id int PRIMARY KEY identity(1,1),
    message varchar(500) NOT NULL,
    createdAt datetime NOT NULL,
    projectId int FOREIGN KEY REFERENCES Projects(id) not null,
    teamId int FOREIGN KEY REFERENCES Team(id) not null,
);

-- Insert data into the table
INSERT INTO Notifications (message, createdAt, projectId, teamId)
VALUES
    ('Reminder: Project deadline approaching.', '2023-06-06', 1, 1),
    ('Task completed successfully.', '2023-03-31', 2, 2),
    ('Project status update.', '2023-07-08', 3, 3),
    ('Task assigned to your team.', '2023-11-02', 4, 4),
    ('Project funding approved.', '2023-02-01', 5, 5),
    ('New task created.', '2023-01-02', 6, 6),
    ('Team meeting scheduled.', '2023-06-05', 7, 7),
    ('Urgent: Task priority changed.', '2023-02-01', 8, 8),
    ('Deadline extension granted.', '2023-02-01', 9, 9),
    ('Project milestone achieved.', '2023-02-01', 10, 10);
