<?php
/**
 * Created by PhpStorm.
 * User: et
 * Date: 15-08-19
 * Time: 11:28 AM
 */

//$sideA_color1_val = $_POST['sideA_color1_val'];
$data = array();

/*Text of how many sides are chosen, single, two-sided, three-sided or four-sided*/
$data['sideChosen'] = $_POST['getSideText'];

/*All the width height inputs for all sides, empty gives 0*/
$data['inputsA'] = $_POST['inputsA'];
$data['inputsB'] = $_POST['inputsB'];
$data['inputsC'] = $_POST['inputsC'];
$data['inputsD'] = $_POST['inputsD'];

/*All the chosen colors value if empty None Chosen will show*/
$data['bgColorsA'] = $_POST['bgArrayA'];
$data['bgColorsB'] = $_POST['bgArrayB'];
$data['bgColorsC'] = $_POST['bgArrayC'];
$data['bgColorsD'] = $_POST['bgArrayD'];

/*All the chosen mount value's shorthand but changes them to proper name before passing back to front end*/
$data['mountValues'] = [];
foreach($_POST['mountArray'] as $key => $value){
    if($value == 'wm'){
        $data['mountValues'][$key] = 'Wall Mount';
    }else if($value == 'trm'){
        $data['mountValues'][$key] = 'Threaded Rod Mount';
    }else if($value == 'cm'){
        $data['mountValues'][$key] = 'Ceiling Mount';
    }else if($value == 'clm'){
        $data['mountValues'][$key] = 'Chain link Mount';
    }else{
        $data['mountValues'][$key] = 'None Chosen';
    }
}
//$data['mountValues'] = $_POST['mountArray'];
echo json_encode($data);