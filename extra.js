/**
 * Created by ET on 8/15/2015.
 * Script might be used in the future
 */

/*Enable disabling the curtain side one by one
 * Single curtain is always enabled
 * Only 2 sided can be enabled and clicked when single curtain is the only one visible
 * After 2 sided is enabled, 3 sided can also be enabled then the 4 sided if 3 sided is enabled
 * If all sides are enabled and 2 sided is clicked to disable then 3 and 4 sided will both be disabled too
 * To open 4 sided again, 3 sided need to be clicked then 4 sided can be turned on again*/

/*Example
 * Side one      - enable
 * Side two      - disabled (can be clicked)
 * Side three    - disabled (Can't be clicked)
 * Side four     - disabled (Can't be clicked)
 *
 * Side one      - enable
 * Side two      - enable
 * Side three    - disabled (Can be clicked)
 * Side four     - disabled (Can't be clicked)
 *
 * Side one      - enable
 * Side two      - enable  (Click this will disable this
 * Side three    - enable   and this
 * Side four     - enable   and this) // All three will be disabled and left Side One only one enabled
 * */


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
    $(side).css({"opacity":".5"});
    $(side).attr('disabled', true);

    $(dimension).css({"opacity":".5"});
    var dimensionInput = (dimension + " input");
    $(dimensionInput).attr('disabled', true);

    $(color).css({"opacity":".5"});
    var colorSelect = (color + " select");
    $(colorSelect).attr('disabled', true);

    $(mount).css({"opacity":".5"});
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

/*Disable sides using the disableSides()*/
//disableSides(singleSide,dimensionSideA,colorSideA,mountSideA);
disableSides(twoSides,dimensionSideB,colorSideB,mountSideB);
disableSides(threeSides,dimensionSideC,colorSideC,mountSideC);
disableSides(fourSided,dimensionSideD,colorSideD,mountSideD);

/*Making three and four sides not clickable from start*/
$('.three-sided').unbind('click');
$('.four-sided').unbind('click');

$(twoSides).on('click', function(){
    var disabledAttr = $(this).attr('disabled');
    if(disabledAttr == 'disabled'){
        enableSides(twoSides,dimensionSideB,colorSideB,mountSideB);

        // enable three sides click
        $(threeSides).on('click', function(){
            var disabledAttr = $(this).attr('disabled');
            if(disabledAttr == 'disabled') {
                enableSides(threeSides, dimensionSideC, colorSideC, mountSideC);

                //enable four sides click
                $(fourSided).on('click', function(){
                    var disabledAttr = $(this).attr('disabled');
                    if(disabledAttr == 'disabled'){
                        enableSides(fourSided,dimensionSideD,colorSideD,mountSideD);
                    }else{
                        disableSides(fourSided,dimensionSideD,colorSideD,mountSideD);
                    }
                })
            }else{
                disableSides(threeSides,dimensionSideC,colorSideC,mountSideC);
                disableSides(fourSided,dimensionSideD,colorSideD,mountSideD);
                $(fourSided).unbind('click');
            }
        })
    }else{
        disableSides(twoSides,dimensionSideB,colorSideB,mountSideB);
        disableSides(threeSides,dimensionSideC,colorSideC,mountSideC);
        disableSides(fourSided,dimensionSideD,colorSideD,mountSideD);
        $(threeSides).unbind('click');
        $(fourSided).unbind('click');
    }
});


/***************************************/
/****On Start single side enabled*******/
/***************************************/

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

    $(dimension).css({"opacity":".5"});
    var dimensionInput = (dimension + " input");
    $(dimensionInput).attr('disabled', true);

    $(color).css({"opacity":".5"});
    var colorSelect = (color + " select");
    $(colorSelect).attr('disabled', true);

    $(mount).css({"opacity":".5"});
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

/*Disable sides using the disableSides()*/
//disableSides(singleSide,dimensionSideA,colorSideA,mountSideA);
disableSides(twoSides,dimensionSideB,colorSideB,mountSideB);
disableSides(threeSides,dimensionSideC,colorSideC,mountSideC);
disableSides(fourSided,dimensionSideD,colorSideD,mountSideD);

/*Function to make the curtain side selection opacity lower than usual and disable attribute to true*/
function curtainFadeOutAndDisabled(side){
    $(side).css({"opacity":".5"});
    $(side).attr('disabled', true);
}

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