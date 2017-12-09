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
        /// <summary>
        /// 三个页面共用一套UI，换内容而已
        /// </summary>
        /// <returns></returns>
        public IActionResult Index(int type)
        {
            return View();
        }
    }
}
