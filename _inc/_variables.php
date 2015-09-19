<?php
    /**
     * Created by PhpStorm.
     * User: ET
     * Date: 9/19/2015
     * Time: 2:20 AM
     */

    /**
     * MultiDimensional Array for creating mount selections
     * This is interacted by using the array below and use foreach loop with alternative syntax in html
     */
    $mountKitsOptions = array(
        array('mount-side-a', 'Side A', 'mount-a'),
        array('mount-side-b', 'Side B', 'mount-b'),
        array('mount-side-c', 'Side C', 'mount-c'),
        array('mount-side-d', 'Side D', 'mount-d')
    );

    /**
     * MultiDimensional Array for creating extra accessories selections
     * This is interacted by using the array below and use foreach loop with alternative syntax in html
     */
    $extraAccOptions = array(
        array('Extra accessories 1', 'acc1', 65, 'extraAcc1', 25),
        array('Extra accessories 2', 'acc2', 60, 'extraAcc2', 50),
        array('Extra accessories 3', 'acc3', 10, 'extraAcc3', 20)
    );