package org.sample.sac.control;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.Sample.sac.model.ProxyAttachment;
import org.Sample.sac.model.ProxyTicket;
import org.Sample.sac.model.TicketRPC;

@WebServlet(name = "TicketAttachment", urlPatterns = {"/api/1/ticket-attachment/*"})
public class TicketAttachmentServlet extends HttpServlet {

  @Override
  protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    resp.setContentType("application/json");
    PrintWriter out = resp.getWriter();
    
    String ticketId = req.getPathInfo().substring(1);
    if(ticketId.matches("[0-9]+")) {
      TicketRPC trpc = new TicketRPC(); 
      List<ProxyAttachment> attachments = trpc.findAttachment(Integer.parseInt(ticketId));
      out.print("[");
      boolean first = true;
      for(ProxyAttachment att : attachments) {
        if(!first) {
          out.print(',');
        }
        first = false;
        out.print(att.toString());
      }
      out.print("]");
    } else {
      out.println("[]");
    }
  }
  
}
