window.onload = function() {
    var carta = 1;
    var max = 7;

    document.querySelector("#play").addEventListener("click", () => {
        document.querySelector("#home").classList.remove("on");
        document.querySelector("#home").classList.add("off");

        document.querySelector("#cartas").classList.remove("offf");
        document.querySelector("#cartas").classList.add("on");
    });

    document.querySelector("#back").addEventListener("click", () => {
        if(carta === 1) {
            document.querySelector("#home").classList.remove("off");
            document.querySelector("#home").classList.add("on");

            document.querySelector("#cartas").classList.remove("on");
            document.querySelector("#cartas").classList.add("offf");
        }
        else {
            document.querySelector("#carta-"+carta).classList.remove("view");
            document.querySelector("#carta-"+carta).classList.add("n-view");
            carta--;
            document.querySelector("#carta-"+carta).classList.remove("p-view");
            document.querySelector("#carta-"+carta).classList.add("view");
        }
    });

    document.querySelector("#next").addEventListener("click", () => {
        if(carta < max) {
            document.querySelector("#carta-"+carta).classList.remove("view");
            document.querySelector("#carta-"+carta).classList.add("p-view");
            carta++;
            document.querySelector("#carta-"+carta).classList.remove("n-view");
            document.querySelector("#carta-"+carta).classList.add("view");
        }
    });
};