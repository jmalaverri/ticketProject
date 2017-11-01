package org.sample.sac.model;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.TimeZone;
import java.util.logging.Level;
import java.util.logging.Logger;

public class ProxyTicket {
  
  Integer id;
  Date creationDate;
  Date updateDate;
  String summary;
  String description;
  String status;
  String reporter;

  public ProxyTicket() {
  }

  public ProxyTicket(Integer id, Date creationDate, Date updateDate, String summary, String description, String status, String reporter) {
    this.id = id;
    this.creationDate = creationDate;
    this.updateDate = updateDate;
    this.summary = summary;
    this.description = description;
    this.status = status;
    this.reporter = reporter;
  }

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public Date getCreationDate() {
    return creationDate;
  }

  public void setCreationDate(Date creationDate) {
    this.creationDate = creationDate;
  }

  public Date getUpdateDate() {
    return updateDate;
  }

  public void setUpdateDate(Date updateDate) {
    this.updateDate = updateDate;
  }

  public String getSummary() {
    return summary;
  }

  public void setSummary(String summary) {
    this.summary = summary;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public String getStatus() {
    return status;
  }

  public void setStatus(String status) {
    this.status = status;
  }

  public String getReporter() {
    return reporter;
  }

  public void setReporter(String reporter) {
    this.reporter = reporter;
  }

  @Override
  public String toString() {   
      
           SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
              
    return "{" + "\"id\":" + id + ", \"creationDate\":\"" +
            sdf.format(creationDate) + "\", \"updateDate\":\"" +
            sdf.format(updateDate) + "\", \"summary\":\"" + summary +
            "\", \"description\":\"" + description + "\", \"status\":\"" +
            status + "\", \"reporter\":\"" + reporter + "\"}";
  }
}
