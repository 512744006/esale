

<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8" %>


<html>
<head>
    <title>Title</title>
    <script src="${request.contextPath}/js/jquery-3.3.1.min.js"></script>
    <script type="text/javascript">
        $(document).ready(function () {
            // 页面加websocket
            websocketClient();

        });
        var sock;
        function websocketClient() {

            var url = 'ws://' + window.location.host +"${request.contextPath + address!}";
            sock = new WebSocket(url);

            // 打开连接，打开连接后的回调
            sock.onopen = function () {
                console.log("连接打开");

            };

            // 客户端发送消息给服务器，回调
            sock.onmessage = function(data)
            {
                console.info(data.data);
            };

            sock.onclose = function() {
                console.info("close");
            };

        }
        // 测试客户端与服务器通讯
        function sendMessage() {
            sock.send("test");
        };



    </script>
</head>
<body>

<input type="button" value="按钮" onclick="sendMessage();">
</body>
</html>


















































































