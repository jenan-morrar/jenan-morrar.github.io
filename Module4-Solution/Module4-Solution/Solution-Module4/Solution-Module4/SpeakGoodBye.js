(function (window) {

  var byeSpeaker = {};
  var goodbye = "Goodbye";

  byeSpeaker.speak = function (name) {

      console.log(goodbye + " " + name);
  }
  window.byeSpeaker = byeSpeaker;
})(window)