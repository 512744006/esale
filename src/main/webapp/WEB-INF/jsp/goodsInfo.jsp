<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<%@page language="java" contentType="text/html; charset=utf-8" pageEncoding="UTF-8" %>
<html>
<head>
<link rel="import" href="${ctxPath}/static/inc/head.jsp" />
</head>
<link rel="stylesheet" href="${ctxPath}/static/m/css/swiper.min.css" />
<link rel="stylesheet" href="${ctxPath}/static/m/css/base.css"/>

<body>
    <link rel="import" href="${ctxPath}/static/inc/header.jsp"/>
		<div class="selebanner por">
            <div class="swiper-container" id="seleinfor">
                <div class="swiper-wrapper">

                        <div class="swiper-slide">
                            <a  class="a">
                                <!-- <img src="<?php echo $info['image'];?>"> -->
                                <div class="banner-img" style="background-image:url('${info.gphoto}')"></div>
                            </a>
                        </div>

                </div>
                <!-- Add Pagination -->
                <div class="swiper-pagination"></div>
            </div>
        </div>
        <div class="couponsinfor">
            <div class="cou-top por">
                <div class="title">${info.gname}</div>
                <div class="tit">原价：<span>￥${info.gprice}</span></div>
            </div>
            <%--<div class="time" style="background:url(${ctxPath}/static/m/img/img29.png) left center/0.4rem no-repeat">--%>
                <%--有效时间：${info.startdate}~${info.enddate}--%>
            <%--</div>--%>
            <%--<div class="add" style="background:url(${ctxPath}/static/m/img/img30.png) left center/0.39rem no-repeat">--%>
                <%--使用店铺：${info.address}--%>
            <%--</div>--%>
            <%--<div class="shop f-cb">--%>
                <%--<div class="purchasing">限购：${info.limitnum}</div>--%>
                <%--<div class="shen">--%>
                    <%--<span>仅剩：${info.restnum}</span>--%>
                    <%--<div class="color"><i></i></div>--%>
                    <%--<!-- 页面底部 js控制了i的宽度，后台需要传总的库存和 剩余库存的值过来计算-->--%>
                <%--</div>--%>
            <%--</div>--%>
            <div class="detaile">
                <h3>详情</h3>
                <p>${info.description}</p>
                </br>
            </div>
        </div>

        <div class="bot-function bot-exchange f-cb">
            <a href="javascript:;" class="fenx">分享</a>
            <a href="javascript:;" class="shouc on" >收藏</a>
            <a href="javascript:;" class="yued"><span class="cut">购买</span></a>
        </div>

        <div class="tip-bg"></div>
        <div class="tip-bg-travel"></div>
        <div class="tip-addbox tip-shanc for-goods">
            <div class="title">确认要兑换该商品吗？</div>
            <div class="btns f-cb">
                <a href="javscript:;" class="colse">取消</a>
                <a href="javscript:;" class="determine">确定</a>
            </div>
        </div>
        <!-- <div class="card-volume">
            领取成功！请在"<span>我的卡券</span>"查看。
        </div> -->
        <div class="card-volumes">积分不足</div>
    	
        <div class="fenx-box f-cb">
            <img src="${ctxPath}/static/m/img/ssss.png">
        </div>
        <div class="tip-addbox tip-shanc travel">
            <div class="title">领取成功！请在"我的卡券"查看</div>
            <div class="btns f-cb">
                <a href="javscript:;" class="colse">关闭</a>
                <a href="${baseUrl}member/mycoupons" class="determine">确定</a>
            </div>
        </div>

        
    <div class="tip-box tip-box1">
        <div class="btn"><img src="${ctxPath}/static/m/img/tip-timg2.jpg"></div>
        <div class="img">
            <img src="${ctxPath}/static/m/img/tip-timg1.jpg">
        </div>
        <div class="title">积分不足</div>
        <div class="tit">去购物攒积分吧</div>
    </div> 

    <link rel="stylesheet" href="${ctxPath}inc/footer.jsp"/>
    <script type="text/javascript" src="${ctxPath}/static/m/js/swiper.min.js"></script>
    <script type="text/javascript" src="${ctxPath}/static/web/js/main.js"></script>
<script>
$(function(){
    $('.bot-function a.fenx').on('click',function(){
        $('.fenx-box').stop().fadeIn();
    })
    $('.fenx-box').on('click',function(){
        $('.fenx-box').stop().fadeOut();
    })
	var seleinfor = new Swiper('#seleinfor', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        loop:true,
        autoplay : 3000
    });
    var _wid=150;//总的值
    var t_wid=101;//剩余库存

    //收藏
    $('.bot-function a.shouc').on('click', function () {
        var _this=$(this);
        if(_this.hasClass('on')){
            var option=2;
        }else{
            var option=1;
        }
        var data = {'coupon_code':"${info.gid}"};
        ajaxRequest('${baseUrl}member/collect',data,function (d) {
            switch (d.return_code){
                case '0014':
                    window.location.href='${baseUrl}login/index';
                    break;
                case 200:
                    _this.toggleClass('on');
                    break;
                default:
                    alert(d.msg);
                    break;
            }
        })
    });
    $('.couponsinfor .shop .shen .color i').css('width',((t_wid/_wid)*100)+"%");
    // .bot-function a.yued span 添加cut类会变成灰色

        $('.bot-function a.yued span').on('click',function(){
            ajaxRequest('${ctxPath}member/judge',{},function (d) {
                switch (d.return_code){
                    case '0014':
                        window.location.href='${baseUrl}login/index';
                        break;
                    case 200:
                        $('.for-goods,.tip-bg').stop().fadeIn();
                        break;
                    default:
                        alert(d.msg);
                        break;
                }
            })
        });

    $('.for-goods .btns a').on('click',function(){
        $('.for-goods,.tip-bg').stop().fadeOut();
    })
    $('.travel .btns a.colse,.travel .btns a.determine').on('click',function(){ //前往，取消
        $('.travel,.tip-bg-travel').stop().fadeOut();
    })

    $('.tip-box .btn img').on('click',function(){
        $('.tip-box,.tip-bg').stop().fadeOut();
    })
})
</script>
</body>
</html>