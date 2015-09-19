$(document).ready(function(){
    var resetValueToZero = 0;
    var maxWidthHeight = 20;
    var minWidthHeight = 0;
    var defaultColorPickerField1 = "white";
    var defaultColorPickerField2 = "white";
    var defaultColorPickerField3 = "white";
    var widthHeightProductMultiplier = 1.65;
    var mountPriceMultiplier = 4.5;

    var priceSummary = mountABCDtotal + sideABCDtotal;

    $('.help-notes').hide();             // hide the notes for help
    $('.cart-info').hide();

    /*Toggles the help-notes div when help is clicked*/
    $( ".help" ).on('click', function(){
        $(this).next('div').slideToggle( "slow" );
    });

    /*Makes the colorSelect hide when mouse clicked other places*/
    $(document).mouseup(function (e) {
        var container = $(".colorSelectBox");

        if (!container.is(e.target) && container.has(e.target).length === 0){
            container.hide();
        }
    });

    //makes the product summary won't go pass the footer
    var doc = $(document);
    doc.scroll(function () {
        // make sure to wrap yours entire footer in some css selector
        var footer = $('#wholeFooter');
        var p = $('#product-fixed');
        var s = $('#product-summary-position');

        var top = doc.scrollTop() + s.offset().top + p.height() + 20;
        var footerTop = footer.offset().top;

        var offset = footerTop - top;

        if (offset < 0) {
            p.css({'margin-top': '' + offset + 'px'});
        } else {
            p.css({'margin-top': 0});
        }
    });

    /*Checking, storing, and returning different values for different functions*/
    //used in getOnlyWidthInput(), singlePrice(), getInputsForOneSide() and getHeightInInches
    function storeInputValues(sideInput, action){
        var values = [];
        sideInput.each(function(){
            var $thisValue = $(this).val();
            if(($thisValue == "") || (isNaN($thisValue))
                || ($thisValue > maxWidthHeight) || ($thisValue < minWidthHeight)){
                values.push(parseInt(resetValueToZero));
            }else {
                values.push(parseInt($thisValue));
            }
        });
        values[1] = values[1]/12;
        values[3] = values[3]/12;
        switch (action){
            case ('getWidthInput'):
                return values[0] + values[1];
                break;
            case ('getSinglePrice'):
                return ((values[0]+values[1])*(values[2]+values[3])) * widthHeightProductMultiplier;
                break;
            case ('storeInputs'):
                values[1] = values[1]*12;
                values[3] = values[3]*12;
                return values;
                break;
            case ('getHeightInInch'):
                values[2] = values[2]*12;
                values[3] = values[3]*12;
                return values[2] + values[3];
                break;
        }

    }
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
            emptyInputValue($sideBinput, $('.mount-b'), $('.color-b'));
            emptyInputValue($sideCinput, $('.mount-c'), $('.color-c'));
            emptyInputValue($sideDinput, $('.mount-d'), $('.color-d'));
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
            emptyInputValue($sideCinput, $('.mount-c'), $('.color-c'));
            emptyInputValue($sideDinput, $('.mount-d'), $('.color-d'));
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
            emptyInputValue($sideDinput, $('.mount-d'), $('.color-d'));
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

    var $sideAinput = $('.dimensions-side-a input');
    var $sideBinput = $('.dimensions-side-b input');
    var $sideCinput = $('.dimensions-side-c input');
    var $sideDinput = $('.dimensions-side-d input');

    /*Uses singlePrice() here to get price for all 4 sides when input keyup*/
    $('.step2-selections input').on('keyup', function(){
        sideAtotal = singlePrice($sideAinput);
        sideBtotal = singlePrice($sideBinput);
        sideCtotal = singlePrice($sideCinput);
        sideDtotal = singlePrice($sideDinput);
        sideABCDtotal = (sideAtotal + sideBtotal + sideCtotal +sideDtotal);

        var sideAWidthFT = getOnlyWidthInput($sideAinput);
        var sideBWidthFT = getOnlyWidthInput($sideBinput);
        var sideCWidthFT = getOnlyWidthInput($sideCinput);
        var sideDWidthFT = getOnlyWidthInput($sideDinput);

        $('.select-mounts').each(function(){
           var $this = $(this);
           var value = $this.val();
            if(value != ''){
                var myClass = $this.attr('class');
                var splitClass = myClass.split(' ');
                var sc1 = splitClass[1];

                switch(sc1){
                    case 'mount-a':
                        mountABCDtotal -= mountSideAPrice;
                        mountSideAPrice = sideAWidthFT * mountPriceMultiplier;
                        mountABCDtotal += mountSideAPrice;
                        break;
                    case 'mount-b':
                        mountABCDtotal -= mountSideBPrice;
                        mountSideBPrice = sideBWidthFT * mountPriceMultiplier;
                        mountABCDtotal += mountSideBPrice;
                        break;
                    case 'mount-c':
                        mountABCDtotal -= mountSideCPrice;
                        mountSideCPrice = sideCWidthFT * mountPriceMultiplier;
                        mountABCDtotal += mountSideCPrice;
                        break;
                    case 'mount-d':
                        mountABCDtotal -= mountSideDPrice;
                        mountSideDPrice = sideDWidthFT * mountPriceMultiplier;
                        mountABCDtotal += mountSideDPrice;
                        break;
                }
            }
        });

        appendPriceSummary();
    });
    /*Function to gets the price for single Side*/
    //Each side has 4 values
    //Saves the 4 values inside a value[]
    //Width     value[0] and value[1] ---> index 0 is foot, 1 is inches
    //Height    value[2] and value[3] ---> index 2 is foot, 3 is inches
    //value[1]/[3] are inches and always needs to be converted to foot by dividing 12
    function singlePrice(sideInput){
        return storeInputValues(sideInput, 'getSinglePrice');
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
        numberOfColorInput.closest('div').find('.total-height-input').hide();
        numberOfColorInput.closest('div').find('.total-height-input input').val(0);
        numberOfColorInput.closest('div').find('.height-message').empty();
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
    $('.total-height-input').hide();  //hide the inputs in the color field
    var colorHolder = null; //used to store the location where color is picked

    /* Function checks which side's div is clicked and pop put the colorSelectBox with the position of the div popping out */
    function colorFieldPicker(onClickSide,side){
        onClickSide.on('click', function(event){
            //store the class of the colorHolder to a global variable
            colorHolder = $(this).attr('class');
            var yVal = (event.clientY) + "px";
            var xVal = (event.clientX) + "px";
            $('.colorSelectBox').css({"left": xVal, "top": yVal}).toggle();
            //empty the field where it says 'Click to choose colors'
            $(this).closest('div').find('.gradient').children().empty();
            //var visible = $('.colorSelectBox').hasClass('visible');
            //if(visible){
            //    $('.colorSelectBox').hide();
            //    $('.colorSelectBox').removeClass('visible');
            //}else{
            //    $('.colorSelectBox').show();
            //    $('.colorSelectBox').addClass('visible');
            //}
            colorPickerOnClick(side);

        });
    }
    /* Function which then determine what color is clicked and return the color to the div selected as the div's background color */
    function colorPickerOnClick(side){
        //semi colors on click
        $('div.azRed')
            .add('div.azYellow')
            .on('click', function(){
            var colorAttr = $(this).attr('value');
            var nameAttr = $(this).attr('name');
            var splitClass = colorHolder.split(" ");
            side.closest('div').find('.'+splitClass[0] + '.'+splitClass[1])
                .css({"background": colorAttr, "border": "none"})
                .attr({"value": colorAttr, "data-semi": true, "data-coated": false, "name": nameAttr});
            $('.colorSelectBox').css({"display": "none"});
        });

        //coated color on click
        $('div.yellow')
            .add('div.blue')
            .add('div.black')
            .add('div.brown')
            .add('div.grey')
            .add('div.green')
            .add('div.orange')
            .on('click', function(){
                var colorAttr = $(this).attr('value');
                var nameAttr = $(this).attr('name');
                var splitClass = colorHolder.split(" ");
                side.closest('div').find('.'+splitClass[0] + '.'+splitClass[1])
                    .css({"background": colorAttr, "border": "none"})
                    .attr({"value": colorAttr, "data-semi": false, "data-coated": true, "name": nameAttr});
                $('.colorSelectBox').css({"display": "none"});
            });
        $('div.white').on('click', function(){
            var colorAttr = $(this).attr('value');
            var nameAttr = $(this).attr('name');
            var splitClass = colorHolder.split(" ");
            side.closest('div').find('.'+splitClass[0] + '.'+splitClass[1])
                .css({"background": colorAttr, "border": "1px solid lightgrey"})
                .attr({"value": colorAttr, "data-semi": false, "data-coated": true, "name": nameAttr});
            $('.colorSelectBox').css({"display": "none"});
        });
    }

    /* Enabling the function to choose colors */
    colorFieldPicker($('.color-side-a .number-of-color-field > div'), $('.color-side-a'));
    colorFieldPicker($('.color-side-b .number-of-color-field > div'), $('.color-side-b'));
    colorFieldPicker($('.color-side-c .number-of-color-field > div'), $('.color-side-c'));
    colorFieldPicker($('.color-side-d .number-of-color-field > div'), $('.color-side-d'));

    /* Open the color selection field after number of colors is selected */
    $('.number-of-colors').on('change', function(){
        var $clicked = $(this);
        var $closestDiv = $clicked.closest("div");

        var chooseColorValue = $clicked.val();

        switch(chooseColorValue){
            case '1':
                $closestDiv.find('.total-height-input').css({"top":"-155px"});
                $closestDiv.find('div.color1').show().css({"width": "inherit", "height": "100%", "background-color": defaultColorPickerField1, "border-radius": "5px"}).attr({"value": defaultColorPickerField1, "data-semi": "true", "data-coated": "false", "name": defaultColorPickerField1}).empty().append("<div class='gradientLayer gradient'><div class='choose-color-message1'>Click To Choose Colors</div></div>");
                $closestDiv.find('input.top-color').attr({"class": "top-color color1-1", "value": "0"});
                $closestDiv.find('div.heightInputTop').show();
                $closestDiv.find('div.color2').attr({"data-semi": "false", "data-coated": "false", "value": "None Chosen", "name": "None Chosen"}).hide();
                $closestDiv.find('div.heightInputMiddle').hide();
                $closestDiv.find('div.color3').attr({"data-semi": "false", "data-coated": "false", "value": "None Chosen", "name": "None Chosen"}).hide();
                $closestDiv.find('div.heightInputBottom').hide();
                $closestDiv.find('.total-height-input input').val(0);
                $closestDiv.find('.height-message').empty();
                break;
            case '2':
                $closestDiv.find('.total-height-input').css({"top":"-70px"});
                $closestDiv.find('div.color1').show().css({"width": "inherit", "height": "50%", "background-color": defaultColorPickerField2, "border-radius": "5px 5px 0 0"}).attr({"value": defaultColorPickerField2, "data-semi": "true", "data-coated": "false", "name": defaultColorPickerField1}).empty().append("<div class='gradientLayer2 gradient'><div class='choose-color-message2-1'>Click To Choose Colors</div></div>");
                $closestDiv.find('input.top-color').attr({"class": "top-color color2-1", "value": "0"});
                $closestDiv.find('div.heightInputTop').show();
                $closestDiv.find('div.color2').show().css({"width": "inherit", "height": "50%", "background-color": defaultColorPickerField3, "border-radius": "0 0 5px 5px"}).attr({"value": defaultColorPickerField3, "data-semi": "true", "name": defaultColorPickerField2}).empty().append("<div class='gradientLayer2 gradient'><div class='choose-color-message2-2'>Click To Choose Colors</div></div>");
                $closestDiv.find('input.middle-color').attr({"class": "middle-color color2-2", "value": "0"});
                $closestDiv.find('div.heightInputMiddle').show();
                $closestDiv.find('div.color3').attr({"data-semi": "false", "data-coated": "false", "value": "None Chosen", "name": "None Chosen"}).hide();
                $closestDiv.find('div.heightInputBottom').hide();
                $closestDiv.find('.total-height-input input').val(0);
                $closestDiv.find('.height-message').empty();
                break;
            case '3':
                $closestDiv.find('.total-height-input').css({"top":"-50px"});
                $closestDiv.find('div.color1').show().css({"width": "inherit", "height": "32.5%", "background-color": defaultColorPickerField1, "border-radius": "5px 5px 0 0"}).attr({"value": defaultColorPickerField1, "data-semi": "true", "data-coated": "false", "name": defaultColorPickerField1}).empty().append("<div class='gradientLayer3 gradient'><div class='choose-color-message3-1'>Click To Choose Colors</div></div>");
                $closestDiv.find('input.top-color').attr({"class": "top-color color3-1", "value": "0"});
                $closestDiv.find('div.heightInputTop').show();
                $closestDiv.find('div.color2').show().css({"width": "inherit", "height": "32.5%", "background-color": defaultColorPickerField2,"border-radius": "initial"}).attr({"value": defaultColorPickerField2, "data-semi": "true", "data-coated": "false", "name": defaultColorPickerField2}).empty().append("<div class='gradientLayer3 gradient'><div class='choose-color-message3-2'>Click To Choose Colors</div></div>");
                $closestDiv.find('input.middle-color').attr({"class": "middle-color color3-2", "value": "0"});
                $closestDiv.find('div.heightInputMiddle').show();
                $closestDiv.find('div.color3').show().css({"width": "inherit", "height": "32.5%", "background-color": defaultColorPickerField3, "border-radius": "0 0 5px 5px"}).attr({"value": defaultColorPickerField3, "data-semi": "true", "data-coated": "false", "name": defaultColorPickerField3}).empty().append("<div class='gradientLayer3 gradient'><div class='choose-color-message3-3'>Click To Choose Colors</div></div>");
                $closestDiv.find('input.bottom-color').attr({"class": "bottom-color color3-3", "value": "0"});
                $closestDiv.find('div.heightInputBottom').show();
                $closestDiv.find('.total-height-input input').val(0);
                $closestDiv.find('.height-message').empty();
                break;
            default:
                $closestDiv.find('div.color1').attr({"data-semi": "false", "data-coated": "false", "value": "None Chosen", "name": "None Chosen"}).hide();
                $closestDiv.find('div.color2').attr({"data-semi": "false", "data-coated": "false", "value": "None Chosen", "name": "None Chosen"}).hide();
                $closestDiv.find('div.color3').attr({"data-semi": "false", "data-coated": "false", "value": "None Chosen", "name": "None Chosen"}).hide();
                $closestDiv.find('.total-height-input input').val(0);
                $closestDiv.find('.height-message').empty();
                $closestDiv.find('.total-height-input').hide();
                break;
        }
    });

    //This is to prevent the colorSelectBox from opening when clicking the number input field
    $('.total-height-input').on('click', function(e){
        e.stopPropagation();
       $('.colorSelectBox').hide();

    });

    /*Gets the square feet for one side*/
    function getSquareFeet(side){
        var inputs = [];
        side.each(function(){
            if($(this).val() == ''){
                inputs.push(parseInt(0));
            }else{
                inputs.push(parseInt($(this).val()));
            }
        });
        inputs[1] = inputs[1]/12;
        inputs[3] = inputs[3]/12;
        return ((inputs[0]+inputs[1])*(inputs[2]+inputs[3]));
    }

    /*Get the sum for the input of top, middle, bot color*/
    function getSumOfColorInput(sideInput){
        var total = 0;
        sideInput.each(function() {
            total += parseInt($(this).val(), 10) || 0;
        });
        return total;
    }

    /*Gets the height in inches*/
    function getHeightInInches(sideInput){
        return storeInputValues(sideInput, 'getHeightInInch');
    }

    /*Outputs the sum of the inputs and make sure the sum equals to the total height in inches else error message will show up*/
    function appendHeightMessage(sideInput, sumOutput, error, $sideInput){
        sideInput.on('keyup', function(){
            var totalInput = getSumOfColorInput(sideInput);
            var totalHeight = getHeightInInches($sideInput);

            sumOutput.empty().append(totalInput + '" Total');
            if(totalHeight != totalInput){
                error.empty().append('Total Sum Must be ' + totalHeight + '"');
            }else{
                error.empty();
            }
        });
    }

    appendHeightMessage($('.color-side-a input'),$('.color-a-total-height'),$('.color-a-total-height-error'),$sideAinput);
    appendHeightMessage($('.color-side-b input'),$('.color-b-total-height'),$('.color-b-total-height-error'),$sideBinput);
    appendHeightMessage($('.color-side-c input'),$('.color-c-total-height'),$('.color-c-total-height-error'),$sideCinput);
    appendHeightMessage($('.color-side-d input'),$('.color-d-total-height'),$('.color-d-total-height-error'),$sideDinput);

    /*************************************/
    /**** Mounting Select Calculation ****/
    /*************************************/

    /*Set default values of each mount sides and total is 0 too*/
    var mountSideAPrice = resetValueToZero;
    var mountSideBPrice = resetValueToZero;
    var mountSideCPrice = resetValueToZero;
    var mountSideDPrice = resetValueToZero;
    var mountABCDtotal = resetValueToZero;

    /*************************/
    /*using multiplier of 4.5*/
    /*************************/
    function getOnlyWidthInput(sideInput){
        return storeInputValues(sideInput, 'getWidthInput');
    }

    $('.select-mounts').on('change', function(){
        var $clicked = $(this);
        var valueSelected = $clicked.val();
        var price = 0;

        var sideAWidthFT = getOnlyWidthInput($sideAinput);
        var sideBWidthFT = getOnlyWidthInput($sideBinput);
        var sideCWidthFT = getOnlyWidthInput($sideCinput);
        var sideDWidthFT = getOnlyWidthInput($sideDinput);

        var myClass = $clicked.attr('class');
        var splitClass = myClass.split(" ");
        var sc1 = splitClass[1];

        if(valueSelected != ''){
            switch(sc1){
                case 'mount-a':
                    mountSideAPrice = (sideAWidthFT * mountPriceMultiplier);
                    break;
                case 'mount-b':
                    mountSideBPrice = (sideBWidthFT * mountPriceMultiplier);
                    break;
                case 'mount-c':
                    mountSideCPrice = (sideCWidthFT * mountPriceMultiplier);
                    break;
                case 'mount-d':
                    mountSideDPrice = (sideDWidthFT * mountPriceMultiplier);
                    break;
            }
        }else{
            switch(sc1){
                case 'mount-a':
                    mountSideAPrice = resetValueToZero;
                    break;
                case 'mount-b':
                    mountSideBPrice = resetValueToZero;
                    break;
                case 'mount-c':
                    mountSideCPrice = resetValueToZero;
                    break;
                case 'mount-d':
                    mountSideDPrice = resetValueToZero;
                    break;
            }
        }

        //always calculate the total of all mount sides
        mountABCDtotal = (mountSideAPrice + mountSideBPrice + mountSideCPrice + mountSideDPrice).toFixed(2);

        appendPriceSummary();
    });

    /*******************/
    /*fixed mount price*/
    /*******************/
    ////putting the name of mount in array and price will correspond to the same array index
    //var diffMountNames = ['', 'k1', 'k2', 'k3', 'k4'];
    //var diffMountPricing = [0,5,4.5,5.5,30];
    //
    //$('.select-mounts').on('change', function(){
    //    var $clicked = $(this);
    //    var valueSelected = $clicked.val();     //check the value being selected
    //    var priceIndex = 0;                     //use to get the index of the price
    //    var selectedMountPrice = 0;             //price set to 0 initially
    //
    //    //in the array if the value selected matches to the one in the array saves the index to priceIndex
    //    $.each(diffMountNames, function(index, value){
    //        if(valueSelected == value){
    //            priceIndex = index;
    //        }
    //    });
    //
    //    //uses the priceIndex found above and loop through the array to find the corresponding index which will the the price of the product
    //    $.each(diffMountPricing, function(index, value){
    //       if(priceIndex == index){
    //           selectedMountPrice = value;
    //       }
    //    });
    //
    //    //find the class being clicked and split it to check exactly with side is clicked
    //    //then use the class to decide which side variable is used to store the price of the mount selected
    //    var myClass = $clicked.attr('class');
    //    var splitClass = myClass.split(" ");
    //    var sc1 = splitClass[1];
    //
    //    switch(sc1){
    //        case 'mount-a':
    //            mountSideAPrice = selectedMountPrice;
    //            break;
    //        case 'mount-b':
    //            mountSideBPrice = selectedMountPrice;
    //            break;
    //        case 'mount-c':
    //            mountSideCPrice = selectedMountPrice;
    //            break;
    //        case 'mount-d':
    //            mountSideDPrice = selectedMountPrice;
    //            break;
    //    }
    //
    //    //always calculate the total of all mount sides
    //    mountABCDtotal = (mountSideAPrice + mountSideBPrice + mountSideCPrice + mountSideDPrice);
    //
    //    //price of the mount plus price of the sides gives the price summary
    //    //priceSummary = (Number(sideABCDtotal) + mountABCDtotal).toFixed(2);
    //    //$('.price').empty().append("$" + priceSummary);
    //
    //    appendPriceSummary();
    //    console.log(mountABCDtotal);
    //});

    /*Function to append price summary into the price summary div*/
    function appendPriceSummary(){
        priceSummary = (Number(sideABCDtotal) + Number(mountABCDtotal) + Number(extraAccAllTotal)).toFixed(2);
        if(isNaN(priceSummary)){
            priceSummary = 0.00;
        }
        $('.price').empty().append("$" + priceSummary);
        $('form input[name="amount"]').attr('value', priceSummary);
    }

    /***********/
    /*Extra Acc*/
    /***********/
    var extraAcc1Price = 0;
    var extraAcc2Price = 0;
    var extraAcc3Price = 0;
    var extraAccAllTotal = 0;

    var extraAccNames = ['extraAcc1', 'extraAcc2', 'extraAcc3']; //stores the short name for the extra acc
    var extraAccPrices = [65, 60, 10];  //stores the price for the extra acc

    $('.opt-qty').on('change', function(){
        var $this = $(this);
        var valueSelected = $this.val();  //gets the value which is the short name for the extra acc.
        var tempIndex = 0;
        var qtySelected = parseInt($this.find('option:selected').text());  //gets the text of selected field which is the qty
        var accPrice = 0;

        //use value selected to search through the array and gets the index
        $.each(extraAccNames, function(index, value){
            if(valueSelected == value){
                tempIndex = index;
            }
        });

        //uses the index found above to match the price in the array
        $.each(extraAccPrices, function(index, price){
           if(index == tempIndex){
                accPrice = price;
           }
        });

        //determines which acc is selected in order to know where to store the price
        switch (valueSelected){
            case 'extraAcc1':
                extraAcc1Price = accPrice * qtySelected;
                break;
            case 'extraAcc2':
                extraAcc2Price = accPrice * qtySelected;
                break;
            case 'extraAcc3':
                extraAcc3Price = accPrice * qtySelected;
                break;
        }
        extraAccAllTotal = extraAcc1Price + extraAcc2Price + extraAcc3Price;
        appendPriceSummary();
    });

    /**********************************/
    /********** Cart Summary **********/
    /**********************************/
    $('.add-to-cart').on('click', function(e){
        e.preventDefault();

        //Gets the sum of height of one side in inches
        var sideAheightColorInputsTotal = getSumOfColorInput($('.color-side-a input'));
        var sideBheightColorInputsTotal = getSumOfColorInput($('.color-side-b input'));
        var sideCheightColorInputsTotal = getSumOfColorInput($('.color-side-c input'));
        var sideDheightColorInputsTotal = getSumOfColorInput($('.color-side-d input'));
        //puts the sum of height of each side in an array
        var allSideHeightColorInputsTotal = [sideAheightColorInputsTotal, sideBheightColorInputsTotal, sideCheightColorInputsTotal, sideDheightColorInputsTotal];

        //Gets the sum of the height inputs when choosing colors
        var sideAheightInputTotal = getHeightInInches($sideAinput);
        var sideBheightInputTotal = getHeightInInches($sideBinput);
        var sideCheightInputTotal = getHeightInInches($sideCinput);
        var sideDheightInputTotal = getHeightInInches($sideDinput);
        //stores the sum of each side in an array
        var allSideHeightInputsTotal = [sideAheightInputTotal, sideBheightInputTotal, sideCheightInputTotal,sideDheightInputTotal];

        if((allSideHeightColorInputsTotal.sort(function(a, b){return a-b}).join(',')) !== ((allSideHeightInputsTotal.sort(function(a, b){return a-b}).join(',')))){
            alert('Height in inches entered in dimensions is different from the height entered for the color');
            return false;
        }

        var getSideText = null;  //Get the text of the side chosen e.g. single curtain, 2-sided station

        /*Get the text of how many side chosen*/
        $('.chooseSides p').each(function(){
           var sideChosen = $(this).hasClass('checkMark');
            if(sideChosen){
                getSideText = $(this).text();
            }
        });

        /*Gets all the inputs for one side*/
        function getInputsForOneSide(sideInput){
            return storeInputValues(sideInput, 'storeInputs');
        }

        /*Get the inputs of each side and store them into an array variable*/
        var inputsA = getInputsForOneSide($sideAinput);
        var inputsB = getInputsForOneSide($sideBinput);
        var inputsC = getInputsForOneSide($sideCinput);
        var inputsD = getInputsForOneSide($sideDinput);

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
                var bg = $(this).attr('name');

                if(typeof(semi) == 'undefined'){
                    semi = 'false';
                }
                if(typeof(coated) == 'undefined'){
                    coated = 'false';
                }
                if((bg == 'color1') || (bg == 'color2') || (bg == 'color3')){
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

        //If extra accessories is added, it'll be stored in the following variable
        var printExtraAccInfo = '';
        $('.opt-qty').each(function(){
            var $this = $(this);
            var qtySelected = parseInt($this.find('option:selected').text());

            if(qtySelected > 0){
                var info = $this.closest('div').prev().text() + ' x ' + qtySelected + '<br>';
                printExtraAccInfo += info;

            }
        });

        //Gets the final product price amount
        var finalPrice = $('.price').text();;

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
                $('.full-panel').empty();
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

                /*Append all mount chosen even if empty*/
                $('.cart-info .mount-selected').each(function(index){
                    $(this).children().append(data['mountValues'][index]);
                });

                /*Appends the extra acc info*/
                $('.extra-acc-info').append(printExtraAccInfo);

                /*Appends the final product price*/
                $('.finalAmount').append(finalPrice);
            }
        });// end ajax

        //only allowed the user to click the button once
        $(this).unbind('click');
        //reset all the field for input and select to empty string so when restart is clicked the inputs will be empty
        $('body input').val('');
        $('body select').val('');
    });// end cart on click

    //Reset all values to 0 or empty fields
    $('.btn-reset').on('click', function(e){
        e.preventDefault();
        emptyInputValue($sideAinput, $('.mount-a'), $('.color-a'));
        emptyInputValue($sideBinput, $('.mount-b'), $('.color-b'));
        emptyInputValue($sideCinput, $('.mount-c'), $('.color-c'));
        emptyInputValue($sideDinput, $('.mount-d'), $('.color-d'));
        $('.total-height-input').hide();
        $('.total-height-input input').val(0);
        $('.height-message').empty();

        sideAtotal = resetValueToZero;
        sideBtotal = resetValueToZero;
        sideCtotal = resetValueToZero;
        sideDtotal = resetValueToZero;
        sideABCDtotal = resetValueToZero;

        mountSideAPrice = resetValueToZero;
        mountSideBPrice = resetValueToZero;
        mountSideCPrice = resetValueToZero;
        mountSideDPrice = resetValueToZero;
        mountABCDtotal = resetValueToZero;

        $('.opt-qty').each(function(){
            $(this).prop('selectedIndex',0);
        });

        extraAcc1Price = resetValueToZero;
        extraAcc2Price = resetValueToZero;
        extraAcc3Price = resetValueToZero;
        extraAccAllTotal = resetValueToZero;

        priceSummary = resetValueToZero;
        appendPriceSummary();
    });

    //Reloads the page
    $('.btn-restart').on('click', function(){
        location.reload();
    });

});