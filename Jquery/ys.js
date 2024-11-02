$(function (){
    $('#nav ul li').each(function (i){
        $(this).children("a").bind('click',function (){
            if ($(this).next().css("display") == "none"){
                //清除其它的样式
                $('#nav ul li ul').css("display","none");
                $(this).parent().siblings().css("height","50px");
                $(this).parent().siblings().find("div").removeClass("transform");
                $(this).parent().siblings().removeClass("active");
                $(this).parent().siblings().children("a").removeClass("word");
                $(this).parent().siblings().children("a").css("color","#5A5454");
                //添加样式
                $(this).next().css("display","inline");
                $(this).find("div").addClass("transform");
                if (i==0){
                    $(this).parent().css("height","250px");   // 5个
                } else if(i == 19) {
                    $(this).parent().css("height","130px");
                } else if(i == 6 || i == 15) {
                    $(this).parent().css("height","170px");   //  3个
                } else {
                    $(this).parent().css("height","210px");    // 4个
                }
                $(this).parent().addClass("active");
                $(this).addClass("word");
                $(this).css("color","#6d61ea");
            }else {
                $(this).next().css("display","none");
                $(this).parent().css("height","50px");
                $(this).find("div").removeClass("transform");
                $(this).parent().removeClass("active");
                $(this).parent().children("a").removeClass("word");
                $(this).parent().children("a").css("color","#5A5454");
            }
        });
    })

    $('.ul li').each(function (i){
        $(this).bind('click',function (){
            var a=i+1;
            $('html,body').animate({scrollTop:$("#li_" + a + "").offset().top-50+"px"},800);
            $.getJSON('../data/db.json', function(data) {  
                ShowData(data, a);  
            }); 
            $("#li_" + a + "").parent().children().each(function (){
                this.className = '.navigation_ul_none';
            })
            $("#li_" + a + "").addClass("navigation_ul");
        })
    })

    $('.div_ul ul li').each(function (i){
        $(this).bind('click',function (){
            var f = this;
            $(this).parent().children().each(function (){
                this.className = this == f ? 'navigation_ul':'.navigation_ul_none'
            });
        })
        $.getJSON('../data/db.json', function(data) {  
            ShowData(data, 1);  
        }); 
        $.getJSON('../data/db.json', function(data) {  
            ShowData(data, 6);  
        }); 
        $.getJSON('../data/db.json', function(data) {  
            ShowData(data, 9);  
        }); 
        $.getJSON('../data/db.json', function(data) {  
            ShowData(data, 13);  
        }); 
        $.getJSON('../data/db.json', function(data) {  
            ShowData(data, 16);  
        });  

        $(this).bind('click',function (){
            $.getJSON('../data/db.json', function(data) {  
                ShowData(data, i+1);  
            }); 
        })
    })
    function ShowData(result, id){
        var str ="";
        var items = result[id];   
        $.each(items, function(index, item) {  
            // str += "<div class=\"div_count\"><a href=\"http://" + item.site + "\" target='_blank'><img src=\"https://api.ekumao.com/api/favicon?url=https://" + item.site  + ".png\"><div class=\"div_text\"><span class=\"span1\">" + item.name + "</span><br/><span>" + item.brief + "</span></div></a></div>";
            str += "<div class=\"div_count\"><a href=\"http://" + item.site + "\" target='_blank'><img src=\"https://api.ekumao.com/api/favicon?url=https://" + item.site + "\"><div class=\"div_text\"><span class=\"span1\">" + item.name + "</span><br/><span>" + item.brief + "</span></div></a></div>";
            if (id>=1 && id<=5) {
                $('#content_1').empty();
                $('#content_1').append(str);
            }
            if (id>=6 && id<=8){
                $('#content_2').empty();
                $('#content_2').append(str);
            }
            if (id>=9 && id<=12) {
                $('#content_3').empty();
                $('#content_3').append(str);
            }
            if (id>=13 && id<=15) {
                $('#content_4').empty();
                $('#content_4').append(str);
            }
            if (id==16 || id==17){
                $('#content_5').empty();
                $('#content_5').append(str);
            }
        }); 
    }
})
