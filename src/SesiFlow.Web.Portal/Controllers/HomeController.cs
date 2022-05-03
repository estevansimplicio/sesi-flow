using Microsoft.AspNetCore.Mvc;

namespace SesiFlow.Web.Portal.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
