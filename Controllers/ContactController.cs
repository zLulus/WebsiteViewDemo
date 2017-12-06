using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Dawu.Site.Controllers
{
    /// <summary>
    /// 联系我们
    /// </summary>
    public class ContactController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
