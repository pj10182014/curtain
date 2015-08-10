$(document).ready(function(){

    //var valueTotalA = Number(0);
    //var $dimensionsSideAFootInput = $('.dimensions-side-a .dimension-width .dimension-input-foot');
    //$dimensionsSideAFootInput.focusout(function() {
    //    var value = Number($dimensionsSideAFootInput.val());
    //    if(value == ""){
    //        value = Number(0);
    //    }
    //    return valueTotalA += value;
    //});
    //var $dimensionsSideAInchInput = $('.dimensions-side-a .dimension-width .dimension-input-inch');
    //$dimensionsSideAInchInput.focusout(function() {
    //    var value = Number($dimensionsSideAInchInput.val());
    //    if(value == ""){
    //        value = Number(0);
    //    }
    //    return valueTotalA += value;
    //});


    $('.alertTest').click(function(){
        alertTest('.dimensions-side-a');
    });

    function alertTest(side){
        alert(parseInt($(side + '.dimension-width .dimension-input-foot').val()));

    }


    $('.check-price').on('click', function(){
        /*Side A Calculation*/
        var $sideAFootValueW = parseInt($('.dimensions-side-a .dimension-width .dimension-input-foot').val());
        var $sideAInchValueW = parseInt($('.dimensions-side-a .dimension-width .dimension-input-inch').val());

        if(($sideAFootValueW == "") || (!$.isNumeric($sideAFootValueW))){
            $sideAFootValueW = 0;
        }

        if(($sideAInchValueW == "") || (!$.isNumeric($sideAInchValueW))){
            $sideAInchValueW = 0;
        }else{
            $sideAInchValueW = $sideAInchValueW/12;
        }

        var totalFootAW = $sideAFootValueW + $sideAInchValueW;

        var $sideAFootValueH = parseInt($('.dimensions-side-a .dimension-height .dimension-input-foot').val());
        var $sideAInchValueH = parseInt($('.dimensions-side-a .dimension-height .dimension-input-inch').val());

        if(($sideAFootValueH == "") || (!$.isNumeric($sideAFootValueH))){
            $sideAFootValueH = 0;
        }

        if(($sideAInchValueH == "") || (!$.isNumeric($sideAInchValueH))){
            $sideAInchValueH = 0;
        }else{
            $sideAInchValueH = $sideAInchValueH/12;
        }

        var totalFootAH = $sideAFootValueH + $sideAInchValueH;

        var sideATotal = totalFootAH * totalFootAW * 1.6;

        /*Side B Calculation*/
        var $sideBFootValueW = parseInt($('.dimensions-side-b .dimension-width .dimension-input-foot').val());
        var $sideBInchValueW = parseInt($('.dimensions-side-b .dimension-width .dimension-input-inch').val());

        if(($sideBFootValueW == "") || (!$.isNumeric($sideBFootValueW))){
            $sideBFootValueW = 0;
        }

        if(($sideBInchValueW == "") || (!$.isNumeric($sideBInchValueW))){
            $sideBInchValueW = 0;
        }else{
            $sideBInchValueW = $sideBInchValueW/12;
        }

        var totalFootBW = $sideBFootValueW + $sideBInchValueW;

        var $sideBFootValueH = parseInt($('.dimensions-side-b .dimension-height .dimension-input-foot').val());
        var $sideBInchValueH = parseInt($('.dimensions-side-b .dimension-height .dimension-input-inch').val());

        if(($sideBFootValueH == "") || (!$.isNumeric($sideBFootValueH))){
            $sideBFootValueH = 0;
        }

        if(($sideBInchValueH == "") || (!$.isNumeric($sideBInchValueH))){
            $sideBInchValueH = 0;
        }else{
            $sideBInchValueH = $sideBInchValueH/12;
        }

        var totalFootBH = $sideBFootValueH + $sideBInchValueH;

        var sideBTotal = totalFootBH * totalFootBW * 1.6;

        /*Side C Calculation*/
        var $sideCFootValueW = parseInt($('.dimensions-side-c .dimension-width .dimension-input-foot').val());
        var $sideCInchValueW = parseInt($('.dimensions-side-c .dimension-width .dimension-input-inch').val());

        if(($sideCFootValueW == "") || (!$.isNumeric($sideCFootValueW))){
            $sideCFootValueW = 0;
        }

        if(($sideCInchValueW == "") || (!$.isNumeric($sideCInchValueW))){
            $sideCInchValueW = 0;
        }else{
            $sideCInchValueW = $sideCInchValueW/12;
        }

        var totalFootCW = $sideCFootValueW + $sideCInchValueW;

        var $sideCFootValueH = parseInt($('.dimensions-side-c .dimension-height .dimension-input-foot').val());
        var $sideCInchValueH = parseInt($('.dimensions-side-c .dimension-height .dimension-input-inch').val());

        if(($sideCFootValueH == "") || (!$.isNumeric($sideCFootValueH))){
            $sideCFootValueH = 0;
        }

        if(($sideCInchValueH == "") || (!$.isNumeric($sideCInchValueH))){
            $sideCInchValueH = 0;
        }else{
            $sideCInchValueH = $sideCInchValueH/12;
        }

        var totalFootCH = $sideCFootValueH + $sideCInchValueH;

        var sideCTotal = totalFootCH * totalFootCW * 1.6;

        $('.price').empty();
        $('.price').append(sideATotal+sideBTotal+sideCTotal);

    });

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