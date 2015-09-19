<?php
    /**
     * Created by PhpStorm.
     * User: ET
     * Date: 9/9/2015
     * Time: 1:36 PM
     */

    $counts = array(0,1);
    $sideClass = array('mount-side-a', 'mount-side-b');
    $sideLabel = array('Side A', 'Side B');
    $selectMountSide = array('mount-a', 'mount-b');
    $i = 0;

    /*
     * printExtraAcc()
     * This is used to print out extra accessories for step 4
     * param $accName           - The name of the extra accessories
     * param $maxQty            - Max quantities user is allowed to choose
     * param $accClass          - Class for the accessories, example: acc1
     * param $id                - id name for the select element, example: extraAcc1
     * param $price             - price of the */
    function printExtraAcc($accName, $maxQty, $accClass, $id, $price){
        $output[] = "<div class='extraAcc'>";
        $output[] = "<label class='extraName'>$accName</label>";
        $output[] = "<div class='extraPrice $accClass'>$";
        $output[] = $price . ".00";
        $output[] = "<select id='$id' class='opt-qty'>";
        for($i = 0; $i <= $maxQty; $i++){
            $output[] = "<option value='$id'>";
            $output[] = $i;
            $output[] = "</option>";
        };
        $output[] = "</select>";
        $output[] = "</div>";
        $output[] = "</div>";

        return join('',$output);
    }

    function printMountSelections($sideClass, $sideLabel, $selectMountSide){
        $output[] = "<div class='$sideClass'>";
        $output[] = "\r\n";
        $output[] = "<p class='sideABCD-header'>$sideLabel</p>";
        $output[] = "<div class='dimension-width'>";
        $output[] = "<select name='select-mounts' class='select-mounts $selectMountSide'>";
        $output[] = "<option value='' group='mounts'>No Kit Needed</option>";
        $output[] = "<option value='k1' group='mounts'>Set Kit - #FKS1439-1</option>";
        $output[] = "<option value='k2' group='mounts'>Set Kit - #FKS1439-2</option>";
        $output[] = "<option value='k3' group='mounts'>Set Kit - #FKS1439-3</option>";
        $output[] = "<option value='k4' group='mounts'>Set Kit - #FKS1439-4</option>";
        $output[] = "</select>";
        $output[] = "</div>";
        $output[] = "</div> <!-- end mount $sideLabel -->";

        return join('', $output);
    }