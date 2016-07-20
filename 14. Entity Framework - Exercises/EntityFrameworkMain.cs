using System;
using System.Linq;

namespace Entity_Framework___Exercises
{
	internal static class EntityFrameworkMain
	{
		private static readonly BlogDbContext BlogDbContext = new BlogDbContext();

		internal static void Main()
		{
			ListAllPosts();
			// ListAllUsers();
			// ListTitleAndBodyFromPosts();
			// OrderData();
			// OrderByTwoColumns();
			// SelectAuthors();
			// JoinAuthorsWithTitles();
			// SelectAuthorOfSpecificPost();
			// OrderPostsAuthors();
			// CreateData();
			// UpdateData();
			// DeleteData();
		}

		private static void DeleteData()
		{
			var commentInfo = BlogDbContext.Comments.Single(comment => comment.Id == 1);

			BlogDbContext.Comments.Remove(commentInfo);

			BlogDbContext.SaveChanges();

			Console.WriteLine($"Comment #{commentInfo.Id} deleted");
		}

		private static void UpdateData()
		{
			var userInfo = BlogDbContext.Users.Single(user => user.UserName == "Gosho");

			var oldName = userInfo.FullName;
			userInfo.FullName = "Georgi Botev";

			BlogDbContext.SaveChanges();

			Console.WriteLine($"User '{oldName}' has been renamed to '{userInfo.FullName}'");
		}

		private static void CreateData()
		{
			var post = new Post()
			{
				AuthorId = 2,
				Title = "Random Title",
				Body = "Random Content",
				Date = DateTime.Now
			};

			BlogDbContext.Posts.Add(post);
			BlogDbContext.SaveChanges();

			Console.WriteLine($"Post {post.Id} created!");
		}

		private static void OrderPostsAuthors()
		{
			var authors = BlogDbContext.Users
				.Where(a => a.Posts.Count > 0)
				.OrderByDescending(u => u.Id)
				.ToArray();

			foreach (var author in authors)
			{
				Console.WriteLine($"Full Name: {author.FullName}");
				Console.WriteLine($"username: {author.UserName}");
			}
		}

		private static void SelectAuthorOfSpecificPost()
		{
			var author = BlogDbContext.Users
				.SelectMany(user => user.Posts, (user, post) => new {user.UserName, user.FullName, post.Id})
				.Single(post => post.Id == 4);

			Console.WriteLine($"Username: {author.UserName}");
			Console.WriteLine($"Full name: {author.FullName}");
		}

		private static void JoinAuthorsWithTitles()
		{
			var userPosts = BlogDbContext.Users
				.SelectMany(user => user.Posts, (user, post) => new {user.UserName, post.Title})
				.ToArray();

			foreach (var userPost in userPosts)
			{
				Console.WriteLine($"Username: {userPost.UserName}");
				Console.WriteLine($"Post title: {userPost.Title.Trim()}");
				Console.WriteLine();
			}
		}

		private static void SelectAuthors()
		{
			var users = BlogDbContext.Users.Where(u => u.Posts.Count > 0).ToArray();

			foreach (var user in users)
			{
				Console.WriteLine($"Username: {user.UserName}");
				Console.WriteLine($"Full name: {user.FullName}");
				Console.WriteLine($"Posts count: {user.Posts.Count}");
				Console.WriteLine();
			}
		}

		private static void OrderByTwoColumns()
		{
			var users = BlogDbContext.Users
				.Select(u => new {u.UserName, u.FullName})
				.OrderByDescending(u => u.UserName)
				.ThenByDescending(u => u.FullName)
				.ToArray();

			foreach (var user in users)
			{
				Console.WriteLine($"Username: {user.UserName}");
				Console.WriteLine($"Full name: {user.FullName}");
				Console.WriteLine();
			}
		}

		private static void OrderData()
		{
			var users = BlogDbContext.Users
				.Select(u => new {u.UserName, u.FullName})
				.OrderBy(u => u.UserName)
				.ToArray();

			foreach (var user in users)
			{
				Console.WriteLine($"Username: {user.UserName}");
				Console.WriteLine($"Full name: {user.FullName}");
				Console.WriteLine();
			}
		}

		private static void ListTitleAndBodyFromPosts()
		{
			var posts = BlogDbContext.Posts.Select(p => new {p.Title, p.Body}).ToArray();
			foreach (var post in posts)
			{
				Console.WriteLine($"Title: {post.Title.Trim()}");
				Console.WriteLine($"Body: {post.Body.Trim()}");
				Console.WriteLine();
			}
		}

		private static void ListAllUsers()
		{
			var users = BlogDbContext.Users.ToArray();
			foreach (var user in users)
			{
				Console.WriteLine($"ID: {user.Id}");
				Console.WriteLine($"FullName: {user.FullName}");
				Console.WriteLine($"Comments count: {user.Comments.Count}");
				Console.WriteLine($"Posts count: {user.Posts.Count}");
				Console.WriteLine();
			}
		}

		private static void ListAllPosts()
		{
			var posts = BlogDbContext.Posts.ToArray();
			foreach (var post in posts)
			{
				Console.WriteLine($"Title: {post.Title.Trim()}");
				Console.WriteLine($"AuthorId: {post.AuthorId}");
				Console.WriteLine($"Comments count: {post.Comments.Count}");
				Console.WriteLine($"Tags count: {post.Tags.Count}");
				Console.WriteLine();
			}
		}
	}
}