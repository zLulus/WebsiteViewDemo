using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Dawu.Site.Controllers
{
    /// <summary>
    /// 成果展示
    /// </summary>
    public class AchievementShowController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        /// <summary>
        /// 详情页（悬浮窗）
        /// </summary>
        /// <returns></returns>
        public IActionResult Detail()
        {
            return View();
        }
    }
}
