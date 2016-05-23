/**
 * 知识库
 */
$(function(){
   var knowledge = {
       show:function(){
       	var that = this;
           $(".container-left>ul>li>a").click(function(){
               if($(this).next().is(":visible")){
                   $(this).next().hide();
                   $(this).removeClass("cuent")
               }
               else{
               	   that.closeAll();
                   $(this).next().show();
                   $(this).addClass("cuent")
               }
           });
       },
       exclusive:function(){
           $(".container-left-nav ul li a").click(function(){
               $(".container-left-nav ul li a").removeClass("beiying");
               $(this).addClass("beiying");
           });
           $(".conright-nav .paging li.pages").click(function(){
               $(this).addClass("active").siblings().removeClass("active");
           });
           $(".classification ul li").click(function(){
               $(this).addClass("current").siblings().removeClass("current");
           });
           $(".comprehensive ul li").click(function(){
               $(this).addClass("current").siblings().removeClass("current");
           });
           $(".container-right .conright-list li").click(function(){
               $(this).addClass("current").siblings().removeClass("current");
               var num = $(this).index();
               console.log($(".container-right .conright-mask li").eq(num));
               $(".container-right .conright-mask li").eq(num).addClass("show").siblings().removeClass("show");
           });
           $(".zhouji a,.kemu a,.week a").live("click",function(){
              	if($(this).attr("class")=='active'){
          			$(this).siblings().attr("class",'');
          			$(this).attr("class","");
          		}else{
          			$(this).siblings().attr("class",'');
          			$(this).attr("class",'active');
          		}
               //show
               $(".container-left .def").hide();
               $(".container-left ul").show();
               
           });
//         $(".nav-tit a").click(function(){
//             $(".nav-tit a").attr("class",'');
//             $(this).attr("class",'active');
//         });

           $(".page span").click(function(){
               $(".page span").removeClass("active");
               $(this).addClass('active');
           });
       },
       closeAll:function(){
       		$(".container-left-nav").hide();
       		$(".container-left>ul>li>a.cuent").removeClass("cuent");
       },
	   search:function(){
	   	$(".search-img").live("click",function(){
	   		$(".know_box").hide();
	   		$(".know_box_2").show();
	   	});
	   },
	   //tree
	   tree:function(){
	   	var tree = $("#tree dl");
	   	var _tit = tree.children("dt");
	   	var tree_list_tit=tree.find("dt");
	   	
	   	//new  list
	   	var list = [
	   	{id:1,name:'第一章',item_s:0},
	   	{id:1,name:'第2章',item_s:1},
	   	{id:1,name:'第3章',item_s:0},
	   	{id:1,name:'第4章',item_s:1},
	   	{id:1,name:'第5章',item_s:0},
	   	];
	   	
	   	
	   	tree_list_tit.live("click",function(){
	   		//show hide
	   		$(this).parent().siblings().children("dt").next().hide();
	   		console.log($(this).parent().siblings().size());
	   		$(this).next().show();
	   		tree.find(".active").removeClass("active");
	   		$(this).addClass("active");
	   		
	   		//add  new  list
	   		var s = $(this).attr("s");
	   		var add_s = $(this).attr("add_s");
	   		if(s*1&&(add_s==0||add_s== undefined)){
		   		var ht = addList(list);
		   		$(this).siblings().append(ht);
		   		$(this).attr("add_s",1);
	   		}
	   	});
	   	function addList(arr){
	   		var add_list_html = '';
	   		$.each(arr,function(k,v){
	   			add_list_html +="<dl><dt s="+v.item_s+" class='have_"+v.item_s+"'><span>"+v.name+"</span></dt><dd></dd></dl>";
	   		});		
	   		return add_list_html;
	   	}
	   	
	   },
       init:function(){
           this.show();
           this.exclusive();
           this.closeAll();
           this.search();
           this.tree();
       },
   };
    knowledge.init();
});