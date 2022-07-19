function gotologin()
{
    document.getElementById("cover").style.left = "50%";
    document.getElementById("rname").value="";
    document.getElementById("ruserid").value="";
    document.getElementById("rpass").value="";
    document.getElementById("cover").style.backgroundPosition= "100%";
}

function gotoregister()
{
    document.getElementById("cover").style.left = "0%";
    document.getElementById("luserid").value="";
    document.getElementById("lpass").value="";
    document.getElementById("cover").style.backgroundPosition= "0%";
}