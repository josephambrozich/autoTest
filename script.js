$(function(){
    $("#counter").text("Counter updated by script file");

    var bLeft = 0;
    $(document).on('click', function(){
        bLeft += 5;
        $(".ball").css({'left': bLeft});
    });
});