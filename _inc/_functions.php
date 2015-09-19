<?php
    /**
     * Created by PhpStorm.
     * User: ET
     * Date: 9/9/2015
     * Time: 1:36 PM
     */

    /**
     * printMountSelections()
     * This is used to print out Choose Track & Trolley kit (Optional) step 3
     * Example: printMountSelections('mount-side-a', 'Side A', 'mount-a');
     * @param $sideClass            - class for the sides, example 'mount-side-a'
     * @param $sideLabel            - label for the sides, example 'Side A'
     * @param $selectMountSide      - extra class for select element to determine which side is chosen when using jQuery, example 'mount-a'
     * @return string               - html output of the mount label and select element
     */
    function printMountSelections($sideClass, $sideLabel, $selectMountSide){
        $output[] = "<div class='$sideClass'>";
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

    /**
     * printExtraAcc()
     * This is used to print out extra accessories for step 4
     * Example: <?php echo printExtraAcc('Extra accessories 1', 25, 'acc1', 'extraAcc1', 65)?>
     * @param $accName           - The name of the extra accessories
     * @param $maxQty            - Max quantities user is allowed to choose
     * @param $accClass          - Class for the accessories, example: acc1
     * @param $id                - id name for the select element which is used in jQuery, example: extraAcc1
     * @param $price             - price of the extra acc
     * @return string            - html output of the extra accessories
     */
    function printExtraAcc($accName, $maxQty, $accClass, $id, $price){
        $output[] = "<div class='extraAcc'>\r\n";
        $output[] = "<label class='extraName'>$accName</label>\r\n";
        $output[] = "<div class='extraPrice $accClass'>$";
        $output[] = $price . ".00";
        $output[] = "<select id='$id' class='opt-qty'>\r\n";
        for($i = 0; $i <= $maxQty; $i++){
            $output[] = "<option value='$id'>";
            $output[] = $i;
            $output[] = "</option>\r\n";
        };
        $output[] = "</select>\r\n";
        $output[] = "</div>\r\n";
        $output[] = "</div><!-- end $accName-->\r\n";

        return join('',$output);
    }