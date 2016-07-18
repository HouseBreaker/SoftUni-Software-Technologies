-- 1. Write SQL INSERT to create a new user(username 'pesho', password '$xyz', name 'Peter Ivanov').
INSERT INTO users(username, password_hash, full_name)
VALUES('pesho', '$xyz', 'Peter Ivanov');

-- 2. Write SQL UPDATE to change user 'pesho' to 'pepi'.
UPDATE users
SET username = 'pesho'
WHERE username = 'pepi';

-- 3. Write SQL SELECT to show all users that start with 'p'.
SELECT * FROM users
WHERE username LIKE 'p%';

-- 4. Write SQL INSERT to create a new post from user 'pepi'.
INSERT INTO posts(title, content, user_id)
VALUES ('new post!', '<p>An amazing new post was created!</p>',
(SELECT id FROM users WHERE username = 'pesho'));

-- 5. Write SQL SELECT to show all posts from user 'pepi'.
SELECT posts.title, posts.content, users.username
FROM posts JOIN users ON posts.user_id = users.id
WHERE users.id = (SELECT id FROM users WHERE username = 'pepi');

-- 6. Write SQL DELETE to remove all posts from user 'pepi'.
DELETE FROM posts
WHERE user_id = (SELECT id FROM users WHERE username = 'pepi');