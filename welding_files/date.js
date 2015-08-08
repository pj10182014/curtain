// Set the font color, face, size, and style...

// Acceptable TheFontFace values are those you
// normally use in HTML, for instance:
//     Arial
//     TimesRoman
//     Courier

// Acceptable TheFontColor values are any #RRGGBB
// same as HTML. Remember to use the # sign and
// enclose in quotes. Typical values:
//     #FF0000 is red
//     #00FF00 is green
//     #0000FF is blue

// Acceptable TheFontSize values are 2-7.

// Acceptable TheFontStyle values are (exactly!):
//     plain
//     bold
//     italic
//     bolditalic

var TheFontFace = "Verdana";
var TheFontColor = "#000000";
var TheFontSize = "2";
var TheFontStyle = "bold"; 

// Set the separator between the date elements;
// usually use either - or /.

var TheSeparator = "-";

// Show or do not show the day of the week; set
// yes to show, no not to show.

var ShowDay ="yes";

// Do Not Edit Below This Line
// ==============================================

var Days = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
var TheDate = new Date();

var TheWeekDay = TheDate.getDay();
var Day ="";
if (ShowDay == "yes"){
    Day = Days[TheWeekDay];
    Day += " ";}

var TheMonth = TheDate.getMonth() + 1;
if (TheMonth < 10) TheMonth = "0" + TheMonth;

var TheMonthDay = TheDate.getDate();
if (TheMonthDay < 10) TheMonthDay = "0" + TheMonthDay;

var TheYear = TheDate.getYear();
if (TheYear < 1000) TheYear += 1900;

var FontTagLeft = "";
var FontTagRight = "";

if (TheFontStyle == "bold"){
    FontTagLeft = "<b>";
    FontTagRight ="</b>";}
    
if (TheFontStyle == "italic"){
    FontTagLeft = "<i>";
    FontTagRight ="</i>";}
    
if (TheFontStyle == "bolditalic"){
    FontTagLeft = "<b><i>"; 
    FontTagRight = "</i></b>";}    

var D = "";
//D += "<font color='"+TheFontColor+"' face='"+TheFontFace+"' size='"+TheFontSize+"'>";
//D += FontTagLeft+Day+TheMonth+TheSeparator+TheMonthDay+TheSeparator+TheYear+FontTagRight;
//D += "</font>";

D += Day+TheMonth+TheSeparator+TheMonthDay+TheSeparator+TheYear;

document.write(D);
