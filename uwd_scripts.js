$(document).ready(function(){


    $('.step2-selections input').on('keyup', function(){
        var sideAtotal = singlePrice($('.dimensions-side-a input'));
        var sideBtotal = singlePrice($('.dimensions-side-b input'));
        var sideCtotal = singlePrice($('.dimensions-side-c input'));
        var sideDtotal = singlePrice($('.dimensions-side-d input'));
        var sideABCDtotal = (sideAtotal + sideBtotal + sideCtotal +sideDtotal);
        $('.price').empty().append(sideABCDtotal);
    });

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

    function printColor(color) {
        var text = "You chose... " + color.toHexString();
        $(".label").text(text);
        $('.color1').css({'background-color': color});
    };

    $(".colorPalette").spectrum({
        showPaletteOnly: true,
        showPalette:true,
        hideAfterPaletteSelect:true,
        color: "black",
        change: function(color) {
            printColor(color);
        },
        palette: [
            ["yellow", "blue", "brown", "gray", "green", "white", "orange"]
        ]
    });

    $('input[name=color1], input[name=color2], input[name=color3]').next().hide();
    $('.help-notes').hide();             // hide the notes for help

    /* Open the color selection field after number of colors is selected */
    $('.number-of-colors').on('change', function(){
        var $clicked = $(this);
        var $closestDiv = $clicked.closest("div");

        var value = $clicked.val();

        if(value == 1){
            $closestDiv.find("input[name='color1']").next().show();
            $closestDiv.find('.sp-replacer.sp-light').css({'display': 'block'});
            $closestDiv.find('.sp-preview').css({'width': '85%'});
            $closestDiv.find("input[name='color2'], input[name='color3']").next().hide();
        }else if(value == 2){
            $closestDiv.find("input[name='color1'], input[name='color2']").next().show();
            $closestDiv.find('.sp-replacer.sp-light').css({'display': 'block'});
            $closestDiv.find('.sp-preview').css({'width': '85%'});
            $closestDiv.find("input[name='color3']").next().hide();
        }else if(value == 3){
            $closestDiv.find("input[name='color1'], input[name='color2'], input[name='color3']").next().show();
            $closestDiv.find('.sp-preview').css({'width': '85%'});
            $closestDiv.find('.sp-replacer.sp-light').css({'display': 'block'});
        }else{
            $('input[name=color1], input[name=color2], input[name=color3]').next().hide();
        }
        console.log(value);
    });

    /*Toggles the help-notes div when help is clicked*/
    $( ".help" ).on('click', function(){
        $(this).next('div').slideToggle( "slow" );
    });






});