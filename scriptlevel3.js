var bg = document.getElementById("block");
window.bot = 0;
window.lef = 0;
var tar = document.getElementById("sandal");
var c = 0;
var speed = 10;
var mo = "0.6s";
var p = 0;
var movability = 1;
var fla = 0;
var keycollected = 0;
var key2collected = 0;
var unlock = false;
var unlock2 = false;

var healthgain=0;
window.dead = false;
window.keyscollected = 0;


const mblast = new Audio('music/blast.mp3');
const mwin = new Audio('music/win.mp3');
const mcoin = new Audio('music/coin.mp3');
var coinonce = 1;
const mtruck = new Audio('music/truck.mp3');


var keyloc = ["05200120", "10200320", "09200020", "13200120"];


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function disappear() {
    document.getElementById("coin").style.animation = "disappear 0.7s";
    await sleep(700);
    document.getElementById("coin").style.visibility = "hidden";

}



async function blast(b1, b2) {
    fla = 1;
    mblast.play();

    document.getElementById(b1).style.visibility = "visible";
    document.getElementById(b2).style.visibility = "hidden";
    document.getElementById('guy').style.backgroundImage = "url(images/fall.png)";
    document.getElementById('guy').style.animation = "fall 1s steps(5) infinite";
    document.getElementById('healthbar').style.backgroundImage = "url(images/health0.png)";
    movability = 0;
    await sleep(1000);
    document.getElementById('guy').style.animation = "none";
    document.getElementById('guy').style.backgroundImage = "url(images/fall.png)";
    document.getElementById('guy').style.backgroundPosition = "-400px";

    document.getElementById(b1).style.visibility = "hidden";

    document.getElementById("failboard").style.visibility = "visible";
}



window.health = 6;

async function healthchange() {
    //HEALTH REDUCTION BUSH

    while (window.health != 0 && window.dead == false) {
        if ((window.lef >= 430 && window.lef <= 600 && window.bot >= 30 && window.bot <= 170) || (window.lef >= 130 && window.lef <= 300 && window.bot >= 130 && window.bot <= 270) || (window.lef >= 930 && window.lef <= 1100 && window.bot >= 230 && window.bot <= 370) || (window.lef >= 1230 && window.lef <= 1400 && window.bot >= 30 && window.bot <= 170) || (window.lef >= 830 && window.lef <= 1000 && window.bot >= 0 && window.bot <= 70)) {
            window.health -= 1;
            document.getElementById("healthbar").style.backgroundImage = "url(images/health" + String(window.health) + ".png)";
        }
        if (window.health != 0) {
            await sleep(2000);
        }
    }
    document.getElementById('guy').style.backgroundImage = "url(images/fall.png)";
    document.getElementById('guy').style.animation = "fall 1s steps(5) infinite";
    movability = 0;
    await sleep(1000);
    document.getElementById('guy').style.animation = "none";
    document.getElementById('guy').style.backgroundImage = "url(images/fall.png)";
    document.getElementById('guy').style.backgroundPosition = "-400px";
    document.getElementById("failboard").style.visibility = "visible";

}





var k1 = 0;
var k2 = 0;
async function mov(e) {
    if (movability == 1) {
        var k = e.keyCode;
        /*if(k==16)
        {
           changeSprint();

        } */


        /* WALK ALL DIRECTIONS */
        if (k == 38 || k == 87) {
            if ((window.bot == 490 && window.lef >= 260 && window.lef <= 480 && unlock == false) || (window.bot == 490 && window.lef >= 960 && window.lef <= 1180 && unlock2 == false)) {

            } else if (window.bot < 700) {
                window.bot += speed;
                document.getElementById("guy").style.transform = "scaleY(1)";
                document.getElementById("guy").style.bottom = window.bot + "px";
                document.getElementById("guy").style.background = "url(sprite/verrun.png)";
                document.getElementById("guy").style.animation = "walk2 1s steps(8) infinite";
            }
        }
        if (k == 40 || k == 83) {
            if ((window.bot == 710 && window.lef >= 260 && window.lef <= 480 && unlock == false) || (window.bot == 710 && window.lef >= 960 && window.lef <= 1180 && unlock2 == false) ) {

            } else if (window.bot > 0) {
                window.bot -= speed;
                document.getElementById("guy").style.bottom = window.bot + "px";
                document.getElementById("guy").style.background = "url(sprite/verrun2.png)";
                document.getElementById("guy").style.animation = "walk2 1s steps(8) infinite";
            }
        }
        if (k == 37 || k == 65) {
            if ((window.lef == 480 && window.bot > 480 && window.bot < 710 && unlock == false) || (window.lef == 1180 && window.bot > 480 && window.bot < 710 && unlock2 == false)) {

            } else if (window.lef > 0) {
                window.lef -= speed;
                document.getElementById("guy").style.transform = "scaleX(-1)";
                document.getElementById("guy").style.left = window.lef + "px";
                document.getElementById("guy").style.background = "url(sprite/walk.png)";
                document.getElementById("guy").style.animation = "walk " + mo + " steps(10) infinite";
            }
        }
        if (k == 39 || k == 68) {

            if ((window.lef == 260 && window.bot > 480 && window.bot < 710 && unlock == false) || (window.lef == 960 && window.bot > 480 && window.bot < 710 && unlock2 == false)) {

            } else if (window.lef < 1400) {
                window.lef += speed;
                document.getElementById("guy").style.transform = "scaleX(1)";
                document.getElementById("guy").style.left = window.lef + "px";
                document.getElementById("guy").style.background = "url(sprite/walk.png)";
                document.getElementById("guy").style.animation = "walk " + mo + " steps(10) infinite";
            }
        }

        /* TREASURE */
        if (k == 13) {

            if (window.lef >= 1050 && window.lef < 1200 && window.bot >= 0 && window.bot <= 50 && healthgain==0) {
                window.health = 6;
                document.getElementById('healthbar').style.backgroundImage="url(images/health6.png)";
                document.getElementById('fruitmine4').style.visibility="hidden";
                healthgain=1;

            }

            if (window.lef > 260 && window.lef < 470 && window.bot > 530 && window.bot < 640) {
                document.getElementById("sandal").style.visibility = "hidden";
                c += 1;
            }

            if (window.lef > 960 && window.lef < 1170 && window.bot > 530 && window.bot < 640) {
                document.getElementById("sandal2").style.visibility = "hidden";
                c += 1;
            }

            if (window.lef == 260 && window.bot > 520 && window.bot < 650) {
                if (keycollected == 1 || key2collected == 1) {
                    document.getElementById("box").style.visibility = "visible";
                } else {
                    alert("Find The Hidden Key Code in Bushes");
                }
            }

            if (window.lef == 960 && window.bot > 520 && window.bot < 650) {
                if (keycollected == 1 || key2collected == 1) {
                    document.getElementById("box2").style.visibility = "visible";
                } else {
                    alert("Find The Hidden Key Code");
                }
            }

            if (window.lef >= parseInt(keyleft) - 50 && window.lef <= parseInt(keyleft) + 30 && window.bot >= parseInt(keybot) - 30 && window.bot <= parseInt(keybot) + 20 && keycollected == 0 && key2collected == 0 && k1 == 0) {
                document.getElementById("key").style.visibility = "hidden";
                document.getElementById("keysymbol").style.backgroundImage = "url(images/keyactivate.png)";
                document.getElementById("keyspace").innerHTML = hiddenkey;

                document.getElementById('keyspace').animate([{
                        left: String(parseInt(window.keyleft) + 190) + 'px',
                        bottom: String(parseInt(window.keybot) + 40) + 'px',
                        opacity: '100%'
                    },
                    {
                        left: String(parseInt(window.keyleft) + 190) + 'px',
                        bottom: String(parseInt(window.keybot) + 80) + 'px',
                        opacity: '0%'
                    }
                ], {
                    duration: 1000,
                });
                window.keycollected = 1;
                k1 = 1;
            }

            if (window.lef >= parseInt(key2left) - 50 && window.lef <= parseInt(key2left) + 30 && window.bot >= parseInt(key2bot) - 30 && window.bot <= parseInt(key2bot) + 20 && keycollected == 0 && key2collected == 0 && k2 == 0) {
                document.getElementById("key2").style.visibility = "hidden";
                document.getElementById("keysymbol").style.backgroundImage = "url(images/keyactivate.png)";
                document.getElementById("key2space").innerHTML = hiddenkey2;

                document.getElementById('key2space').animate([{
                        left: String(parseInt(window.key2left) + 190) + 'px',
                        bottom: String(parseInt(window.key2bot) + 40) + 'px',
                        opacity: '100%'
                    },
                    {
                        left: String(parseInt(window.key2left) + 190) + 'px',
                        bottom: String(parseInt(window.key2bot) + 80) + 'px',
                        opacity: '0%'
                    }
                ], {
                    duration: 1000,
                });
                window.key2collected = 1;
                k2 = 1;
            }
        }




        /* WINNING */
        if (window.bot >= 700 && window.lef >= 1400) {
            if (c == 2) {

                mwin.play();

                sessionStorage.setItem("score", "100");
                document.getElementById("guy").style.visibility = "hidden";
                document.getElementById("winner2").style.animation = "walk3 1s steps(10) infinite, walkleft 2s";
                document.getElementById("winner").style.animation = "walk2 1s steps(8) infinite, walkup 2s";

                document.getElementById("truck").style.animation = "travel 8s";
                await sleep(2500);
                mtruck.play();
                await sleep(2000);

                document.getElementById("board").style.visibility = "visible";
                await sleep(3000);
                document.getElementById("truck").style.visibility = "hidden";




            } else {
                alert("Collect Both The Treasures");
            }
        }



        /* COIN COLLECTION */
        if (window.lef >= 130 && window.lef < 280 && window.bot >= 330 && window.bot <= 480) {
            disappear();
            if (coinonce == 1) {
                mcoin.play();
                coinonce = 2;
            }
        }




        /* MINES BLAST */
        if (window.lef >= 150 && window.lef < 300 && window.bot >= 0 && window.bot <= 50) {
            movability = 0;
            blast('blast1', 'mine1');
        } else if (window.lef >= 1250 && window.lef < 1400 && window.bot >= 660 && window.bot <= 750) {
            movability = 0;
            blast('blast2', 'mine2');
        } else if (window.lef >= 750 && window.lef < 900 && window.bot >= 360 && window.bot <= 450) {
            movability = 0;
            blast('blast3', 'mine3');
        } 

    }
}










/* function changeSprint()
 {
     if(p%2==0)
     {
     document.getElementById("sprint").innerHTML="Sprint On";
     speed = 10;
     mo = "0.6s";
     }
     else
     {
        document.getElementById("sprint").innerHTML="Sprint Off";
        speed = 5;
        mo = "1s";
     }
     p+=1;
 } 
 */



function idle() {
    if (fla != 1) {

        document.getElementById("guy").style.background = "url(sprite/idle.png)";
        document.getElementById("guy").style.animation = "idle 4s steps(10) infinite";
    }
}

document.onkeydown = mov;
document.onkeyup = idle;





var dogbot = 600;
var dogleft = 900;

var dog2bot = 100;
var dog2left = 200;







async function dogdash(dognum) {
    fla = 1;
    document.getElementById(dognum).style.animationPlayState = "paused";
    movability = 0;
    window.dead = true;
    document.getElementById("healthbar").style.backgroundImage = "url(images/health0.png)";
    document.getElementById("box").style.visibility = "hidden";
    document.getElementById("box2").style.visibility = "hidden";
    document.getElementById("failboard").style.visibility = "visible";
    document.getElementById('guy').style.animation = "none";


}

async function policedash() {
    fla = 1;
    document.getElementById('police1').style.animation = "none";
    movability = 0;
    window.dead = true;
    document.getElementById("healthbar").style.backgroundImage = "url(images/health0.png)";
    document.getElementById("box").style.visibility = "hidden";
    document.getElementById("box2").style.visibility = "hidden";
    document.getElementById("failboard").style.visibility = "visible";
    document.getElementById('guy').style.animation = "none";


}


async function policein() {
    window.policeleft = 1400;
    window.policebot = 100;
    document.getElementById("police1").style.visibility = "visible";
    while (true) {
        for (let x = 0; x < 467; x++) {
            policeleft = policeleft - 3;
            document.getElementById("police1").style.backgroundImage="url(police/policerunleft.png)";
            document.getElementById("police1").style.left = policeleft + 'px';
            await sleep(10);
            if ((window.lef + 70) >= policeleft && window.lef < (policeleft + 70) && (window.bot + 70) >= policebot && window.bot < (policebot + 70)) {
                policedash();
                return;
            }
        }
        for (let x = 0; x < 67; x++) {
            policebot = policebot + 3;
            document.getElementById("police1").style.backgroundImage="url(police/policerunup.png)";
            document.getElementById("police1").style.bottom = policebot + 'px';
            await sleep(10);
            if ((window.lef + 70) >= policeleft && window.lef < (policeleft + 70) && (window.bot + 70) >= policebot && window.bot < (policebot + 70)) {
                policedash();
                return;
            }
        }
        for (let x = 0; x < 400; x++) {
            policeleft = policeleft + 3;
            document.getElementById("police1").style.backgroundImage="url(police/policerunright.png)";
            document.getElementById("police1").style.left = policeleft + 'px';
            await sleep(10);
            if ((window.lef + 70) >= policeleft && window.lef < (policeleft + 70) && (window.bot + 70) >= policebot && window.bot < (policebot + 70)) {
                policedash();
                return;
            }
        }

        for (let x = 0; x < 133; x++) {
            policebot = policebot + 3;
            document.getElementById("police1").style.backgroundImage="url(police/policerunup.png)";
            document.getElementById("police1").style.bottom = policebot + 'px';
            await sleep(10);
            if ((window.lef + 70) >= policeleft && window.lef < (policeleft + 70) && (window.bot + 70) >= policebot && window.bot < (policebot + 70)) {
                policedash();
                return;
            }
        }

        for (let x = 0; x < 200; x++) {
            policeleft = policeleft - 3;
            document.getElementById("police1").style.backgroundImage="url(police/policerunleft.png)";
            document.getElementById("police1").style.left = policeleft + 'px';
            await sleep(10);
            if ((window.lef + 70) >= policeleft && window.lef < (policeleft + 70) && (window.bot + 70) >= policebot && window.bot < (policebot + 70)) {
                policedash();
                return;
            }
        }

        for (let x = 0; x < 100; x++) {
            policebot = policebot - 3;
            document.getElementById("police1").style.backgroundImage="url(police/policerundown.png)";
            document.getElementById("police1").style.bottom = policebot + 'px';
            await sleep(10);
            if ((window.lef + 70) >= policeleft && window.lef < (policeleft + 70) && (window.bot + 70) >= policebot && window.bot < (policebot + 70)) {
                policedash();
                return;
            }
        }

        for (let x = 0; x < 133; x++) {
            policeleft = policeleft - 3;
            document.getElementById("police1").style.backgroundImage="url(police/policerunleft.png)";
            document.getElementById("police1").style.left = policeleft + 'px';
            await sleep(10);
            if ((window.lef + 70) >= policeleft && window.lef < (policeleft + 70) && (window.bot + 70) >= policebot && window.bot < (policebot + 70)) {
                policedash();
                return;
            }
        }

        for (let x = 0; x < 100; x++) {
            policebot = policebot + 3;
            document.getElementById("police1").style.backgroundImage="url(police/policerunup.png)";
            document.getElementById("police1").style.bottom = policebot + 'px';
            await sleep(10);
            if ((window.lef + 70) >= policeleft && window.lef < (policeleft + 70) && (window.bot + 70) >= policebot && window.bot < (policebot + 70)) {
                policedash();
                return;
            }
        }

        for (let x = 0; x < 67; x++) {
            policeleft = policeleft - 3;
            document.getElementById("police1").style.backgroundImage="url(police/policerunleft.png)";
            document.getElementById("police1").style.left = policeleft + 'px';
            await sleep(10);
            if ((window.lef + 70) >= policeleft && window.lef < (policeleft + 70) && (window.bot + 70) >= policebot && window.bot < (policebot + 70)) {
                policedash();
                return;
            }
        }

        for (let x = 0; x < 200; x++) {
            policebot = policebot - 3;
            document.getElementById("police1").style.backgroundImage="url(police/policerundown.png)";
            document.getElementById("police1").style.bottom = policebot + 'px';
            await sleep(10);
            if ((window.lef + 70) >= policeleft && window.lef < (policeleft + 70) && (window.bot + 70) >= policebot && window.bot < (policebot + 70)) {
                policedash();
                return;
            }
        }

        for (let x = 0; x < 200; x++) {
            policeleft = policeleft + 3;
            document.getElementById("police1").style.backgroundImage="url(police/policerunright.png)";
            document.getElementById("police1").style.left = policeleft + 'px';
            await sleep(10);
            if ((window.lef + 70) >= policeleft && window.lef < (policeleft + 70) && (window.bot + 70) >= policebot && window.bot < (policebot + 70)) {
                policedash();
                return;
            }
        }

        for (let x = 0; x < 200; x++) {
            policebot = policebot + 3;
            document.getElementById("police1").style.backgroundImage="url(police/policerunup.png)";
            document.getElementById("police1").style.bottom = policebot + 'px';
            await sleep(10);
            if ((window.lef + 70) >= policeleft && window.lef < (policeleft + 70) && (window.bot + 70) >= policebot && window.bot < (policebot + 70)) {
                policedash();
                return;
            }
        }

        for (let x = 0; x < 100; x++) {
            policeleft = policeleft + 3;
            document.getElementById("police1").style.backgroundImage="url(police/policerunright.png)";
            document.getElementById("police1").style.left = policeleft + 'px';
            await sleep(10);
            if ((window.lef + 70) >= policeleft && window.lef < (policeleft + 70) && (window.bot + 70) >= policebot && window.bot < (policebot + 70)) {
                policedash();
                return;
            }
        }

        for (let x = 0; x < 100; x++) {
            policebot = policebot - 3;
            document.getElementById("police1").style.backgroundImage="url(police/policerundown.png)";
            document.getElementById("police1").style.bottom = policebot + 'px';
            await sleep(10);
            if ((window.lef + 70) >= policeleft && window.lef < (policeleft + 70) && (window.bot + 70) >= policebot && window.bot < (policebot + 70)) {
                policedash();
                return;
            }
        }

        for (let x = 0; x < 167; x++) {
            policeleft = policeleft + 3;
            document.getElementById("police1").style.backgroundImage="url(police/policerunright.png)";
            document.getElementById("police1").style.left = policeleft + 'px';
            await sleep(10);
            if ((window.lef + 70) >= policeleft && window.lef < (policeleft + 70) && (window.bot + 70) >= policebot && window.bot < (policebot + 70)) {
                policedash();
                return;
            }
        }

        for (let x = 0; x < 100; x++) {
            policebot = policebot - 3;
            document.getElementById("police1").style.backgroundImage="url(police/policerundown.png)";
            document.getElementById("police1").style.bottom = policebot + 'px';
            await sleep(10);
            if ((window.lef + 70) >= policeleft && window.lef < (policeleft + 70) && (window.bot + 70) >= policebot && window.bot < (policebot + 70)) {
                policedash();
                return;
            }
        }
    }


}

async function timer() {
    for (let zz = 40; zz >= 0; zz -= 1) {
        document.getElementById("timer").innerHTML = zz;
        await sleep(1000);
    }
    document.getElementById("timer").style.visibility="hidden";
    document.getElementById("warning").style.animation = "2s warningblink";
    await sleep(2000);
    document.getElementById("policed1").style.visibility = "visible";
    document.getElementById("policed1").style.animation = "policewalk 1s steps(6) infinite,police1leftdown 6s";
    await sleep(3200);
    document.getElementById("policed1").style.visibility = "hidden";
    policein();
}

window.value = 1;

async function dog_move() {
    var bg = sessionStorage.getItem("bg");
    var bush = sessionStorage.getItem("bush");
    var ground = sessionStorage.getItem("ground");
    document.getElementById("block").style.backgroundImage = bg;
    document.getElementById("bush1").style.backgroundImage = bush;
    document.getElementById("bush2").style.backgroundImage = bush;
    document.getElementById("bush3").style.backgroundImage = bush;
    document.getElementById("bush4").style.backgroundImage = bush;
    document.getElementById("bush5").style.backgroundImage = bush;
    document.getElementById("body").style.backgroundImage = ground;

    window.hiddenkey = Math.floor((Math.random() * (9999 - 1000) + 1000));
    window.hiddenkey2 = Math.floor((Math.random() * (9999 - 1000) + 1000));

    var keygen = keyloc[Math.floor(Math.random() * keyloc.length)];
    window.keyleft = keygen.slice(0, 4);
    window.keybot = keygen.slice(4, 8);

    var key2gen = keyloc[Math.floor(Math.random() * keyloc.length)];
    window.key2left = key2gen.slice(0, 4);
    window.key2bot = key2gen.slice(4, 8);


    document.getElementById("key").style.left = window.keyleft + "px";
    document.getElementById("key").style.bottom = window.keybot + "px";

    document.getElementById("key2").style.left = window.key2left + "px";
    document.getElementById("key2").style.bottom = window.key2bot + "px";

    if (bg == "url(images/finalbg3.jpg)") {
        var dogskinup = "url(sprite/icedogup.png)";
        var dogskindown = "url(sprite/icedogdown.png)";
        var dogskinright = "url(sprite/icedogright.png)";
        var dogskinleft = "url(sprite/icedogleft.png)";
    } else {
        var dogskinup = "url(sprite/dogup.png)";
        var dogskindown = "url(sprite/dogdown.png)";
        var dogskinright = "url(sprite/dogright.png)";
        var dogskinleft = "url(sprite/dogleft.png)";
    }

    while (true) {
        document.getElementById('dog').style.animation = "dog_walk 0.75s steps(4) infinite";

        for (let x = 0; x < 200; x++) {
            dogleft = dogleft - 2;
            document.getElementById("dog").style.left = dogleft + 'px';
            document.getElementById("dog").style.backgroundImage = dogskinleft;
            if ((window.lef + 70) >= dogleft && window.lef < (dogleft + 70) && (window.bot + 70) >= dogbot && window.bot < (dogbot + 70)) {
                dogdash("dog");
                return;
            }
            await sleep(10);
        }



        for (let x = 0; x < 200; x++) {
            dogbot = dogbot - 2;
            document.getElementById("dog").style.bottom = dogbot + "px";
            document.getElementById("dog").style.backgroundImage = dogskindown;
            if ((window.lef + 70) >= dogleft && window.lef < (dogleft + 70) && (window.bot + 70) >= dogbot && window.bot < (dogbot + 70)) {
                dogdash("dog");
                return;
            }
            await sleep(10);
        }



        for (let x = 0; x < 200; x++) {
            dogleft = dogleft + 2;
            document.getElementById("dog").style.left = dogleft + 'px';
            document.getElementById("dog").style.backgroundImage = dogskinright;
            if ((window.lef + 70) >= dogleft && window.lef < (dogleft + 70) && (window.bot + 70) >= dogbot && window.bot < (dogbot + 70)) {
                dogdash("dog");
                return;
            }
            await sleep(10);
        }



        for (let x = 0; x < 200; x++) {
            dogbot = dogbot + 2;
            document.getElementById("dog").style.bottom = dogbot + 'px';
            document.getElementById("dog").style.backgroundImage = dogskinup;
            if ((window.lef + 70) >= dogleft && window.lef < (dogleft + 70) && (window.bot + 70) >= dogbot && window.bot < (dogbot + 70)) {
                dogdash("dog");
                return;
            }
            await sleep(10);
        }
    }


}



async function dog2move() {
    var bg1 = sessionStorage.getItem("bg");
    if (bg1 == "url(images/finalbg3.jpg)") {
        var dogskinup = "url(sprite/icedogup.png)";
        var dogskindown = "url(sprite/icedogdown.png)";
        var dogskinright = "url(sprite/icedogright.png)";
        var dogskinleft = "url(sprite/icedogleft.png)";
    } else {
        var dogskinup = "url(sprite/dogup.png)";
        var dogskindown = "url(sprite/dogdown.png)";
        var dogskinright = "url(sprite/dogright.png)";
        var dogskinleft = "url(sprite/dogleft.png)";
    }


    while (true) {
        document.getElementById('dog2').style.animation = "dog_walk 0.75s steps(4) infinite";

        for (let y = 0; y < 200; y++) {
            dog2bot = dog2bot + 3;
            document.getElementById("dog2").style.bottom = dog2bot + 'px';
            document.getElementById("dog2").style.backgroundImage = dogskinup;
            if ((window.lef + 70) >= dog2left && window.lef < (dog2left + 70) && (window.bot + 70) >= dog2bot && window.bot < (dog2bot + 70)) {
                dogdash("dog2");
                return;
            }
            await sleep(10);
        }



        for (let y = 0; y < 334; y++) {
            dog2left = dog2left + 3;
            document.getElementById("dog2").style.left = dog2left + 'px';
            document.getElementById("dog2").style.backgroundImage = dogskinright;
            if ((window.lef + 70) >= dog2left && window.lef < (dog2left + 70) && (window.bot + 70) >= dog2bot && window.bot < (dog2bot + 70)) {
                dogdash("dog2");
                return;
            }
            await sleep(10);
        }



        for (let y = 0; y < 200; y++) {
            dog2bot = dog2bot - 3;
            document.getElementById("dog2").style.bottom = dog2bot + "px";
            document.getElementById("dog2").style.backgroundImage = dogskindown;
            if ((window.lef + 70) >= dog2left && window.lef < (dog2left + 70) && (window.bot + 70) >= dog2bot && window.bot < (dog2bot + 70)) {
                dogdash("dog2");
                return;
            }
            await sleep(10);
        }



        for (let y = 0; y < 334; y++) {
            dog2left = dog2left - 3;
            document.getElementById("dog2").style.left = dog2left + 'px';
            document.getElementById("dog2").style.backgroundImage = dogskinleft;
            if ((window.lef + 70) >= dog2left && window.lef < (dog2left + 70) && (window.bot + 70) >= dog2bot && window.bot < (dog2bot + 70)) {
                dogdash("dog2");
                return;
            }
            await sleep(10);
        }


    }

}



var vpause = 1;

function pause() {
    if (vpause == 1) {
        document.getElementById("pausemenu").style.visibility = "visible";
        document.getElementById("pausebg").style.visibility = "visible";
        document.getElementById("dog").style.animationPlayState = "paused";
        document.getElementById("coin").style.animationPlayState = "paused";
        document.getElementById("bird").style.animationPlayState = "paused";
        document.getElementById("bird2").style.animationPlayState = "paused";
        document.getElementById("pausepic").src = "images/play2.png";
        document.getElementById("gamescreen").style.opacity = 0.5;
        window.value = 0;

        vpause = 0;
    } else {
        document.getElementById("pausemenu").style.visibility = "hidden";
        document.getElementById("pausebg").style.visibility = "hidden";
        document.getElementById("dog").style.animationPlayState = "running";
        document.getElementById("coin").style.animationPlayState = "running";
        document.getElementById("bird").style.animationPlayState = "running";
        document.getElementById("bird2").style.animationPlayState = "running";
        document.getElementById("pausepic").src = "images/pause2.png";
        document.getElementById("gamescreen").style.opacity = 1;
        window.value = 1;
        vpause = 1;

    }
}


/*Lock Code*/
function clearScreen() {
    document.getElementById("result").value = "";
    document.getElementById("result").style.letterSpacing = "40px";
    document.getElementById("result2").value = "";
    document.getElementById("result2").style.letterSpacing = "40px";
    window.codemax = 0;
}
var codemax = 0;

function display(value) {
    let res = document.getElementById("result");
    let res2 = document.getElementById("result2");
    if (window.codemax < 4) {
        res.value += value;
        res2.value += value;
        window.codemax += 1;
    }
}


function checkcode() {
    let res = document.getElementById("result").value;
    let code = window.hiddenkey;
    if (res == code) {
        document.getElementById("box").style.visibility = "hidden";
        document.getElementById("cage").style.visibility = "hidden";
        document.getElementById("keysymbol").style.backgroundImage = "url(images/keynull.png)";
        window.unlock = true;
        window.keycollected = 0;
        clearScreen();
    } else {
        document.getElementById("result").style.letterSpacing = "0px";
        document.getElementById("result").value = "Incorrect Code";
    }
}

function checkcode2() {
    let res = document.getElementById("result2").value;
    let code = window.hiddenkey2;
    if (res == code) {
        document.getElementById("box2").style.visibility = "hidden";
        document.getElementById("cage2").style.visibility = "hidden";
        document.getElementById("keysymbol").style.backgroundImage = "url(images/keynull.png)";
        window.unlock2 = true;
        window.key2collected = 0;
        clearScreen();
    } else {
        document.getElementById("result2").style.letterSpacing = "0px";
        document.getElementById("result2").value = "Incorrect Code";
    }
}


function lockback() {
    document.getElementById("box").style.visibility = "hidden";
    document.getElementById("box2").style.visibility = "hidden";
    clearScreen();
}
/* --------- */