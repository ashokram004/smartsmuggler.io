
     
                
        function zoominn()
        {

            document.getElementById("bgimg").style.transform="scale(1)";
            document.getElementById("bgimgfrontt").style.transform="scale(1)";
            
            var status=sessionStorage.getItem("score");
            if(status!=null)
            {
                if(status=="30")
                {
                    document.getElementById("lv2link").href="gamelevel2.html";
                    document.getElementById("lock2").style.visibility="hidden";
                    document.getElementById("stars1").style.visibility="visible";
                }
                else if(status=="60")
                {
                    document.getElementById("lv2link").href="gamelevel2.html";
                    document.getElementById("lv3link").href="gamelevel3.html";
                    document.getElementById("lock2").style.visibility="hidden";
                    document.getElementById("lock3").style.visibility="hidden";
                    document.getElementById("stars1").style.visibility="visible";
                    document.getElementById("stars2").style.visibility="visible";
                }
                else if(status=="100")
                {
                    document.getElementById("lv2link").href="gamelevel2.html";
                    document.getElementById("lv3link").href="gamelevel3.html";
                    document.getElementById("lock2").style.visibility="hidden";
                    document.getElementById("lock3").style.visibility="hidden";
                    document.getElementById("stars1").style.visibility="visible";
                    document.getElementById("stars2").style.visibility="visible";
                    document.getElementById("stars3").style.visibility="visible";
                    const start = () => {
                        setTimeout(function() {
                            confetti.start()
                        }, 100); // 1000 is time that after 1 second start the confetti ( 1000 = 1 sec)
                    };
                    
                    //  for stopping the confetti 
                    
                    const stop = () => {
                        setTimeout(function() {
                            confetti.stop()
                        }, 10000); // 5000 is time that after 5 second stop the confetti ( 5000 = 5 sec)
                    };
                    // after this here we are calling both the function so it works
                    start();
                    stop();
                }
            }
        
        
        
        
                      
         }
          
                

