$(document).ready(function(){
    $('.help-notes').hide();             // hide the notes for help

    /*Toggles the help-notes div when help is clicked*/
    $( ".help" ).on('click', function(){
        $(this).next('div').slideToggle( "slow" );
    });

    /******************************************************/
    /****** Enable / Disabling Sides with Its inputs ******/
    /******************************************************/
    /*
    * Function to disable side with it's inputs and selections
    * @param side           the side to be disabled
    *                       '.two-sided'
    * @param dimension      the dimension div to be disabled
    *                       '.dimensions-side-b
    * @param color          the color div to be disabled
    *                       '.color-side-b'
    * @param mount          the mount div to be disabled
    *                       '.mount-side-b'
    */
    function disableSides(side,dimension,color,mount){
        curtainFadeOutAndDisabled(side);

        $(dimension).css({"opacity":".3"});
        var dimensionInput = (dimension + " input");
        $(dimensionInput).attr('disabled', true);

        $(color).css({"opacity":".3"});
        var colorSelect = (color + " select");
        $(colorSelect).attr('disabled', true);

        $(mount).css({"opacity":".3"});
        var mountSelect = (mount + " select");
        $(mountSelect).attr('disabled', true);

        return false;
    }
    /*
    * Function to enable side with it's inputs and selections
    * @param side           the side to be disabled
    *                       '.two-sided'
    * @param dimension      the dimension div to be disabled
    *                       '.dimensions-side-b
    * @param color          the color div to be disabled
    *                       '.color-side-b'
    * @param mount          the mount div to be disabled
    *                       '.mount-side-b'
    */
    function enableSides(side,dimension,color,mount){
        $(side).css({"opacity":"1"});
        $(side).removeAttr('disabled');

        $(dimension).css({"opacity":"1"});
        var dimensionInput = (dimension + " input");
        $(dimensionInput).removeAttr('disabled');

        $(color).css({"opacity":"1"});
        var colorSelect = (color + " select");
        $(colorSelect).removeAttr('disabled');

        $(mount).css({"opacity":"1"});
        var mountSelect = (mount + " select");
        $(mountSelect).removeAttr('disabled');
        return true;
    }
    var singleSide     = '.single-side';
    var dimensionSideA  = '.dimensions-side-a';
    var colorSideA      = '.color-side-a';
    var mountSideA      = '.mount-side-a';

    var twoSides        = '.two-sided';
    var dimensionSideB  = '.dimensions-side-b';
    var colorSideB      = '.color-side-b';
    var mountSideB      = '.mount-side-b';

    var threeSides      = '.three-sided';
    var dimensionSideC  = '.dimensions-side-c';
    var colorSideC      = '.color-side-c';
    var mountSideC      = '.mount-side-c';

    var fourSided       = '.four-sided';
    var dimensionSideD  = '.dimensions-side-d';
    var colorSideD      = '.color-side-d';
    var mountSideD      = '.mount-side-d';

    /*Function to make the curtain side selection opacity lower than usual and disable attribute to true*/
    function curtainFadeOutAndDisabled(side){
        $(side).css({"opacity":".3"});
        $(side).attr('disabled', true);
    }

    //Fading curtain single, two and three so on start page will start with 4 sides enabled
    curtainFadeOutAndDisabled(singleSide);
    curtainFadeOutAndDisabled(twoSides);
    curtainFadeOutAndDisabled(threeSides);

    //Start making the clicks to work when selecting different side of curtains
    $(singleSide).on('click', function(){
        var attrDisabled = $(this).attr('disabled');

        if(attrDisabled == 'disabled'){
            $(singleSide).css({"opacity":"1"});
            $(singleSide).removeAttr('disabled');
            // disables all two, three and four sides
            disableSides(twoSides,dimensionSideB,colorSideB,mountSideB);
            disableSides(threeSides,dimensionSideC,colorSideC,mountSideC);
            disableSides(fourSided,dimensionSideD,colorSideD,mountSideD);
        }
    });
    $(twoSides).on('click', function(){
        var attrDisabled = $(this).attr('disabled');

        if(attrDisabled == 'disabled'){
            //enable two sides
            enableSides(twoSides,dimensionSideB,colorSideB,mountSideB);
            //only fade out singleSide but the column input is available
            curtainFadeOutAndDisabled(singleSide);
            // disables both three and four sides
            disableSides(threeSides,dimensionSideC,colorSideC,mountSideC);
            disableSides(fourSided,dimensionSideD,colorSideD,mountSideD);
        }
    });
    $(threeSides).on('click', function(){
        var attrDisabled = $(this).attr('disabled');

        if(attrDisabled == 'disabled'){
            //enable both two and three sides
            enableSides(twoSides,dimensionSideB,colorSideB,mountSideB);
            enableSides(threeSides,dimensionSideC,colorSideC,mountSideC);
            //only fade out single and two but the column input is available
            curtainFadeOutAndDisabled(singleSide);
            curtainFadeOutAndDisabled(twoSides);
            // disables four sides
            disableSides(fourSided,dimensionSideD,colorSideD,mountSideD);
        }
    });
    $(fourSided).on('click', function(){
        var attrDisabled = $(this).attr('disabled');

        if(attrDisabled == 'disabled'){
            //enable all two / three and four sides
            enableSides(twoSides,dimensionSideB,colorSideB,mountSideB);
            enableSides(threeSides,dimensionSideC,colorSideC,mountSideC);
            enableSides(fourSided,dimensionSideD,colorSideD,mountSideD);
            //fade out single, two and three sides but input is still available
            curtainFadeOutAndDisabled(singleSide);
            curtainFadeOutAndDisabled(twoSides);
            curtainFadeOutAndDisabled(threeSides);
        }
    });
    //Done with making the curtain selections

    /*****************************/
    /********SINGLE DISABLE*******/
    /*****************************/
    //$(twoSides).on('click', function(){
    //    var disabledAttr = $(this).attr('disabled');
    //
    //    if((typeof(disabledAttr) !== typeof(undefined)) && (disabledAttr !== false)){
    //        if(disabledAttr == 'disabled'){
    //            enableSides(twoSides,dimensionSideB,colorSideB,mountSideB);
    //        }
    //    }else{
    //        disableSides(twoSides,dimensionSideB,colorSideB,mountSideB);
    //    }
    //});
    /*****************************/
    /*****END SINGLE DISABLE******/
    /*****************************/


    /******************************************************************/
    /****Foot /Inches input Section + Product Summary price output*****/
    /******************************************************************/
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
                var $keyUp = $(this);
                if(($keyUp.val() == "") || (isNaN($keyUp.val()))
                || ($keyUp.val() > 20)){
                    values.push(parseInt(0));
                }else {
                    values.push(parseInt($(this).val()));
                }
            });

            values[1] = values[1]/12;
            values[3] = values[3]/12;
            return ((values[0]+values[1])*(values[2]+values[3])) * 1.6;
    }


    /*Validation for only one input*/
    //var inputAWF = $("input[name='a-width-foot']");
    //inputAWF.on('keyup', function(){
    //   if(inputAWF.val() > 20){
    //       inputAWF.css({"border":"1px solid red"});
    //   }else{
    //       inputAWF.css({"border":"none"});
    //   }
    //});

    /*Function to validate all width height inch foot input fields*/
    function widthHeightInputValidation(inputWH){
        inputWH.on('keyup', function(){
            if(inputWH.val() > 20){
                inputWH.css({"border":"1px solid red"});
            }else{
                inputWH.css({"border":"none"});
            }
        });
    }
    widthHeightInputValidation($("input[name='a-width-foot']"));
    widthHeightInputValidation($("input[name='a-width-inch']"));
    widthHeightInputValidation($("input[name='a-height-foot']"));
    widthHeightInputValidation($("input[name='a-height-inch']"));

    widthHeightInputValidation($("input[name='b-width-foot']"));
    widthHeightInputValidation($("input[name='b-width-inch']"));
    widthHeightInputValidation($("input[name='b-height-foot']"));
    widthHeightInputValidation($("input[name='b-height-inch']"));

    widthHeightInputValidation($("input[name='c-width-foot']"));
    widthHeightInputValidation($("input[name='c-width-inch']"));
    widthHeightInputValidation($("input[name='c-height-foot']"));
    widthHeightInputValidation($("input[name='c-height-inch']"));

    widthHeightInputValidation($("input[name='d-width-foot']"));
    widthHeightInputValidation($("input[name='d-width-inch']"));
    widthHeightInputValidation($("input[name='d-height-foot']"));
    widthHeightInputValidation($("input[name='d-height-inch']"));



    /***************************/
    /****Pick Color Section*****/
    /***************************/
    $('.colorSelectBox').hide();  //Hides the picker box

    $('div.color1 div.color2 div.color3').hide();  //hide number of colors until a value is selected
    var colorHolder = null; //used to store the location where color is picked

    /* Function checks which side's div is clicked and pop put the colorSelectBox with the position of the div popping out */
    function colorFieldPicker(onClickSide, xValInput, yValInput,side){
        onClickSide.on('click', function(event){
            colorHolder = $(this).attr('class');
            var yVal = (event.pageY - yValInput) + "px";
            var xVal = (event.pageX / xValInput) + "px";
            $('.colorSelectBox').css({"left": xVal, "top": yVal}).toggle();
            $(this).closest('div').empty();
            colorPickerOnClick(side);
        });
    }
    /* Function which then determine what color is clicked and return the color to the div selected as the div's background color */
    function colorPickerOnClick(side){
        $('div.black')
            .add('div.yellow')
            .add('div.pink')
            .add('div.red')
            .on('click', function(){
            var colorAttr = $(this).attr('value');
            var splitClass = colorHolder.split(" ");
            side.closest('div').find('.'+splitClass[0] + '.'+splitClass[1]).css({"background": colorAttr}).attr('value', colorAttr);
            $('.colorSelectBox').css({"display": "none"});
        });
    }

    /* Enabling the function to choose colors */
    colorFieldPicker($('.color-side-a .number-of-color-field > div'), 3, 250, $('.color-side-a'));
    colorFieldPicker($('.color-side-b .number-of-color-field > div'), 2, 225, $('.color-side-b'));
    colorFieldPicker($('.color-side-c .number-of-color-field > div'), 1.5, 250, $('.color-side-c'));
    colorFieldPicker($('.color-side-d .number-of-color-field > div'), 1.5, 235, $('.color-side-d'));

    /* Open the color selection field after number of colors is selected */
    $('.number-of-colors').on('change', function(){
        var $clicked = $(this);
        var $closestDiv = $clicked.closest("div");

        var chooseColorValue = $clicked.val();

        if(chooseColorValue == 1){
            $closestDiv.find('div.color1').show().css({"width": "inherit", "height": "100%", "background-color": "pink", "border": "1px solid lightgrey", "border-radius": "5px"}).empty().append('Click To Choose Colors');
            $closestDiv.find('div.color2').hide();
            $closestDiv.find('div.color3').hide();
        }else if(chooseColorValue == 2){
            $closestDiv.find('div.color1').show().css({"width": "inherit", "height": "50%", "background-color": "pink", "border": "1px solid lightgrey", "border-radius": "5px"}).empty().append('Click To Choose Colors');
            $closestDiv.find('div.color2').show().css({"width": "inherit", "height": "50%", "background-color": "pink", "border": "1px solid lightgrey", "border-radius": "5px"}).empty().append('Click To Choose Colors');
            $closestDiv.find('div.color3').hide();
        }else if(chooseColorValue == 3){
            $closestDiv.find('div.color1').show().css({"width": "inherit", "height": "33%", "background-color": "pink", "border": "1px solid lightgrey", "border-radius": "5px"}).empty().append('Click To Choose Colors');
            $closestDiv.find('div.color2').show().css({"width": "inherit", "height": "33%", "background-color": "pink", "border": "1px solid lightgrey", "border-radius": "5px"}).empty().append('Click To Choose Colors');
            $closestDiv.find('div.color3').show().css({"width": "inherit", "height": "33%", "background-color": "pink", "border": "1px solid lightgrey", "border-radius": "5px"}).empty().append('Click To Choose Colors');
        }else{
            $closestDiv.find('div.color1').hide();
            $closestDiv.find('div.color2').hide();
            $closestDiv.find('div.color3').hide();
        }
    });

    $('.add-to-cart').on('click', function(){
        var sideA_color1_val = $(".color-side-a .number-of-color-field div[name='color1']").attr('value');
        $.post('toCart.php',{ sideA_Color1_val: sideA_color1_val })
        .done(function() {
                window.location.href = "cartPage.php";
        })
    })

});