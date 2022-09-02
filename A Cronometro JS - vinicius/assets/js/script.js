    function show() {
        document.querySelector(".container").style.display = "flex";
        document.querySelector(".tela-inicio").style.display ="none";
    };
    function voltar() {
        document.querySelector(".container").style.display = "none";
        document.querySelector(".tela-inicio").style.display ="flex";
        reset();
    };

   var mili = 0;
   var sec = "0"+0;
   var min = "0"+00;
   mili++;
   var crono;

    function start() {
        crono = setInterval(()=>{time()},10);
        document.querySelector("#start").disabled = true;
    };
    function stop() {
        clearInterval(crono);
        document.querySelector("#start").disabled = false;
    };
    
    function reset() {
        stop();
        sec = "0"+0;
        mili = "0"+0;
        document.querySelector(".numero-cron").innerHTML = `${min}:${sec}:${mili}`;
        document.querySelector("#start").disabled = false;
    };

    function time() {
        mili++;
        mili = mili >= 9? mili:`0${mili}`;
        if(mili >= 100){
            mili = 0;
            sec++;
            sec = sec < 10?`0${sec}`:sec;
        }
        if(sec >= 60){
            sec = 0;
            min++;
            min = min < 10?`0${min}`:min ;
        }
        document.querySelector(".numero-cron").innerHTML = `${min}:${sec}:${mili}`;  
    };