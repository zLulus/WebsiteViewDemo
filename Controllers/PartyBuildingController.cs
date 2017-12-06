using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Dawu.Site.Controllers
{
    /// <summary>
    /// 党团建设
    /// </summary>
    public class PartyBuildingController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
