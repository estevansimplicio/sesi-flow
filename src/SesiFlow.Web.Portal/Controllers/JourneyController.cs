using Microsoft.AspNetCore.Mvc;

namespace SesiFlow.Web.Portal.Controllers
{

    [Route("jornada")]

    public class JourneyController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}