using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Blog.Models
{
	public class Post
	{
		public Post()
		{
			Date = DateTime.Now;
		}

		[Key]
		public int Id { get; set; }

		[Required]
		[AllowHtml]
		[StringLength(200)]
		public string Title { get; set; }

		[Required]
		[AllowHtml]
		public string Body { get; set; }

		[Required]
		public DateTime Date { get; set; }
		
		public ApplicationUser Author { get; set; }
	}
}