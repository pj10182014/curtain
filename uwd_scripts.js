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
        var sideABCDtotal = (sideAtotal + sideBtotal + sideCtotal +sideDtotal);
        $('.price').empty().append(sideABCDtotal);
    });

    /*Function to gets the price for single Side*/
    function singlePrice(side){
            var values = [];
            side.each(function() {
                if(($(this).val() == "") || (isNaN($(this).val()))){
                    values.push(parseInt(0));
                }else {
                    values.push(parseInt($(this).val()));
                }
            });
            values[1] = values[1]/12;
            values[3] = values[3]/12;
            var total = ((values[0]+values[1])*(values[2]+values[3])) * 1.6;
            return total;
    }

    $('div.color1 div.color2 div.color3').hide();

    /* Open the color selection field after number of colors is selected */
    $('.number-of-colors').on('change', function(){
        var $clicked = $(this);
        var $closestDiv = $clicked.closest("div");

        var value = $clicked.val();

        if(value == 1){
            $closestDiv.find('div.color1').show().css({"width": "inherit", "height": "100%", "background-color": "pink", "border": "1px solid lightgrey", "border-radius": "5px"});
            $closestDiv.find('div.color2').hide();
            $closestDiv.find('div.color3').hide();
        }else if(value == 2){
            $closestDiv.find('div.color1').show().css({"width": "inherit", "height": "50%", "background-color": "pink", "border": "1px solid lightgrey", "border-radius": "5px"});
            $closestDiv.find('div.color2').show().css({"width": "inherit", "height": "50%", "background-color": "pink", "border": "1px solid lightgrey", "border-radius": "5px"});
            $closestDiv.find('div.color3').hide();
        }else if(value == 3){
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