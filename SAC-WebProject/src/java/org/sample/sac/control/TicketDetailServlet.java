/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package org.sample.sac.control;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.Sample.sac.model.ProxyTicket;
import org.Sample.sac.model.TicketRPC;

@WebServlet(name = "TicketDetailServlet", urlPatterns = {"/api/1/ticket-detail/*"})
public class TicketDetailServlet extends HttpServlet {
    
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException{
        resp.setContentType("application/json");
        PrintWriter out = resp.getWriter();
        
        String ticketId = req.getPathInfo().substring(1);
        if(ticketId.matches("[0-9]+")){
            TicketRPC trpc = new TicketRPC();
            ProxyTicket pt = trpc.find(Integer.parseInt(ticketId));
            out.print('[');
            out.print(pt.toString());
            out.print("]");        
        } 
        else {
            out.println("[]");
        }
    }
}
