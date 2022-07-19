
         
         
         
         var bg = document.getElementById("block");
         var bot=0;
         var lef=0;
         var tar= document.getElementById("sandal");
         var c=0;
         var speed=10;
         var mo="0.6s";
         var p=0;
         var movability=1;
         var fla=0;
         var keycollected = 0;
         var unlock=false;


         const mblast = new Audio('music/blast.mp3');
         const mwin = new Audio('music/win.mp3');
         const mcoin = new Audio('music/coin.mp3'); var coinonce=1;
         const mtruck = new Audio('music/truck.mp3');


         function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
         }

         async function disappear()
         {
            document.getElementById("coin").style.animation="disappear 0.7s";
            await sleep(700);
            document.getElementById("coin").style.visibility="hidden";

         }

         async function blast(b1,b2)
         {
            fla=1;
            mblast.play();

            document.getElementById(b1).style.visibility="visible";
            document.getElementById(b2).style.visibility="hidden";
            document.getElementById('guy').style.backgroundImage="url(images/fall.png)";
            document.getElementById('guy').style.animation= "fall 1s steps(5) infinite";
            await sleep(1000);
            document.getElementById('guy').style.animation= "none";
            document.getElementById('guy').style.backgroundImage="url(images/fall.png)";
            document.getElementById('guy').style.backgroundPosition="-400px";
            
            document.getElementById(b1).style.visibility="hidden";
            
            document.getElementById("failboard").style.visibility="visible";
            document.getElementById("dog").style.animationPlayState="paused";
            movability=0;
         }


         
         async function mov(e)
         { 
            if(movability==1)
            {
             var k = e.keyCode;
             /*if(k==16)
             {
                changeSprint();

             } */
             

             /* WALK ALL DIRECTIONS */
             if(k==38 || k==87)
             {
                 if((bot==290 && lef>=560 && lef<=780 && unlock==false) || (bot==530 && lef<60))
                 {

                 }
                 else if(bot<700)
                 {
                 bot+=speed;
                 document.getElementById("guy").style.transform="scaleY(1)";
                 document.getElementById("guy").style.bottom = bot + "px";
                 document.getElementById("guy").style.background="url(sprite/verrun.png)";
                 document.getElementById("guy").style.animation="walk2 1s steps(8) infinite";
                 }
             }
             if(k==40 || k==83)
             {
                if(bot==510  && lef>=560 && lef<=780 && unlock==false)
                {
                }
                else if(bot>0)
                 {
                 bot-=speed;
                 document.getElementById("guy").style.bottom = bot + "px";
                 document.getElementById("guy").style.background="url(sprite/verrun2.png)";
                 document.getElementById("guy").style.animation="walk2 1s steps(8) infinite";
                 }
             }
             if(k==37 || k==65)
             {
                if(lef==780 && bot>280 && bot<510 && unlock==false) 
                {
                }
                else if(lef>0)
                 {
                 lef-=speed;
                 document.getElementById("guy").style.transform="scaleX(-1)";
                 document.getElementById("guy").style.left = lef + "px";
                 document.getElementById("guy").style.background="url(sprite/walk.png)";
                 document.getElementById("guy").style.animation="walk "+mo+" steps(10) infinite";
                 }
             }
             if(k==39 || k==68)
             {
                 if(lef==560 && bot>280 && bot<510 && unlock==false) 
                 {
                 }
                 else if(lef<1400)
                 {
                 lef+=speed;
                 document.getElementById("guy").style.transform="scaleX(1)";
                 document.getElementById("guy").style.left = lef + "px";
                 document.getElementById("guy").style.background="url(sprite/walk.png)";
                 document.getElementById("guy").style.animation="walk "+mo+" steps(10) infinite";
                 }
             }

             /* TREASURE */
             if(k==13)
             {

                 if(lef>560 && lef<770 && bot>330 && bot<440)
                     {
                         document.getElementById("sandal").style.visibility="hidden";
                         c=1;
                     }

                 if(lef==560 && bot>320 && bot<450 && keycollected==1) 
                     {
                         document.getElementById("cage").style.visibility="hidden";
                         unlock=true;
                     }    

                 if (lef>=1350 && bot>=350 && bot<450)    
                 {
                    document.getElementById("key").style.visibility="hidden";
                    document.getElementById("keysymbol").style.backgroundImage = "url(images/keyactivate.png)";
                    keycollected = 1;
                 }
             }
     



             /* WINNING */
             if(bot>=700 && lef>=1400)
             {
                 if(c==1)
                 {
                     mwin.play();
                     document.getElementById("guy").style.visibility="hidden";
                     document.getElementById("winner2").style.animation = "walk3 1s steps(10) infinite, walkleft 2s";
                     document.getElementById("winner").style.animation = "walk2 1s steps(8) infinite, walkup 2s";
                     
                     document.getElementById("truck").style.animation = "travel 8s";
                     await sleep(2500);
                     mtruck.play();
                     await sleep(2000);
                     
                     document.getElementById("board").style.visibility="visible";
                     await sleep(3000);
                     document.getElementById("truck").style.visibility="hidden";


                 }
                 else
                 {
                     alert("You should collect Target first");
                 }
             }
             
         

             /* COIN COLLECTION */
             if(lef>=330 && lef<480 && bot>=430 && bot<=580)
             {
             disappear();
             if(coinonce==1)
              {
                mcoin.play();
                coinonce=2;
              }
              }




              /* MINES BLAST */
              if(lef>=150 && lef<300 && bot>=0 && bot<=30)
              {
                movability=0;
              blast('blast1','mine1');
              } 
              else if(lef>=1250 && lef<1400 && bot>=600 && bot<=630)
              {
                movability=0;
                blast('blast2','mine2');
              }
              else if(lef>=750 && lef<900 && bot>=400 && bot<=430)
              {
                movability=0;
                blast('blast3','mine3');
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



         function idle()
         {
             if(fla!=1)
             {
            
                document.getElementById("guy").style.background="url(sprite/idle.png)";
                document.getElementById("guy").style.animation="idle 4s steps(10) infinite";
             }
         }

         document.onkeydown=mov;
         document.onkeyup=idle;





         var dogbot=600;
         var dogleft=1000;



        


         async function dogdash()
         {
            fla=1;
            document.getElementById("dog").style.animationPlayState="paused";
            movability=0;

            document.getElementById("failboard").style.visibility="visible";
            document.getElementById('guy').style.animation= "none";

            
         } 


   window.value=1;

    async function dog_move()
    {
            var bg=sessionStorage.getItem("bg");
            var bush=sessionStorage.getItem("bush");
            var ground=sessionStorage.getItem("ground");
            document.getElementById("block").style.backgroundImage=bg;
            document.getElementById("bush1").style.backgroundImage=bush;
            document.getElementById("bush2").style.backgroundImage=bush;
            document.getElementById("body").style.backgroundImage=ground;

            if(bg=="url(images/finalbg3.jpg)")
            {
                var dogskinup = "url(sprite/icedogup.png)";
                var dogskindown = "url(sprite/icedogdown.png)";
                var dogskinright = "url(sprite/icedogright.png)";
                var dogskinleft = "url(sprite/icedogleft.png)";
            }
            else
            {
                var dogskinup = "url(sprite/dogup.png)";
                var dogskindown = "url(sprite/dogdown.png)";
                var dogskinright = "url(sprite/dogright.png)";
                var dogskinleft = "url(sprite/dogleft.png)";
            }

        while(true)
        {
            for(let x=0;x<500;x++)
            {
            dogleft = dogleft-1;
            document.getElementById("dog").style.left=dogleft + 'px';
            document.getElementById("dog").style.backgroundImage=dogskinleft;
            if((lef+70)>=dogleft && lef<(dogleft+70)   && (bot+70)>=dogbot && bot<(dogbot+70))
            {
            dogdash();
            return;
            }
            await sleep(10);
            }

            for(let x=0;x<400;x++)
            {
            dogbot = dogbot-1;
            document.getElementById("dog").style.bottom = dogbot + "px";
            document.getElementById("dog").style.backgroundImage=dogskindown;
            if((lef+70)>=dogleft && lef<(dogleft+70)   && (bot+70)>=dogbot && bot<(dogbot+70))
            {
            dogdash();
            return;
            }
            await sleep(10);
            }

            for(let x=0;x<500;x++)
            {
            dogleft = dogleft+1;
            document.getElementById("dog").style.left=dogleft + 'px';
            document.getElementById("dog").style.backgroundImage=dogskinright;
            if((lef+70)>=dogleft && lef<(dogleft+70)   && (bot+70)>=dogbot && bot<(dogbot+70))
            {
            dogdash();
            return;
            }
            await sleep(10);
            }

            for(let x=0;x<400;x++)
            {
            dogbot = dogbot+1;
            document.getElementById("dog").style.bottom=dogbot + 'px';
            document.getElementById("dog").style.backgroundImage=dogskinup;
            if((lef+70)>=dogleft && lef<(dogleft+70)   && (bot+70)>=dogbot && bot<(dogbot+70))
            {
            dogdash();
            return;
            }
            await sleep(10);
            }
        }
            

    }
    

    var vpause=1;
    function pause()
    {
        if(vpause==1)
        {
            document.getElementById("pausemenu").style.visibility="visible";
            document.getElementById("pausebg").style.visibility="visible";
            document.getElementById("dog").style.animationPlayState="paused";
            document.getElementById("coin").style.animationPlayState="paused";
            document.getElementById("bird").style.animationPlayState="paused";
            document.getElementById("bird2").style.animationPlayState="paused";
            document.getElementById("pausepic").src="images/play2.png";
            document.getElementById("gamescreen").style.opacity=0.5;
            window.value=0;

            vpause= 0;
        }
        else
        {
            document.getElementById("pausemenu").style.visibility="hidden";
            document.getElementById("pausebg").style.visibility="hidden";
            document.getElementById("dog").style.animationPlayState="running";
            document.getElementById("coin").style.animationPlayState="running";
            document.getElementById("bird").style.animationPlayState="running";
            document.getElementById("bird2").style.animationPlayState="running";
            document.getElementById("pausepic").src="images/pause2.png";
            document.getElementById("gamescreen").style.opacity=1;
            window.value=1;
            vpause= 1;

        }
    }
     
     