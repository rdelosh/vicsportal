using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace vicsportal.Controllers
{
    public class freecodecampController : Controller
    {
        // GET: freecodecamp
        public ActionResult RandomQuoteMachine()
        {
            return View();
        }

        public ActionResult LocalWeather()
        {
            return View();
        }

        public ActionResult WikipediaViewer()
        {

            return View();
            
        }

        public ActionResult TwitchTVAPI()
        {
            return View();
        }

        public ActionResult JavascriptCalculator()
        {
            return View();
        }

        public ActionResult PomodoroClock()
        {
            return View();
        }

        public ActionResult TicTacToe()
        {
            return View();
        }
    }
}