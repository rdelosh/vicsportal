﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.Web.WebSockets;

namespace MacPortafolio.Utilities
{
    public class mywebsocket : WebSocketHandler
    {
        private static WebSocketCollection clients = new WebSocketCollection();
        private string name;

        public override void OnOpen()
        {
            name = this.WebSocketContext.QueryString["chatName"];
            clients.Add(this);
            clients.Broadcast(name + "Se ha conectado");

        }

        public override void OnMessage(string message)
        {
            clients.Broadcast(message);

        }

        public override void OnClose()
        {
            clients.Remove(this);
            clients.Broadcast(string.Format("{0} se ha ido", name));

        }

    }
}