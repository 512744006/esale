<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>  
 
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>  
<%  
    List list = new ArrayList();  
    for (int i = 0; i < 10; i++) {  
        list.add(i);  
    }  
    session.setAttribute("list", list);  
%>  
  
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">  
<html>  
  <head>  
      
    <title>My JSP 'index.jsp' starting page</title>  
    <meta http-equiv="pragma" content="no-cache">  
    <meta http-equiv="cache-control" content="no-cache">  
    <meta http-equiv="expires" content="0">      
    <style type="text/css">  
    tr.foreach_tr1{background-color:#D7E9FD;color:black;}  
    tr.foreach_tr2{background-color:#A7DBFF; color:black ;}  
    </style>  
  </head>  
    
  <body>  
    <table border="1" width="200" cellpadding="0" cellspacing="0">  
        <tr align="center"  class="first_tr">  
            <td>  
                test  
            </td>  
        </tr>  
        <c:forEach items="${list}" varStatus="i" var="item" >  
            <c:if test="${i.index % 2 == 0}" >  
                <tr align="center" class="foreach_tr1">  
            </c:if>  
            <c:if test="${i.index % 2 == 1}">  
                <tr align="center" class="foreach_tr2">  
            </c:if>  
            <td>  
                <h2>${item}</h2>  
            </td>  
        </tr>  
        </c:forEach>  
    </table>  
  </body>  
</html>  