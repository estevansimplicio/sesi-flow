using Microsoft.AspNetCore.Mvc;

namespace SesiFlow.Web.Portal.Controllers
{

    [Route("produtos")]

    public class CatalogController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
