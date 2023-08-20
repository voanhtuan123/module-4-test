(function (window) {
    var speakWord = "Hello";
    var HelloSpeaker = {};
    HelloSpeaker.SayHello = function SayHello(name) {
        console.log( speakWord + " " + name )
    }
    window.HelloSpeaker = HelloSpeaker;
}) (window);

    