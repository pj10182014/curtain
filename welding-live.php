<?php require($_SERVER['DOCUMENT_ROOT'].'/order/functions/session.php');?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>

    <!-- ET -->
    <link href='http://fonts.googleapis.com/css?family=Roboto:400,300,500' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" type="text/css" href="/css/welding.css">
    <link rel="stylesheet" href="/css/font-awesome.min.css">
    <!-- <script src="js/jquery.js"></script> -->
    <!-- ET -->

    <title>Design Your Industrial Body Shop Curtains in 3 Easy Steps! - Strip-Curtains.com</title>

    <?php require("../_inc/head_html.php"); ?>
    <style type="text/css">
        <!--
        .style1 {color: #FF3333}
        -->
    </style>

</head>
<body>
<?php require("../_inc/header.php"); ?>
<div id="main">
    <div class="interior_full_pane" style="font-size:14px; color:#000000; background-color:white; background-image:none;">
        <form action="/order/order-cart.php" method="post" name="ordering" id="ordering">
            <div id="product-summary-position">
                <div id="product-fixed">
                    <div id="product-summary">
                        <header>Product Summary</header>
                        <div class="price" name="product-summary-price">$0.00</div>
                        <header>Have Questions?</header>
                        <p>Call our Product Experts<br> 1-877-270-3311</p>
                        <button class="btn-reset">Reset</button>
                    </div>
                </div>
            </div>

            <div id="three-steps-curtain-selections">
                <div id="step1">
                    <!-- Header-->
                    <header class="curtain-selection-headers">
                        <div class="step-arrows">Step 1</div>
                        <div class="step-headers">Select Curtain Layout</div>
                    </header>

                    <!-- Selections-->
                    <div class="step1-selections">
                        <!-- Help notes-->
                        <div class="help-section">
                            <div class="help-header">Please select the sides needed</div>
                            <div class="help">Help<span class="fa fa-question-circle"></span></div>
                            <div class="help-notes">Please identify the exact area you wish to enclose with industrial Curtains. Determine if the layout is a straight run, L – shape, rectangle, or square...</div>
                        </div>


                        <!-- Sides Selections -->
                        <div class="clear"></div>
                        <div class="chooseSides single-side"><input type="image" src="/images/two-sided.png" alt="" value="Single Curtain" /><p>Single Curtain</p></div>
                        <div class="chooseSides two-sided"><input type="image" img src="/images/two-sided.png" alt="" value="2-sided Station"/><p>2-sided Station</p></div>
                        <div class="chooseSides three-sided"><input type="image" img src="/images/two-sided.png" alt="" value="3-sided Station"/><p>3-sided Station</p></div>
                        <div class="chooseSides four-sided"><input type="image" img src="/images/two-sided.png" alt="" value="4-sided Station"/><p class="checkMark">4-sided Station</p></div>
                    </div><!-- end selections -->
                </div>  <!-- end step 1 div-->

                <div class="clearWmarginForSteps"></div>

                <div id="step2">
                    <!-- Header-->
                    <header class="curtain-selection-headers">
                        <div class="step-arrows">Step 2</div>
                        <div class="step-headers">Enter Your Dimensions &amp; Colors</div>
                    </header>

                    <!-- Selections-->
                    <div class="step2-selections">
                        <!-- Help notes-->
                        <div class="help-section">
                            <div class="help-header">Enter Dimensions</div>
                            <div class="help">Help<span class="fa fa-question-circle"></span></div>
                            <div class="help-notes">Figure the required height of the vinyl curtains. If using track...we will deduct 1.5" off the entered height since the track is 1.5" H. Also determine if you would like to touch the floor with the curtain or be off the floor. If the curtains are sliding curtains (with track hardware), we recommend that the curtain be off the floor by 2-3" to avoid drag and friction which will eventually wear on the material. <br /><br /> <b>Entering Width</b><br /> Enter the total width to be covered by the curtain. We will add 5-10% to the entered measurement for proper coverage.</div>
                        </div>

                        <!-- Dimension Selection-->
                        <div class="clear"></div>
                        <div class="dimensions-side-a">
                            <p class="sideABCD-header">Side A</p>
                            <div class="dimension-width">
                                <p class="dimension-WHC">Width</p>
                                <input class='dimension-input-foot' name="a-width-foot" type="text"><span class="foot-inches">'</span>
                                <input class='dimension-input-inch' name="a-width-inch" type="text"><span class="foot-inches">"</span>
                                x &nbsp;
                            </div>
                            <div class="dimension-height">
                                <p class="dimension-WHC">Height</p>
                                <input class='dimension-input-foot' name="a-height-foot" type="text"><span class="foot-inches">'</span>
                                <input class='dimension-input-inch' name="a-height-inch" type="text"><span class="foot-inches">"</span>
                            </div>
                        </div> <!-- end dimension side a -->

                        <div class="dimensions-side-b">
                            <p class="sideABCD-header">Side B</p>
                            <div class="dimension-width">
                                <p class="dimension-WHC">Width</p>
                                <input class='dimension-input-foot' name="b-width-foot"  type="text"><span class="foot-inches">'</span>
                                <input class='dimension-input-inch' name="b-width-inch" type="text"><span class="foot-inches">"</span>
                                x &nbsp;
                            </div>
                            <div class="dimension-height">
                                <p class="dimension-WHC">Height</p>
                                <input class='dimension-input-foot' name="b-height-foot" type="text"><span class="foot-inches">'</span>
                                <input class='dimension-input-inch' name="b-height-inch" type="text"><span class="foot-inches">"</span>
                            </div>
                        </div><!-- end dimension side b -->

                        <div class="dimensions-side-c">
                            <p class="sideABCD-header">Side C</p>
                            <div class="dimension-width">
                                <p class="dimension-WHC">Width</p>
                                <input class='dimension-input-foot' name="c-width-foot" type="text"><span class="foot-inches">'</span>
                                <input class='dimension-input-inch' name="c-width-inch" type="text"><span class="foot-inches">"</span>
                                x &nbsp;
                            </div>
                            <div class="dimension-height">
                                <p class="dimension-WHC">Height</p>
                                <input class='dimension-input-foot' name="c-height-foot" type="text"><span class="foot-inches">'</span>
                                <input class='dimension-input-inch' name="c-height-inch" type="text"><span class="foot-inches">"</span>
                            </div>
                        </div><!-- end dimension side c -->

                        <div class="dimensions-side-d">
                            <p class="sideABCD-header">Side D</p>
                            <div class="dimension-width">
                                <p class="dimension-WHC">Width</p>
                                <input class='dimension-input-foot' name="d-width-foot" type="text"><span class="foot-inches">'</span>
                                <input class='dimension-input-inch' name="d-width-inch" type="text"><span class="foot-inches">"</span>
                                x &nbsp;
                            </div>
                            <div class="dimension-height">
                                <p class="dimension-WHC">Height</p>
                                <input class='dimension-input-foot' name="d-height-foot" type="text"><span class="foot-inches">'</span>
                                <input class='dimension-input-inch' name="d-height-inch" type="text"><span class="foot-inches">"</span>
                            </div>
                        </div><!-- end dimension side d -->

                        <!-- Help notes-->
                        <div class="clear"></div>
                        <div class="help-section marginTop20">
                            <div class="help-header">Choose Number of Colors</div>
                            <div class="help">Help<span class="fa fa-question-circle"></span></div>
                            <div class="help-notes"><b>Determining Colors</b><br />Determine if the curtains will exhibit 1 color or 2 colors or if it will have a horizontal vision window for visibility thru the curtain or to allow light thru. </div>
                        </div>

                        <!-- Color Selection-->
                        <div class="clear"></div>
                        <div class="color-side-a">
                            <p class="sideABCD-header">Side A</p>
                            <div class="dimension-width">
                                <p class="dimension-WHC">Colors</p>
                                <select name="number-of-colors" class="number-of-colors color-a">
                                    <option value="" group="1">Select A Number</option>
                                    <option value="1" group="1">1</option>
                                    <option value="2" group="1">2</option>
                                    <option value="3" group="1">3</option>
                                </select>
                                <div class="number-of-color-field">
                                    <div name="color1" class="sideA color1" data-semi="false"  data-coated="false"></div>
                                    <div class="total-height-input heightInputTop"><input class="top-color" type="number" min="0"><span class="foot-inches color-selector">"</span></div>
                                    <div name="color2" class="sideA color2" data-semi="false"  data-coated="false"></div>
                                    <div class="total-height-input heightInputMiddle"><input class="middle-color" type="number" min="0"><span class="foot-inches color-selector">"</span></div>
                                    <div name="color3" class="sideA color3" data-semi="false"  data-coated="false"></div>
                                    <div class="total-height-input heightInputBottom"><input class="bottom-color" type="number" min="0"><span class="foot-inches color-selector">"</span></div>
                                </div>
                                <div class="height-message color-a-total-height"></div>
                                <div class="height-message color-a-total-height-error"></div>
                            </div>
                        </div><!-- end color side A -->

                        <div class="color-side-b">
                            <p class="sideABCD-header">Side B</p>
                            <div class="dimension-width">
                                <p class="dimension-WHC">Colors</p>
                                <select name="number-of-colors" class="number-of-colors color-b">
                                    <option value="" group="colors">Select A Number</option>
                                    <option value="1" group="colors">1</option>
                                    <option value="2" group="colors">2</option>
                                    <option value="3" group="colors">3</option>
                                </select>
                                <div class="number-of-color-field">
                                    <div name="color1" class="sideB color1"></div>
                                    <div class="total-height-input heightInputTop"><input class="top-color" type="number" ><span class="foot-inches color-selector">"</span></div>
                                    <div name="color2" class="sideB color2"></div>
                                    <div class="total-height-input heightInputMiddle"><input class="middle-color" type="number" ><span class="foot-inches color-selector">"</span></div>
                                    <div name="color3" class="sideB color3"></div>
                                    <div class="total-height-input heightInputBottom"><input class="bottom-color" type="number" ><span class="foot-inches color-selector">"</span></div>
                                </div>
                                <div class="height-message color-b-total-height"></div>
                                <div class="height-message color-b-total-height-error"></div>
                            </div>
                        </div><!-- end color side B -->

                        <div class="color-side-c">
                            <p class="sideABCD-header">Side C</p>
                            <div class="dimension-width">
                                <p class="dimension-WHC">Colors</p>
                                <select name="number-of-colors" class="number-of-colors color-c">
                                    <option value="" group="colors">Select A Number</option>
                                    <option value="1" group="colors">1</option>
                                    <option value="2" group="colors">2</option>
                                    <option value="3" group="colors">3</option>
                                </select>
                                <div class="number-of-color-field">
                                    <div name="color1" class="sideC color1"></div>
                                    <div class="total-height-input heightInputTop"><input class="top-color" type="number" ><span class="foot-inches color-selector">"</span></div>
                                    <div name="color2" class="sideC color2"></div>
                                    <div class="total-height-input heightInputMiddle"><input class="middle-color" type="number" ><span class="foot-inches color-selector">"</span></div>
                                    <div name="color3" class="sideC color3"></div>
                                    <div class="total-height-input heightInputBottom"><input class="bottom-color" type="number" ><span class="foot-inches color-selector">"</span></div>
                                </div>
                                <div class="height-message color-c-total-height"></div>
                                <div class="height-message color-c-total-height-error"></div>
                            </div>
                        </div><!-- end color side c -->

                        <div class="color-side-d">
                            <p class="sideABCD-header">Side D</p>
                            <div class="dimension-width">
                                <p class="dimension-WHC">Colors</p>
                                <select name="number-of-colors" class="number-of-colors color-d">
                                    <option value="" group="colors">Select A Number</option>
                                    <option value="1" group="colors">1</option>
                                    <option value="2" group="colors">2</option>
                                    <option value="3" group="colors">3</option>
                                </select>
                                <div class="number-of-color-field">
                                    <div name="color1" class="sideD color1"></div>
                                    <div class="total-height-input heightInputTop"><input class="top-color" type="number" ><span class="foot-inches color-selector">"</span></div>
                                    <div name="color2" class="sideD color2"></div>
                                    <div class="total-height-input heightInputMiddle"><input class="middle-color" type="number" ><span class="foot-inches color-selector">"</span></div>
                                    <div name="color3" class="sideD color3"></div>
                                    <div class="total-height-input heightInputBottom"><input class="bottom-color" type="number" ><span class="foot-inches color-selector">"</span></div>
                                </div>
                                <div class="height-message color-d-total-height"></div>
                                <div class="height-message color-d-total-height-error"></div>
                            </div>
                        </div><!-- end color side d -->

                        <!-- Picker for customer to choose the color -->
                        <div class="clear"></div>
                        <div class="colorSelectBox">
                            <div>14 Guage Semi-Transparent</div>
                            <div>
                                <div class="azRed" value="#DD2A13" name="Aztec Red"></div>
                                <div class="azYellow" value="#E5BC0A" name="Aztec Yellow"></div>
                            </div>
                            <div class="clear"></div>
                            <div>18 oz Industrial Stength Viyl Coated</div>
                            <div>
                                <div class="yellow" value="yellow" name="yellow"></div>
                                <div class="blue" value="blue" name="blue"></div>
                                <div class="black" value="black" name="black"></div>
                                <div class="brown" value="brown" name="brown"></div>
                                <div class="grey" value="grey" name="grey"></div>
                                <div class="green" value="green" name="green"></div>
                                <div class="white" value="white" name="white"></div>
                                <div class="orange" value="orange" name="orange"></div>
                            </div>
                        </div>

                    </div> <!-- end selections -->
                </div>  <!-- end step 2 div-->

                <div class="clearWmarginForSteps"></div>

                <div id="step3">
                    <!--Header-->
                    <header class="curtain-selection-headers">
                        <div class="step-arrows">Step 3</div>
                        <div class="step-headers">Choose Track & Trolley kit (Optional)</div>
                    </header>

                    <!-- Selections-->
                    <div class="step3-selections">
                        <!-- Help notes-->
                        <div class="help-section">
                            <div class="help-header">Choose Track & Trolley Kit</div>
                            <div class="help">Help<span class="fa fa-question-circle"></span></div>
                            <div class="help-notes">
                                Determine how the curtain will be hung. Will the curtains be suspended? Or will they be attached on a track directly to the ceiling....or will you be mounting to a truss or I-beam (ceiling connectors allow for direct attachment to the ceiling, beam clamp connectors allow for I-beam attachment or truss attachment and wall mount connector allow for the curtain to be attached to a wall. When suspending a curtain threaded rod or chain link connectors are the most common. Radius Connectors allow for the curtain to slide around corners.... ')
                            </div>
                        </div><!-- end help-section div-->

                        <div class="clear"></div>
                        <!-- Image showing the different mounts-->
                        <div class="mount-names">
                            <img class="mount-image" src="/images/mounts.svg" alt="4 different mount options">
                            <div class="wall">Wall Mount</div>
                            <div class="threaded-rod" style="position: relative;">Threaded Rod Mount</div>
                            <div class="ceiling">Ceiling Mount</div>
                            <div class="chain-link">Chain Link Mount</div>

                        </div><!-- end mount-names div -->

                        <div class="clear"></div>
                        <div class="mount-options">
                            <div class="mount-side-a">
                                <p class="sideABCD-header">Side A</p>
                                <div class="dimension-width">
                                    <select name="select-mounts" class="select-mounts mount-a">
                                        <option value="No Mount" group="mounts">No Track</option>
                                        <option value="Wall Mount" group="mounts">Wall Mount</option>
                                        <option value="Threaded Rod Mount" group="mounts">Threaded Rod Mount</option>
                                        <option value="Ceiling Mount" group="mounts">Ceiling Mount</option>
                                        <option value="Chain Link Mount" group="mounts">Chain Link Mount</option>
                                    </select>
                                </div>
                            </div><!-- end mount side A -->

                            <div class="mount-side-b">
                                <p class="sideABCD-header">Side B</p>
                                <div class="dimension-width">
                                    <select name="select-mounts" class="select-mounts mount-b">
                                        <option value="No Mount" group="mounts">No Track</option>
                                        <option value="Wall Mount" group="mounts">Wall Mount</option>
                                        <option value="Threaded Rod Mount" group="mounts">Threaded Rod Mount</option>
                                        <option value="Ceiling Mount" group="mounts">Ceiling Mount</option>
                                        <option value="Chain Link Mount" group="mounts">Chain Link Mount</option>
                                    </select>
                                </div>
                            </div><!-- end mount side B -->

                            <div class="mount-side-c">
                                <p class="sideABCD-header">Side C</p>
                                <div class="dimension-width">
                                    <select name="select-mounts" class="select-mounts mount-c">
                                        <option value="No Mount" group="mounts">No Track</option>
                                        <option value="Wall Mount" group="mounts">Wall Mount</option>
                                        <option value="Threaded Rod Mount" group="mounts">Threaded Rod Mount</option>
                                        <option value="Ceiling Mount" group="mounts">Ceiling Mount</option>
                                        <option value="Chain Link Mount" group="mounts">Chain Link Mount</option>
                                    </select>
                                </div>
                            </div><!-- end mount side c -->

                            <div class="mount-side-d">
                                <p class="sideABCD-header">Side D</p>
                                <div class="dimension-width">
                                    <select name="select-mounts" class="select-mounts mount-d">
                                        <option value="No Mount" group="mounts">No Track</option>
                                        <option value="Wall Mount" group="mounts">Wall Mount</option>
                                        <option value="Threaded Rod Mount" group="mounts">Threaded Rod Mount</option>
                                        <option value="Ceiling Mount" group="mounts">Ceiling Mount</option>
                                        <option value="Chain Link Mount" group="mounts">Chain Link Mount</option>
                                    </select>
                                </div>
                            </div><!-- end mount side d -->
                        </div><!-- end mount-options -->

                    </div><!-- end selections -->
                </div>  <!-- end step 3 div-->

                <div class="clearWmarginForSteps"></div>
                <div id="step4">
                    <!-- Header-->
                    <header class="curtain-selection-headers">
                        <div class="step-arrows">Step 4</div>
                        <div class="step-headers">Extra Options</div>
                    </header>

                    <!-- Selections-->
                    <div class="step4-selections">
                        <!-- Help notes-->
                        <div class="help-section">
                            <div class="help-header">Please select the additions needed</div>
                            <div class="help">Help<span class="fa fa-question-circle"></span></div>
                            <div class="help-notes">four-steps-curtain-selectionsfour-steps-curtain-selectionsfour-steps-curtain-selectionsfour-steps-curtain-selectionsfour-steps-curtain-selectionsour-steps-curtain-selectionsfour-steps-curtain-selectionsfour-steps-curtain-selectionsfour-steps-curtain-selectionsfour-steps-curtain-selections</div>
                        </div>

                        <div class="clear"></div>
                        <div class="extraOp">
                            <!--<div class="extraName">Radius Connector</div>-->
                            <div class="extraAcc">
                                <label for="" class="extraName">Radius Connector</label>
                                <div class="extraPrice acc1">$65.00
                                    <select name="" id="radius" class="opt-qty">
                                        <?php
                                            $maxQty = 50;
                                            for($i = 0; $i <= $maxQty; $i++){
                                                echo "<option value='radius'>";
                                                echo $i;
                                                echo "</option>";
                                            }
                                        ?>
                                    </select>
                                </div>
                            </div>

                            <div class="extraAcc">
                                <label for="" class="extraName">Radius1 Connector</label>
                                <div class="extraPrice acc2">$60.00
                                    <select name="" id="radius1" class="opt-qty">
                                        <?php
                                            $maxQty = 50;
                                            for($i = 0; $i <= $maxQty; $i++){
                                                echo "<option value='radius1'>";
                                                echo $i;
                                                echo "</option>";
                                            }
                                        ?>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div><!-- end selections -->
                </div>  <!-- end step 4 div-->

            </div> <!-- end three steps div -->

            <div class="clear"></div>
            <!-- <button type="submit" class="add-to-cart">Add to Cart <span class="fa fa-cart-plus"></span></button> -->
            <!-- <input type="hidden" name="descOption" value="Holes on 2 in. centred"/> -->
            <input class="amount" type="hidden" name="amount" value="0" />
            <input type="hidden" name="item_name" value="stript-curtain" />
            <input type="hidden" name="refer" value="welding.php" />
            <input type="hidden" name="sku" value="WHDIV-STR001" />
            <input type='hidden' name='unit' value='0' />
            <input type="hidden" name="weight" value="" />
            <!-- <input type="hidden" name="welding" value="1" /> -->
            <input type="hidden" name="action" id="action" value="add" />
            <!-- <input type='submit' name='submit' class="add-to-cart" border='0' alt='Add this product to your shopping cart now.' value="Add To Cart"/><span class="fa fa-cart-plus"></span> -->
            <button type="submit" class="add-to-cart" alt='Add this product to your shopping cart now.'>Add to Cart <span class="fa fa-cart-plus"></span></button>
        </form>



    </div>

    <!--     <div class="cart-info">
            <h1>Cart Summary</h1>
            <div class="sides">Side Chosen: <span></span></div>


            <hr>
            <div class="side-info">
                <div class="inputA"><header>Side A:</header>
                    <div class="w">Width: </div>
                    <div class="h">Height: </div>
                </div>
                <div class="colorA"><header>Colors:</header>
                    <div class="sideAcolor1">Color 1: </div>
                    <div class="sideAcolor2">Color 2: </div>
                    <div class="sideAcolor3">Color 3: </div>
                </div>
                <div><header>Mount: </header>
                    <div class="mount-selected mountA">Mount: <span></span></div>
                </div>
            </div>

            <div class="side-info">
                <div class="inputB"><header>Side B:</header>
                    <div class="w">Width: </div>
                    <div class="h">Height: </div>
                </div>
                <div class="colorB"><header>Colors:</header>
                    <div class="sideBcolor1">Color 1: </div>
                    <div class="sideBcolor2">Color 2: </div>
                    <div class="sideBcolor3">Color 3: </div>
                </div>
                <div><header>Mount: </header>
                    <div class="mount-selected mountB">Mount: <span></span></div>
                </div>
            </div>

            <div class="side-info">
                <div class="inputC"><header>Side C:</header>
                    <div class="w">Width: </div>
                    <div class="h">Height: </div>
                </div>
                <div class="colorC"><header>Colors:</header>
                    <div class="sideCcolor1">Color 1: </div>
                    <div class="sideCcolor2">Color 2: </div>
                    <div class="sideCcolor3">Color 3: </div>
                </div>
                <div><header>Mount: </header>
                    <div class="mount-selected mountC">Mount: <span></span></div>
                </div>
            </div>

            <div class="side-info">
                <div class="inputD"><header>Side D:</header>
                    <div class="w">Width: </div>
                    <div class="h">Height: </div>
                </div>
                <div class="colorD"><header>Colors:</header>
                    <div class="sideDcolor1">Color 1: </div>
                    <div class="sideDcolor2">Color 2: </div>
                    <div class="sideDcolor3">Color 3: </div>
                </div>
                <div><header>Mount: </header>
                    <div class="mount-selected mountD">Mount: <span></span></div>
                </div>
            </div>

            <div class="clear"></div>
            <hr>
            <div class="side-info btn-restart-pay">
                <button class="btn-restart">Restart</button>
            </div>
        </div><!-- end cart-info div -->

</div>
<div class="clear"></div>
<footer id="wholeFooter">
    <?php require("../_inc/footer.php"); ?>
</footer>

<!--ET-->
<!-- <script src="js/uwd_scripts.js"></script> -->
<!--<script src="js/scripts.js"></script>-->
<script src="/scripts/jquery-min-1.11.3.js"></script>
<script type="text/javascript" language="javascript">
    $(document).ready(function(){
        var resetValueToZero = 0;
        var maxWidthHeight = 20;
        var minWidthHeight = 0;
        var minShipping = 25;
        var maxShipping = 140;

        var defaultColorPickerField1 = "white";
        var defaultColorPickerField2 = "white";
        var defaultColorPickerField3 = "white";
        var widthHeightProductMultiplier = 1.65;

        var priceSummary = mountABCDtotal + sideABCDtotal;

        var $sideAinput = $('.dimensions-side-a input');
        var $sideBinput = $('.dimensions-side-b input');
        var $sideCinput = $('.dimensions-side-c input');
        var $sideDinput = $('.dimensions-side-d input');

        $('.help-notes').hide();             // hide the notes for help
        // $('.cart-info').hide();

        /*Toggles the help-notes div when help is clicked*/
        $('.help').on('click', function(){
            $(this).next('div').slideToggle( "slow" );
        });

        /*Makes the colorSelect hide when mouse clicked other places*/
        $(document).on('mouseup', function (e){
            var container = $(".colorSelectBox");

            if (!container.is(e.target) // if the target of the click isn't the container...
                && container.has(e.target).length === 0){ // ... nor a descendant of the container
                // if(container.hasClass('visible')){
                container.hide();
                // container.removeClass('visible');
                // }

                //container.removeClass('visible');
            }
        });

        /*Makes the product summary div change fixed position when it reaches the footer*/
        //makes the prodcut summary won't go pass the footer
        var doc = $(document);

        doc.scroll(function () {
            // make sure to wrap yours entire footer in some css selector
            var footer = $('#wholeFooter');
            var p = $('#product-fixed');
            var s = $('#product-summary-position');

            var top = doc.scrollTop() + s.offset().top + p.height() + 20;
            var footerTop = footer.offset().top;

            var offset = footerTop - top;

            if (offset < 0) {
                p.css({'margin-top': '' + offset + 'px'});
            } else {
                p.css({'margin-top': 0});
            }
        });

        /*Checking, storing, and returning different values for different functions*/
        //used in getOnlyWidthInput(), singlePrice(), getInputsForOneSide() and getHeightInInches()
        function storeInputValues(sideInput, action){
            var values = [];
            sideInput.each(function(){
                var $thisValue = $(this).val();
                if(($thisValue == "") || (isNaN($thisValue))
                    || ($thisValue < minWidthHeight)){
                    values.push(parseInt(resetValueToZero));
                }else {
                    values.push(parseInt($thisValue));
                }
            });
            values[1] = values[1]/12;
            values[3] = values[3]/12;
            switch (action){
                case ('getWidthInput'):
                    return values[0] + values[1];
                    break;
                case ('getSinglePrice'):
                    return ((values[0]+values[1])*(values[2]+values[3])) * widthHeightProductMultiplier;
                    break;
                case ('storeInputs'):
                    values[1] = values[1]*12;
                    values[3] = values[3]*12;
                    return values;
                    break;
                case ('getHeightInInch'):
                    values[2] = values[2]*12;
                    values[3] = values[3]*12;
                    return values[2] + values[3];
                    break;
            }

        }

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

            $(dimension).css({"opacity":".3"});
            var dimensionInput = (dimension + " input");
            $(dimensionInput).attr('disabled', true);

            $(color).css({"opacity":".3"});
            var colorSelect = (color + " select");
            $(colorSelect).attr('disabled', true);

            $(mount).css({"opacity":".3"});
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

        /*Function to make the curtain side selection opacity lower than usual and disable attribute to true*/
        function curtainFadeOutAndDisabled(side){
            $(side).css({"opacity":".3"});
            $(side).attr('disabled', true);
            // Removes the checkMark class
            delCheckMarkForCurtainSelection(side);
        }

        /*Function to add class to certain side section's p element which will show a blue checkmark at the end of p element*/
        function addCheckMarkForCurtainSelection(side){
            $(side).children().next().addClass('checkMark');
        }

        /*Function to remove the class when side is not selected this function is used inside curtainFadeOutAndDisabled function*/
        function delCheckMarkForCurtainSelection(side){
            $(side).children().next().removeClass('checkMark');
        }

        //Fading curtain single, two and three so on start page will start with 4 sides enabled
        curtainFadeOutAndDisabled(singleSide);
        curtainFadeOutAndDisabled(twoSides);
        curtainFadeOutAndDisabled(threeSides);

        //Start making the clicks to work when selecting different side of curtains
        $(singleSide).on('click', function(e){
            e.preventDefault();
            var attrDisabled = $(this).attr('disabled');

            if(attrDisabled == 'disabled'){
                $(singleSide).css({"opacity":"1"});
                $(singleSide).removeAttr('disabled');
                // disables all two, three and four sides
                disableSides(twoSides,dimensionSideB,colorSideB,mountSideB);
                disableSides(threeSides,dimensionSideC,colorSideC,mountSideC);
                disableSides(fourSided,dimensionSideD,colorSideD,mountSideD);
                // Adds the checkMark class
                addCheckMarkForCurtainSelection(singleSide);
                // Only calculate the input values for side a then append it
                sideABCDtotal = (sideAtotal).toFixed(2);
                mountABCDtotal = (mountSideAPrice).toFixed(2);
                appendPriceSummary();
                // Remove the input values for side b, c, d and mount b, c, d
                emptyInputValue($('.dimensions-side-b input'), $('.mount-b'), $('.color-b'));
                emptyInputValue($('.dimensions-side-c input'), $('.mount-c'), $('.color-c'));
                emptyInputValue($('.dimensions-side-d input'), $('.mount-d'), $('.color-d'));
                // Clear the total for side b, c and d
                sideBtotal = resetValueToZero;
                sideCtotal = resetValueToZero;
                sideDtotal = resetValueToZero;
                mountSideBPrice = resetValueToZero;
                mountSideCPrice = resetValueToZero;
                mountSideDPrice = resetValueToZero;
            }
        });
        $(twoSides).on('click', function(e){
            e.preventDefault();
            var attrDisabled = $(this).attr('disabled');

            if(attrDisabled == 'disabled'){
                //enable two sides
                enableSides(twoSides,dimensionSideB,colorSideB,mountSideB);
                //only fade out singleSide but the column input is available
                curtainFadeOutAndDisabled(singleSide);
                // disables both three and four sides
                disableSides(threeSides,dimensionSideC,colorSideC,mountSideC);
                disableSides(fourSided,dimensionSideD,colorSideD,mountSideD);
                // Adds the checkMark class
                addCheckMarkForCurtainSelection(twoSides);
                // Only calculate the input values for side a and b then append it
                sideABCDtotal = (sideAtotal + sideBtotal).toFixed(2);
                mountABCDtotal = (mountSideAPrice + mountSideBPrice).toFixed(2);
                appendPriceSummary();
                // Remove the input values for side c, d and mount c, d
                emptyInputValue($('.dimensions-side-c input'), $('.mount-c'), $('.color-c'));
                emptyInputValue($('.dimensions-side-d input'), $('.mount-d'), $('.color-d'));
                // Clear the total for side c, d and mount c, d
                sideCtotal = resetValueToZero;
                sideDtotal = resetValueToZero;
                mountSideCPrice = resetValueToZero;
                mountSideDPrice = resetValueToZero;
            }
        });
        $(threeSides).on('click', function(e){
            e.preventDefault();
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
                // Adds the checkMark class
                addCheckMarkForCurtainSelection(threeSides);
                // Only calculate the input values for side a, b, c and append it
                sideABCDtotal -= sideDtotal.toFixed(2);
                mountABCDtotal -= mountSideDPrice.toFixed(2);
                appendPriceSummary();
                // Removes the input values for side d
                emptyInputValue($('.dimensions-side-d input'), $('.mount-d'), $('.color-d'));
                // Clear the total for side d and mount d
                sideDtotal = resetValueToZero;
                mountSideDPrice = resetValueToZero;
            }
        });
        $(fourSided).on('click', function(e){
            e.preventDefault();
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
                // Adds the checkMark class
                addCheckMarkForCurtainSelection(fourSided);
            }
        });
        //Done with making the curtain selections

        /******************************************************************/
        /****Foot /Inches input Section + Product Summary price output*****/
        /******************************************************************/

        /*Global Variables for the totals*/
        var sideABCDtotal   = resetValueToZero;
        var sideAtotal      = resetValueToZero;
        var sideBtotal      = resetValueToZero;
        var sideCtotal      = resetValueToZero;
        var sideDtotal      = resetValueToZero;

        /*Uses singlePrice() here to get price for all 4 sides when input keyup*/
        $('.step2-selections input').on('keyup', function(){
            sideAtotal = singlePrice($sideAinput);
            sideBtotal = singlePrice($sideBinput);
            sideCtotal = singlePrice($sideCinput);
            sideDtotal = singlePrice($sideDinput);
            sideABCDtotal = (sideAtotal + sideBtotal + sideCtotal +sideDtotal);

            var sideAWidthFT = getOnlyWidthInput($sideAinput);
            var sideBWidthFT = getOnlyWidthInput($sideBinput);
            var sideCWidthFT = getOnlyWidthInput($sideCinput);
            var sideDWidthFT = getOnlyWidthInput($sideDinput);

            $('.select-mounts').each(function(){
                var $this = $(this);
                var value = $this.val();

                if(value != 'No Mount'){
                    var myClass = $this.attr('class');
                    var splitClass = myClass.split(' ');
                    var sc1 = splitClass[1];

                    switch(sc1){
                        case 'mount-a':
                            mountABCDtotal -= mountSideAPrice;
                            mountSideAPrice = sideAWidthFT * 4.5;
                            mountABCDtotal += mountSideAPrice;
                            break;
                        case 'mount-b':
                            mountABCDtotal -= mountSideBPrice;
                            mountSideBPrice = sideBWidthFT * 4.5;
                            mountABCDtotal += mountSideBPrice;
                            break;
                        case 'mount-c':
                            mountABCDtotal -= mountSideCPrice;
                            mountSideCPrice = sideCWidthFT * 4.5;
                            mountABCDtotal += mountSideCPrice;
                            break;
                        case 'mount-d':
                            mountABCDtotal -= mountSideDPrice;
                            mountSideDPrice = sideDWidthFT * 4.5;
                            mountABCDtotal += mountSideDPrice;
                            break;
                    }
                }
            });

            appendPriceSummary();
        });
        /*Function to gets the price for single Side*/
        //Each side has 4 values
        //Saves the 4 values inside a value[]
        //Width     value[0] and value[1] ---> index 0 is foot, 1 is inches
        //Height    value[2] and value[3] ---> index 2 is foot, 3 is inches
        //value[1]/[3] are inches and always needs to be converted to foot by dividing 12
        function singlePrice(sideInput){
            return storeInputValues(sideInput, 'getSinglePrice');
        }

        /*Function to empty all the value input of one side*/
        function emptyInputValue(sideInput, mountInput, numberOfColorInput){
            sideInput.each(function(){
                $(this).val('');
                $(this).css({"border": "none"});
            });

            mountInput.val('No Mount');
            numberOfColorInput.val('');
            numberOfColorInput.closest('div').find('.color1').attr({"data-semi": "false", "data-coated": "false", "value": "None Chosen"}).hide();
            numberOfColorInput.closest('div').find('.color2').attr({"data-semi": "false", "data-coated": "false", "value": "None Chosen"}).hide();
            numberOfColorInput.closest('div').find('.color3').attr({"data-semi": "false", "data-coated": "false", "value": "None Chosen"}).hide();
            numberOfColorInput.closest('div').find('.total-height-input').hide();
            numberOfColorInput.closest('div').find('.total-height-input input').val(0);
            numberOfColorInput.closest('div').find('.height-message').empty();
        }

        /*Function to validate all width height inch foot input fields*/
        function widthHeightInputValidation(inputWH){
            inputWH.on('keyup', function(){
                if((inputWH.val() < minWidthHeight) || (!($.isNumeric(inputWH.val())))){
                    inputWH.css({"border":"1px solid red"});
                }else{
                    inputWH.css({"border":"none"});
                }
            });
        }
        widthHeightInputValidation($("input[name='a-width-foot']"));
        widthHeightInputValidation($("input[name='a-width-inch']"));
        widthHeightInputValidation($("input[name='a-height-foot']"));
        widthHeightInputValidation($("input[name='a-height-inch']"));

        widthHeightInputValidation($("input[name='b-width-foot']"));
        widthHeightInputValidation($("input[name='b-width-inch']"));
        widthHeightInputValidation($("input[name='b-height-foot']"));
        widthHeightInputValidation($("input[name='b-height-inch']"));

        widthHeightInputValidation($("input[name='c-width-foot']"));
        widthHeightInputValidation($("input[name='c-width-inch']"));
        widthHeightInputValidation($("input[name='c-height-foot']"));
        widthHeightInputValidation($("input[name='c-height-inch']"));

        widthHeightInputValidation($("input[name='d-width-foot']"));
        widthHeightInputValidation($("input[name='d-width-inch']"));
        widthHeightInputValidation($("input[name='d-height-foot']"));
        widthHeightInputValidation($("input[name='d-height-inch']"));



        /***************************/
        /****Pick Color Section*****/
        /***************************/
        $('.colorSelectBox').hide();  //Hides the picker box

        $('div.color1 div.color2 div.color3').hide();  //hide number of colors until a value is selected
        $('.total-height-input').hide();  //hide the inputs in the color field
        var colorHolder = null; //used to store the location where color is picked

        /* Function checks which side's div is clicked and pop put the colorSelectBox with the position of the div popping out */
        function colorFieldPicker(onClickSide, xValInput, yValInput,side){
            onClickSide.on('click', function(event){
                //store the class of the colorHolder to a global variable
                colorHolder = $(this).attr('class');
                //x and y value of position where the color picker should pop up / toggle
                var yVal = (event.clientY) + "px";
                var xVal = (event.clientX) + "px";
                $('.colorSelectBox').css({"left": xVal, "top": yVal}).toggle();
                //empty the field where it says 'Click to choose colors'
                $(this).closest('div').find('.gradient').children().empty();
                colorPickerOnClick(side);
            });
        }
        /* Function which then determine what color is clicked and return the color to the div selected as the div's background color */
        function colorPickerOnClick(side){
            //semi colors on click
            $('div.azRed')
                .add('div.azYellow')
                .on('click', function(){
                    var colorAttr = $(this).attr('value');
                    var nameAttr = $(this).attr('name');
                    var splitClass = colorHolder.split(" ");
                    side.closest('div').find('.'+splitClass[0] + '.'+splitClass[1])
                        .css({"background": colorAttr, "border": "none"})
                        .attr({"value": colorAttr, "data-semi": true, "data-coated": false, "name": nameAttr});
                    $('.colorSelectBox').css({"display": "none"});
                });

            //coated color on click
            $('div.yellow')
                .add('div.blue')
                .add('div.black')
                .add('div.brown')
                .add('div.grey')
                .add('div.green')
                .add('div.orange')
                .on('click', function(){
                    var colorAttr = $(this).attr('value');
                    var nameAttr = $(this).attr('name');
                    var splitClass = colorHolder.split(" ");
                    side.closest('div').find('.'+splitClass[0] + '.'+splitClass[1])
                        .css({"background": colorAttr, "border": "none"})
                        .attr({"value": colorAttr, "data-semi": false, "data-coated": true, "name": nameAttr});
                    $('.colorSelectBox').css({"display": "none"});
                });
            $('div.white').on('click', function(){
                var colorAttr = $(this).attr('value');
                var nameAttr = $(this).attr('name');
                var splitClass = colorHolder.split(" ");
                side.closest('div').find('.'+splitClass[0] + '.'+splitClass[1])
                    .css({"background": colorAttr, "border": "1px solid lightgrey"})
                    .attr({"value": colorAttr, "data-semi": false, "data-coated": true, "name": nameAttr});
                $('.colorSelectBox').css({"display": "none"});
            });
        }

        /* Enabling the function to choose colors */
        colorFieldPicker($('.color-side-a .number-of-color-field > div'), 3, 250, $('.color-side-a'));
        colorFieldPicker($('.color-side-b .number-of-color-field > div'), 2, 225, $('.color-side-b'));
        colorFieldPicker($('.color-side-c .number-of-color-field > div'), 1.5, 250, $('.color-side-c'));
        colorFieldPicker($('.color-side-d .number-of-color-field > div'), 1.5, 235, $('.color-side-d'));

        /* Open the color selection field after number of colors is selected */
        $('.number-of-colors').on('change', function(){
            var $clicked = $(this);
            var $closestDiv = $clicked.closest("div");

            var chooseColorValue = $clicked.val();

            switch(chooseColorValue){
                case '1':
                    $closestDiv.find('.total-height-input').css({"top":"-155px"});
                    $closestDiv.find('div.color1').show().css({"width": "inherit", "height": "100%", "background-color": defaultColorPickerField1, "border-radius": "5px", "border": "2px dashed blue"}).attr({"value": defaultColorPickerField1, "data-semi": "true", "data-coated": "false", "name": defaultColorPickerField1}).empty().append("<div class='gradientLayer gradient'><div class='choose-color-message1'>Click To Choose Colors</div></div>");
                    $closestDiv.find('input.top-color').attr({"class": "top-color color1-1", "value": "0"});
                    $closestDiv.find('div.heightInputTop').show();
                    $closestDiv.find('div.color2').attr({"data-semi": "false", "data-coated": "false", "value": "None Chosen", "name": "None Chosen"}).hide();
                    $closestDiv.find('div.heightInputMiddle').hide();
                    $closestDiv.find('div.color3').attr({"data-semi": "false", "data-coated": "false", "value": "None Chosen", "name": "None Chosen"}).hide();
                    $closestDiv.find('div.heightInputBottom').hide();
                    $closestDiv.find('.total-height-input input').val(0);
                    $closestDiv.find('.height-message').empty();
                    break;
                case '2':
                    $closestDiv.find('.total-height-input').css({"top":"-70px"});
                    $closestDiv.find('div.color1').show().css({"width": "inherit", "height": "50%", "background-color": defaultColorPickerField2, "border-radius": "5px 5px 0 0", "border": "2px dashed blue"}).attr({"value": defaultColorPickerField2, "data-semi": "true", "data-coated": "false", "name": defaultColorPickerField1}).empty().append("<div class='gradientLayer2 gradient'><div class='choose-color-message2-1'>Click To Choose Colors</div></div>");
                    $closestDiv.find('input.top-color').attr({"class": "top-color color2-1", "value": "0"});
                    $closestDiv.find('div.heightInputTop').show();
                    $closestDiv.find('div.color2').show().css({"width": "inherit", "height": "50%", "background-color": defaultColorPickerField3, "border-radius": "0 0 5px 5px", "border": "2px dashed blue", "border-top": "none"}).attr({"value": defaultColorPickerField3, "data-semi": "true", "name": defaultColorPickerField2}).empty().append("<div class='gradientLayer2 gradient'><div class='choose-color-message2-2'>Click To Choose Colors</div></div>");
                    $closestDiv.find('input.middle-color').attr({"class": "middle-color color2-2", "value": "0"});
                    $closestDiv.find('div.heightInputMiddle').show();
                    $closestDiv.find('div.color3').attr({"data-semi": "false", "data-coated": "false", "value": "None Chosen", "name": "None Chosen"}).hide();
                    $closestDiv.find('div.heightInputBottom').hide();
                    $closestDiv.find('.total-height-input input').val(0);
                    $closestDiv.find('.height-message').empty();
                    break;
                case '3':
                    $closestDiv.find('.total-height-input').css({"top":"-50px"});
                    $closestDiv.find('div.color1').show().css({"width": "inherit", "height": "32.5%", "background-color": defaultColorPickerField1, "border-radius": "5px 5px 0 0", "border": "2px dashed blue"}).attr({"value": defaultColorPickerField1, "data-semi": "true", "data-coated": "false", "name": defaultColorPickerField1}).empty().append("<div class='gradientLayer3 gradient'><div class='choose-color-message3-1'>Click To Choose Colors</div></div>");
                    $closestDiv.find('input.top-color').attr({"class": "top-color color3-1", "value": "0"});
                    $closestDiv.find('div.heightInputTop').show();
                    $closestDiv.find('div.color2').show().css({"width": "inherit", "height": "32.5%", "background-color": defaultColorPickerField2,"border-right": "2px dashed blue", "border-left": "2px dashed blue", "border-bottom": "none","border-radius": "initial"}).attr({"value": defaultColorPickerField2, "data-semi": "true", "data-coated": "false", "name": defaultColorPickerField2}).empty().append("<div class='gradientLayer3 gradient'><div class='choose-color-message3-2'>Click To Choose Colors</div></div>");
                    $closestDiv.find('input.middle-color').attr({"class": "middle-color color3-2", "value": "0"});
                    $closestDiv.find('div.heightInputMiddle').show();
                    $closestDiv.find('div.color3').show().css({"width": "inherit", "height": "32.5%", "background-color": defaultColorPickerField3, "border-radius": "0 0 5px 5px", "border": "2px dashed blue"}).attr({"value": defaultColorPickerField3, "data-semi": "true", "data-coated": "false", "name": defaultColorPickerField3}).empty().append("<div class='gradientLayer3 gradient'><div class='choose-color-message3-3'>Click To Choose Colors</div></div>");
                    $closestDiv.find('input.bottom-color').attr({"class": "bottom-color color3-3", "value": "0"});
                    $closestDiv.find('div.heightInputBottom').show();
                    $closestDiv.find('.total-height-input input').val(0);
                    $closestDiv.find('.height-message').empty();
                    break;
                default:
                    $closestDiv.find('div.color1').attr({"data-semi": "false", "data-coated": "false", "value": "None Chosen", "name": "None Chosen"}).hide();
                    $closestDiv.find('div.color2').attr({"data-semi": "false", "data-coated": "false", "value": "None Chosen", "name": "None Chosen"}).hide();
                    $closestDiv.find('div.color3').attr({"data-semi": "false", "data-coated": "false", "value": "None Chosen", "name": "None Chosen"}).hide();
                    $closestDiv.find('.total-height-input input').val(0);
                    $closestDiv.find('.height-message').empty();
                    $closestDiv.find('.total-height-input').hide();
                    break;
            }
        });

        //This is to prevent the colorSelectBox from opening when clicking the number input field
        $('.total-height-input').on('click', function(e){
            e.stopPropagation();
            $('.colorSelectBox').hide();

        });

        /*************************************/
        /**** Mounting Select Calculation ****/
        /*************************************/

        /*Set default values of each mount sides and total is 0 too*/
        var mountSideAPrice = resetValueToZero;
        var mountSideBPrice = resetValueToZero;
        var mountSideCPrice = resetValueToZero;
        var mountSideDPrice = resetValueToZero;
        var mountABCDtotal = resetValueToZero;

        function getOnlyWidthInput(sideInput){
            return storeInputValues(sideInput, 'getWidthInput');
        }

        $('.select-mounts').on('change', function(){
            var $clicked = $(this);
            var valueSelected = $clicked.val();
            var price = 0;

            var sideAWidthFT = getOnlyWidthInput($sideAinput);
            var sideBWidthFT = getOnlyWidthInput($sideBinput);
            var sideCWidthFT = getOnlyWidthInput($sideCinput);
            var sideDWidthFT = getOnlyWidthInput($sideDinput);

            var myClass = $clicked.attr('class');
            var splitClass = myClass.split(" ");
            var sc1 = splitClass[1];

            if(valueSelected != 'No Mount'){
                switch(sc1){
                    case 'mount-a':
                        mountSideAPrice = (sideAWidthFT * 4.5);
                        break;
                    case 'mount-b':
                        mountSideBPrice = (sideBWidthFT * 4.5);
                        break;
                    case 'mount-c':
                        mountSideCPrice = (sideCWidthFT * 4.5);
                        break;
                    case 'mount-d':
                        mountSideDPrice = (sideDWidthFT * 4.5);
                        break;
                }
            }else{
                switch(sc1){
                    case 'mount-a':
                        mountSideAPrice = 0;
                        break;
                    case 'mount-b':
                        mountSideBPrice = 0;
                        break;
                    case 'mount-c':
                        mountSideCPrice = 0;
                        break;
                    case 'mount-d':
                        mountSideDPrice = 0;
                        break;
                }
            }

            //always calculate the total of all mount sides
            mountABCDtotal = (mountSideAPrice + mountSideBPrice + mountSideCPrice + mountSideDPrice).toFixed(2);

            appendPriceSummary();
        });

        /*******************/
        /*fixed mount price*/
        /*******************/
        // //putting the name of mount in array and price will correspond to the same array index
        // var diffMountNames = ['', 'Wall Mount', 'Threaded Rod Mount', 'Ceiling Mount', 'Chain Link Mount'];
        // var diffMountPricing = [0,5,4.5,5.5,30];

        // $('.select-mounts').on('change', function(){
        //     var $clicked = $(this);
        //     var valueSelected = $clicked.val();     //check the value being selected
        //     var priceIndex = 0;                     //use to get the index of the price
        //     var selectedMountPrice = 0;             //price set to 0 initially

        //     //in the array if the value selected matches to the one in the array saves the index to priceIndex
        //     $.each(diffMountNames, function(index, value){
        //         if(valueSelected == value){
        //             priceIndex = index;
        //         }
        //     });

        //     //uses the priceIndex found above and loop through the array to find the corresponding index which will the the price of the product
        //     $.each(diffMountPricing, function(index, value){
        //        if(priceIndex == index){
        //            selectedMountPrice = value;
        //        }
        //     });

        //     //find the class being clicked and split it to check exactly with side is clicked
        //     //then use the class to decide which side variable is used to store the price of the mount selected
        //     var myClass = $clicked.attr('class');
        //     var splitClass = myClass.split(" ");
        //     var sc1 = splitClass[1];

        //     switch(sc1){
        //       case 'mount-a':
        //         mountSideAPrice = selectedMountPrice;
        //         break;
        //       case 'mount-b':
        //         mountSideBPrice = selectedMountPrice;
        //         break;
        //       case 'mount-c':
        //         mountSideCPrice = selectedMountPrice;
        //         break;
        //       case 'mount-d':
        //         mountSideDPrice = selectedMountPrice;
        //         break;
        //     }

        //     //always calculate the total of all mount sides
        //     mountABCDtotal = (mountSideAPrice + mountSideBPrice + mountSideCPrice + mountSideDPrice);

        //     appendPriceSummary();
        // });

        /*Function to append price summary into the price summary div and also change the hidden input amount field value which will be used to pass into the order-cart.php*/
        function appendPriceSummary(){
            priceSummary = (Number(sideABCDtotal) + Number(mountABCDtotal) + Number(extraAccAllTotal)).toFixed(2);
            if(isNaN(priceSummary)){
                priceSummary = 0.00;
            }
            $('.price').empty().append("$" + priceSummary);
            $('form input[name="amount"]').attr('value', priceSummary);
        }

        /***********/
        /*Extra Acc*/
        /***********/
        var extraAcc1Price = 0;
        var extraAcc2Price = 0;
        var extraAccAllTotal = 0;

        var extraAccNames = ['radius', 'radius1']; //stores the short name for the extra acc
        var extraAccPrices = [65, 60];  //stores the price for the extra acc

        $('.opt-qty').on('change', function(){
            var $this = $(this);
            var valueSelected = $this.val();  //gets the value which is the short name for the extra acc.
            var tempIndex = 0;
            var qtySelected = parseInt($this.find('option:selected').text());  //gets the text of selected field which is the qty
            var accPrice = 0;

            //use value selected to search through the array and gets the index
            $.each(extraAccNames, function(index, value){
                if(valueSelected == value){
                    tempIndex = index;
                }
            });

            //uses the index found above to match the price in the array
            $.each(extraAccPrices, function(index, price){
                if(index == tempIndex){
                    accPrice = price;
                }
            });

            //determines which acc is selected in order to know where to store the price
            switch (valueSelected){
                case 'radius':
                    extraAcc1Price = accPrice * qtySelected;
                    break;
                case 'radius1':
                    extraAcc2Price = accPrice * qtySelected;
            }
            extraAccAllTotal = extraAcc1Price + extraAcc2Price;
            appendPriceSummary();
        });


        /**********************************/
        /********** Cart Summary **********/
        /**********************************/


        // $('.add-to-cart').on('click', function(e){
        //     e.preventDefault();
        //     //var sideA_color1_val = $(".color-side-a .number-of-color-field div[name='color1']").attr('value');
        //     //console.log(sideA_color1_val);
        //     //$.post('toCart.php',{ sideA_Color1_val: sideA_color1_val })
        //     ////window.location.href='toCart.php';
        //     //.done(function() {
        //     //        //window.location.href = "cartPage.php";
        //     //    window.location.href='toCart.php';
        //     //})

        //     var sideA_color1_val = $(".color-side-a .number-of-color-field div[name='color1']").attr('value');

        //     var getSideText = null;  //Get the text of the side chosen e.g. single curtain, 2-sided station

        //     /*Get the text of how many side chosen*/
        //     $('.chooseSides p').each(function(){
        //        var sideChosen = $(this).hasClass('checkMark');
        //         if(sideChosen){
        //             getSideText = $(this).text();
        //         }
        //     });

        //     /*Gets all the inputs for one side*/
        //     function getInputsForOneSide(side){
        //         var inputs = [];
        //         side.each(function(){
        //             var value = $(this).val();
        //             if((value == '') || (isNaN(value)) ||
        //                 (value > maxWidthHeight) || (value < minWidthHeight)){
        //                 value = resetValueToZero;
        //             }
        //             inputs.push(value);
        //         });
        //         return inputs;
        //     }

        //     /*Get the inputs of each side and store them into an array variable*/
        //     var inputsA = getInputsForOneSide($('.dimensions-side-a input'));
        //     var inputsB = getInputsForOneSide($('.dimensions-side-b input'));
        //     var inputsC = getInputsForOneSide($('.dimensions-side-c input'));
        //     var inputsD = getInputsForOneSide($('.dimensions-side-d input'));

        //     //Arrays to check if color chosen is semi or coated
        //     var semiArrayA = [];
        //     var coatedArrayA = [];
        //     var semiArrayB = [];
        //     var coatedArrayB = [];
        //     var semiArrayC = [];
        //     var coatedArrayC = [];
        //     var semiArrayD = [];
        //     var coatedArrayD = [];
        //     //Get the value of the background color
        //     var bgArrayA = [];
        //     var bgArrayB = [];
        //     var bgArrayC = [];
        //     var bgArrayD = [];

        //     /*Checks the value for attribute of data-semi, data-coated and value
        //      * if semi and coated is undefined, the value will change to false
        //      * as for the bg, if undefined that means the user didn't choose the color*/
        //     function getColorFieldValues(side,pushSemi,pushCoated,pushBg){
        //         side.each(function(){
        //             var semi = $(this).attr('data-semi');
        //             var coated = $(this).attr('data-coated');
        //             var bg = $(this).attr('value');

        //             if(typeof(semi) == 'undefined'){
        //                 semi = 'false';
        //             }
        //             if(typeof(coated) == 'undefined'){
        //                 coated = 'false';
        //             }
        //             if(typeof(bg) == 'undefined'){
        //                 bg = 'None Chosen';
        //             }

        //             pushSemi.push(semi);
        //             pushCoated.push(coated);
        //             pushBg.push(bg);
        //         });
        //     }

        //     /*Get the value of the color field selected*/
        //     getColorFieldValues($('.number-of-color-field .sideA'),semiArrayA, coatedArrayA, bgArrayA);
        //     getColorFieldValues($('.number-of-color-field .sideB'),semiArrayB, coatedArrayB, bgArrayB);
        //     getColorFieldValues($('.number-of-color-field .sideC'),semiArrayC, coatedArrayC, bgArrayC);
        //     getColorFieldValues($('.number-of-color-field .sideD'),semiArrayD, coatedArrayD, bgArrayD);

        //     var mountArray = [];        //array to store the mount value selected

        //     /*Pushes the value of the mount stored into the mountArray array variable*/
        //     $('.select-mounts').each(function(){
        //         var myClass = $(this).attr('class');
        //         var splitClass = myClass.split(" ");
        //         var mountSideClass = ("."+splitClass[1]);
        //         //if($(mountSideClass).val() == ''){
        //         //    $(mountSideClass).val("none");
        //         //}
        //         mountArray.push($(mountSideClass).val());
        //     });

        //     $.ajax({
        //         method: 'post',
        //         url: "ajaxCart.php",
        //         data: {getSideText: getSideText,
        //                 inputsA: inputsA,
        //                 inputsB: inputsB,
        //                 inputsC: inputsC,
        //                 inputsD: inputsD,
        //                 bgArrayA: bgArrayA,
        //                 semiArrayA: semiArrayA,
        //                 coatedArrayA: coatedArrayA,
        //                 bgArrayB: bgArrayB,
        //                 bgArrayC: bgArrayC,
        //                 bgArrayD: bgArrayD,
        //                 mountArray: mountArray},
        //         dataType: 'json',
        //         success: function (data) {
        //             $('.interior_full_pane').empty();
        //             $('.cart-info').show();
        //             //how many sides chosen
        //             $('.cart-info .sides span').append(data['sideChosen']);

        //             /*Function to append all the inputs for the sides' width and height*/
        //             function appendSideInputs(sideInputW, sideInputH,sideInputs){
        //                 //width height for inputs
        //                 sideInputW.append(sideInputs[0] + "<span class='dimension-symbol'>'</span>" + sideInputs[1] + "<span class='dimension-symbol'>\"</span>");
        //                 sideInputH.append(sideInputs[2] + "<span class='dimension-symbol'>'</span>" + sideInputs[3] + "<span class='dimension-symbol'>\"</span>");
        //             }

        //             /*Append all 4 sides' input even if empty*/
        //             appendSideInputs($('.cart-info .inputA .w'),$('.cart-info .inputA .h'),data['inputsA']);
        //             appendSideInputs($('.cart-info .inputB .w'),$('.cart-info .inputB .h'),data['inputsB']);
        //             appendSideInputs($('.cart-info .inputC .w'),$('.cart-info .inputC .h'),data['inputsC']);
        //             appendSideInputs($('.cart-info .inputD .w'),$('.cart-info .inputD .h'),data['inputsD']);

        //             /*Function to append the color values for the sides*/
        //             function appendSideColors(side,appendData){
        //                 side.each(function(index){
        //                     var myColorClass = $(this).attr('class');
        //                     $("." + myColorClass).append(appendData[index]);

        //                 });
        //             }

        //             /*Append all 4 sides' color value even if empty*/
        //             appendSideColors($('.cart-info .colorA div'),data['bgColorsA']);
        //             appendSideColors($('.cart-info .colorB div'),data['bgColorsB']);
        //             appendSideColors($('.cart-info .colorC div'),data['bgColorsC']);
        //             appendSideColors($('.cart-info .colorD div'),data['bgColorsD']);

        //             //Append all mount chosen even if empty
        //             $('.cart-info .mount-selected').each(function(index){
        //                 $(this).children().append(data['mountValues'][index]);
        //             });
        //         }
        //     });// end ajax

        //     //only allowed the user to click the button once
        //     $(this).unbind('click');
        //     //reset all the field for input and select to empty string so when restart is clicked the inputs will be empty
        //     $('body input').val('');
        //     $('body select').val('');
        // });// end cart on click

        // $('.btn-restart').on('click', function(){
        //     location.reload();
        // })

        $('.btn-reset').on('click', function(e){
            e.preventDefault();
            emptyInputValue($sideAinput, $('.mount-a'), $('.color-a'));
            emptyInputValue($sideBinput , $('.mount-b'), $('.color-b'));
            emptyInputValue($sideCinput , $('.mount-c'), $('.color-c'));
            emptyInputValue($sideDinput , $('.mount-d'), $('.color-d'));
            $('.total-height-input').hide();
            $('.total-height-input input').val(0);
            $('.height-message').empty();

            sideAtotal = resetValueToZero;
            sideBtotal = resetValueToZero;
            sideCtotal = resetValueToZero;
            sideDtotal = resetValueToZero;
            sideABCDtotal = resetValueToZero;

            mountSideAPrice = resetValueToZero;
            mountSideBPrice = resetValueToZero;
            mountSideCPrice = resetValueToZero;
            mountSideDPrice = resetValueToZero;
            mountABCDtotal = resetValueToZero;

            $('.opt-qty').each(function(){
                $(this).prop('selectedIndex',0);
            });

            extraAcc1Price = resetValueToZero;
            extraAcc2Price = resetValueToZero;
            extraAccAllTotal = resetValueToZero;

            priceSummary = resetValueToZero;
            appendPriceSummary();
        });


        var getSideText = null;  //Get the text of the side chosen e.g. single curtain, 2-sided station

        function getHowManySides(){
            /*Get the text of how many side chosen*/
            $('.chooseSides p').each(function(){
                var sideChosen = $(this).hasClass('checkMark');
                if(sideChosen){
                    getSideText = $(this).text();
                }
            });
            return "*" + getSideText + "*";
        }

        /*Gets all the inputs for one side*/
        function getInputsForOneSide(sideInput){
            return storeInputValues(sideInput, 'storeInputs');
        }

        /*Gets the square feet for one side*/
        function getSquareFeet(side){
            var inputs = [];
            side.each(function(){
                if($(this).val() == ''){
                    inputs.push(parseInt(0));
                }else{
                    inputs.push(parseInt($(this).val()));
                }
            })
            inputs[1] = inputs[1]/12;
            inputs[3] = inputs[3]/12;
            return ((inputs[0]+inputs[1])*(inputs[2]+inputs[3]));
        }

        /*Get the sum for the input of top, middle, bot color*/
        function getSumOfColorInput(sideInput){
            var total = 0;
            sideInput.each(function() {
                total += parseInt($(this).val(), 10) || 0;
            });
            return total;
        }

        /*Gets the height in inches*/
        function getHeightInInches(sideInput){
            return storeInputValues(sideInput, 'getHeightInInch');
        }

        /*Outputs the sum of the inputs and make sure the sum equals to the total sqft else error message will show up*/
        function appendHeightMessage(sideInput, sumOutput, error, $sideInput){
            sideInput.on('keyup', function(){
                var totalInput = getSumOfColorInput(sideInput);
                var totalHeight = getHeightInInches($sideInput);

                sumOutput.empty().append(totalInput + '" Total');
                if(totalHeight != totalInput){
                    error.empty().append('Total Sum Must be ' + totalHeight + '"');
                }else{
                    error.empty();
                }
            });
        }

        appendHeightMessage($('.color-side-a input'),$('.color-a-total-height'),$('.color-a-total-height-error'),$sideAinput);
        appendHeightMessage($('.color-side-b input'),$('.color-b-total-height'),$('.color-b-total-height-error'),$sideBinput);
        appendHeightMessage($('.color-side-c input'),$('.color-c-total-height'),$('.color-c-total-height-error'),$sideCinput);
        appendHeightMessage($('.color-side-d input'),$('.color-d-total-height'),$('.color-d-total-height-error'),$sideDinput);

        //Arrays to check if color chosen is semi or coated *NOT USED YET*
        var semiArrayA = [];
        var coatedArrayA = [];
        var semiArrayB = [];
        var coatedArrayB = [];
        var semiArrayC = [];
        var coatedArrayC = [];
        var semiArrayD = [];
        var coatedArrayD = [];


        /*Checks the value for attribute of data-semi, data-coated and value
         * if semi and coated is undefined, the value will change to false
         * as for the bg, if undefined that means the user didn't choose the color*/
        function getColorFieldValues(side,pushSemi,pushCoated,pushBg, colorInput, pushColorInput){
            side.each(function(){
                var semi = $(this).attr('data-semi');
                var coated = $(this).attr('data-coated');
                var bg = $(this).attr('name');

                if(typeof(semi) == 'undefined'){
                    semi = 'false';
                }
                if(typeof(coated) == 'undefined'){
                    coated = 'false';
                }
                if((bg == 'color1') || (bg == 'color2') || (bg == 'color3')){
                    bg = 'None Chosen';
                }

                pushSemi.push(semi);
                pushCoated.push(coated);
                pushBg.push(bg);
            });

            colorInput.each(function(){
                var values = parseInt($(this).val());
                pushColorInput.push(values);
            });
        }

        /*Calls this function when add to cart is clicked
         *This would validate the inputs and check if at least one color is selected
         *Will then get the product final amount, weight and shipping values and pass to the cart page*/
        function addDesc(desc) {
            var mountArray = [];        //array to store the mount value selected

            /*Pushes the value of the mount stored into the mountArray array variable*/
            $('.select-mounts').each(function(){
                var myClass = $(this).attr('class');
                var splitClass = myClass.split(" ");
                var mountSideClass = ("."+splitClass[1]);

                mountArray.push($(mountSideClass).val());
            });

            /*Outputs: width (0 feet 0 inches) height (0 feet 0 inches)*/
            function printInputs(side, sideInput){
                return (". " + side + " - " + " width: ("+ sideInput[0] + " feet " + sideInput[1] + " inches). height: (" + sideInput[2] + " feet " + sideInput[3] + " inches) ");
            }

            /*Outputs: Color-1: red. Color-2: yellow. Color-3: None Chosen*/
            function printColorValues(colorArrayValue, colorArrayInput){
                return "Color-1: " + colorArrayValue[0] + " (height: " + colorArrayInput[0] + "). Color-2: " + colorArrayValue[1] + " (height: " + colorArrayInput[1] + "). Color-3: " + colorArrayValue[2] + " (height: " + colorArrayInput[2] + ")";
            }

            /*Outputs: Mount: No Mounts or the mount's name*/
            function printMountValue(index){
                return ". Mount: " + mountArray[index];
            }

            /*Combines all three prints, printInputs, printColorValues and printMountValue into one function and output it*/
            function printOneSideDetails(side, sideInput, colorArrayValue, colorArrayInput, index){
                return printInputs(side,sideInput) + printColorValues(colorArrayValue, colorArrayInput) + printMountValue(index);
            }

            /*Get the inputs of each side and store them into an array variable*/
            var inputsA = getInputsForOneSide($sideAinput);
            var inputsB = getInputsForOneSide($sideBinput);
            var inputsC = getInputsForOneSide($sideCinput);
            var inputsD = getInputsForOneSide($sideDinput);

            /*Get the inputs for and calculate the square feet for each side*/
            var sideAsqft = getSquareFeet($sideAinput);
            var sideBsqft = getSquareFeet($sideBinput);
            var sideCsqft = getSquareFeet($sideCinput);
            var sideDsqft = getSquareFeet($sideDinput);
            var sqftArray = [sideAsqft, sideBsqft, sideCsqft, sideDsqft];

            // addes sqft from each side and divid by 9 to get the total weight of the curtain and round to two numbers
            var totalWeight = ((sideAsqft + sideBsqft + sideCsqft + sideDsqft) / 9).toFixed(2);

            var totalWeightInWholeNumber = 0;
            var unitValueForShipping = 0;

            /*Check if total weight is less than 25lb or more than 140lb
             *This is used to calculate the shipping which is $1/lb
             *Minimum shipping is $25 and Maximum is $140*/
            if(totalWeight < minShipping){
                totalWeightInWholeNumber = minShipping;
            }else if(totalWeight > maxShipping){
                totalWeightInWholeNumber = maxShipping;
            }else{
                totalWeightInWholeNumber = Math.round(totalWeight);
            }

            //value passed into the element input with name equals unit which is then used to calculate the shipping cost
            unitValueForShipping = ((totalWeightInWholeNumber / 9).toFixed(4) - 0.0001).toFixed(4);

            //Get the value of the background color
            var bgArrayA = [];
            var bgArrayB = [];
            var bgArrayC = [];
            var bgArrayD = [];

            var colorInputValuesArrayA = [];
            var colorInputValuesArrayB = [];
            var colorInputValuesArrayC = [];
            var colorInputValuesArrayD = [];

            /*Get the value of the color field selected*/
            getColorFieldValues($('.number-of-color-field .sideA'),semiArrayA, coatedArrayA, bgArrayA, $('.color-side-a input'), colorInputValuesArrayA);
            getColorFieldValues($('.number-of-color-field .sideB'),semiArrayB, coatedArrayB, bgArrayB, $('.color-side-b input'), colorInputValuesArrayB);
            getColorFieldValues($('.number-of-color-field .sideC'),semiArrayC, coatedArrayC, bgArrayC, $('.color-side-c input'), colorInputValuesArrayC);
            getColorFieldValues($('.number-of-color-field .sideD'),semiArrayD, coatedArrayD, bgArrayD, $('.color-side-d input'), colorInputValuesArrayD);

            /*print each side's detail*/
            var sideADetails = printOneSideDetails('SIDE A', inputsA, bgArrayA, colorInputValuesArrayA, 0);
            var sideBDetails = printOneSideDetails('SIDE B', inputsB, bgArrayB, colorInputValuesArrayB, 1);
            var sideCDetails = printOneSideDetails('SIDE C', inputsC, bgArrayC, colorInputValuesArrayC, 2);
            var sideDDetails = printOneSideDetails('SIDE D', inputsD, bgArrayD, colorInputValuesArrayD, 3);
            var descOutput = null;

            var storeEmptyInputValues = [];  //use to store inputs of width / height if empty
            var storeBadInputValueInBoolean = []; //use to store if value is too low / high or not value
            var storeEmptyColorSelectionValue = []; //use to store if color is not selected for the side
            var storeBadTotalSQFT = []; //use to store if one side's total sqft is more than 2000

            /*Checks if width and height inputs are empty or too low / high*/
            function validateWHinputsBeforeSubmit(sideInputs){
                sideInputs.each(function(){
                    var value = $(this).val();
                    if(!value){
                        storeEmptyInputValues.push($(this).val());
                    }else if((value < minWidthHeight) || (!($.isNumeric(value)))){
                        storeBadInputValueInBoolean.push(false);
                    }
                })
            }

            /*Checks if color selection is selected or not*/
            function validateNumberOfColorChosenBeforeSubmit(colorSide){
                if(colorSide.val() == ''){
                    storeEmptyColorSelectionValue.push(false);
                }
            }

            $.each(sqftArray, function(index, value){
                if((value > 2000) || (isNaN(value))){
                    storeBadTotalSQFT.push(false);
                }
            })

            /*determine how many sides are chosen, then decide the sides of description to output in the cart section also checks if width/height input fields are empty*/
            $('.chooseSides').each(function(index){
                var attr = $(this).attr('disabled');
                if(attr != 'disabled'){
                    if(index == 0){
                        //input validation for side a
                        validateWHinputsBeforeSubmit($sideAinput);
                        //select number of colors validation for side a
                        validateNumberOfColorChosenBeforeSubmit($('.color-a'));
                        //output description for side a
                        descOutput = sideADetails;
                    }else if(index == 1){
                        //input validation for side a, b
                        validateWHinputsBeforeSubmit($sideAinput);
                        validateWHinputsBeforeSubmit($sideBinput);
                        //select number of colors validation for side a, b
                        validateNumberOfColorChosenBeforeSubmit($('.color-a'));
                        validateNumberOfColorChosenBeforeSubmit($('.color-b'));
                        //output description for side a, b
                        descOutput = sideADetails + sideBDetails;
                    }else if(index == 2){
                        //input validation for side a, b, c
                        validateWHinputsBeforeSubmit($sideAinput);
                        validateWHinputsBeforeSubmit($sideBinput);
                        validateWHinputsBeforeSubmit($sideCinput);
                        //select number of colors validation for side a, b, c
                        validateNumberOfColorChosenBeforeSubmit($('.color-a'));
                        validateNumberOfColorChosenBeforeSubmit($('.color-b'));
                        validateNumberOfColorChosenBeforeSubmit($('.color-c'));
                        //output description for side a, b, c
                        descOutput = sideADetails + sideBDetails + sideCDetails;
                    }else if(index == 3){
                        //input validation for side a, b, c, d
                        validateWHinputsBeforeSubmit($sideAinput);
                        validateWHinputsBeforeSubmit($sideBinput);
                        validateWHinputsBeforeSubmit($sideCinput);
                        validateWHinputsBeforeSubmit($sideDinput);
                        //select number of colors validation for side a, b, c, d
                        validateNumberOfColorChosenBeforeSubmit($('.color-a'));
                        validateNumberOfColorChosenBeforeSubmit($('.color-b'));
                        validateNumberOfColorChosenBeforeSubmit($('.color-c'));
                        validateNumberOfColorChosenBeforeSubmit($('.color-d'));
                        //output description for side a, b, c, d
                        descOutput = sideADetails + sideBDetails + sideCDetails + sideDDetails;
                    }
                }
            });

            //Gets the sum of height of one side in inches
            var sideAheightColorInputsTotal = getSumOfColorInput($('.color-side-a input'));
            var sideBheightColorInputsTotal = getSumOfColorInput($('.color-side-b input'));
            var sideCheightColorInputsTotal = getSumOfColorInput($('.color-side-c input'));
            var sideDheightColorInputsTotal = getSumOfColorInput($('.color-side-d input'));
            //puts the sum of height of each side in an array
            var allSideHeightColorInputsTotal = [sideAheightColorInputsTotal, sideBheightColorInputsTotal, sideCheightColorInputsTotal, sideDheightColorInputsTotal];

            //Gets the sum of the height inputs when choosing colors
            var sideAheightInputTotal = getHeightInInches($sideAinput);
            var sideBheightInputTotal = getHeightInInches($sideBinput);
            var sideCheightInputTotal = getHeightInInches($sideCinput);
            var sideDheightInputTotal = getHeightInInches($sideDinput);
            //stores the sum of each side in an array
            var allSideHeightInputsTotal = [sideAheightInputTotal, sideBheightInputTotal, sideCheightInputTotal,sideDheightInputTotal];

            /*Gets the extra accessories' names and qty info, if qty 0 then this info will not be printed*/
            var printExtraAccInfo = '';
            $('.opt-qty').each(function(){
                var $this = $(this);
                var qtySelected = parseInt($this.find('option:selected').text());

                if(qtySelected > 0){
                    var info = ' ' + $this.closest('div').prev().text() + ' x ' + qtySelected + '. ';
                    printExtraAccInfo += info;
                }
            });
            printExtraAccInfo = '. ' + printExtraAccInfo

            //checks if the array of storeEmptyInputValues has any empty string
            //checks if the array of storeBadInputValueInBoolean has false in it, if there is that means one of the inputs is a bad input
            //checks if the array of storeBadTotalSQFT has false in it, if there is that means one of the sides' sqft is more than 2000sqft
            //checks if the array of storeEmptyColorSelectionValue has false in it, if there is that means one of the side did not choose at least one color
            //sorts the array of allSideHeightColorInputsTotal and allSideHeightInputsTotal then compare if they are the same, if not that means the total height entered in dimension is different from the total height entered in the color 
            //If all above are good then value of weight, unit and item_name will be submitted to the cart
            if(jQuery.inArray("", storeEmptyInputValues) !== -1){
                alert('Please Do not leave any input (feet/inches) fields empty.');
                return false;
            }else if(jQuery.inArray(false, storeBadInputValueInBoolean) !== -1){
                alert('Please enter number more than ' + minWidthHeight + " for width and height!");
                return false;
            }else if(jQuery.inArray(false, storeBadTotalSQFT) !== -1){
                alert('Total Square Feet cannot exceed 2000sqft.');
                return false;
            }else if(jQuery.inArray(false, storeEmptyColorSelectionValue) !== -1){
                alert('Please select at least one color for your side.');
                return false;
            }else if((allSideHeightColorInputsTotal.sort(function(a, b){return a-b}).join(',')) !== ((allSideHeightInputsTotal.sort(function(a, b){return a-b}).join(',')))){
                alert('Total Height entered in color section does not match the total height in inches provided.');
                return false;
            }else{
                $('input[name="weight"]').attr('value', totalWeight);
                $('input[name="unit"]').attr('value', unitValueForShipping);
                //outputs the descripts into the cart
                document.ordering.item_name.value = getHowManySides() +  descOutput + printExtraAccInfo;
            }

        }

        //add to cart when clicked
        $('.add-to-cart').on('click', addDesc);

    });


</script>


<!--ET-->

</body>
</html>



