/**
 * Created by uid on 2016/12/11.
 */
/******** 图片翻转效果 *****************/
$(function(){
    $(".well-item").hover(function(){
        $(this).find(".correct").children().removeClass();
        $(this).find(".opposite").children().removeClass();
        $(this).find(".correct").children().addClass("test");
        $(this).find(".opposite").children().addClass('test2');
    },function(){
        $(this).find(".correct").children().removeClass();
        $(this).find(".opposite").children().removeClass();
        $(this).find(".correct").children().addClass("test2");
        $(this).find(".opposite").children().addClass('test');
    });
});
/******** 导航条点击变色 ***********/
$('#top-menu').on('click','li',function(){
    $(this).addClass('hover').siblings('.hover').removeClass('hover');
});
/******** 专业技能Canvas绘图 **********/
$('#da-profession').on('mouseenter','.pro-content',function(){
   var num =parseInt($(this).children().children('dt').children().html());
    $(this).children().children('dt').children('span').css('opacity',0);
    var canvas = ($(this).children().children('dt').children('canvas')).get(0);
    //canvas.style.left= '50%';
    //canv
    canvas.width=150;
    canvas.height=150;
    var ctx = canvas.getContext('2d');
    ctx.lineWidth = 10;
    ctx.font = '3em bold SimHei';
    ctx.textBaseline = 'top';
    var deg = 0;
     var timer = setInterval(function(){
        ctx.clearRect(0,0,242,150);
        // 外部灰色外圈
        ctx.beginPath();
        ctx.arc(75,75,70,0,2*Math.PI);
        ctx.strokeStyle = '#aaa';
        ctx.stroke();
         //绘制进度条
         ctx.beginPath();
         deg += 4;
         ctx.arc(75,75,70, 0-Math.PI/2, deg*Math.PI/180-Math.PI/2);
         ctx.strokeStyle = '#D38629';
         ctx.stroke();
         //绘制文本信息
         var txt = parseInt(deg/360*100)+'%';
         var w = ctx.measureText(txt).width;
         ctx.fillStyle = '#D38629';
         ctx.fillText(txt, 75-w/2, 75-20);
         if(deg>=num*360/100){
             clearInterval(timer);
             timer=null;
             deg=0;
             console.log(deg);
         }
    },10)

});