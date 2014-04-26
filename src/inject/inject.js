var bacteria = ["priyo.com", "প্রিয়.কম"];

var feedStorySelector = "div._4-u2._5v3q";
var timeLineStorySelector = "li.fbTimelineUnit";

var sterilize = function(petridish){
  for (var i = 0; i < bacteria.length; i++){
    var bacterium = bacteria[i];
    var marker = 'a[href*="' + bacterium + '"]';
    if (petridish.querySelector(marker)) {
      petridish.remove();
    } else if (!!petridish.textContent && (petridish.textContent.indexOf(bacterium) > -1)){
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
  var feedStories = document.querySelectorAll(feedStorySelector);
  var tlStories = document.querySelectorAll(timeLineStorySelector);

  sterilizeAll(feedStories);
  sterilizeAll(tlStories);
};

var microscope = new WebKitMutationObserver(function(mutations) {
   for (var i = 0; i < mutations.length; i++){
     if (mutations[i].addedNodes.length){
       fuckOff();
     }
   }
});
microscope.observe(document, { childList: true, subtree: true, characterData:false });

fuckOff();