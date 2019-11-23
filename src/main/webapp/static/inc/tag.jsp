<%--标签 --%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ page trimDirectiveWhitespaces="true" isELIgnored="false" session="true" %>
<%@ taglib prefix="c"   uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn"  uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%--<%@ taglib prefix="shiro" uri="http://shiro.apache.org/tags" %>--%>
<%@ taglib prefix="st" uri="http://www.springframework.org/tags"%>
<%--<%@ taglib prefix="crea" uri="www.crea.com/tag"%>--%>
<%--<%@ taglib prefix="fnc" uri="/WEB-INF/tld/functionlib.tld" %>--%>
<%--ctxPath--%>
<c:set var="ctxPath" value="${pageContext.request.contextPath}" />
<c:set var="sessionID" value="${pageContext.session.id}" />
<c:set var="baseUrl" value="localhost:8080/" />

