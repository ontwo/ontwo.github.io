$(document).ready(function(){

    widgetPrice();
    sortingCategory();
    headerScroll();
    popupFeedback();

    /* ------------
       WIDGET PRICE
       ------------ */
    function widgetPrice(){
        $(".widget-price-slider").slider({
            values: [0, 15000],
            min: 0,
            max: 18000,
            step: 1,
            range: true,
            orientation: 'horizontal',
            create: function(event, ui){
                val = $(".widget-price-slider").slider('values');
                $(".widget-price-value-min").val(val[0]);
                $(".widget-price-value-max").val(val[1]);
            },
            slide: function(event, ui){
                $(".widget-price-value-min").val(ui.values[0]);
                $(".widget-price-value-max").val(ui.values[1]);
            }
        });
    } // end widget price

    /* ----------------
       SORTING CATEGORY
       ---------------- */
    function sortingCategory() {

        var click = 1;

        $(".sorting-category-item:last-child").addClass("sorting-to-top");

        $(".sorting-category-item").click(
            function () {
                if (click) {
                    $(".sorting-category-item").removeClass("sorting-to-top sorting-to-bottom");
                    $(this).addClass("sorting-to-top").removeClass("sorting-to-bottom");
                    click = 0;
                }
                else {
                    $(".sorting-category-item").removeClass("sorting-to-top sorting-to-bottom");
                    $(this).addClass("sorting-to-bottom").removeClass("sorting-to-top");
                    click = 1;
                }
            }
        );
    }

    /* ----------------
       SCROLLING HEADER
       ---------------- */
    function headerScroll(){

        $(window).scroll(
            function(){
                if($(window).scrollTop() > $(".header-top").height()+30){
                    $(".header").addClass("header-top-scroll");
                }
                else{
                    $(".header").removeClass("header-top-scroll");
                }
            }
        );

    }

    /* ---------------
       POP-UP FEEDBACK
       --------------- */
    function popupFeedback(){

        $(".location-btn").click(
            function(){
                $(".popup-feedback").css("display", "block");
            }
        );

        $(".btn-cancel").click(
            function(){
                $(".popup-feedback").css("display", "none");
            }
        );

    }


});