//Nobody wants them
var filthyBacteria = ["priyo.com", "প্রিয়.কম"];

var feedMarker = "div._4-u2._5v3q";
var timeLineMarker = "li.fbTimelineUnit";

var sterilize = function(petridish){
  for (var i = 0; i < filthyBacteria.length; i++){
    var bacterium = filthyBacteria[i];
    var marker = 'a[href*="' + bacterium + '"]';
    if (petridish.querySelector(marker)) {
      //Contaminated
      petridish.remove();
    } else if (!!petridish.textContent && (petridish.textContent.indexOf(bacterium) > -1)){
      //Contaminated
      petridish.remove();
    }
  }
};

var sterilizeAll = function (petridishes){
  for (var i = 0, num = petridishes.length; i < num; i++){
    sterilize(petridishes[i]);
  }
};

var fuckOff = function(){
  var feedDishes = document.querySelectorAll(feedMarker);
  var tlDishes = document.querySelectorAll(timeLineMarker);

  if (feedDishes.length) sterilizeAll(feedDishes);
  if (tlDishes.length) sterilizeAll(tlDishes);
};

var doctocat = new WebKitMutationObserver(function(mutations) {
   for (var i = 0; i < mutations.length; i++){
     if (mutations[i].addedNodes.length) fuckOff();
   }
});
doctocat.observe(document, { childList: true, subtree: true, characterData:false });

fuckOff();