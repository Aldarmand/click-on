//ҳ��β������
(()=>{
    $.ajax({
        type:"GET",
        url:"footer.html",
        success:function(html){
            $("#footer").html(html);
        },
        error:function(html){
            alert("��������������Ժ�");
        }
    })
})();

//banner-info �Ļ���

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


//slide�ƶ�
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
  //����ʹ�����ڶ�ʱ��������moveonce
  timer=setInterval(moveonce,INTERVAL);
})();

//