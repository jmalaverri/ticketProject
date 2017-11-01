package org.sample.sac.model;

import java.text.SimpleDateFormat;
import java.util.Date;

public class ProxyAttachment {

  private String fileName;
  private String fileDesc;
  private Integer size;
  private Date date;
  private String uploader;

  public ProxyAttachment(String fileName, String fileDesc, Integer size, Date date, String uploader) {
    this.fileName = fileName;
    this.fileDesc = fileDesc;
    this.size = size;
    this.date = date;
    this.uploader = uploader;
  }

  public ProxyAttachment() {
  }

  public String getFileName() {
    return fileName;
  }

  public void setFileName(String fileName) {
    this.fileName = fileName;
  }

  public String getFileDesc() {
    return fileDesc;
  }

  public void setFileDesc(String fileDesc) {
    this.fileDesc = fileDesc;
  }

  public Integer getSize() {
    return size;
  }

  public void setSize(Integer size) {
    this.size = size;
  }

  public Date getDate() {
    return date;
  }

  public void setDate(Date date) {
    this.date = date;
  }

  public String getUploader() {
    return uploader;
  }

  public void setUploader(String uploader) {
    this.uploader = uploader;
  }

  @Override
  public String toString() {
    SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
    return "{" + "\"fileName\":\"" + fileName +
            "\", \"fileDesc\":\"" + fileDesc + "\", \"size\":" + size +
            ", \"date\":\"" + sdf.format(date) + "\", \"uploader\":\"" +
            uploader + "\"}";
  }
}
