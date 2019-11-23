$(function(){
var find_pwd = {
    rules : {
        phone: {
            required:true,
            minlength:11,
            maxlength:11,
            number:true
        },
        pwd: {
            required:true,
            minlength:6,
            // maxlength:6,
            // number:true
        },
        pwdre: {
            required:true,
            minlength:6,
            // maxlength:6,
            // number:true,
            equalTo:"#pwd"
        },
        code: {
            required:true,
            minlength:4,
            maxlength:6,
            number:true
        }
    }
    ,messages : {
        phone: {
            required : '注册手机号必须输入<span class="bit"></span><span class="bit"></span>',
            minlength: jQuery.format('输入字符数不得小于 {0} ！<span class="bit"></span>'),
            maxlength: jQuery.format('输入字符数不得大于 {0} ！<span class="bit"></span>'),
            number: jQuery.format('输入正确手机号 ！<span class="bit"></span>')
        },
        pwd: {
            required : '密码必须输入',
            minlength: '输入字符数不得小于 {0} ',
            // maxlength: '输入字符数不得大于 {0} ',
            // number: '输入正确新密码'
        },
        pwdre: {
            required : '确认密码必须输入',
            minlength: '输入字符数不得小于 {0} ',
            // maxlength: '输入字符数不得大于 {0} ',
            // number: '输入正确确认密码',
            equalTo: "必须输入一致的密码"
        },
        code: {
            required : '验证码必须输入<span class="bit"></span><span class="bit"></span>',
            minlength: jQuery.format('输入字符数不得小于 {0} ！<span class="bit"></span>'),
            maxlength: jQuery.format('输入字符数不得大于 {0} ！<span class="bit"></span>'),
            number: jQuery.format('输入正确验证码 ！<span class="bit"></span>')
        }
    }
    ,submit_fun :
    function(){
        var _phone = $("#phone").val(),
        _code = $("#code").val();
        var that = $(this);
        if (that.hasClass('gay-btn')) {
            return false;
        };
        that.addClass('gay-btn');
        that.removeClass('cur');
        var data = {
            phone     : $("#phone").val(),
            pwd       : $("#pwd").val(),
            code       : $("#code").val(),
            pwdre     : $("#pwdre").val(),
            _scfs     : $.cookie('_scfc')
        };

        $.ajax({
            url : SITE_URL+'account/find_pwd/1',
            type: 'POST',
            dataType: 'json',
            data: data
        })
        .done(function(data) {

            console.log("success");
            if (data.status == 0) {
                var msg = [];
                if (data.msg) {
                    for(k in data.msg) {
                        msg.push(data.msg[k]);
                    }
                };
                messbackShow(msg, $(".resign-error"));
            }else{

                $(".resign-success").show();
                setTimeout("location.href = SITE_URL+'account/find_pwd/2'",1000);
            };
        })
        .fail(function() {
            console.log("error");
        })
        .always(function() {
            console.log("complete");
            that.addClass('cur');
            that.removeClass('gay-btn')
        });
    }
};
tools.make_validate_submit('login_form',find_pwd.rules,find_pwd.messages,find_pwd.submit_fun);
});