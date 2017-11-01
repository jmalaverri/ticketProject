package org.sample.sac.control;

import java.io.IOException;
import java.io.PrintWriter;

import java.util.Iterator;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.json.JSONException;
import org.json.JSONObject;
import org.Sample.sac.model.ProxyTicket;
import org.Sample.sac.model.TicketRPC;



@WebServlet(name = "Proxy", urlPatterns = {"/api/1/ticket/*"})
public class ProxyServlet extends HttpServlet {   
    
  @Override
  protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    resp.setContentType("application/json");
    PrintWriter out = resp.getWriter();
    TicketRPC trpc = new TicketRPC();
    out.print('[');
    boolean first = true;
    for(ProxyTicket pt : trpc.find()) { // TODO: ver
      if(!first) {
        out.print(',');
      }
      first = false;
      out.print(pt.toString());
    }
    out.print(']');
    
    out.close();
  }

  @Override
  protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    // TODO: Implement ProxyServlet.doPost!
   // super.doPost(req, resp);
    resp.setContentType("application/json");
    
    /*--------*/
    
    JSONObject jObj;  
      try {
          TicketRPC trpc = new TicketRPC();
          ProxyTicket pt = new ProxyTicket();
          jObj = new JSONObject(req.getParameter("tickets")); // this parses the json
          Iterator it = jObj.keys(); //gets all the keys

            while(it.hasNext()){
            String key = (String) it.next(); // get key
            Object o = jObj.get(key); 
            String summary = (String) jObj.get("ticketSummary");
            String description = (String) jObj.get("ticketDescription");
            pt.setSummary(summary);
            pt.setDescription(description);
            
             if(summary != null && description != null){
            req.setAttribute("summary", pt.getSummary());
            req.setAttribute("description", pt.getDescription());
           // req.setAttribute("status", status);
            //req.setAttribute("currentDate", df.format(pt.getCreationDate()));

            trpc.save(pt);
    }
    
    else{
        req.setAttribute("error", "Ingresse um título e uma descrição para o chamado");
        req.getRequestDispatcher("/home.html").forward(req, resp);
    }
                    
    }
          
      } catch (JSONException ex) {
          Logger.getLogger(ProxyServlet.class.getName()).log(Level.SEVERE, null, ex);
      }    
    
       
  }

  @Override
  protected void doPut(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    // TODO: Implement ProxyServlet.doPut!
    super.doPut(req, resp);
  }

  @Override
  protected void doDelete(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    // TODO: Implement ProxyServlet.doDelete!
    super.doDelete(req, resp);
  }
}
