$(function(){
	var input=$("#idxg").find("input")
	var kong=$(".kongsave")
	var suresave=$(".suresave")
	
	$("#idxg").dblclick(function(){
		input.removeAttr("disabled");
		input.css({"background":"#fff"});
		$("#saveid").show();
	})
	
	
	$("#saveid").click(function(){
		if(input.val().length>0){
			$(".suresave").show();
			$("#saveid").hide();
			setTimeout(function(){
					$("#tcdui").hide();
			},1500)
			input.attr("disabled",true);
			input.css({"background":"#f9f9f9"});
		}else{
			kong.show();
		}
	})
	
	$(".kongsave .close,.btyou").click(function(){
		kong.hide();
	})
	
	$(".kongsave .sure .btzuo").click(function(){
		kong.hide();
		suresave.show();
	})
	
	$(".suresave .close,.btyou").click(function(){
		suresave.hide();
	})
	
	$(".suresave .sure .btzuo").click(function(){
		suresave.hide();
		$("#tcdui").show(800);
		input.css({"background":"#f9f9f9"});
		setTimeout(function(){
			$("#tcdui").hide(800);
		},1500)
	})
	
	$("#xianshiid").blur(function(){
		input.attr("disabled","disabled")
		input.css({"background":"#f9f9f9"});
	})
	
	$("#seacheid").click(function(){
		var cxid=$(".cxid").val();
		$("#xianshiid").val(cxid)
	})
	
})
