<!DOCTYPE html>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>
<html>
<head>
<link rel="import" href="${ctxPath}/static/inc/head.jsp" />
</head>
<link rel="stylesheet" href="${ctxPath}/static/m/css/swiper.min.css" type="text/css" charset="utf-8">
<link rel="stylesheet" href="${ctxPath}/static/m/css/base.css" type="text/css" charset="utf-8">
<body>
    <link rel="import" href="${ctxPath}/static/inc/header.jsp"/>
    	<div class="integral_mll">
            <div class="head f-cb">
                <div class="tit fl">积分商城</div>
                <a href="javascprit:;" class="order"></a>
                <a href="javascprit:;" class="shop"></a>
                <a href="javascprit:;" class="home"></a>
            </div>
            <div class="serch">
                <form action="javascprit:;" method="get" >
                    <label></label>
                    <input class="inptet" type="search" placeholder="搜索产品" name="kw">
                    <span class="colse"></span>
                </form>
            </div>
            <div class="imll_banner">
                <!-- Swiper -->
                <div class="swiper-container" id="imll_banner">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <a href="javascript:;" class="">
                                <img src="http://122.227.194.147:10526/ecommerce/coupon/201812070951160.jpg">
                            </a>
                        </div>
                    </div>
                    <!-- Add Pagination -->
                    <div class="swiper-pagination"></div>
                </div>
            </div>
            <div class="pro-title">
                <!-- Swiper -->
                <div class="swiper-container" id="pro-list">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <a href="javascript:;" class="a">
                                <div class="pic"><img src="http://122.227.194.147:10526/ecommerce/coupon/201812070951160.jpg"></div>
                                <div class="tit">aaaa</div>
                            </a>
                        </div>

                        <div class="swiper-slide">
                            <a href="javascript:;" class="a">
                                <div class="pic"><img src="http://122.227.194.147:10526/ecommerce/coupon/201812070951160.jpg"></div>
                                <div class="tit">积极</div>
                            </a>
                        </div>
                    </div>
                    <div class="swiper-pagination"></div>
                </div>
            </div>
            <div class="pro-list">
                <ul class="f-cb">
                    <c:forEach items="${list}" var="item">
                        <li>
                            <a href="goodsInfo?gid=${item.gid}" data-id="${ctxPath}" class="a">
                                <div class="pic" style="background:url(${item.gphoto}) center/contain no-repeat">
                                    <div class="mbox">
                                    </div>
                                </div>
                                <div class="box">
                                    <div class="tit">
                                        <c:out value="${item.gname}" />
                                    </div>
                                    <div class="fa"><span><c:out value="${item.gprice}" /></span>元</div>
                                    <div class="detaile f-cb">
                                        <span class="fl">参考价<c:out value="${item.gprice}" />元</span>
                                        <span class="fr">已兑换<c:out value="${item.saleNumber}" />个</span>
                                    </div>
                                </div>
                            </a>
                        </li>
                    </c:forEach>
                </ul>
            </div>
            <div class="bot-mll f-cb">
                <a href="${baseUrl}login/index" class="on">
                    <div class="pic"></div>
                    <div class="tt">查询积分</div>
                </a>
                <a href="${baseUrl}mall/goodsList" class="tt">
                    <div class="pic"></div>
                    <div class="tt">我可兑换</div>
                </a>
                <a href="${baseUrl}member/myintegral" class="tt">
                    <div class="pic"></div>
                    <div class="tt">兑换记录</div>
                </a>
                <a href="${baseUrl}member/mycoupons" class="tt">
                    <div class="pic"></div>
                    <div class="tt">我的券包</div>
                </a>
            </div>
        </div>
    <link rel="import" href="${ctxPath}/static/inc/footer.jsp" />

    <script type="text/javascript" src="${ctxPath}/static/m/js/swiper.min.js"> </script>
    <script type="text/javascript" src="${ctxPath}/static/web/js/main.js"> </script>

<script>
$(function(){
	var imll_banner = new Swiper('#imll_banner', {
        pagination: '#imll_banner .swiper-pagination',
        paginationClickable: true,
        loop:true,
        autoplay : 3000
    });
    var pro_list = new Swiper('#pro-list', {
        pagination : '#pro-list .swiper-pagination',
        paginationClickable: true,
        slidesPerView : 4,
    });
    if($('#pro-list .swiper-slide').length<=4){
        $('#pro-list .swiper-pagination').hide();
    }

    //滑动加载更多
    var bool=true;
    var p=1;
    $(window).scroll(function(){
        if($(document).height()-$(this).scrollTop()-$(this).height()<50 && bool){
            bool=false;
            p += 1;
            ajaxRequestHtml('${baseUrl}mall/goodsListAjax',
                {'page':p},
                function (d) {
                    if(d.length>0){
                        $('.integral_mll .pro-list ul').append(d);
                        bool=true;
                    }else{

                    }
                });
            return false;
        }
    })
})
</script>
</body>
</html>