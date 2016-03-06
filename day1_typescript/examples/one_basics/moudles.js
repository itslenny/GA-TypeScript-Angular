var TimeUtils;
(function (TimeUtils) {
    function getCleanTime() {
        var d = new Date();
        return d.toLocaleTimeString();
    }
    TimeUtils.getCleanTime = getCleanTime;
})(TimeUtils || (TimeUtils = {}));
var CatParty;
(function (CatParty) {
    function letsParty() {
        // console.log(whatever() + " The Cat Party has Started " + something.random(other.maxRandom));
        console.log("It's " + TimeUtils.getCleanTime() + " and the Cat Party has Started!!");
    }
    CatParty.letsParty = letsParty;
    function whatever() {
        return "hi";
    }
    var other;
    (function (other) {
        other.maxRandom = 10;
    })(other || (other = {}));
})(CatParty || (CatParty = {}));
var CatParty;
(function (CatParty) {
    var something;
    (function (something) {
        function random(max) {
            return Math.round(Math.random() * max);
        }
        something.random = random;
    })(something = CatParty.something || (CatParty.something = {}));
})(CatParty || (CatParty = {}));
var DogParty;
(function (DogParty) {
    function letsParty() {
        // console.log("The Dog Party has Started");
        console.log("It's " + TimeUtils.getCleanTime() + " and the Dog Party has Started!!");
    }
    DogParty.letsParty = letsParty;
})(DogParty || (DogParty = {}));
var app;
(function (app) {
    app.startTheParties = function () {
        CatParty.letsParty();
        DogParty.letsParty();
    };
})(app || (app = {}));
app.startTheParties();
