function showTime(){
    var date = new Date();
    var h = date.getHours(); //hour
    var m = date.getMinutes(); // minutes
    var s = date.getSeconds(); // seconds
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("cDisplay").innerText = time;
    document.getElementById("cDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();
