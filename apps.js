console.log("JS is Linked Properly"); //this should always show in console

var fortunesList = ["die soon", "find a million dollar", "become homeless", "jump off a building", "turn into mothman", "become tall", "lose your mind", "drive into a bank", "GROW", "turn upside down", "try to be hot", "excel at life", "be the greates", "hurt for years"];
function generateFortuneCookie(){ 
  var cloneList = fortunesList.slice(); 

  var randomFortune = " ";
  for (var i = 13; i >= 0; i--){       
    randomFortune = cloneList.splice(Math.floor(Math.random() * (i + 1)), 1); 
    console.log("You will " + randomFortune + ".");
   
    var tempCache = document.getElementById("fortune-cache");
    var nodeone = document.createElement("DIV");
    nodeone.innerText = "You will " + randomFortune + ".";
    tempCache.appendChild(nodeone);
  }

  
  document.getElementById("first").style.display = "none";
  document.getElementById("second").style.display = "block";

 
  var cookieText = document.getElementById("fortune-cookie-text");
  var nodetwo = tempCache.lastChild;
  cookieText.appendChild(nodetwo);

 
  document.getElementById("total").innerText = "Total Fortunes Generated: 1";
}

var count = 0;
var max = fortunesList.length;

function anotherFortune(){ 
  var cookieText = document.getElementById("fortune-cookie-text"); 
  var nodethree = document.createElement("LI");
  nodethree.appendChild(cookieText.lastChild); 
  document.getElementById("previous-fortunes").appendChild(nodethree);

 
  count++
 
  if(count == max){ 
    generateFortuneCookie();
    stats();
    pieChart();
    count = 0;
    var nodetwo = tempCache.lastChild;
  }

 
  var tempCache = document.getElementById("fortune-cache");
  var nodetwo = tempCache.lastChild;
  cookieText.appendChild(nodetwo);
}

var fortuneOneTotal = 0;
var fortuneTwoTotal = 0;
var fortuneThreeTotal = 0;
var fortuneFourTotal = 0;
var fortuneFiveTotal = 0;
var fortuneSixTotal = 0;
var fortuneSevenTotal = 0;
var fortuneEightTotal = 0;
var fortuneNineTotal = 0;
var fortuneTenTotal = 0;
var fortuneElevenTotal = 0;
var fortuneTwelveTotal = 0;
var fortuneThirteenTotal = 0;
var fortuneFourteenTotal = 0;
function stats(){
  var totalFortunes = document.getElementById("other-fortunes-div").getElementsByTagName("LI").length; //can console.log to check it counts all previously generated fortunes
  document.getElementById("total").innerText = "Total Fortunes Generated: " + (totalFortunes + 1);
  var data = document.getElementById("previous-fortunes");
  var dataLast = data.lastChild.innerText;
  if(dataLast.includes("soon")){  
    fortuneOneTotal++ 
  }
  if(dataLast.includes("dollar")){
    fortuneTwoTotal++
  }
  if(dataLast.includes("homeless")){
    fortuneThreeTotal++  
  }
  if(dataLast.includes("building")){
    fortuneFourTotal++   
  }
  if(dataLast.includes("mothman")){
    fortuneFiveTotal++  
  }
  if(dataLast.includes("tall")){
    fortuneSixTotal++  
  }
  if(dataLast.includes("mind")){
    fortuneSevenTotal++  
  }
  if(dataLast.includes("bank")){
    fortuneEightTotal++  
  }
  if(dataLast.includes("GROW")){
    fortuneNineTotal++  
  }
  if(dataLast.includes("down")){
    fortuneTenTotal++  
  }
  if(dataLast.includes("hot")){
    fortuneElevenTotal++  
  }
  if(dataLast.includes("life")){
    fortuneTwelveTotal++  
  }
  if(dataLast.includes("greatest")){
    fortuneThirteenTotal++  
  }
  if(dataLast.includes("years")){
    fortuneFourteenTotal++  
  }
 
  var percentOne = ((fortuneOneTotal / totalFortunes) * 100);
  var phraseOne = "% of the fortunes generated say you will " + fortunesList[0] + ".";


  var percentTwo = ((fortuneTwoTotal / totalFortunes) * 100);
  var phraseTwo = "% of the fortunes generated say you will " + fortunesList[1] + ".";

  
  var percentThree = ((fortuneThreeTotal / totalFortunes) * 100);
  var phraseThree = "% of the fortunes generated say you will " + fortunesList[2] + ".";

 
  var percentFour = ((fortuneFourTotal / totalFortunes) * 100);
  var phraseFour = "% of the fortunes generated say you will " + fortunesList[3] + ".";

  
  var percentFive = ((fortuneFiveTotal / totalFortunes) * 100);
  var phraseFive = "% of the fortunes generated say you will " + fortunesList[4] + ".";

  var percentSix = ((fortuneSixTotal / totalFortunes) * 100);
  var phraseSix = "% of the fortunes generated say you will " + fortunesList[5] + ".";

  var percentSeven = ((fortuneSevenTotal / totalFortunes) * 100);
  var phraseSeven = "% of the fortunes generated say you will " + fortunesList[6] + ".";

 
  var percentEight = ((fortuneEightTotal / totalFortunes) * 100);
  var phraseEight = "% of the fortunes generated say you will " + fortunesList[7] + ".";

  
  var percentNine = ((fortuneNineTotal / totalFortunes) * 100);
  var phraseNine = "% of the fortunes generated say you will " + fortunesList[8] + ".";

 
  var percentTen = ((fortuneTenTotal / totalFortunes) * 100);
  var phraseTen = "% of the fortunes generated say you will " + fortunesList[9] + ".";

 
  var percentEleven = ((fortuneElevenTotal / totalFortunes) * 100);
  var phraseEleven = "% of the fortunes generated say you will " + fortunesList[10] + ".";

 
  var percentTwelve = ((fortuneTwelveTotal / totalFortunes) * 100);
  var phraseTwelve = "% of the fortunes generated say you will " + fortunesList[11] + ".";

  var percentThirteen = ((fortuneThirteenTotal / totalFortunes) * 100);
  var phraseThirteen = "% of the fortunes generated say you will " + fortunesList[12] + ".";


  var percentFourteen = ((fortuneFourteenTotal / totalFortunes) * 100);
  var phraseFourteen = "% of the fortunes generated say you will " + fortunesList[13] + ".";

  if(fortuneOneTotal == 0){
    document.getElementById("one").innerText = " ";
  }
  if(fortuneOneTotal > 0){
    document.getElementById("one").innerText = Math.round(percentOne) + phraseOne;
  }

  if(fortuneTwoTotal == 0){
    document.getElementById("two").innerText = " ";
  }
  if(fortuneTwoTotal > 0){
    document.getElementById("two").innerText = Math.round(percentTwo) + phraseTwo;
  }
 
  if(fortuneThreeTotal == 0){
    document.getElementById("three").innerText = " ";
  }
  if(fortuneThreeTotal > 0){
    document.getElementById("three").innerText = Math.round(percentThree) + phraseThree;
  }
  
  if(fortuneFourTotal == 0){
    document.getElementById("four").innerText = " ";
  }
  if(fortuneFourTotal > 0){
    document.getElementById("four").innerText = Math.round(percentFour) + phraseFour; 
  }
  
  if(fortuneFiveTotal == 0){
    document.getElementById("five").innerText = " ";
  }
  if(fortuneFiveTotal > 0){
    document.getElementById("five").innerText = Math.round(percentFive) + phraseFive;
  }
  
  if(fortuneSixTotal == 0){
    document.getElementById("six").innerText = " ";
  }
  if(fortuneSixTotal > 0){
    document.getElementById("six").innerText = Math.round(percentSix) + phraseSix;
  }
  
  if(fortuneSevenTotal == 0){
    document.getElementById("seven").innerText = " ";
  }
  if(fortuneSevenTotal > 0){
    document.getElementById("seven").innerText = Math.round(percentSeven) + phraseSeven;
  }
  
  if(fortuneEightTotal == 0){
    document.getElementById("eight").innerText = " ";
  }
  if(fortuneEightTotal > 0){
    document.getElementById("eight").innerText = Math.round(percentEight) + phraseEight;
  }
 
  if(fortuneNineTotal == 0){
    document.getElementById("nine").innerText = " ";
  }
  if(fortuneNineTotal > 0){
    document.getElementById("nine").innerText = Math.round(percentNine) + phraseNine; 
  }

  if(fortuneTenTotal == 0){
    document.getElementById("ten").innerText = " ";
  }
  if(fortuneTenTotal > 0){
    document.getElementById("ten").innerText = Math.round(percentTen) + phraseTen;
  }

  if(fortuneElevenTotal == 0){
    document.getElementById("eleven").innerText = " ";
  }
  if(fortuneElevenTotal > 0){
    document.getElementById("eleven").innerText = Math.round(percentEleven) + phraseEleven;
  }

  if(fortuneTwelveTotal == 0){
    document.getElementById("twelve").innerText = " ";
  }
  if(fortuneTwelveTotal > 0){
    document.getElementById("twelve").innerText = Math.round(percentTwelve) + phraseTwelve;
  }
 
  if(fortuneThirteenTotal == 0){
    document.getElementById("thirteen").innerText = " ";
  }
  if(fortuneThirteenTotal > 0){
    document.getElementById("thirteen").innerText = Math.round(percentThirteen) + phraseThirteen;
  }

  if(fortuneFourteenTotal == 0){
    document.getElementById("fourteen").innerText = " ";
  }
  if(fortuneFourteenTotal > 0){
    document.getElementById("fourteen").innerText = Math.round(percentFourteen) + phraseFourteen; 
  }
}
