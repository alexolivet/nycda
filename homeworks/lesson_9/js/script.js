function myFunction() {
	//    setTimeout(myFunction(){ alert("Hello"); }, 3000);

	var d = new Date(); /*new date methods. this is a built in function of javascript */
	var seconds = d.getSeconds();
	var minutes = d.getMinutes();
	var hours = d.getHours();
	var milliseconds = d.getMilliseconds();

	if (String(hours).length===1){//string will cast hour into text
		hours = '0' + hours;
	}
	if (String(minutes).length===1){//string will cast minutes into text
		minutes = '0' + minutes;
	}
	if (String(minutes).length===1){//string will cast minutes into text
		minutes = '0' + minutes;
	}
	if (String(seconds).length===1){
		seconds = '0' + seconds;
	}
	if (String(milliseconds).length===1){
		milliseconds = '00' + milliseconds;
	} else if (String(milliseconds).length===2){ //else if will combine the if above
		milliseconds = '0' + milliseconds;
	}
	$('#clockHolder').text (hours+':'+ minutes+':' +seconds+':'+milliseconds);//change the text within the element on the html
}

$(document).ready(function(){
	myFunction();
});
setInterval(myFunction,100);




/* A function to return random number from min to max */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

setInterval(function() {
    var element = document.getElementById("clockHolder");
    //generate random red, green and blue intensity
    var r = getRandomInt(0, 255);
    var g = getRandomInt(0, 255);
    var b = getRandomInt(0, 255);
    
    element.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
    document.getElementById("colorvalue").innerHTML = r + " " + g + " " + b;
}, 1500);


// Description: Randomly change background color every n seconds

function setbackground()
{
window.setTimeout( "setbackground()", 4000); // 1000 milliseconds delay

var index = Math.round(Math.random() * 9);

var ColorValue = "FFFFFF"; // default color - white (index = 0)

if(index == 1)
ColorValue = "FFCCCC"; //peach
if(index == 2)
ColorValue = "CCAFFF"; //violet
if(index == 3)
ColorValue = "A6BEFF"; //lt blue
if(index == 4)
ColorValue = "99FFFF"; //cyan
if(index == 5)
ColorValue = "D5CCBB"; //tan
if(index == 6)
ColorValue = "99FF99"; //lt green
if(index == 7)
ColorValue = "FFFF99"; //lt yellow
if(index == 8)
ColorValue = "FFCC99"; //lt orange
if(index == 9)
ColorValue = "CCCCCC"; //lt grey

document.getElementsByTagName("body")[0].style.backgroundColor = "#" + ColorValue;

}








//$.now();
//document.write('<br>',$.now());
/*
var hour
var minutes
var seconds
var milliseconds


getHours()
getMilliseconds()
getSeconds()
getMinutes()
*/