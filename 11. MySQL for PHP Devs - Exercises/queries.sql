SELECT * FROM posts;

SELECT * FROM users;

SELECT title, content FROM posts;

SELECT username, fullname FROM users;

SELECT username, fullname FROM users ORDER BY username ASC;

SELECT username, fullname FROM users ORDER BY fullname DESC, username DESC;

SELECT * FROM users WHERE id IN (SELECT author_id FROM posts);

SELECT username FROM users JOIN posts ON users.id = posts.author_id;

SELECT username, fullname FROM users WHERE id IN (SELECT author_id FROM posts WHERE id = 3);

SELECT username, fullname FROM users WHERE id IN (SELECT author_id FROM posts) ORDER BY id DESC;

INSERT INTO blog.posts (author_id, title, content, date) VALUES (2, 'Random Title', 'Random Content', STR_TO_DATE('2016-07-06', '%Y-%m-%d'));

UPDATE posts SET title = 'Too random to be true' WHERE id = 16;

DELETE FROM posts WHERE id = 16;