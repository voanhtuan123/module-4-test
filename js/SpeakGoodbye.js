(function (window) {
    var speakWord = "Goodbye";
    var GoodbyeSpeaker = {};
    GoodbyeSpeaker.SayGoodbye = function SayGoodBye(name) {
        console.log( speakWord + " " + name )
    }
    window.GoodbyeSpeaker = GoodbyeSpeaker;
}) (window);

    