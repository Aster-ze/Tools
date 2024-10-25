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
                if (i==0 || i==17){
                    $(this).parent().css("height","210px");
                }else {
                    $(this).parent().css("height","130px");
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
            // $.ajax({
            //     url:'../data/db.json',
            //     data: {select:i+1},
            //     type:"Get",
            //     dataType:"json",
            //     success:ShowData
            // })
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
            ShowData(data, 5);  
        }); 
        $.getJSON('../data/db.json', function(data) {  
            ShowData(data, 7);  
        }); 
        $.getJSON('../data/db.json', function(data) {  
            ShowData(data, 9);  
        }); 
        $.getJSON('../data/db.json', function(data) {  
            ShowData(data, 11);  
        }); 
        $.getJSON('../data/db.json', function(data) {  
            ShowData(data, 13);  
        }); 
        // $.ajax({url:'../data/../data/db.json', data: {select:1}, type:"GET", dataType:"json", success:ShowData})
        // $.ajax({url:'../data/../data/db.json', data: {select:5}, type:"GET", dataType:"json", success:ShowData})
        // $.ajax({url:'../data/../data/db.json', data: {select:7}, type:"GET", dataType:"json", success:ShowData})
        // $.ajax({url:'../data/../data/db.json', data: {select:9}, type:"GET", dataType:"json", success:ShowData})
        // $.ajax({url:'../data/../data/db.json', data: {select:11}, type:"GET", dataType:"json", success:ShowData})
        // $.ajax({url:'../data/../data/db.json', data: {select:13}, type:"GET", dataType:"json", success:ShowData})


        $(this).bind('click',function (){
            $.getJSON('../data/db.json', function(data) {  
                ShowData(data, i+1);  
            }); 
            // $.ajax({
            //     url:'../data/../data/db.json',
            //     data: {select:i+1},
            //     type:"GET",
            //     dataType:"json",
            //     success:ShowData
            // })
        })
    })
    function ShowData(result, id){
        console.info(result[id]);
        console.info(id);

        // var length = Object.keys(result).length-1;
        var str ="";

        var items = result[id];   
        $.each(items, function(index, item) {  
            console.info(item.site);
            console.info(item["site"]);
            console.info(item.name);

            str += "<div class=\"div_count\"><a href=\"http://" + item.site + "\" target='_blank'><img src=\"https://api.iowen.cn/favicon/" + item.site  + ".png\"><div class=\"div_text\"><span class=\"span1\">" + item.name + "</span><br/><span>" + item.brief + "</span></div></a></div>";
            if (id>=1 && id<=4) {
                $('#content_1').empty();
                $('#content_1').append(str);
            }
            if (id==5 || id==6){
                $('#content_2').empty();
                $('#content_2').append(str);
            }
            if (id==7 || id==8) {
                $('#content_3').empty();
                $('#content_3').append(str);
            }
            if (id==9 || id==10) {
                $('#content_4').empty();
                $('#content_4').append(str);
            }
            if (id==11 || id==12){
                $('#content_5').empty();
                $('#content_5').append(str);
            }
            if (id>=13 && id<=16){
                $('#content_6').empty();
                $('#content_6').append(str);
            } 
        });  

        // for (var i=0;i<length;i++){
        //     // var str = "<div class=\"div_count\"><a href=\"" + result[i].site + "\"><img src=\"../pic/" + result[i].name + ".ico\"><div class=\"div_text\"><span class=\"span1\">" + result[i].name + "</span><br/><span>" + result[i].brief + "</span></div></a></div>";
        //     str += "<div class=\"div_count\"><a href=\"http://" + result[i].site + "\" target='_blank'><img src=\"https://api.iowen.cn/favicon/" + result[i].site  + ".png\"><div class=\"div_text\"><span class=\"span1\">" + result[i].name + "</span><br/><span>" + result[i].brief + "</span></div></a></div>";

        //     if (id>=1 && id<=4) {
        //         $('#content_1').empty();
        //         $('#content_1').append(str);
        //     }
        //     if (id==5 || id==6){
        //         $('#content_2').empty();
        //         $('#content_2').append(str);
        //     }
        //     if (id==7 || id==8) {
        //         $('#content_3').empty();
        //         $('#content_3').append(str);
        //     }
        //     if (id==9 || id==10) {
        //         $('#content_4').empty();
        //         $('#content_4').append(str);
        //     }
        //     if (id==11 || id==12){
        //         $('#content_5').empty();
        //         $('#content_5').append(str);
        //     }
        //     if (id>=13 && id<=16){
        //         $('#content_6').empty();
        //         $('#content_6').append(str);
        //     }
        // }
    }
})
