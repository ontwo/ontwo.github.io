$(document).ready(function(){

    categoryFilter();
    howToGet();
    servicesTabs();
    popupBuy();
    slider();
    widgetPrice();

    /* -----------------------
       pop-up for 'how to get'
       ----------------------- */
    function howToGet(){
        $(".howtoget-feedback").click(function(){
            $(".layout-wrapper-about").css("position", "relative");
            $(".howtoget-popup").css("display", "block");
            $(".howtoget-popup-cancel").click(function(){
                $(".howtoget-popup").css("display", "none");
                $(".layout-wrapper-about").css("position", "static");
            });
        });
    }// end pop-up

    /* -------------
       services tabs
       ------------- */
    function servicesTabs(){
        $(".services-menu-item").each(function(i){

            if($(this).hasClass("services-menu-item-current")){
                $(".services-item").each(function(i1){
                    if(i==i1){
                        $(this).css("display", "block");
                    }
                    else{
                        $(this).css("display", "none");
                    }
                });
            }

            $(this).click(function(){
                $(this).addClass("services-menu-item-current");
                $(".services-menu-item").not(this).removeClass("services-menu-item-current");
                $(".services-item").each(function(i1){
                    if(i==i1){
                        $(this).css("display", "block");
                    }
                    else{
                        $(this).css("display", "none");
                    }
                });
            });
        });
    }// end services tabs

    /* ------
       SLIDER
       ------ */
    function slider() {
            if($(".slider").length) {
                $(".slider").wrap("<div class='slider-wrapper'></div>");
                // add wrapper for slider
                $(".slider-wrapper").append("" + //add controls wrapper and text for slider
                "<div class='slider-controls'>" +
                "<a class='slider-link btn' href='#'></a>" +
                "</div>" +
                "<div class='slider-text'>" +
                "<div class='slider-name'></div>" +
                "<div class='slider-description'></div>" +
                "</div>");
                $(".slider-controls").append("<div class='slider-btn-wrapper'></div>");// add wrapper for buttons

                var querySliderItem = $(".slider-item");
                var querySliderItemA = $(".slider-item a");
                var querySliderItemImg = $(".slider-item img");
                var querySliderLink = $(".slider-link");
                var querySliderButton = $(".slider-btn");
                var itemLength = querySliderItem.length; // number of slider items
                var linkText = []; // empty array for text in the button link
                var link = []; // empty array for href in the button link
                var imgAlt = []; // empty array for attr 'alt' from image

                for (i = 0; i < itemLength; i++) {
                    linkText[i] = querySliderItemA.eq(i).attr("title"); // add all values 'title' from .slider-item a
                    link[i] = querySliderItemA.eq(i).attr("href"); // add all values 'href' from .slider-item a
                    imgAlt[i] = querySliderItemImg.eq(i).attr("alt").split("-"); // add all values 'alt' from .slider-item img; split values;
                    $(".slider-btn-wrapper").append("<span class='slider-btn'></span>"); // add buttons to slider
                }


                querySliderItem.not(querySliderItem.eq(0)).css("display", "none"); // add 'display = block' to all .slider-item except first
                querySliderItemA.removeAttr("href"); // remove attr 'href' from all .slider-item a
                querySliderLink.text(linkText[0]).attr("href", link[0]); // add text for .slider-link, attr 'href';
                $(".slider-btn").eq(0).addClass("slider-btn-active"); // add class 'slider-btn-active' for the first button
                $(".slider-name").text(imgAlt[0][0]); // add value to '.slider-name'
                $(".slider-description").text(imgAlt[0][1]); // add value to '.slider-description'


                querySliderItem.each(function (i2) {

                    var delay = 300; // delay between slide

                    $(this).click(function () {

                        var index = $(this).index(); // index of current '.slider-item';

                        if (itemLength - 1 > i2) {
                            $(this).fadeOut(delay);
                            querySliderItem.eq(index + 1).fadeIn(delay).css("display", "block");
                            querySliderLink.text(linkText[index + 1]).attr("href", link[index + 1]);
                            $(".slider-btn").eq(index + 1).addClass("slider-btn-active");
                            $(".slider-btn").eq(index).removeClass("slider-btn-active");
                            $(".slider-name").text(imgAlt[index + 1][0]);
                            $(".slider-description").text(imgAlt[index + 1][1]);
                        }
                        else {
                            $(this).fadeOut(delay);
                            $(".slider-item").eq(0).fadeIn(delay).css("display", "block");
                            $(".slider-link").text(linkText[0]);
                            $(".slider-link").attr("href", link[0]);
                            $(".slider-btn").eq(index).removeClass("slider-btn-active");
                            $(".slider-btn").eq(0).addClass("slider-btn-active");
                            $(".slider-name").text(imgAlt[0]);
                            $(".slider-name").text(imgAlt[0][0]);
                            $(".slider-description").text(imgAlt[0][1]);
                        }
                    });
                });


                $(".slider-btn").click(function () {
                    if ($(this).hasClass("slider-btn-active")) {
                        return null;
                    }
                    else {
                        $(".slider-btn").removeClass("slider-btn-active");
                        $(this).addClass("slider-btn-active");
                        $(".slider-item").fadeOut(300);
                        $(".slider-item").eq($(this).index()).fadeIn(300).css("display", "block");
                        $(".slider-link").text(linkText[$(this).index()]);
                        $(".slider-link").attr("href", link[$(this).index()]);
                        $(".slider-name").text(imgAlt[$(this).index()][0]);
                        $(".slider-description").text(imgAlt[$(this).index()][1]);
                    }
                });
            }
    }// end slider

    /* ---------------
       CATEGORY FILTER
       --------------- */
    function categoryFilter(){

        var click = 1;

        $(".sorting-item:first-child").addClass("sorting-to-top");

        $(".sorting-item").click(
            function(){
                if(click){
                    $(".sorting-item").removeClass("sorting-to-top sorting-to-bottom");
                    $(this).addClass("sorting-to-top").removeClass("sorting-to-bottom");
                    click = 0;
                }
                else{
                    $(".sorting-item").removeClass("sorting-to-top sorting-to-bottom");
                    $(this).addClass("sorting-to-bottom").removeClass("sorting-to-top");
                    click = 1;
                }
            }
        );

    }// end categoryFilter

    /* ----------
       POP-UP BUY
       ---------- */
    function popupBuy(){

        $(".category-list-item-buy").click(
            function(){
                $(".buy-popup").css("display", "block");
            }
        );
        $(".buy-popup-resume").click(
            function(){
                $(".buy-popup").css("display", "none");
            }
        );

    }// end popupBuy

    /* ------------
       WIDGET PRICE
       ------------ */
    function widgetPrice(){
        $(".widget-price-slider").slider({
            values: [0, 30000],
            min: 0,
            max: 37000,
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

});