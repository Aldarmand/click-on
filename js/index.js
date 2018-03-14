//页面尾部加载
(()=>{
    $.ajax({
        type:"GET",
        url:"footer.html",
        success:function(html){
            $("#footer").html(html);
        },
        error:function(html){
            alert("您的网络出错，请稍后");
        }
    })
})();

//banner-info 的滑动

(()=>{
    $('#banner').mouseenter(function(){
        if($('#banner-info').hasClass('banner-info-left')){
            $('#banner-info').removeClass('banner-info-left');
        }else{
            $('#banner-info').addClass('banner-info-left');
        }
    }).mouseleave(function(){
        if($('#banner-info').hasClass('banner-info-right')){
            $('#banner-info').removeClass('banner-info-right');
        }else{
            $('#banner-info').addClass('banner-info-right');
        }
    })
})();


//slide移动
(()=>{
    var $imgs=$("[data-load=bannerImgs]");
    var n=0,TRANS=10,INTERVAL=2000;
    function moveonce(){
        if(n<3){
            n++;
        }else{
            n--;
            $imgs.css("transition","all.5s linear");
        }
        var left=400*n;
        $imgs.css("margin-left",-left);
        if(n==2){
        setTimeout(()=>{
             n=5;
        setTimeout(()=>{
            $imgs.css("margin-right",left);
            setTimeout(()=>{
                $imgs.css("transition","all .5s linear");
            },50);
        },50);
    },TRANS);
}
}
  //外面使用周期定时器；调用moveonce
  timer=setInterval(moveonce,INTERVAL);
})();

//