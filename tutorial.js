arr = [0,9.1,18.2,27.3,36.4,45.5,54.6,63.7,72.8,81.9,91,100];
window.pos = 0;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


function slideleft()
{
    if(window.pos>0)
    {
        window.pos = window.pos - 1;
        document.getElementById('tutbox').style.backgroundPosition = arr[window.pos] + "%";
    }
}

function slideright()
{
    if(window.pos<11)
    {
        window.pos = window.pos + 1;
        document.getElementById('tutbox').style.backgroundPosition = arr[window.pos] + "%";
    }
}


async function tutorialgoback() {
    document.getElementById('tutbox').style.visibility = "hidden";
    document.getElementById('tutbox').style.transform = "scale(0.7)";
    document.getElementById('tutok').style.visibility = "hidden";
    document.getElementById('tutleft').style.visibility = "hidden";
    document.getElementById('tutright').style.visibility = "hidden";
    await sleep(250);
    window.pos = 0;
    document.getElementById('tutbox').style.backgroundPosition = arr[window.pos] + "%";
    document.getElementById('controlsbutton').style.visibility = "visible";
    document.getElementById('tutorialbutton').style.visibility = "visible";
    document.getElementById('helpback').style.visibility = "visible";
    document.getElementById('controlsbutton').style.transform = "scale(1)";
    document.getElementById('tutorialbutton').style.transform = "scale(1)";
    document.getElementById('helpback').style.transform = "scale(0.7)";
        
}        