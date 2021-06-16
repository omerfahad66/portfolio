$(document).ready(function(){
    var scrollStart=0;
    var startChange=$("#startchange")
    var offset=startChange.offset()
    if(startChange.length){
        $(document).scroll(function(){
            scrollStart=$(this).scrollTop()
            if(scrollStart>offset.top){
                $(".navbar-default").css("background-color","white")
            }
            else{
                $(".navbar-default").css("background-color","transparent")
            }
        })
    }

})