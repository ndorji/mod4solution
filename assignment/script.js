
(function(){
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
 
  for (prop in names) {
   if (names[prop].indexOf('j')==0 || names[prop].indexOf('J')==0) {
    ByeSpeaker.speak(names[prop]);
          } 
  else {
    hellospeaker.speak(names[prop]);
     }
     } 
   })();