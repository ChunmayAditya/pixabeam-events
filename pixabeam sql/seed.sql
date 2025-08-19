INSERT INTO users (name, email, created_at) VALUES
 ('User1','user1@example.com', now() - interval '20 days'),
 ('User2','user2@example.com', now() - interval '19 days'),
 ('User3','user3@example.com', now() - interval '18 days'),
 ('User4','user4@example.com', now() - interval '17 days'),
 ('User5','user5@example.com', now() - interval '16 days'),
 ('User6','user6@example.com', now() - interval '15 days'),
 ('User7','user7@example.com', now() - interval '14 days'),
 ('User8','user8@example.com', now() - interval '13 days'),
 ('User9','user9@example.com', now() - interval '12 days'),
 ('User10','user10@example.com', now() - interval '11 days');

INSERT INTO events (title, description, date, city, created_by) VALUES
 ('Event1','Description for event 1','2025-09-10 18:00+05:30','Bengaluru',1),
 ('Event2','Description for event 2','2025-09-15 17:00+05:30','Mumbai',2),
 ('Event3','Description for event 3','2025-10-05 18:30+05:30','Delhi',3),
 ('Event4','Description for event 4','2025-09-28 11:00+05:30','Pune',1),
 ('Event5','Description for event 5','2025-11-02 19:00+05:30','Hyderabad',4);

INSERT INTO rsvps (user_id, event_id, status) VALUES
 (1,1,'Yes'), (2,1,'Maybe'), (3,1,'No'), (4,1,'Yes'),
 (5,2,'Yes'), (6,2,'Maybe'), (7,2,'Yes'), (8,2,'No'),
 (9,3,'Maybe'), (10,3,'Yes'), (1,3,'Yes'), (2,3,'No'),
 (3,4,'Maybe'), (4,4,'Yes'), (5,4,'No'),
 (6,5,'Yes'), (7,5,'Maybe'), (8,5,'Yes'), (9,5,'No'), (10,5,'Yes');