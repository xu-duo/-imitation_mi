$(function(){
    //轮播图
    var $span = $("#slide_card span");
    $span.css("opacity","0.7");
    var len = $span.length;
    var index = 0;
    var timer = 0;

    var $prev = $("#prev");
    var $next = $("#next");

    $prev.click(function(){
        if(index == 0){
            index = 4;
        }
        else{
            index-=1;
        }
        showImg(index);
    });
    $next.click(function(){
        if(index == 4){
            index = 0;
        }
        else{
            index+=1;
        }
        showImg(index);
    });

    $span.mouseover(function(){
        index = $span.index(this);
        showImg(index);
    }).eq(0).mouseover();

    $("#wrap_pic").hover(function() {
        if (timer) {
            clearInterval(timer);
        }
    },function(){
        timer = setInterval(function(){
            showImg(index);
            index++;
            if (index == len){
                index = 0 ;
            }
        },2000)
    }).trigger("mouseleave");

    function showImg(index){
        var $obj = $("#slide_card");
        var $list = $obj.find("span");
        var newList = $list.eq(index).attr("list");
        $("#pic a").attr("list",newList).find("img").eq(index)
            .stop(true,true).show().siblings().hide();
        $list.removeClass("active").css("opacity","0.7").eq(index)
            .addClass("active").css("opacity","1");
    }

    //购物车
    var $cart = $("#cart");
    var $cart_list = $("#cart_list");
    $cart.hover(function(){
        $("#cart").css("backgroundColor","#FFF").find("a").css("color","#FF6709").find("img").attr("src","image/cart1.png");
        $cart_list.slideDown();
    },function(){
        $("#cart").css("backgroundColor","#424242").find("a").css("color","#ccc").find("img").attr("src","image/cart.png");
        $cart_list.slideUp();
    });

    //搜索框
    var $form = $("#search_form");
    var $search = $("#search");
    $search.on("focus",function(){
        $("#search_form .hot_word").css("z-index","0");
        $form.find("input").css({"borderColor":"#FF6709","outline":"none","text-indent":"1em"});
    }).on("blur",function(){
        $("#search_form .hot_word").css("z-index","2");
        $form.find("input").css({"borderColor":"#ddd","outline":"none"});
    });

    //顶部商品列表弹出
    var $product_list = $("#ac .ab");
    var $more_product = $("#product_more");
    $product_list.on("mouseover",function(){
        index = $product_list.index(this);
        $more_product.slideDown();
        product(index);
    });
    $("#product_list").find("#ac").on("mouseleave",function(){
        $more_product.slideUp();
        $product_list.removeClass("active");
    });

    function product(index){
        var $product_list = $("#ac .ab");
        var $more_product = $("#product_more");
        var newList = $product_list.eq(index).attr("list");
        $more_product.attr("list",newList).find(".more_list").eq(index)
            .stop(true,true).show().siblings().hide();
        $product_list.removeClass("active").eq(index)
            .addClass("active");
    }

    //侧边商品列表弹出
    $parent_li = $(".parent_ul .parent_li");
    $parent_li.on("mouseover",function(){
        $(this).find(".child").css("display","block");
    }).on("mouseleave",function(){
        $(this).find(".child").css("display","none");
    });

    //明星单品
    var $btn = $("#more").find("span");
    $btn.eq(0).on("click",function(){
        $("#bd ul").animate({left:"0px"},"slow");
        $(this).css({
            "color": "#B0B0B0",
            "cursor": "default"
        });
        $btn.eq(1).css({
            "color": "#000",
            "cursor": "pointer"
        });
    });
    $btn.eq(1).on("click",function(){
        $("#bd ul").animate({left:"-1226px"},"slow");
        $(this).css({
            "color": "#B0B0B0",
            "cursor": "default"
        });
        $btn.eq(0).css({
            "color": "#000",
            "cursor": "pointer"
        });
    });

    //搭配
    var arr =[
        {"data":[{"src":"image/match/11.jpg","h":"小米圈铁耳机","price":"129元","eval":"2.4万人评价"},
            {"src":"image/match/12.jpg","h":"小米圈铁耳机Pro","price":"149元","eval":"690人评价"},
            {"src":"image/match/13.jpg","h":"10000mAh小米移动电源2","price":"79元","eval":"4381人评价"},
            {"src":"image/match/14.jpg","h":"小米耳塞耳机 基础版","price":"29元","eval":"7万人评价"},
            {"src":"image/match/15.jpg","h":"小米插线板","price":"49元","eval":"26.1万人评价"},
            {"src":"image/match/16.jpg","h":"小米移动电源10000mAh高配套...","price":"169元","eval":"841人评价"},
            {"src":"image/match/17.jpg","h":"小米移动电源10000mAh高配版","price":"149元","eval":"2.6万人评价"}],
        "more":[{"h":"小米音乐闹钟","price":"199元","src":"image/match/18.jpg","intro":"热门"}],
        "evaluation":[{"review":"耳机很小巧，精致。","author":"来自 123456 的评论"},{"review":"音质好，不错！","author":"来自 123456 的评价"},
            {"review":"物流很快。","author":"来自 123456 的评论"},{"review":"做工好，摸起来手感不错。","author":"来自 123456 的评论"},
            {"review":"一上手就试试，质量不错。","author":"来自 123456 的评论"},{"review":"手感超舒服。","author":"来自 123456 的评论"},
            {"review":"不错，不错！","author":"来自 123456 的评论"}]
        },
        {"data":[{"src":"http://i1.mifile.cn/a1/pms_1479724763.43233402!220x220.jpg","h":"小米网络音箱","price":"399元","eval":"0人评价"},
            {"src":"http://i1.mifile.cn/a1/T1SkV_BCd_1RXrhCrK!220x220.jpg","h":"小米胶囊耳机","price":"69元","eval":"2万人评价"},
            {"src":"http://i1.mifile.cn/a1/T1Ax_vB_Kv1RXrhCrK!220x220.jpg","h":"小米活塞耳机 基础版","price":"29元","eval":"7.2万人评价"},
            {"src":"http://i1.mifile.cn/a1/T1LqYgBCWv1RXrhCrK!220x220.jpg","h":"小米随身蓝牙音箱","price":"69元","eval":"1.1万人评价"},
            {"src":"http://i1.mifile.cn/a1/T1Tfd_BjAv1RXrhCrK!220x220.jpg","h":"小米小钢炮蓝牙音箱2","price":"129元","eval":"1.6万人评价"},
            {"src":"http://i1.mifile.cn/a1/T1A.A_BKYT1RXrhCrK!220x220.jpg","h":"方盒子音箱","price":"99元","eval":"1.5万人评价"},
            {"src":"http://i1.mifile.cn/a1/T1ajbvB7Kv1RXrhCrK!220x220.jpg","h":"睿米车载蓝牙播放器","price":"69元","eval":"2万人评价"}],
        "more":[{"h":"小米蓝牙音箱","price":"199元","src":"http://i1.mifile.cn/a1/T1MDK_B_YT1RXrhCrK!220x220.jpg","intro":"耳机音箱"}],
        "evaluation":[{"review":"","author":""},{"review":"很小巧，喜欢的可以试试。","author":"来自 123456 的评论"},
            {"review":"耳机佩戴舒服，颜色鲜艳，关键音质好","author":"来自 123456 的评论"},{"review":"小巧，便携。","author":"来自 123456 的评论"},
            {"review":"很精致，小巧可爱","author":"来自 123456 的评论"},{"review":"音质不错。","author":"来自 123456 的评论"},
            {"review":"做工，质量，性能都很好","author":"来自 123456 的评论"}]
        },
        {"data":[{"src":"http://i3.mifile.cn/a4/T1AcE_Bghv1RXrhCrK.jpg","h":"移动电源5000mAh","price":"49元","eval":"9.4万人评价"},
            {"src":"http://i1.mifile.cn/a1/pms_1475984312.06894925!220x220.jpg","h":"小米移动电源10000mAh高配套","price":"169元","eval":"1175人评价"},
            {"src":"http://i1.mifile.cn/a1/T1eSZgBjVT1RXrhCrK!220x220.jpg","h":"移动电源10000mAh 高配版","price":"149","eval":"2.6万人评价"},
            {"src":"http://i3.mifile.cn/a4/T1x8J_BgEv1RXrhCrK.jpg","h":"移动电源20000mAh","price":"149元","eval":"5.7万人评价"},
            {"src":"http://i1.mifile.cn/a1/pms_1478783903.73043614!220x220.jpg","h":"便捷充电电源套装","price":"98元","eval":"0人评价"},
            {"src":"http://i3.mifile.cn/a4/T1jMbjB5Jv1RXrhCrK.jpg","h":"小米插线板（3孔位+USB）","price":"49元","eval":"26.3万人评价"},
            {"src":"http://i1.mifile.cn/a1/T1OdEgBmJv1RXrhCrK!220x220.jpg","h":"双型号插线板收纳套装","price":"127元","eval":"0人评价"}],
        "more":[{"h":"小米插线板","price":"39元","src":"http://i3.mifile.cn/a4/T1Ihd_BTCv1RXrhCrK.jpg","intro":"电源"}],
        "evaluation":[{"review":"很好","author":"来自 123456 的评论"},{"review":"轻。薄，容量大","author":"来自 123456 的评论"},
            {"review":"很薄，充电快","author":"来自 123456 的评论"},{"review":"电池时尚美观，充电快","author":"来自 123456 的评论"},
            {"review":"","author":""},{"review":"做工不错","author":"来自 123456 的评论"},
            {"review":"","author":""}]
        },
        {"data":[{"src":"http://i1.mifile.cn/a1/T1GGAgByhv1RXrhCrK!220x220.jpg","h":"SanDisk 16GB高速存储卡","price":"33.9元","eval":"5194人评价"},
            {"src":"http://i1.mifile.cn/a1/T1ipAvB_ZT1RXrhCrK!220x220.jpg","h":"原装快充套装","price":"58元","eval":"0人评价"},
            {"src":"http://i1.mifile.cn/a1/T1xxVTBghv1RXrhCrK!220x220.jpg","h":"彩虹5号电池（10粒装）","price":"9.9元","eval":"8万人评价"},
            {"src":"http://i1.mifile.cn/a1/T178EjBjVT1RXrhCrK!220x220.jpg","h":"彩虹7号电池（10粒装）","price":"9.9元","eval":"4.8万人评价"},
            {"src":"http://i1.mifile.cn/a1/T1sRhTBsYT1RXrhCrK!220x220.jpg","h":"SanDisk 16GB存储卡（Class4）","price":"31.9元","eval":"8万人评价"},
            {"src":"http://i1.mifile.cn/a1/pms_1463731356.45818748!220x220.jpg","h":"镍氢充电电池套装","price":"88元","eval":"0人评价"},
            {"src":"http://i1.mifile.cn/a1/T142A_BXEv1RXrhCrK!220x220.jpg","h":"小米车载充电器","price":"49元","eval":"3.6万人评价"}],
        "more":[{"h":"米兔手机U...","price":"49.9元","src":"http://i1.mifile.cn/a1/T1ehLgBmET1RXrhCrK!220x220.jpg","intro":"电池存储卡"}],
        "evaluation":[{"review":"闪存速度很快","author":"来自 123456 的评论"},{"review":"","author":""},
            {"review":"价格实惠，外观好看","author":"来自 123456 的评论"},{"review":"漂亮的电池，好用不贵","author":"来自 123456 的评论"},
            {"review":"物美价廉，正品行货，发货速度","author":"来自 123456 的评论"},{"review":"","author":""},
            {"review":"精致漂亮非常喜欢，充电很快！","author":"来自 123456 的评论"}]
    }];

    var $more3 = $("#more3 span");
    $more3.eq(0).on("mouseover",function(){
        $(this).addClass("active").siblings().removeClass("active");
            showContent(0);
    });
    $more3.eq(1).on("mouseover",function(){
        $(this).addClass("active").siblings().removeClass("active");
        showContent(1);
    });
    $more3.eq(2).on("mouseover",function(){
        $(this).addClass("active").siblings().removeClass("active");
        showContent(2);
    });
    $more3.eq(3).on("mouseover",function(){
        $(this).addClass("active").siblings().removeClass("active");
        showContent(3);
    });

    function showContent(index){
        var $hot_bd = $("#hot_bd .ul1 li");
        $hot_bd.each(function(i){
            $(this).find("img").attr("src",arr[index].data[i].src);
            $(this).find("a").html(arr[index].data[i].h);
            $(this).find(".price").html(arr[index].data[i].price);
            $(this).find(".eval").html(arr[index].data[i].eval);
            var Div = '<div class="review_author"><a><span class="review"></span><span class="author"></span></a></div>';
            $(Div).appendTo(this);
            $(this).find("div .review").html(arr[index].evaluation[i].review);
            $(this).find("div .author").html(arr[index].evaluation[i].author);
        });
        var $hot_more = $("#hot_bd .ul2 li");
        var $hot_more1 = $hot_more.eq(0);
        var $hot_more2 = $hot_more.eq(1);
        $hot_more1.each(function(){
            $(this).find("a").html(arr[index].more[0].h);
            $(this).find(".price").html(arr[index].more[0].price);
            $(this).find("img").attr("src",arr[index].more[0].src);
        });
        $hot_more2.each(function(){
            $(this).find(".intro").html(arr[index].more[0].intro);
        });
    }
    showContent(0);

    var $hot_bd = $("#hot_bd .ul1 li");
    $hot_bd.on("mouseover",function(){
        var jqObj = $(this).find(".review_author");
        if(!jqObj.find('span').text().trim().length){ //判断评价是否为空
            jqObj.hide();
        }else{
            $(this).find(".review_author").slideDown('fast').css("backgroundColor","#FF6700");
        }
    }).on("mouseleave",function(){
        $(this).find(".review_author").slideUp('fast');
    });

//more
    $(".intel .more,.video .more").on("mouseover",function(){
        $(this).find("a").css({"color":"#FF6700","cursor":"pointer"}).find("img").attr("src","image/intel/more1.png");
    }).on("mouseleave",function(){
        $(this).find("a").css("color","#000").find("img").attr("src","image/intel/more.png");
    });


//内容
    var $add = $("#move_content li");
    var $moveLi = $add.find(".page").find("span");
    $moveLi.on("click",function(){
        index = $moveLi.index(this);
        move(index);
        $(this).addClass("active").siblings().removeClass("active");
    });

    function move(index){
        var $move_content = $("#move_content .page span");
        var $add = $("#move_content li");
        var newList = $move_content.eq(index).attr("list");
        $add.attr("list",newList).find(".add").eq(index)
            .stop(true,true).show().siblings().hide();
        console.log("eeee");
    }
});






