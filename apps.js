var fortunesList = [
    "People are naturally attracted to you.",
    "You learn from your mistakes... You will learn a lot today.",
    "If you have something good in your life, don't let it go!",
    "What ever you're goal is in life, embrace it visualize it, and for it will be yours.",
    "Your shoes will make you happy today.",
    "You cannot love life until you live the life you love.",
    "Be on the lookout for coming events; They cast their shadows beforehand.",
    "Land is always on the mind of a flying bird.",
    "The man or woman you desire feels the same about you.",
    "Meeting adversity well is the source of your strength.",
    "A dream you have will come true.",
    "Our deeds determine us, as much as we determine our deeds.",
    "Never give up. You're not a failure if you don't give up.",
    "You will become great if you believe in yourself.",
    "There is no greater pleasure than seeing your loved ones prosper.",
    "You will marry your lover.",
    "The greatest love is self-love.",
    "A very attractive person has a message for you.",
    "You already know the answer to the questions lingering inside your head.",
];


var generateFortuneCookie = function() {
   
       var fortuneElement = document.createElement("li"); 
     
        var fortuneCookieText=document.getElementById('fortune-cookie-text');
     
        fortuneElement.innerHTML=fortuneCookieText.innerHTML;
  
        var usedFortunes = document.getElementById("previous-fortunes-container");
            usedFortunes.appendChild(fortuneElement);
  
      
  
 

      fortuneCookieText.innerText=fortunesList[Math.floor(Math.random() * fortunesList.length)];
}

