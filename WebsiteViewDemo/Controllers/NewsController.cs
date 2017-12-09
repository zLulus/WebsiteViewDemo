using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Dawu.Site.Controllers
{
    /// <summary>
    /// 新闻资讯
    /// </summary>
    public class NewsController : Controller
    {
        /// <summary>
        /// 企业新闻
        /// </summary>
        /// <returns></returns>
        public IActionResult Index()
        {
            return View();
        }

        /// <summary>
        /// 职工风采
        /// </summary>
        /// <returns></returns>
        public IActionResult StaffStyle()
        {
            return View();
        }

        public IActionResult Detail(int id)
        {
            return View();
        }
    }
}