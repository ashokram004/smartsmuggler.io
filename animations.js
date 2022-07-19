function zoomin()
{
    
    document.getElementById("bgimg").style.transform="scale(1)";
    document.getElementById("box").style.transform="scale(1)";
    document.getElementById("pname").innerHTML = " NAME : <br> <p>" +sessionStorage.getItem("name") +"</p>";
    document.getElementById("pid").innerHTML =  " PLAYER ID : <br> <p>" +sessionStorage.getItem("userid") +"</p>";
    document.getElementById("pscore").innerHTML = " SCORE : <br> <p>" +sessionStorage.getItem("score") +"</p>";
    

}
