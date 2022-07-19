const bgm = new Audio('music/avatar.mp3');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function changebg(bg, x, bush, ground) {
    document.getElementById('bg1').style.outline = "none";
    document.getElementById('bg1').style.boxShadow = "5px 6px 10px 3px rgba(0, 0, 0, 0.76)";

    document.getElementById('bg2').style.outline = "none";
    document.getElementById('bg2').style.boxShadow = "5px 6px 10px 3px rgba(0, 0, 0, 0.76)";

    document.getElementById('bg3').style.outline = "none";
    document.getElementById('bg3').style.boxShadow = "5px 6px 10px 3px rgba(0, 0, 0, 0.76)";


    sessionStorage.setItem("bg", bg);
    sessionStorage.setItem("bush", bush);
    sessionStorage.setItem("ground", ground);


    document.getElementById(x).style.outline = "5px solid yellow";
    document.getElementById(x).style.boxShadow = "0px 0px 12px 7px rgba(255, 220, 21, 0.589)";
}

function changehero(bg, x) {
    document.getElementById('hero1').style.outline = "none";
    document.getElementById('hero1').style.boxShadow = "5px 6px 10px 3px rgba(0, 0, 0, 0.76)";

    document.getElementById('hero2').style.outline = "none";
    document.getElementById('hero2').style.boxShadow = "5px 6px 10px 3px rgba(0, 0, 0, 0.76)";

    document.getElementById('hero3').style.outline = "none";
    document.getElementById('hero3').style.boxShadow = "5px 6px 10px 3px rgba(0, 0, 0, 0.76)";


    /*sessionStorage.setItem("bg", bg);
    sessionStorage.setItem("bush", bush);
    sessionStorage.setItem("ground", ground); */


    document.getElementById(x).style.outline = "5px solid yellow";
    document.getElementById(x).style.boxShadow = "0px 0px 12px 7px rgba(255, 220, 21, 0.589)";
}


function reset()
{
    sessionStorage.setItem("score", null);

    alert("Levels reset successful")
}


function goback() {

    document.getElementById("background").style.visibility = "hidden";
    document.getElementById("bg1").style.visibility = "hidden";
    document.getElementById("bg2").style.visibility = "hidden";
    document.getElementById("bg3").style.visibility = "hidden";
    document.getElementById("save").style.visibility = "hidden";
    document.getElementById("hero").style.visibility = "hidden";
    document.getElementById("hero1").style.visibility = "hidden";
    document.getElementById("hero2").style.visibility = "hidden";
    document.getElementById("hero3").style.visibility = "hidden";
    document.getElementById("savehero").style.visibility = "hidden";
    document.getElementById("main").style.visibility = "visible";
    document.getElementById("background").style.transform = "scale(0.8)";
    document.getElementById("hero").style.transform = "scale(0.8)";
    document.getElementById("bgimg").style.filter = "blur(0px)";
    document.getElementById("bgimg").style.transform = "scale(1)";
    document.getElementById("vol").style.visibility = "visible";
}



function openbg() {
    document.getElementById("vol").style.visibility = "hidden";
    document.getElementById("main").style.visibility = "hidden";
    document.getElementById("bg1").style.visibility = "visible";
    document.getElementById("bg2").style.visibility = "visible";
    document.getElementById("bg3").style.visibility = "visible";
    document.getElementById("save").style.visibility = "visible";

    document.getElementById("background").style.visibility = "visible";

    document.getElementById("background").style.transform = "scale(0.9)";
    document.getElementById("bgimg").style.filter = "blur(0.5px)";
    document.getElementById("bgimg").style.transform = "scale(1.1)";


}

function openhero() {
    document.getElementById("vol").style.visibility = "hidden";
    document.getElementById("main").style.visibility = "hidden";
    document.getElementById("hero1").style.visibility = "visible";
    document.getElementById("hero2").style.visibility = "visible";
    document.getElementById("hero3").style.visibility = "visible";
    document.getElementById("savehero").style.visibility = "visible";

    document.getElementById("hero").style.visibility = "visible";

    document.getElementById("hero").style.transform = "scale(0.9)";
    document.getElementById("bgimg").style.filter = "blur(0.5px)";
    document.getElementById("bgimg").style.transform = "scale(1.1)";


}



var s = 0;

function volchange() {
    if (s == 0) {
        bgm.play();
        document.getElementById("vol").style.backgroundImage = "url(images/von.png)";
        s = 1;
    } else {
        bgm.pause();
        document.getElementById("vol").style.backgroundImage = "url(images/voff.png)";
        s = 0;
    }

}


var pr = 0;

function displayprofile() {
    if (pr == 0) {
        document.getElementById('profilebox').style.visibility = "visible";
        document.getElementById('profilebox').style.top = "10px";
        document.getElementById('profilebox').style.left= "1300px";
        document.getElementById('profilebox').style.transform = "scale(0.7)";
        document.getElementById('profile').style.boxShadow= "0px 0px 5px 5px rgb(255, 115, 0)";
        
        pr = 1;
    } else {
        document.getElementById('profilebox').style.visibility = "hidden";
        document.getElementById('profilebox').style.top = "-200px";
        document.getElementById('profilebox').style.left= "1550px";
        document.getElementById('profilebox').style.transform = "scale(0.1)";
        document.getElementById('profile').style.boxShadow= "0px 0px 0px 0px";
        pr = 0;
    }

}






async function opensettings() {
    document.getElementById('start').style.visibility = "hidden";
    document.getElementById('settings').style.visibility = "hidden";
    document.getElementById('help').style.visibility = "hidden";
    document.getElementById('start').style.transform = "scale(0.8)";
    document.getElementById('settings').style.transform = "scale(0.8)";
    document.getElementById('help').style.transform = "scale(0.8)";
    await sleep(200);
    document.getElementById('character').style.visibility = "visible";
    document.getElementById('land').style.visibility = "visible";
    document.getElementById('reset').style.visibility="visible";
    document.getElementById('savesettings').style.visibility = "visible";
    document.getElementById('character').style.transform = "scale(1)";
    document.getElementById('reset').style.transform = "scale(1)";
    document.getElementById('land').style.transform = "scale(1)";
    document.getElementById('savesettings').style.transform = "scale(0.7)";

}

async function openhelp() {
    document.getElementById('start').style.visibility = "hidden";
    document.getElementById('settings').style.visibility = "hidden";
    document.getElementById('help').style.visibility = "hidden";
    document.getElementById('start').style.transform = "scale(0.8)";
    document.getElementById('settings').style.transform = "scale(0.8)";
    document.getElementById('help').style.transform = "scale(0.8)";
    await sleep(200);
    document.getElementById('controlsbutton').style.visibility = "visible";
    document.getElementById('tutorialbutton').style.visibility = "visible";
    document.getElementById('helpback').style.visibility="visible";
    document.getElementById('controlsbutton').style.transform = "scale(1)";
    document.getElementById('tutorialbutton').style.transform = "scale(1)";
    document.getElementById('helpback').style.transform = "scale(0.7)";
}

async function opencontrols() {
    document.getElementById('controlsbutton').style.visibility = "hidden";
    document.getElementById('tutorialbutton').style.visibility = "hidden";
    document.getElementById('helpback').style.visibility = "hidden";
    document.getElementById('controlsbutton').style.transform = "scale(0.7)";
    document.getElementById('tutorialbutton').style.transform = "scale(0.7)";
    document.getElementById('helpback').style.transform = "scale(0.6)";
    await sleep(200);
    document.getElementById('controls').style.visibility = "visible";
    document.getElementById('controlsok').style.visibility = "visible";
    document.getElementById('controls').style.transform = "scale(1)";

}

async function opentutorial() {
    document.getElementById('controlsbutton').style.visibility = "hidden";
    document.getElementById('tutorialbutton').style.visibility = "hidden";
    document.getElementById('helpback').style.visibility = "hidden";
    document.getElementById('controlsbutton').style.transform = "scale(0.7)";
    document.getElementById('tutorialbutton').style.transform = "scale(0.7)";
    document.getElementById('helpback').style.transform = "scale(0.6)";
    await sleep(200);
    document.getElementById('tutbox').style.visibility = "visible";
    document.getElementById('tutbox').style.transform = "scale(1)";
    document.getElementById('tutok').style.visibility = "visible";
    document.getElementById('tutleft').style.visibility = "visible";
    document.getElementById('tutright').style.visibility = "visible";

}



async function controlsgoback() {
    document.getElementById('controls').style.visibility = "hidden";
    document.getElementById('controlsok').style.visibility = "hidden";
    document.getElementById('controls').style.transform = "scale(0.4)";
    await sleep(200);
    document.getElementById('controlsbutton').style.visibility = "visible";
    document.getElementById('tutorialbutton').style.visibility = "visible";
    document.getElementById('helpback').style.visibility = "visible";
    document.getElementById('controlsbutton').style.transform = "scale(1)";
    document.getElementById('tutorialbutton').style.transform = "scale(1)";
    document.getElementById('helpback').style.transform = "scale(0.7)";

}






async function gobackhome() {

    document.getElementById('character').style.visibility = "hidden";
    document.getElementById('land').style.visibility = "hidden";
    document.getElementById('reset').style.visibility = "hidden";
    document.getElementById('controlsbutton').style.visibility = "hidden";
    document.getElementById('tutorialbutton').style.visibility = "hidden";
    document.getElementById('helpback').style.visibility = "hidden";
    document.getElementById('savesettings').style.visibility = "hidden";
    document.getElementById('character').style.transform = "scale(0.7)";
    document.getElementById('land').style.transform = "scale(0.7)";
    document.getElementById('reset').style.transform = "scale(0.7)";
    document.getElementById('savesettings').style.transform = "scale(0.6)";
    document.getElementById('controlsbutton').style.transform = "scale(0.7)";
    document.getElementById('tutorialbutton').style.transform = "scale(0.7)";
    document.getElementById('helpback').style.transform = "scale(0.6)";
    await sleep(200);
    document.getElementById("vol").style.visibility = "visible";
    document.getElementById('start').style.visibility = "visible";
    document.getElementById('settings').style.visibility = "visible";
    document.getElementById('help').style.visibility = "visible";
    document.getElementById('start').style.transform = "scale(1)";
    document.getElementById('settings').style.transform = "scale(1)";
    document.getElementById('help').style.transform = "scale(1)";
}