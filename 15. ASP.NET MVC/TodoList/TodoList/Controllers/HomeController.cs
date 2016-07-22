using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace TodoList.Controllers
{
	public class HomeController : Controller
	{
		public ActionResult Index()
		{
			var items = (List<string>) this.Session["items"] ?? new List<string>();

			return View(items);
		}

		[HttpPost]
		[ValidateInput(false)]
		public ActionResult AddItem(string newItem)
		{
			var items = GetTodoItemsFromStorage();

			items.Add(newItem);
			this.Session["items"] = items;

			return this.RedirectToAction("Index");
		}

		public ActionResult RemoveItem(int index)
		{
			var items = GetTodoItemsFromStorage();

			if (items != null && index < items.Count)
			{
				items.RemoveAt(index);
				this.Session["items"] = items;
			}

			return this.RedirectToAction("Index");
		}

		private List<string> GetTodoItemsFromStorage()
		{
			var items = (List<string>)this.Session["items"] ?? new List<string>();
			return items;
		}
	}
}