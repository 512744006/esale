<!DOCTYPE html>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ include file="system/system/basic/common/tag.jsp"%>
<%@ include file="system/system/basic/common/basejs.jsp"%>
<%@ include file="indexCss.jsp"%>
<html>
<head>
	<script type="text/javascript" src="${ctxPath}/static/js/layerFc.js"></script>
	<link rel="stylesheet" type="text/css" href="${ctxPath}/static/css/homepage.css">
	<link rel="stylesheet" type="text/css" href="${ctxPath}/static/style/index.css" charset="utf-8">
	<title>浙江中烟一体化仓储系统1</title>
</head>
<body id="boxBody">
<div id="easyui_layout" class="easyui-layout" style="width:100%">
	<div id="herderNav" data-options="region:'north'" style="height:50px">
		<div class="logo">
			<img src="${ctxPath}/static/img/logo1.png">
		</div>

		<div class="settingsBox">

			<shiro:user>
				<div class="settings">
					<div id="name">
						登录人：
						<shiro:principal property="personname" />
						<span id="comments"></span>
					</div>
					<div class="setting">
						<a href="${ctxPath }/preIndex">
							<div class='homeIcon'></div>
							首页
						</a>
						<a id="updatePwd" href="#">
							<div class='modifyIcon'></div>
							修改密码</a>
						<a href="${ctxPath }/loginOut">
							<div class='deleteIcon'></div>
							退出</a>
					</div>
				</div>
			</shiro:user>
		</div>
		<div class="switchBox">
			<div >
				<img src='${ctxPath}/static/img/previous1.png' id="previous">
				<img src='${ctxPath}/static/img/next2.png' id="next">
			</div>

		</div>
		<div id="NavBox">
			<div id="Nav"></div>
		</div>

	</div>

	<div data-options="region:'west'" title="导航" style="width:160px" id='treeBox'>
		<ul id="tree" class="easyui-tree">
		</ul>
	</div>

	<div data-options="region:'center',noheader:true">
		<div id="tabs">
		</div>
	</div>
</div>



<!-- 弹出修改框开始 -->
<div id="dlg">
</div>
<div id='layerBox'></div>
<!-- 弹出修改框结束 -->
</body>
<script type="text/javascript" src="${ctxPath}/static/js/webSocket.js"></script>
<script type="text/javascript">

    $(function() {
        initWebSocket("${sessionID}")
        $("#easyui_layout").layout('resize',{
            height: $(document).height()
        });

        //点击消息展示消息展示页面
        $('#comments').click(function(){
            var selectTabName = "消息展示";
            var gotoUrl = "${ctxPath}/mStTatodopaperwork/toReceiverList";
            var tabs = $("#tabs");
            var tab = tabs.tabs("getTab",selectTabName);
            if(tab){
                tabs.tabs("select",selectTabName);
                $('.tabs-panels > .panel:visible > .panel-body > iframe').get(0).contentDocument.location.reload(true);

            }else{
                tabs.tabs("add",{
                    title:selectTabName,
                    content:"<iframe frameborder='0' scrolling='auto' style='width:100%;height:100%;' src="+gotoUrl+"></iframe>",
                    closable:true
                });
                commentsRemove();
            }
        });

        $.ajax({
            type : "post",
            url : "${ctxPath}/mStTatodopaperwork/getUnreadMessage",
            dataType : "json",
            async: true,
            success : function(data) {
                if(data.total > 0){
                    comments(data.total)
                }
            }
        });
    });

    $('#tabs').tabs({
        fit : true ,
        border : false
    });

    var comments=function(a){//消息提醒
        $('#comments').show()
        if(Number(a)>99){
            $('#comments').text('99+')
        }
        else{
            $('#comments').text(a)
        }
    }

    //消息框消失
    var commentsRemove=function(){
        $('#comments').hide()
    }

    /* 左侧菜单显示tabs */
    $('#tree').tree({
        onClick: function(node){
            if($('#tree').tree("isLeaf",node.target)){
                var tabs = $("#tabs");
                var tab = tabs.tabs("getTab",node.text);
                if(tab && exitUrl.indexOf(node.url) < 0){
                    tabs.tabs("select",node.text);
                    $('.tabs-panels > .panel:visible > .panel-body > iframe').get(0).contentDocument.location.reload(true);

                }else{
                    tabs.tabs("add",{
                        title:node.text,
                        content:"<iframe frameborder='0' scrolling='auto' style='width:100%;height:100%;' src="+"${ctxPath}"+node.url+"></iframe>",
                        //href:"${ctxPath}/"+node.url,
                        closable:true
                    });
                    insertLog(node);
                }
            }
            else{
                var telescopicExpansion= $('#'+node.domId).children('.tree-hit');
                var sgs=telescopicExpansion.attr('class')
                if(telescopicExpansion.attr('class')=='tree-hit tree-expanded'){
                    $('#'+node.domId).siblings('ul').hide();
                    telescopicExpansion.attr('class','tree-hit tree-collapsed');
                    $('#'+node.domId).children('.tree-icon').attr('class','tree-icon tree-folder 0 tree-folder-open');
                }
                else{
                    $('#'+node.domId).siblings('ul').show();
                    telescopicExpansion.attr('class','tree-hit tree-expanded');
                    $('#'+node.domId).children('.tree-icon').attr('class','tree-icon tree-folder 0');
                }
            }
        }

    });

    /* 加载顶部导航 */
    var switchList;
    var switchIndex=0;
    $.ajax({
        type : "post",
        url : "${ctxPath}/menu/getTreeByPid",
        dataType : "json",
        async: true,
        data:{parentcode:0,sysid:"${sysId}"},
        success : function(data) {
            switchList=data.length
            for(var i=0;i<data.length;i++){
                /* 		$("#Nav").append('<a href="javascript:void(0)" style="margin:9px 0" onclick="showSlidMenu(\''+data[i].menucode+'\')" class="easyui-linkbutton" data-options=",iconCls:\'icon-search\'">'+
                                data[i].menuname+'</a> '); */
                $("#Nav").append('<a href="javascript:void(0)" style="margin:9px 0" onclick="showSlidMenu(\''+data[i].menucode+'\')" >'+data[i].menuname+'</a>');
            }
            $("#herderNav").css("height",'56px');
            $("#Nav").css("width",(110*switchList)+'px');
            if(switchList<=8){
                $(".switchBox").hide()
            }

            $('#previous').click(function(){
                switchIndex--
                $('#next').attr('src','${ctxPath}/static/img/next2.png')

                if(switchIndex==-1){
                    $(this).attr('src','${ctxPath}/static/img/previous1.png')
                    $('#Nav').css('right','0px')
                    switchIndex=0
                    return
                }
                $('#Nav').css('right',-(switchIndex*110)+'px')
            });
            $('#next').click(function(){

                switchIndex++
                $('#previous').attr('src','${ctxPath}/static/img/previous2.png')
                if(5+switchIndex==switchList){
                    $(this).attr('src','${ctxPath}/static/img/next1.png')
                    $('#Nav').css('right',-(switchIndex*110)+'px')
                    switchIndex--
                    return
                }
                $('#Nav').css('right',-(switchIndex*110)+'px')
            });

            $('#Nav a').click(function() {
                $(this).addClass("NavAActive");
                $(this).siblings('a').removeClass('NavAActive')
            })
        }
    });

    /* 显示左侧菜单栏 */
    /* function showSlidMenu(id) {
        $('#tree').tree({
            url : "${ctxPath}/menu/getSildTree?parentcode=" + id,
			onLoadSuccess : function(node,data){
				$("#tree span").removeClass("tree-icon");
				$("#tree span").removeClass("tree-folder");
				$("#tree span").removeClass("tree-folder-open");
				$("#tree span").removeClass("tree-file");
			}
		});
	} */
    function showSlidMenu(id) {
        $.ajax({
            type : "post",
            url : "${ctxPath}/menu/getSildTree",
            dataType : "json",
            async: true,
            data:{parentcode:id},
            success : function(data) {
                $('#tree').tree({
                    data : data,
                    onLoadSuccess : function(node,data){
                        $("#tree span").removeClass("tree-icon");
                        $("#tree span").removeClass("tree-folder");
                        $("#tree span").removeClass("tree-folder-open");
                        $("#tree span").removeClass("tree-file");


                        if (data.length > 0) {
                            //找到第一个元素
                            var n = $("#tree").tree('find', data[0].id);
                            //调用选中事件
							if(getValIfEmpty(n.sysid) == "18" && linLiaoUrl.indexOf(n.url) >= 0){
                                $("#tree li:eq(0)").find("div").addClass("tree-node-selected");   //设置第一个节点高亮
                                if($('#tree').tree("isLeaf",n.target)){
                                    var tabs = $("#tabs");
                                    var tab = tabs.tabs("getTab",n.text);
                                    if(tab && exitUrl.indexOf(n.url) < 0){
                                        tabs.tabs("select",n.text);
                                        $('.tabs-panels > .panel:visible > .panel-body > iframe').get(0).contentDocument.location.reload(true);

                                    }else{
                                        tabs.tabs("add",{
                                            title:n.text,
                                            content:"<iframe frameborder='0' scrolling='auto' style='width:100%;height:100%;' src="+"${ctxPath}"+n.url+"></iframe>",
                                            //href:"${ctxPath}/"+node.url,
                                            closable:true
                                        });
                                        insertLog(n);
                                    }
                                }
                            }
                        }

                    },
                    onExpand : function(node){
                        $("#tree span").removeClass("tree-folder");
                        $("#tree span").removeClass("tree-folder-open");
                    }
                });
            }
        });


    }

    $("#updatePwd").click(function() {
        updatePwd();
    });
    function updatePwd() {
        $('#dlg')
            .dialog(
                {
                    title : '密码修改',
                    width : '500px',
                    height : '400px',
                    closed : false,
                    cache : false,
                    minimizable : true,
                    maximizable : true,
                    resizable : true,
                    content : "<iframe frameborder='0' scrolling='auto' style='width:100%;height:100%;' src="
                        + "${ctxPath}/personinfo/updatePwd"
                        + "></iframe>",
                    modal : true
                });
    }

    //通用弹框
    function commonDialog(title,url){
        $('#dlg').dialog({
            title : title,
            width : '1000px',
            height : '600px',
            closed : false,
            cache : false,
            minimizable : true,
            maximizable : true,
            resizable : true,
            content : "<iframe frameborder='0' scrolling='auto' style='width:100%;height:100%;' src="
                + url
                + "></iframe>",
            modal : true
        });
    }

    var exitUrl=['/inv/realInvListHtm']

	var linLiaoUrl = ['/receive/receiveAddHtm'];
</script>
</html>