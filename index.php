<?php
    include '_inc/_functions.php';
    include '_inc/_variables.php';
;?>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Fence / Box Selections</title>

    <meta charset="UTF-8">
    <meta name="description" content="select sides for your fence / box.  This can be used as fencing or box depending on your selection, choose your own colors provided">
    <meta name="keywords" content="fence, box, perfection, sides, choose">
    <meta name="distribution" content="Global">
    <meta name="rating" content="General">
    <meta name="language" content="en-us">

    <link href='http://fonts.googleapis.com/css?family=Roboto:400,300,500' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <link rel="stylesheet" href="css/font-awesome.min.css">

    <script src="js/jquery.js"></script>

</head>
<body style="background-color: lightblue;">
    <div id="wrapper" style="width: 890px; padding: 0 20px; margin: auto; background-color: lightblue;">
        <header id="logo" style="text-align: center;">
            <a href="http://et4891.com"><img src="images/logo.png" alt="logo"></a>
        </header>
        <nav id="menu" style="text-align: center;">
            <img src="images/navigation.png" alt="navigation">
        </nav>

        <div id="main">
        <div class="full-panel" style="background-color: lightblue;">
            <!--<form action="toCart.php" method="POST">-->
            <div id="product-summary-position">
                <div id="product-fixed">
                    <div id="product-summary">
                        <header>Product Summary</header>
                        <div class="price" name="product-summary-price">$0.00</div>
                        <header>Have Questions?</header>
                        <p>Call our Product Experts<br> 1-604-518-7187</p>
                        <button class="btn-reset">Reset</button>
                    </div>
                </div>
            </div>

            <div id="three-steps-curtain-selections">
                <div id="step1">
                    <!-- Header-->
                    <header class="curtain-selection-headers">
                        <div class="step-arrows">Step 1</div>
                        <div class="step-headers">Select Fence Sides</div>
                    </header>

                    <!-- Selections-->
                    <div class="step1-selections">
                        <!-- Help notes-->
                        <div class="help-section">
                            <div class="help-header">Please select the sides needed</div>
                            <div class="help">Help<span class="fa fa-question-circle"></span></div>
                            <div class="help-notes">Select how many sides are needed for the fence.  Maximun of 4 sides.  Each side will need to have entered the width and height for us to make the orders.  Then color of the fence can be chosen.</div>
                        </div>


                        <!-- Sides Selections -->
                        <div class="clear"></div>
                        <div class="chooseSides single-side"><input type="image" style="width: 163px; height: 128px;" src="images/fence.svg" alt="" /><p>1-side Fence</p></div>
                        <div class="chooseSides two-sided"><input type="image" style="width: 163px; height: 128px;" src="images/fence.svg" alt="" /><p>2-sides Fences</p></div>
                        <div class="chooseSides three-sided"><input type="image" style="width: 163px; height: 128px;" src="images/fence.svg" alt="" /><p>3-sides Fences</p></div>
                        <div class="chooseSides four-sided"><input type="image" style="width: 163px; height: 128px;" src="images/fence.svg" alt="" /><p class="checkMark">4-side Fences</p></div>
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
                            <div class="help-header">Please Enter Dimensions</div>
                            <div class="help">Help<span class="fa fa-question-circle"></span></div>
                            <div class="help-notes">Please enter the width and height in feet and inches.  Price will be shown when dimensions are entered.  Minimum is for the input is 0 and maximum is 20.  Please enter positive numbers only, anything other than positive numbers will be treated as 0.</div>
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
                            <div class="help-notes">Choose the number of colors needed for your fence.  Minimum is 1 and maxiumum is 3.  After color is chosen, please enter the height of the color wanted for the fence's side in inches.  This height must match the height entered above in inches.</div>
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
                            <div>Semi-Transparent</div>
                            <div>
                                <div class="azRed" value="#DD2A13" name="Trans Red"></div>
                                <div class="azYellow" value="#E5BC0A" name="Trans Yellow"></div>
                            </div>
                            <div class="clear"></div>
                            <div>Industrial Coated</div>
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
                        <div class="step-headers">Kits Selection (Optional)</div>
                    </header>

                    <!-- Selections-->
                    <div class="step3-selections">
                        <!-- Help notes-->
                        <div class="help-section">
                            <div class="help-header">Choose kits needed</div>
                            <div class="help">Help<span class="fa fa-question-circle"></span></div>
                            <div class="help-notes">If kits is needed, please choose which kind of kit you want.</div>
                        </div><!-- end help-section div-->

                        <div class="clear"></div>

                        <div class="mount-names">
                            <img class="mount-image" style="width: 651px; height: 178px;" src="images/kits.png" alt="4 different kit options">
                            <div class="k1">Kit - 1</div>
                            <div class="k2">Kit - 2</div>
                            <div class="k3">Kit - 3</div>
                            <div class="k4">Kit - 4</div>

                        </div><!-- end mount-names div -->

                        <div class="clear"></div>
                        <div class="mount-options">
                            <?php if($mountKitsOptions != null):?>
                                <?php foreach($mountKitsOptions as $key => $option): ?>
                                <div class="<?php echo $option[0]; ?>">
                                    <p class="sideABCD-header"><?php echo $option[1];?></p>
                                    <div class="dimension-width">
                                        <select name="select-mounts" class="select-mounts <?php echo $option[2];?>">
                                            <option value="" group="mounts">No Kit Needed</option>
                                            <option value="k1" group="mounts">Set Kit - #FKS1439-1</option>
                                            <option value="k2" group="mounts">Set Kit - #FKS1439-2</option>
                                            <option value="k3" group="mounts">Set Kit - #FKS1439-3</option>
                                            <option value="k4" group="mounts">Set Kit - #FKS1439-4</option>
                                        </select>
                                    </div>
                                </div><!-- end mount <?php echo $option[1];?>-->
                                <?php endforeach; ?>
                            <?php endif; ?>

                        </div><!-- end mount options -->

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
                            <div class="help-notes">Choose the additional accessories needed.  Each is priced differently and please choose the quantities needed for each accessory.</div>
                        </div>

                        <div class="clear"></div>
                        <div class="extraOp">
                            <?php echo printExtraAcc('Extra accessories 1', 25, 'acc1', 'extraAcc1', 65)?>
                            <?php echo printExtraAcc('Extra accessories 2', 50, 'acc2', 'extraAcc2', 60)?>
                        </div><!-- end extraOp -->
                    </div><!-- end selections -->
                </div>  <!-- end step 4 div-->

            </div> <!-- end three steps div -->

            <div class="clear"></div>
            <button type="submit" class="add-to-cart">Add to Cart <span class="fa fa-cart-plus"></span></button>
            <!--</form>-->
        </div><!-- end full-panel -->

        <div class="cart-info">
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
                <div><header>Kit: </header>
                    <div class="mount-selected mountA">Kit: <span></span></div>
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
                <div><header>Kit: </header>
                    <div class="mount-selected mountB">Kit: <span></span></div>
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
                <div><header>Kit: </header>
                    <div class="mount-selected mountC">Kit: <span></span></div>
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
                <div><header>Kit: </header>
                    <div class="mount-selected mountD">Kit: <span></span></div>
                </div>
            </div>

            <div class="extra-acc">
                <div class="extra-acc-info"></div>
            </div>

            <div class="clear"></div>
            <hr>
            <div class="finalAmount">
                Total:
            </div>
            <div class="side-info btn-restart-pay">
                <button class="btn-restart">Restart</button>
            </div>
        </div><!-- end cart-info div -->

        </div>
        <div class="clear"></div>
        <footer id="wholeFooter">
            <footer id="footer" style="text-align: center;">
                <img src="images/footer.png" alt="Footer">
            </footer>
        </footer>
    </div>
</body>
    <!-- begin olark code -->
    <script data-cfasync="false" type='text/javascript'>/*<![CDATA[*/window.olark||(function(c){var f=window,d=document,l=f.location.protocol=="https:"?"https:":"http:",z=c.name,r="load";var nt=function(){
        f[z]=function(){
            (a.s=a.s||[]).push(arguments)};var a=f[z]._={
        },q=c.methods.length;while(q--){(function(n){f[z][n]=function(){
            f[z]("call",n,arguments)}})(c.methods[q])}a.l=c.loader;a.i=nt;a.p={
            0:+new Date};a.P=function(u){
            a.p[u]=new Date-a.p[0]};function s(){
            a.P(r);f[z](r)}f.addEventListener?f.addEventListener(r,s,false):f.attachEvent("on"+r,s);var ld=function(){function p(hd){
            hd="head";return["<",hd,"></",hd,"><",i,' onl' + 'oad="var d=',g,";d.getElementsByTagName('head')[0].",j,"(d.",h,"('script')).",k,"='",l,"//",a.l,"'",'"',"></",i,">"].join("")}var i="body",m=d[i];if(!m){
            return setTimeout(ld,100)}a.P(1);var j="appendChild",h="createElement",k="src",n=d[h]("div"),v=n[j](d[h](z)),b=d[h]("iframe"),g="document",e="domain",o;n.style.display="none";m.insertBefore(n,m.firstChild).id=z;b.frameBorder="0";b.id=z+"-loader";if(/MSIE[ ]+6/.test(navigator.userAgent)){
            b.src="javascript:false"}b.allowTransparency="true";v[j](b);try{
            b.contentWindow[g].open()}catch(w){
            c[e]=d[e];o="javascript:var d="+g+".open();d.domain='"+d.domain+"';";b[k]=o+"void(0);"}try{
            var t=b.contentWindow[g];t.write(p());t.close()}catch(x){
            b[k]=o+'d.write("'+p().replace(/"/g,String.fromCharCode(92)+'"')+'");d.close();'}a.P(2)};ld()};nt()})({
        loader: "static.olark.com/jsclient/loader0.js",name:"olark",methods:["configure","extend","declare","identify"]});
    /* custom configuration goes here (www.olark.com/documentation) */
    olark.identify('4265-200-10-2270');/*]]>*/</script><noscript><a href="https://www.olark.com/site/4265-200-10-2270/contact" title="Contact us" target="_blank">Questions? Feedback?</a> powered by <a href="http://www.olark.com?welcome" title="Olark live chat software">Olark live chat software</a></noscript>
    <!-- end olark code -->


    <!--ET-->
    <script src="js/scripts.js"></script>
    <!--ET-->
</html>

