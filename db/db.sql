CREATE DATABASE IF NOT EXISTS assign3;
USE assign3;
CREATE TABLE marks(
sid INT PRIMARY KEY AUTO_INCREMENT,
sname VARCHAR(50) NOT NULL,
marks1 INT NOT NULL,
marks2 INT NOT NULL,
marks3 INT NOT NULL
);

TRUNCATE TABLE marks;
ALTER TABLE marks
ADD COLUMN marks4 INT NOT NULL;

INSERT INTO marks(sname, marks1, marks2, marks3, marks4) VALUES ("Priyam", 89, 90, 78, 84);

DESC marks;

SELECT * FROM marks;

DELETE FROM marks
WHERE sid = 6;

SELECT COUNT(sname) FROM marks  WHERE (marks1+marks2+marks3+marks4)/4.0 > 90;

SELECT COUNT(sname)
FROM marks 
WHERE (marks1+marks2+marks3+marks4)/4.0 < 40;