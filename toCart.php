<?php
/**
 * Created by PhpStorm.
 * User: et
 * Date: 15-08-12
 * Time: 1:42 PM
 */
session_start();

//$_SESSION['a-width-foot'] = $_POST['a-width-foot'];
//$_SESSION['a-width-inch'] = $_POST['a-width-inch'];
//$_SESSION['a-height-foot'] = $_POST['a-height-foot'];
//$_SESSION['a-height-inch'] = $_POST['a-height-inch'];
//$_SESSION['b-width-foot'] = $_POST['b-width-foot'];
//$_SESSION['b-width-inch'] = $_POST['b-width-inch'];
//$_SESSION['b-height-foot'] = $_POST['b-height-foot'];
//$_SESSION['b-height-inch'] = $_POST['b-height-inch'];
//$_SESSION['c-width-foot'] = $_POST['c-width-foot'];
//$_SESSION['c-width-inch'] = $_POST['c-width-inch'];
//$_SESSION['c-height-foot'] = $_POST['c-height-foot'];
//$_SESSION['c-height-inch'] = $_POST['c-height-inch'];
//$_SESSION['d-width-foot'] = $_POST['d-width-foot'];
//$_SESSION['d-width-inch'] = $_POST['d-width-inch'];
//$_SESSION['d-height-foot'] = $_POST['d-height-foot'];
//$_SESSION['d-height-inch'] = $_POST['d-height-inch'];
//
//
//$_SESSION['total'] = $_SESSION['a-width-foot'] + $_SESSION['a-width-foot'];

$_SESSION['sideA-ColorValue'] = $_POST['sideA_Color1_val'];

header('location: cartPage.php');