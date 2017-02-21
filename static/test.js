/**
 * Created by b1016126 on 2017/02/21.
 */
$(function(){

    for(i = 0;i < 7;i++){
        var rnd = Math.floor(Math.random()*300) + 100;
        var rnd2 = Math.floor(Math.random()*200) + 100;
        $('.kiss').animate({opacity:"0.2"},rnd);
        $('.kiss').animate({opacity:"1"},rnd2);
    }

    $('.kiss').mouseover(function(){
        $(this).animate({opacity:"0.2"},100);
    });
    $('.kiss').mouseout(function(){
        $(this).animate({opacity:"1"},0);
    });

    var Hday = ['sunDay','monDay','tuesDay','wednesDay','thursDay','flyDay','saturDay'];
    var day = getday();
    var today = "#" + Hday[day];
    $(today).css({backgroundColor:"white",color:"#27313D"});


    setTimeout(function(){
        $('.chara').slideDown(500);
        $('#ch').fadeIn(1000);
    },1000)



    var　says = "hi;"
    if(day==0){
        day=7;
    }
    $('#ch').balloon({
        position:"left",
        css: {
            "color": "white",
            "font-size": "20px",
            "font-weight": "bold",
            "padding": "20px"
        },

        contents:says[day-1]
    });
    setTimeout(function(){
        $('#y_gc_div_au1').css("display","none");
        $('#y_gc_div_mast').css("display","none");
    },10)
    //getData("Data.txt");



});


function cha(){
    var html="";
    var characters=["akari","azusa","nadeko","sinobu","yotugi","yui","asuna"];
    var day=getday();
    //html+="<img id=\"ch\"src=\"img/"+ characters[day] +".png\">";
    html+="<img id=\"ch\"src=\"img/yotugi.png\">";
    document.write(html);
}
function getday(){
    var dayDate = new Date();
    var day = dayDate.getDay()
    return day;
}