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
$data['bgColor'] = $_POST['bgArray'];
echo json_encode($data);