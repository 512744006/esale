<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:forEach items="${list}" var="${item}">
    <li>
        <a href="${baseUrl}mall/goodsInfo?id=${item.id}" class="a">
            <div class="pic" style="background:url(${item.photo}) center/contain no-repeat">
                <!-- <img src="<?php echo $item['photo'];?>"> -->
                <div class="mbox">
                </div>
            </div>
            <div class="box">
                <div class="tit">
                    <c:out value="${item.title}" />
                </div>
                <div class="fa"><span><c:out value="${item.score}" /></span>积分</div>
                <div class="detaile f-cb">
                    <span class="fl">参考价<c:out value="${item.price}" />元</span>
                    <span class="fr">已兑换<c:out value="${item.sales_count}" />个</span>
                </div>
            </div>
        </a>
    </li>
</c:forEach>