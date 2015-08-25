$(document).ready(function(){
    var resetValueToZero = 0;
    var maxWidthHeight = 20;
    var minWidthHeight = 0;
    var defaultColorPickerField1 = "pink";
    var defaultColorPickerField2 = "cyan";
    var defaultColorPickerField3 = "yellow";
    var widthHeightProductMultiplier = 1.65;

    var priceSummary = mountABCDtotal + sideABCDtotal;

    $('.help-notes').hide();             // hide the notes for help
    $('.cart-info').hide();

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
        // Removes the checkMark class
        delCheckMarkForCurtainSelection(side);
    }

    /*Function to add class to certain side section's p element which will show a blue checkmark at the end of p element*/
    function addCheckMarkForCurtainSelection(side){
        $(side).children().next().addClass('checkMark');
    }

    /*Function to remove the class when side is not selected this function is used inside curtainFadeOutAndDisabled function*/
    function delCheckMarkForCurtainSelection(side){
        $(side).children().next().removeClass('checkMark');
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
            // Adds the checkMark class
            addCheckMarkForCurtainSelection(singleSide);
            // Only calculate the input values for side a then append it
            sideABCDtotal = (sideAtotal).toFixed(2);
            mountABCDtotal = (mountSideAPrice).toFixed(2);
            appendPriceSummary();
            // Remove the input values for side b, c, d and mount b, c, d
            emptyInputValue($('.dimensions-side-b input'), $('.mount-b'), $('.color-b'));
            emptyInputValue($('.dimensions-side-c input'), $('.mount-c'), $('.color-c'));
            emptyInputValue($('.dimensions-side-d input'), $('.mount-d'), $('.color-d'));
            // Clear the total for side b, c and d
            sideBtotal = resetValueToZero;
            sideCtotal = resetValueToZero;
            sideDtotal = resetValueToZero;
            mountSideBPrice = resetValueToZero;
            mountSideCPrice = resetValueToZero;
            mountSideDPrice = resetValueToZero;
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
            // Adds the checkMark class
            addCheckMarkForCurtainSelection(twoSides);
            // Only calculate the input values for side a and b then append it
            sideABCDtotal = (sideAtotal + sideBtotal).toFixed(2);
            mountABCDtotal = (mountSideAPrice + mountSideBPrice).toFixed(2);
            appendPriceSummary();
            // Remove the input values for side c, d and mount c, d
            emptyInputValue($('.dimensions-side-c input'), $('.mount-c'), $('.color-c'));
            emptyInputValue($('.dimensions-side-d input'), $('.mount-d'), $('.color-d'));
            // Clear the total for side c, d and mount c, d
            sideCtotal = resetValueToZero;
            sideDtotal = resetValueToZero;
            mountSideCPrice = resetValueToZero;
            mountSideDPrice = resetValueToZero;
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
            // Adds the checkMark class
            addCheckMarkForCurtainSelection(threeSides);
            // Only calculate the input values for side a, b, c and append it
            sideABCDtotal -= sideDtotal.toFixed(2);
            mountABCDtotal -= mountSideDPrice.toFixed(2);
            appendPriceSummary();
            // Removes the input values for side d
            emptyInputValue($('.dimensions-side-d input'), $('.mount-d'), $('.color-d'));
            // Clear the total for side d and mount d
            sideDtotal = resetValueToZero;
            mountSideDPrice = resetValueToZero;
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
            // Adds the checkMark class
            addCheckMarkForCurtainSelection(fourSided);
        }
    });
    //Done with making the curtain selections

    /******************************************************************/
    /****Foot /Inches input Section + Product Summary price output*****/
    /******************************************************************/

    /*Global Variables for the totals*/
    var sideABCDtotal   = resetValueToZero;
    var sideAtotal      = resetValueToZero;
    var sideBtotal      = resetValueToZero;
    var sideCtotal      = resetValueToZero;
    var sideDtotal      = resetValueToZero;

    /*Uses singlePrice() here to get price for all 4 sides when input keyup*/
    $('.step2-selections input').on('keyup', function(){
        sideAtotal = singlePrice($('.dimensions-side-a input'));
        sideBtotal = singlePrice($('.dimensions-side-b input'));
        sideCtotal = singlePrice($('.dimensions-side-c input'));
        sideDtotal = singlePrice($('.dimensions-side-d input'));
        sideABCDtotal = (sideAtotal + sideBtotal + sideCtotal +sideDtotal);

        appendPriceSummary();
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
                || ($keyUp.val() > 20) || ($keyUp.val() < 0)){
                    values.push(parseInt(0));
                }else {
                    values.push(parseInt($(this).val()));
                }
            });

            values[1] = values[1]/12;
            values[3] = values[3]/12;
            return ((values[0]+values[1])*(values[2]+values[3])) * widthHeightProductMultiplier;
    }

    /*Function to empty all the value input of one side*/
    function emptyInputValue(sideInput, mountInput, numberOfColorInput){
        sideInput.each(function(){
            $(this).val('');
            $(this).css({"border": "none"});
        });

        mountInput.val('');
        numberOfColorInput.val('');
        numberOfColorInput.closest('div').find('.color1').attr({"data-semi": "false", "data-coated": "false", "value": "None Chosen"}).hide();
        numberOfColorInput.closest('div').find('.color2').attr({"data-semi": "false", "data-coated": "false", "value": "None Chosen"}).hide();
        numberOfColorInput.closest('div').find('.color3').attr({"data-semi": "false", "data-coated": "false", "value": "None Chosen"}).hide();
    }

    /*Function to validate all width height inch foot input fields*/
    function widthHeightInputValidation(inputWH){
        inputWH.on('keyup', function(){
            if((inputWH.val() > maxWidthHeight) || (inputWH.val() < minWidthHeight) || (!($.isNumeric(inputWH.val())))){
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
            //store the class of the colorHolder to a global variable
            colorHolder = $(this).attr('class');
            //x and y value of position where the color picker should pop up / toggle
            var yVal = (event.pageY - yValInput) + "px";
            var xVal = (event.pageX / xValInput) + "px";
            $('.colorSelectBox').css({"left": xVal, "top": yVal}).toggle();
            //empty the field where it says 'Click to choose colors'
            $(this).closest('div').empty();
            colorPickerOnClick(side);
        });
    }
    /* Function which then determine what color is clicked and return the color to the div selected as the div's background color */
    function colorPickerOnClick(side){
        //semi colors on click
        $('div.black')
            .add('div.yellow')
            .add('div.pink')
            .on('click', function(){
            var colorAttr = $(this).attr('value');
            var splitClass = colorHolder.split(" ");
            side.closest('div').find('.'+splitClass[0] + '.'+splitClass[1])
                .css({"background": colorAttr})
                .attr({"value": colorAttr, "data-semi": true, "data-coated": false});
            $('.colorSelectBox').css({"display": "none"});
        });

        //coated color on click
        $('div.red')
            .on('click', function(){
                var colorAttr = $(this).attr('value');
                var splitClass = colorHolder.split(" ");
                side.closest('div').find('.'+splitClass[0] + '.'+splitClass[1])
                    .css({"background": colorAttr})
                    .attr({"value": colorAttr, "data-semi": false, "data-coated": true});
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
            $closestDiv.find('div.color1').show().css({"width": "inherit", "height": "100%", "background-color": defaultColorPickerField1, "border-radius": "5px"}).attr({"value": defaultColorPickerField1, "data-semi": "true", "data-coated": "false"}).empty().append("<div class='choose-color-message'>Click To Choose Colors</div>");
            $closestDiv.find('div.color2').attr({"data-semi": "false", "data-coated": "false", "value": "None Chosen"}).hide();
            $closestDiv.find('div.color3').attr({"data-semi": "false", "data-coated": "false", "value": "None Chosen"}).hide();
        }else if(chooseColorValue == 2){
            $closestDiv.find('div.color1').show().css({"width": "inherit", "height": "48%", "background-color": defaultColorPickerField2, "border-radius": "5px"}).attr({"value": defaultColorPickerField2, "data-semi": "true", "data-coated": "false"}).empty().append("<div class='choose-color-message'>Click To Choose Colors</div>");
            $closestDiv.find('div.color2').show().css({"width": "inherit", "height": "48%", "background-color": defaultColorPickerField3, "border-radius": "5px", "margin-top": "5px"}).attr({"value": defaultColorPickerField3, "data-semi": "true"}).empty().append("<div class='choose-color-message'>Click To Choose Colors</div>");
            $closestDiv.find('div.color3').attr({"data-semi": "false", "data-coated": "false", "value": "None Chosen"}).hide();
        }else if(chooseColorValue == 3){
            $closestDiv.find('div.color1').show().css({"width": "inherit", "height": "30%", "background-color": defaultColorPickerField1, "border-radius": "5px"}).attr({"value": defaultColorPickerField1, "data-semi": "true", "data-coated": "false"}).empty().append("<div class='choose-color-message'>Click To Choose Colors</div>");
            $closestDiv.find('div.color2').show().css({"width": "inherit", "height": "30%", "background-color": defaultColorPickerField2, "border-radius": "5px", "margin": "5px 0"}).attr({"value": defaultColorPickerField2, "data-semi": "true", "data-coated": "false"}).empty().append("<div class='choose-color-message'>Click To Choose Colors</div>");
            $closestDiv.find('div.color3').show().css({"width": "inherit", "height": "30%", "background-color": defaultColorPickerField3, "border-radius": "5px"}).attr({"value": defaultColorPickerField3, "data-semi": "true", "data-coated": "false"}).empty().append("<div class='choose-color-message'>Click To Choose Colors</div>");
        }else{
            $closestDiv.find('div.color1').attr({"data-semi": "false", "data-coated": "false", "value": "None Chosen"}).hide();
            $closestDiv.find('div.color2').attr({"data-semi": "false", "data-coated": "false", "value": "None Chosen"}).hide();
            $closestDiv.find('div.color3').attr({"data-semi": "false", "data-coated": "false", "value": "None Chosen"}).hide();
        }
    });

    /*************************************/
    /**** Mounting Select Calculation ****/
    /*************************************/

    /*Set default values of each mount sides and total is 0 too*/
    var mountSideAPrice = resetValueToZero;
    var mountSideBPrice = resetValueToZero;
    var mountSideCPrice = resetValueToZero;
    var mountSideDPrice = resetValueToZero;
    var mountABCDtotal = resetValueToZero;

    //putting the name of mount in array and price will correspond to the same array index
    var diffMountNames = ['', 'wm', 'trm', 'cm', 'clm'];
    var diffMountPricing = [0,20,33,21,17];

    $('.select-mounts').on('change', function(){
        var $clicked = $(this);
        var valueSelected = $clicked.val();     //check the value being selected
        var priceIndex = 0;                     //use to get the index of the price
        var selectedMountPrice = 0;             //price set to 0 initially

        //in the array if the value selected matches to the one in the array saves the index to priceIndex
        $.each(diffMountNames, function(index, value){
            if(valueSelected == value){
                priceIndex = index;
            }
        });

        //uses the priceIndex found above and loop through the array to find the corresponding index which will the the price of the product
        $.each(diffMountPricing, function(index, value){
           if(priceIndex == index){
               selectedMountPrice = value;
           }
        });

        //find the class being clicked and split it to check exactly with side is clicked
        //then use the class to decide which side variable is used to store the price of the mount selected
        var myClass = $clicked.attr('class');
        var splitClass = myClass.split(" ");
        var sc1 = splitClass[1];

        if(sc1 == 'mount-a'){
            mountSideAPrice = selectedMountPrice;
        }else if(sc1 == 'mount-b'){
            mountSideBPrice = selectedMountPrice;
        }else if(sc1 == 'mount-c'){
            mountSideCPrice = selectedMountPrice;
        }else if(sc1 == 'mount-d'){
            mountSideDPrice = selectedMountPrice;
        }

        //always calculate the total of all mount sides
        mountABCDtotal = (mountSideAPrice + mountSideBPrice + mountSideCPrice + mountSideDPrice);

        //price of the mount plus price of the sides gives the price summary
        //priceSummary = (Number(sideABCDtotal) + mountABCDtotal).toFixed(2);
        //$('.price').empty().append("$" + priceSummary);

        appendPriceSummary();
        console.log(mountABCDtotal);
    });

    /*Function to append price summary into the price summary div*/
    function appendPriceSummary(){
        priceSummary = (Number(sideABCDtotal) + Number(mountABCDtotal)).toFixed(2);
        $('.price').empty().append("$" + priceSummary);
    }




    /**********************************/
    /********** Cart Summary **********/
    /**********************************/
    $('.add-to-cart').on('click', function(e){
        e.preventDefault();
        //var sideA_color1_val = $(".color-side-a .number-of-color-field div[name='color1']").attr('value');
        //console.log(sideA_color1_val);
        //$.post('toCart.php',{ sideA_Color1_val: sideA_color1_val })
        ////window.location.href='toCart.php';
        //.done(function() {
        //        //window.location.href = "cartPage.php";
        //    window.location.href='toCart.php';
        //})

        var sideA_color1_val = $(".color-side-a .number-of-color-field div[name='color1']").attr('value');

        var getSideText = null;  //Get the text of the side chosen e.g. single curtain, 2-sided station

        /*Get the text of how many side chosen*/
        $('.chooseSides p').each(function(){
           var sideChosen = $(this).hasClass('checkMark');
            if(sideChosen){
                getSideText = $(this).text();
            }
        });

        /*Gets all the inputs for one side*/
        function getInputsForOneSide(side){
            var inputs = [];
            side.each(function(){
                var value = $(this).val();
                if((value == '') || (isNaN(value)) ||
                    (value > maxWidthHeight) || (value < minWidthHeight)){
                    value = resetValueToZero;
                }
                inputs.push(value);
            });
            return inputs;
        }

        /*Get the inputs of each side and store them into an array variable*/
        var inputsA = getInputsForOneSide($('.dimensions-side-a input'));
        var inputsB = getInputsForOneSide($('.dimensions-side-b input'));
        var inputsC = getInputsForOneSide($('.dimensions-side-c input'));
        var inputsD = getInputsForOneSide($('.dimensions-side-d input'));

        //Arrays to check if color chosen is semi or coated
        var semiArrayA = [];
        var coatedArrayA = [];
        var semiArrayB = [];
        var coatedArrayB = [];
        var semiArrayC = [];
        var coatedArrayC = [];
        var semiArrayD = [];
        var coatedArrayD = [];
        //Get the value of the background color
        var bgArrayA = [];
        var bgArrayB = [];
        var bgArrayC = [];
        var bgArrayD = [];

        /*Checks the value for attribute of data-semi, data-coated and value
         * if semi and coated is undefined, the value will change to false
         * as for the bg, if undefined that means the user didn't choose the color*/
        function getColorFieldValues(side,pushSemi,pushCoated,pushBg){
            side.each(function(){
                var semi = $(this).attr('data-semi');
                var coated = $(this).attr('data-coated');
                var bg = $(this).attr('value');

                if(typeof(semi) == 'undefined'){
                    semi = 'false';
                }
                if(typeof(coated) == 'undefined'){
                    coated = 'false';
                }
                if(typeof(bg) == 'undefined'){
                    bg = 'None Chosen';
                }

                pushSemi.push(semi);
                pushCoated.push(coated);
                pushBg.push(bg);
            });
        }

        /*Get the value of the color field selected*/
        getColorFieldValues($('.number-of-color-field .sideA'),semiArrayA, coatedArrayA, bgArrayA);
        getColorFieldValues($('.number-of-color-field .sideB'),semiArrayB, coatedArrayB, bgArrayB);
        getColorFieldValues($('.number-of-color-field .sideC'),semiArrayC, coatedArrayC, bgArrayC);
        getColorFieldValues($('.number-of-color-field .sideD'),semiArrayD, coatedArrayD, bgArrayD);

        var mountArray = [];        //array to store the mount value selected

        /*Pushes the value of the mount stored into the mountArray array variable*/
        $('.select-mounts').each(function(){
            var myClass = $(this).attr('class');
            var splitClass = myClass.split(" ");
            var mountSideClass = ("."+splitClass[1]);
            //if($(mountSideClass).val() == ''){
            //    $(mountSideClass).val("none");
            //}
            mountArray.push($(mountSideClass).val());
        });

        $.ajax({
            method: 'post',
            url: "ajaxCart.php",
            data: {getSideText: getSideText,
                    inputsA: inputsA,
                    inputsB: inputsB,
                    inputsC: inputsC,
                    inputsD: inputsD,
                    bgArrayA: bgArrayA,
                    semiArrayA: semiArrayA,
                    coatedArrayA: coatedArrayA,
                    bgArrayB: bgArrayB,
                    bgArrayC: bgArrayC,
                    bgArrayD: bgArrayD,
                    mountArray: mountArray},
            dataType: 'json',
            success: function (data) {
                $('.interior_full_pane').empty();
                $('.cart-info').show();
                //how many sides chosen
                $('.cart-info .sides span').append(data['sideChosen']);

                /*Function to append all the inputs for the sides' width and height*/
                function appendSideInputs(sideInputW, sideInputH,sideInputs){
                    //width height for inputs
                    sideInputW.append(sideInputs[0] + "<span class='dimension-symbol'>'</span>" + sideInputs[1] + "<span class='dimension-symbol'>\"</span>");
                    sideInputH.append(sideInputs[2] + "<span class='dimension-symbol'>'</span>" + sideInputs[3] + "<span class='dimension-symbol'>\"</span>");
                }

                /*Append all 4 sides' input even if empty*/
                appendSideInputs($('.cart-info .inputA .w'),$('.cart-info .inputA .h'),data['inputsA']);
                appendSideInputs($('.cart-info .inputB .w'),$('.cart-info .inputB .h'),data['inputsB']);
                appendSideInputs($('.cart-info .inputC .w'),$('.cart-info .inputC .h'),data['inputsC']);
                appendSideInputs($('.cart-info .inputD .w'),$('.cart-info .inputD .h'),data['inputsD']);

                /*Function to append the color values for the sides*/
                function appendSideColors(side,appendData){
                    side.each(function(index){
                        var myColorClass = $(this).attr('class');
                        $("." + myColorClass).append(appendData[index]);

                    });
                }

                /*Append all 4 sides' color value even if empty*/
                appendSideColors($('.cart-info .colorA div'),data['bgColorsA']);
                appendSideColors($('.cart-info .colorB div'),data['bgColorsB']);
                appendSideColors($('.cart-info .colorC div'),data['bgColorsC']);
                appendSideColors($('.cart-info .colorD div'),data['bgColorsD']);

                //Append all mount chosen even if empty
                $('.cart-info .mount-selected').each(function(index){
                    $(this).children().append(data['mountValues'][index]);
                });
            }
        });// end ajax

        //only allowed the user to click the button once
        $(this).unbind('click');
        //reset all the field for input and select to empty string so when restart is clicked the inputs will be empty
        $('body input').val('');
        $('body select').val('');
    });// end cart on click

    $('.btn-restart').on('click', function(){
        location.reload();
    })
});