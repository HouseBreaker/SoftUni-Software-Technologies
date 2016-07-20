--List Posts
SELECT * FROM Blog.dbo.Posts

--List Users
SELECT * FROM Blog.dbo.Users

--List Columns FROM Posts
SELECT Title, Body FROM Blog.dbo.Posts

--Order Data
SELECT Username, FullName FROM Blog.dbo.Users
ORDER BY UserName ASC

--Order by Two Columns
SELECT Username, FullName FROM Blog.dbo.Users
Order By FullName DESC, UserName DESC

--Nested Select
SELECT * FROM Blog.dbo.Users
WHERE Id IN (SELECT AuthorId FROM Blog.dbo.Posts)

--Joins Users with Posts
SELECT Blog.dbo.Users.UserName, Blog.dbo.Posts.Title
FROM Blog.dbo.Users
JOIN Blog.dbo.Posts ON Blog.dbo.Users.Id = Blog.dbo.Posts.AuthorId

--Joins Users with Posts with Filtering
SELECT UserName, Fullname
FROM Blog.dbo.Users
WHERE Id IN (SELECT AuthorId
			FROM Blog.dbo.Posts
			Where Id = 4)

--Posts Authors
SELECT UserName, Fullname
FROM Blog.dbo.Users
WHERE ID in (SELECT AuthorId
			FROM Blog.dbo.Posts)
ORDER BY Id DESC

--INSERT Command
INSERT INTO Blog.dbo.Posts (AuthorId, Title, Body, [Date])
VALUES (2, 'Random Title', 'Random Content', CAST('2016-07-13T11:30:00' AS DateTime))

--UPDATE Command
UPDATE Blog.dbo.Posts SET Title = 'New Title'
WHERE Id = 33

--DELETE Command
DELETE FROM Blog.dbo.Posts WHERE Id = 33

--COUNT Command
SELECT COUNT(*) as Posts_Count FROM Blog.dbo.Posts

--COUNT Command 2
SELECT COUNT(*) as Posts_Count FROM Blog.dbo.Posts
WHERE AuthorId = 2

--MIN Command
SELECT MIN(AuthorId) as Min_Value FROM Blog.dbo.Posts

--MIN Command 2
SELECT MIN(Date) as Min_Value FROM Blog.dbo.Posts

--MAX Command
SELECT MAX(AuthorId) as Max_Value FROM Blog.dbo.Posts

--MAX Command 2
SELECT MAX(Id) as Max_Value FROM Blog.dbo.Tags

--SUM Command
SELECT SUM(Id) as Sum_Ids FROM Blog.dbo.Tags

--SUM Command 2
SELECT SUM(Id) as Sum_Ids FROM Blog.dbo.Users
WHERE Id IN (SELECT AuthorId FROM Blog.dbo.Posts)

--15. Count of Users Having a Post in a Specified Date
SELECT COUNT(*) AS Users_Count FROM Blog.dbo.Users
JOIN Blog.dbo.Posts ON Users.Id = AuthorId
WHERE [Date] BETWEEN '2016-06-14T00:00:00' AND '2016-06-14T23:59:59'

--16. Extract and Order All the Posts in a Specified Date
SELECT * FROM Blog.dbo.Posts
WHERE [Date] BETWEEN '2016-06-14T00:00:00' AND '2016-06-14T23:59:59'
ORDER BY AuthorId

--17. Find the Earliest Post from a Specified User
SELECT TOP 1 * FROM Blog.dbo.Posts
WHERE AuthorId = 2
ORDER BY [Date]

--18. Play with Comments
SELECT * FROM Blog.dbo.Comments
ORDER BY AuthorName, Id DESC