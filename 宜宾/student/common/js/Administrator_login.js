$(function(){
    var rememb;
    $(".denglu").on("click",function(){
        //判断用户是否记住密码
        if($("#jizhu").is(":checked")){
            rememb = "1";
        }
        else {
            rememb = "0";
        }
        //验证用户名密码
        $.ajax({
            type:"post",
            url:"adminlogin/verifylogin.do",
            data:{username:$(".username").val(),password:$(".password").val(),rememberPassword:rememb},
            success:function(data){
                var data = eval(data);
                if(data.code == "200"){
                    location.href = "../resourceManager/index.do";
                }
                else{
                    $(".tishi").show();
                }
            }
        });
    });
});