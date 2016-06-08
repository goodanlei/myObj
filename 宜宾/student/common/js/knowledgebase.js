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
	   	var list = {
    "status": "200",
    "message": "success",
    "data": [
        {
            "id": "book_2382",
            "name": "高中历史大纲版高中必修1",
            "children": [
                {
                    "id": "catalog_61845",
                    "name": "第一章清朝晚期中国开始沦为半殖民地半封建社会 ",
                    "children": [
                        {
                            "id": "catalog_61846",
                            "name": "第一次鸦片战争 "
                        },
                        {
                            "id": "catalog_61847",
                            "name": "鸦片战争的影响 "
                        },
                        {
                            "id": "catalog_61848",
                            "name": "第二次鸦片战争 "
                        },
                        {
                            "id": "catalog_61849",
                            "name": "西方资本主义国家经济势力的入侵 "
                        },
                        {
                            "id": "catalog_61850",
                            "name": "太平天国运动的兴起和发展 "
                        },
                        {
                            "id": "catalog_61851",
                            "name": "太平天国后期的保卫战 "
                        },
                        {
                            "id": "catalog_61852",
                            "name": "新思想的萌发 "
                        },
                        {
                            "id": "catalog_61853",
                            "name": "本章综合"
                        }
                    ]
                },
                {
                    "id": "catalog_61854",
                    "name": "第二章中国资本主义的产生、发展和半殖民地半封建社会",
                    "children": [
                        {
                            "id": "catalog_61855",
                            "name": "清朝政局的变动 "
                        },
                        {
                            "id": "catalog_61856",
                            "name": "洋务运动 "
                        },
                        {
                            "id": "catalog_61857",
                            "name": "中国资本主义的产生 "
                        },
                        {
                            "id": "catalog_61858",
                            "name": "中国边疆地区的新危机和中法战争 "
                        },
                        {
                            "id": "catalog_61859",
                            "name": "甲午中日战争 "
                        },
                        {
                            "id": "catalog_61860",
                            "name": "戊戌变法 "
                        },
                        {
                            "id": "catalog_61861",
                            "name": "义和团运动和八国联军侵华战争 "
                        },
                        {
                            "id": "catalog_61862",
                            "name": "本章综合"
                        }
                    ]
                },
                {
                    "id": "catalog_61863",
                    "name": "第三章 资产阶级民主革命和清朝的覆亡 ",
                    "children": [
                        {
                            "id": "catalog_61864",
                            "name": "资产阶级民主革命的兴起 "
                        },
                        {
                            "id": "catalog_61865",
                            "name": "同盟会的建立和革命形势的发展 "
                        },
                        {
                            "id": "catalog_61866",
                            "name": "清朝统治危机的加深和辛亥革命的爆发 "
                        },
                        {
                            "id": "catalog_61867",
                            "name": "中华民国的成立 "
                        },
                        {
                            "id": "catalog_61868",
                            "name": "本章综合"
                        }
                    ]
                },
                {
                    "id": "catalog_61869",
                    "name": "第四章 北洋军阀的统治 ",
                    "children": [
                        {
                            "id": "catalog_61870",
                            "name": "袁世凯独裁统治 "
                        },
                        {
                            "id": "catalog_61871",
                            "name": "军阀割据下的中国政局 "
                        },
                        {
                            "id": "catalog_61872",
                            "name": "中国民族资本主义的进一步发展 "
                        },
                        {
                            "id": "catalog_61873",
                            "name": "本章综合 "
                        }
                    ]
                },
                {
                    "id": "catalog_61874",
                    "name": "第五章 新文化运动和共产党的诞生 ",
                    "children": [
                        {
                            "id": "catalog_61875",
                            "name": "新文化运动 "
                        },
                        {
                            "id": "catalog_61876",
                            "name": "五四爱国运动 "
                        },
                        {
                            "id": "catalog_61877",
                            "name": "中国共产党的诞生 "
                        },
                        {
                            "id": "catalog_61878",
                            "name": "本章综合 "
                        }
                    ]
                },
                {
                    "id": "catalog_61879",
                    "name": "第六章 国民革命运动的兴起和失败 ",
                    "children": [
                        {
                            "id": "catalog_61880",
                            "name": "第一次国共合作的实现 "
                        },
                        {
                            "id": "catalog_61881",
                            "name": "国民革命运动的兴起 "
                        },
                        {
                            "id": "catalog_61882",
                            "name": "国民革命运动的发展 "
                        },
                        {
                            "id": "catalog_61883",
                            "name": "国民革命运动的失败 "
                        },
                        {
                            "id": "catalog_61884",
                            "name": "本章综合 "
                        }
                    ]
                },
                {
                    "id": "catalog_61885",
                    "name": "本册综合 "
                }
            ]
        },
        {
            "id": "book_2383",
            "name": "高中历史大纲版高中必修2",
            "children": [
                {
                    "id": "catalog_61886",
                    "name": "第一章 国共的十年对峙 ",
                    "children": [
                        {
                            "id": "catalog_61887",
                            "name": "国民政府前期的统治 "
                        },
                        {
                            "id": "catalog_61888",
                            "name": "“工农武装割据”的形成 "
                        },
                        {
                            "id": "catalog_61889",
                            "name": "九一八事变 "
                        },
                        {
                            "id": "catalog_61890",
                            "name": "红军的长征 "
                        },
                        {
                            "id": "catalog_61891",
                            "name": "抗日民族统一战线的初步形成 "
                        },
                        {
                            "id": "catalog_61892",
                            "name": "本章综合"
                        }
                    ]
                },
                {
                    "id": "catalog_61893",
                    "name": "第二章 中华民族的抗日战争 ",
                    "children": [
                        {
                            "id": "catalog_61894",
                            "name": "抗日战争的爆发 "
                        },
                        {
                            "id": "catalog_61895",
                            "name": "日本帝国主义在沦陷区的殖民统治 "
                        },
                        {
                            "id": "catalog_61896",
                            "name": "国民政府的内外政策 "
                        },
                        {
                            "id": "catalog_61897",
                            "name": "共产党坚持抗战和抗日战争的伟大胜利 "
                        },
                        {
                            "id": "catalog_61898",
                            "name": "本章综合"
                        }
                    ]
                },
                {
                    "id": "catalog_61899",
                    "name": "第三章 人民解放战争 ",
                    "children": [
                        {
                            "id": "catalog_61900",
                            "name": "争取和平民主的斗争和内战的爆发 "
                        },
                        {
                            "id": "catalog_61901",
                            "name": "国民党统治区政治经济危机的加深 "
                        },
                        {
                            "id": "catalog_61902",
                            "name": "解放战争的胜利发展 "
                        },
                        {
                            "id": "catalog_61903",
                            "name": "人民解放战争的胜利 "
                        },
                        {
                            "id": "catalog_61904",
                            "name": "本章综合"
                        }
                    ]
                },
                {
                    "id": "catalog_61905",
                    "name": "第四章 中国近代文化 ",
                    "children": [
                        {
                            "id": "catalog_61906",
                            "name": "清朝晚期文化（一） "
                        },
                        {
                            "id": "catalog_61907",
                            "name": "清朝晚期文化（二） "
                        },
                        {
                            "id": "catalog_61908",
                            "name": "民国时期文化（一） "
                        },
                        {
                            "id": "catalog_61909",
                            "name": "民国时期文化（二） "
                        },
                        {
                            "id": "catalog_61910",
                            "name": "本章综合"
                        }
                    ]
                },
                {
                    "id": "catalog_61911",
                    "name": "第五章 中华人民共和国成立和社会主义过渡的实现 ",
                    "children": [
                        {
                            "id": "catalog_61912",
                            "name": "新中国的成立和巩固政权的斗争 "
                        },
                        {
                            "id": "catalog_61913",
                            "name": "国民经济的恢复和初步发展 "
                        },
                        {
                            "id": "catalog_61914",
                            "name": "社会主义制度的建立 "
                        },
                        {
                            "id": "catalog_61915",
                            "name": "本章综合"
                        }
                    ]
                },
                {
                    "id": "catalog_61916",
                    "name": "第六章 社会主义建设在探索中曲折发展 ",
                    "children": [
                        {
                            "id": "catalog_61917",
                            "name": "社会主义建设在探索中曲折发展 "
                        },
                        {
                            "id": "catalog_61918",
                            "name": "本章综合"
                        }
                    ]
                },
                {
                    "id": "catalog_61919",
                    "name": "第七章 “文化大革命”的十年 ",
                    "children": [
                        {
                            "id": "catalog_61920",
                            "name": "社会主义现代化建设的迅速发展 "
                        },
                        {
                            "id": "catalog_61921",
                            "name": "粉碎林彪、江青两个反革命集团 "
                        },
                        {
                            "id": "catalog_61922",
                            "name": "本章综合"
                        }
                    ]
                },
                {
                    "id": "catalog_61923",
                    "name": "第八章 社会主义现代化建设新居面的形成 ",
                    "children": [
                        {
                            "id": "catalog_61924",
                            "name": "伟大的历史性转折 "
                        },
                        {
                            "id": "catalog_61925",
                            "name": "社会主义现代化建设的迅速发展 "
                        },
                        {
                            "id": "catalog_61926",
                            "name": "有中国特色的社会主义道路 "
                        },
                        {
                            "id": "catalog_61927",
                            "name": "“一国两制”和祖国的统一大业 "
                        },
                        {
                            "id": "catalog_61928",
                            "name": "本章综合"
                        }
                    ]
                },
                {
                    "id": "catalog_61929",
                    "name": "第九章 各族人民的共同发展 "
                },
                {
                    "id": "catalog_61930",
                    "name": "第十章 中华人民共和国的外交和国防 ",
                    "children": [
                        {
                            "id": "catalog_61931",
                            "name": "新中国初期的外交 "
                        },
                        {
                            "id": "catalog_61932",
                            "name": "外交事业的发展和国防建设成就 "
                        },
                        {
                            "id": "catalog_61933",
                            "name": "本章综合"
                        }
                    ]
                },
                {
                    "id": "catalog_61934",
                    "name": "第十一章 社会主义时期文化的发展和社会生活的新变 ",
                    "children": [
                        {
                            "id": "catalog_61935",
                            "name": "科技、教育成就和史学研究成果 "
                        },
                        {
                            "id": "catalog_61936",
                            "name": "文学艺术和体育事业的繁荣 "
                        },
                        {
                            "id": "catalog_61937",
                            "name": "现代社会生活的新变化"
                        },
                        {
                            "id": "catalog_61938",
                            "name": "本章综合"
                        }
                    ]
                },
                {
                    "id": "catalog_61939",
                    "name": "本册综合"
                }
            ]
        }
    ]
};
	   	
	   	var tit = '';
	   $.each(list.data, function(k,v) {
	   	console.log(v);
	   		 console.log(v.children.length);
	   		
	   		tit += "<dl><dt s='1' class='have_1'><span>asdfasdfljasldkfjla</span></dt><dd></dd></dl>";
	   });
	   $("#tree").empty().append(tit);
	   
	   
//	   tree_list_tit.live("click",function(){
//	   		//show hide
////	   		$(this).parent().siblings().children("dt").next().hide();
////	   		$(this).next().show();
////	   		tree.find(".active").removeClass("active");
////	   		$(this).addClass("active");
////	   		
////	   		//add  new  list
////	   		var s = $(this).attr("s");
////	   		var add_s = $(this).attr("add_s");
////	   		if(s*1&&(add_s==0||add_s== undefined)){
////		   		addList(list,this);
////	   		}else{
////	   			console.log("如果没有下级目录,则请求详细资源内容！");
////	   		}
//	   	});
	   	function addList(arr,_this){
	   		var add_list_html = '';
	   		$.each(arr,function(k,v){
	   			add_list_html +="<dl><dt s="+v.item_s+" class='have_"+v.item_s+"'><span>"+v.name+"</span></dt><dd></dd></dl>";
	   		});		
	   		$(_this).siblings().append(add_list_html);
		   	$(_this).attr("add_s",1);
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