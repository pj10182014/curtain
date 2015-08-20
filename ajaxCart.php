<?php
/**
 * Created by PhpStorm.
 * User: et
 * Date: 15-08-19
 * Time: 11:28 AM
 */

//$sideA_color1_val = $_POST['sideA_color1_val'];
$data = array();
$data['sideChosen'] = $_POST['getSideText'];
$data['inputsA'] = $_POST['inputsA'];
$data['inputsB'] = $_POST['inputsB'];
$data['inputsC'] = $_POST['inputsC'];
$data['inputsD'] = $_POST['inputsD'];
$data['bgColors'] = $_POST['bgArray'];
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