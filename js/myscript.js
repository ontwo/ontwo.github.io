$(document).ready(function(){
    $(".account-menu-enter").click(function(){
        $(".popup-login").css("display", "block");
    });
    $(".btn-close").click(function(){
        $(".popup-login").css("display", "none");
    });
});
