using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Dawu.Site.Controllers
{
    /// <summary>
    /// 企业概况
    /// </summary>
    public class CompanyProfileController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        /// <summary>
        /// 组织架构
        /// </summary>
        /// <returns></returns>
        public IActionResult Organization()
        {
            return View();
        }

        /// <summary>
        /// 企业资质
        /// </summary>
        /// <returns></returns>
        public IActionResult Qualification()
        {
            return View();
        }

        /// <summary>
        /// 荣誉奖项
        /// </summary>
        /// <returns></returns>
        public IActionResult HonoraryAward()
        {
            return View();
        }

        
    }
}
