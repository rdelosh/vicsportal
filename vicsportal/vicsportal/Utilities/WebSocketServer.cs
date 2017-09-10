
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MacPortafolio.Utilities;
using Microsoft.Web.WebSockets;


namespace MacPortafolio.Utilities
{
    public class WebSocketServer : IHttpHandler
    {
        public void ProcessRequest(HttpContext context)
        {
            if (context.IsWebSocketRequest)
            {
                context.AcceptWebSocketRequest(new mywebsocket());
            }
        }

        public bool IsReusable
        {
            get { return false; }
        }
    }
}