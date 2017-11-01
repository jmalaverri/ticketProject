package org.sample.sac.model;

import static java.lang.System.out;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import org.apache.xmlrpc.client.XmlRpcClient;
import org.apache.xmlrpc.client.XmlRpcClientConfigImpl;
import org.lustin.trac.xmlprc.Ticket;
import org.lustin.trac.xmlprc.TrackerDynamicProxy;


public class TicketRPC {
  
  public List<ProxyTicket> find() throws MalformedURLException {
    // TODO: Fatorizar urgente!!
    // TODO: Attachments booleano!!!!!
    XmlRpcClientConfigImpl conf = new XmlRpcClientConfigImpl();
    conf.setBasicUserName("joana");
    conf.setBasicPassword("Suporte;123");
    
    conf.setServerURL(
            new URL("http://app.Sample.com/support/ventura/login/xmlrpc"));
    
    XmlRpcClient client = new XmlRpcClient();
    client.setConfig(conf);
    
    TrackerDynamicProxy tdp = new TrackerDynamicProxy(client);
    Ticket t = (Ticket) tdp.newInstance(Ticket.class);
    List ticketIds = t.query();
    List<ProxyTicket> proxyTickets = new ArrayList<ProxyTicket>();
    for(int i = 0; i < ticketIds.size(); i++) {
      List ticket = t.get(Integer.parseInt(ticketIds.get(i).toString()));
      HashMap<String, String> rest = (HashMap<String, String>) ticket.get(3);            
      ProxyTicket pt = new ProxyTicket(
              Integer.valueOf(ticket.get(0).toString()), // id
              (Date)ticket.get(1), // creation date
              (Date)ticket.get(2), // update date
              rest.get("summary"),
              rest.get("description"),
              rest.get("status"),
              rest.get("reporter"));
      proxyTickets.add(pt);
    }
    return proxyTickets;
  }
  
  public ProxyTicket find(int ticketId) throws MalformedURLException{
      // TODO: Fatorizar urgente!!
    XmlRpcClientConfigImpl conf = new XmlRpcClientConfigImpl();
    conf.setBasicUserName("joana");
    conf.setBasicPassword("Suporte;123");
    
    conf.setServerURL(
            new URL("http://app.Sample.com/support/ventura/login/xmlrpc"));
    
    XmlRpcClient client = new XmlRpcClient();
    client.setConfig(conf);
    
    TrackerDynamicProxy tdp = new TrackerDynamicProxy(client);
    Ticket t = (Ticket) tdp.newInstance(Ticket.class);   
    
    List ticket = t.get(ticketId);
    HashMap<String, String> rest = (HashMap<String, String>) ticket.get(3); 
    ProxyTicket pt = new ProxyTicket(
              Integer.valueOf(ticket.get(0).toString()), // id
              (Date)ticket.get(1), // creation date
              (Date)ticket.get(2), // update date
              rest.get("summary"),
              rest.get("description"),
              rest.get("status"),
              rest.get("reporter"));
      
    return pt;
  }
  
   public List<ProxyAttachment> findAttachment(int ticketId) throws MalformedURLException {
    // TODO: Fatorizar urgente!!
    // TODO: Attachments booleano!!!!!
    XmlRpcClientConfigImpl conf = new XmlRpcClientConfigImpl();
    conf.setBasicUserName("joana");
    conf.setBasicPassword("Suporte;123");
    
    conf.setServerURL(
            new URL("http://app.Sample.com/support/ventura/login/xmlrpc"));
    
    XmlRpcClient client = new XmlRpcClient();
    client.setConfig(conf);
    
    TrackerDynamicProxy tdp = new TrackerDynamicProxy(client);
    Ticket t = (Ticket) tdp.newInstance(Ticket.class);
    List<ProxyAttachment> attachments = new ArrayList<ProxyAttachment>();
    List atts = t.listAttachments(ticketId);
    for(int j = 0; j < atts.size(); j++) {
        Object[] att = (Object[]) atts.get(j);
        attachments.add(new ProxyAttachment(
                (String) att[0],
                (String) att[1],
                (Integer) att[2],
                (Date) att[3],
                (String) att[4]));
    }
    return attachments;
  }
  
  public void save(ProxyTicket pt) throws MalformedURLException{
  
  XmlRpcClientConfigImpl conf = new XmlRpcClientConfigImpl();
    conf.setBasicUserName("joana");
    conf.setBasicPassword("Suporte;123");
    
    conf.setServerURL(
            new URL("http://app.Sample.com/support/ventura/login/xmlrpc"));
    
    XmlRpcClient client = new XmlRpcClient();
    client.setConfig(conf);
    
    TrackerDynamicProxy tdp = new TrackerDynamicProxy(client);
    Ticket t = (Ticket) tdp.newInstance(Ticket.class);
    
    if(pt.getId() == null)
        t.create(pt.getSummary(),pt.getDescription());
    else
        t.update(pt.getId(), pt.getDescription());
  
  }
}
