$(document).ready(function(){
    $('.help-notes').hide();             // hide the notes for help

    /*Toggles the help-notes div when help is clicked*/
    $( ".help" ).on('click', function(){
        $(this).next('div').slideToggle( "slow" );
    });

    /*Uses singlePrice() here to get price for all 4 sides when input keyup*/
    $('.step2-selections input').on('keyup', function(){
        var sideAtotal = singlePrice($('.dimensions-side-a input'));
        var sideBtotal = singlePrice($('.dimensions-side-b input'));
        var sideCtotal = singlePrice($('.dimensions-side-c input'));
        var sideDtotal = singlePrice($('.dimensions-side-d input'));
        var sideABCDtotal = (sideAtotal + sideBtotal + sideCtotal +sideDtotal).toFixed(2);
        $('.price').empty().append("$" + sideABCDtotal);
    });
    /*Function to gets the price for single Side*/
    //Each side has 4 values
    //Saves the 4 values inside a value[]
    //Width     value[0] and value[1] ---> index 0 is foot, 1 is inches
    //Height    value[2] and value[3] ---> index 2 is foot, 3 is inches
    //value[1]/[3] are inches and always needs to be converted to foot by dividing 12
    function singlePrice(sideInput){
            var values = [];
            sideInput.each(function() {
                if(($(this).val() == "") || (isNaN($(this).val()))){
                    values.push(parseInt(0));
                }else {
                    values.push(parseInt($(this).val()));
                }
            });

            values[1] = values[1]/12;
            values[3] = values[3]/12;
            var sideTotal = ((values[0]+values[1])*(values[2]+values[3])) * 1.6;
            return sideTotal;
    }



    $('div.color1 div.color2 div.color3').hide();  //hide number of colors until a value is selected
    var colorHolder = null; //used to store the location where color is picked

    /*Side A Color Picker*/
    $('.color-side-a .number-of-color-field > div').on('click', function(event){
       colorHolder = $(this).attr('class');
        var yVal = (event.pageY - 250) + "px";
        var xVal = (event.pageX / 3) + "px";
       $('.colorSelectBox').css({"left": xVal, "top": yVal}).toggle();

       $('div.black').add('div.yellow').on('click', function(){
           var colorAttr = $(this).attr('value');
           var splitClass = colorHolder.split(" ");
           $('.color-side-a').closest('div').find('.'+splitClass[0] + '.'+splitClass[1]).css({"background": colorAttr}).attr('value', colorAttr);
           $('.colorSelectBox').css({"display": "none"});
       });
    });

    /*Side B Color Picker*/
    $('.color-side-b .number-of-color-field > div').on('click', function(event){
        colorHolder = $(this).attr('class');
        var yVal = (event.pageY - 225) + "px";
        var xVal = (event.pageX / 2) + "px";
        $('.colorSelectBox').css({"left": xVal, "top": yVal}).toggle();

        $('div.black').add('div.yellow').on('click', function(){
            var colorAttr = $(this).attr('value');
            var splitClass = colorHolder.split(" ");
            $('.color-side-b').closest('div').find('.'+splitClass[0] + '.'+splitClass[1]).css({"background": colorAttr}).attr('value', colorAttr);
            $('.colorSelectBox').css({"display": "none"});
        });
    });


    /*Side C Color Picker*/
    $('.color-side-c .number-of-color-field > div').on('click', function(event){
        colorHolder = $(this).attr('class');
        var yVal = (event.pageY - 250) + "px";
        var xVal = (event.pageX / 1.5) + "px";
        $('.colorSelectBox').css({"left": xVal, "top": yVal}).toggle();

        $('div.black').add('div.yellow').on('click', function(){
            var colorAttr = $(this).attr('value');
            var splitClass = colorHolder.split(" ");
            $('.color-side-c').closest('div').find('.'+splitClass[0] + '.'+splitClass[1]).css({"background": colorAttr}).attr('value', colorAttr);
            $('.colorSelectBox').css({"display": "none"});
        });
    });

    /* Open the color selection field after number of colors is selected */
    $('.number-of-colors').on('change', function(){
        var $clicked = $(this);
        var $closestDiv = $clicked.closest("div");

        var chooseColorValue = $clicked.val();

        if(chooseColorValue == 1){
            $closestDiv.find('div.color1').show().css({"width": "inherit", "height": "100%", "background-color": "pink", "border": "1px solid lightgrey", "border-radius": "5px"});
            $closestDiv.find('div.color2').hide();
            $closestDiv.find('div.color3').hide();
        }else if(chooseColorValue == 2){
            $closestDiv.find('div.color1').show().css({"width": "inherit", "height": "50%", "background-color": "pink", "border": "1px solid lightgrey", "border-radius": "5px"});
            $closestDiv.find('div.color2').show().css({"width": "inherit", "height": "50%", "background-color": "pink", "border": "1px solid lightgrey", "border-radius": "5px"});
            $closestDiv.find('div.color3').hide();
        }else if(chooseColorValue == 3){
            $closestDiv.find('div.color1').show().css({"width": "inherit", "height": "33%", "background-color": "pink", "border": "1px solid lightgrey", "border-radius": "5px"});
            $closestDiv.find('div.color2').show().css({"width": "inherit", "height": "33%", "background-color": "pink", "border": "1px solid lightgrey", "border-radius": "5px"});
            $closestDiv.find('div.color3').show().css({"width": "inherit", "height": "33%", "background-color": "pink", "border": "1px solid lightgrey", "border-radius": "5px"});
        }else{
            $closestDiv.find('div.color1').hide();
            $closestDiv.find('div.color2').hide();
            $closestDiv.find('div.color3').hide();
        }
    });

    $('.colorSelectBox').hide();



});