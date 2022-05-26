using Microsoft.AspNetCore.Mvc;

namespace SesiFlow.Web.Portal.Controllers
{

    [Route("login")]

    public class AuthController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}