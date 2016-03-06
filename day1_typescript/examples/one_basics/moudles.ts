module TimeUtils {
    export function getCleanTime():string {
        var d = new Date();
        return d.toLocaleTimeString();
    }
}

module CatParty {
    export function letsParty(): void {
        // console.log(whatever() + " The Cat Party has Started " + something.random(other.maxRandom));
        console.log(`It's ${TimeUtils.getCleanTime()} and the Cat Party has Started!!`);
    }
    function whatever() {
        return "hi";
    }
    module other {
        export var maxRandom = 10;
    }
}

module CatParty.something {
    export function random(max: number): number{
        return Math.round(Math.random() * max);
    }
}

module DogParty {
    export function letsParty(): void {
        // console.log("The Dog Party has Started");
        console.log(`It's ${TimeUtils.getCleanTime()} and the Dog Party has Started!!`);
    }
}

module app {
    export var startTheParties = function() {
        CatParty.letsParty();
        DogParty.letsParty();
    }
}
app.startTheParties();