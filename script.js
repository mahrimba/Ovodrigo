const feed = document.querySelector("#feedCreature");
const care = document.querySelector("#careCreature");
const clean = document.querySelector("#cleanCreature");
const creature = document.querySelector(".creature");

const hungerMeterFill = document.querySelector("#hungerMeterFill");
const careMeterFill = document.querySelector("#careMeterFill");
const hygieneMeterFill = document.querySelector("#hygieneMeterFill");

var widthHunger = 100;
var widthCare = 100;
var widthHygiene = 100;

var hungerMeter = getComputedStyle(hungerMeterFill);
var careMeter = getComputedStyle(careMeterFill);
var hygieneMeter = getComputedStyle(hygieneMeterFill);


function isDead() {
    feed.onclick = function(){
        return false;
    };
    care.onclick = function(){
        return false;
    };
    clean.onclick = function(){
        return false;
    };
}

function fullfillHungerNeed() {
    creature.classList.toggle("animate__bounce")
    if (widthHunger >= 100) {
        widthHunger = 100;
    } else {
        widthHunger = widthHunger + 5;
    }
}

function fullfillCareNeed() {
    creature.classList.toggle("animate__bounce")
    if (widthCare >= 100) {
        widthCare = 100;
    } else {
        widthCare = widthCare + 5;
    }
}

function fullfillHygieneNeed() {
    creature.classList.toggle("animate__bounce")
    if (widthHygiene >= 100) {
        widthHygiene = 100;
    } else {
        widthHygiene= widthHygiene + 5;
    }
}

function moveHungerBar() {
    var i = 0;
    if (i == 0) {
        i = 1;
        var id = setInterval(frame, 800);
        function frame() {
            if (widthHunger == 0) {
                i = 0;
                creature.src=`./imgs/RIP.png`;
                isDead();
            } else {
                widthHunger--;
                hungerMeterFill.style.width = widthHunger + "%";
            }
        }
  }
}

function moveCareBar() {
    var i = 0;
    if (i == 0) {
        i = 1;
        var id = setInterval(frame, 600);
        function frame() {
            if (widthCare == 0) {
                i = 0;
                creature.src=`./imgs/RIP.png`;
                isDead();
            } else {
                widthCare--;
                careMeterFill.style.width = widthCare + "%";
            }
        }
  }
}

function moveHygieneBar() {
    var i = 0;
    if (i == 0) {
        i = 1;
        var id = setInterval(frame, 1000);
        function frame() {
            if (widthHygiene == 0) {
                i = 0;
                creature.src=`./imgs/RIP.png`;
                isDead();
            } else {
                widthHygiene--;
                hygieneMeterFill.style.width = widthHygiene + "%";
            }
        }
  }
}

feed.onclick = function(){fullfillHungerNeed()};
care.onclick = function(){fullfillCareNeed()};
clean.onclick = function(){fullfillHygieneNeed()};
moveHungerBar();
moveCareBar();
moveHygieneBar();