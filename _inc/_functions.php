<?php
    /**
     * Created by PhpStorm.
     * User: ET
     * Date: 9/9/2015
     * Time: 1:36 PM
     */

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