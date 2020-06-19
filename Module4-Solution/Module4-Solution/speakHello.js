(function (window) {

    var helloSpeaker = {};
    var hello = "Hello";

    helloSpeaker.speak = function (name) {

        console.log(hello + " " + name);
    }
    window.helloSpeaker = helloSpeaker;
})(window)