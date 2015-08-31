/**
 * Created by et on 15-08-31.
 */
function getOnlyWidthInput(sideInput){
    var value = [];
    sideInput.each(function(){

        var $thisValue = $(this).val();
        if($thisValue == ''){
            value.push(parseInt(0));
        }else{
            value.push(parseInt($thisValue));
        }

    });
    value[1] = value[1]/12;
    return value[0] + value[1];
}

function storeInputValues(sideInput, action){
    var values = [];
    sideInput.each(function(){
        var $thisValue = $(this).val();
        if(($thisValue == "") || (isNaN($thisValue))
            || ($thisValue > maxWidthHeight) || ($thisValue < minWidthHeight)){
            values.push(parseInt(0));
        }else {
            values.push(parseInt($thisValue));
        }
    })
    values[1] = values[1]/12;
    values[3] = values[3]/12;
    switch (action){
        case ('getWidthInput'):
            return value[0] + value[1];
            break;
        case ('getSinglePrice'):
            return ((values[0]+values[1])*(values[2]+values[3])) * widthHeightProductMultiplier;
            break;
        case ('storeInputs'):
            return values;
            break;
    }

}

function singlePrice(sideInput){
    var values = [];
    sideInput.each(function() {
        var $thisValue = $(this).val();
        if(($thisValue == "") || (isNaN($thisValue))
            || ($thisValue > maxWidthHeight) || ($thisValue < minWidthHeight)){
            values.push(parseInt(0));
        }else {
            values.push(parseInt($thisValue));
        }
    });

    values[1] = values[1]/12;
    values[3] = values[3]/12;
    return ((values[0]+values[1])*(values[2]+values[3])) * widthHeightProductMultiplier;
}

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