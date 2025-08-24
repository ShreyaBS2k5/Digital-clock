function updateClock(){
    let now=new Date();
    let hours=now.getHours().toString().padStart(1,"0");
    let minutes=now.getMinutes().toString().padStart(2,"0");
    let seconds=now.getSeconds().toString().padStart(2,"0");
    let date=now.getDate();
    let month=now.getMonth();
    let year=now.getFullYear(); // or we can use let date=now.toDateString(); instead of calling date,month,year seperately
    let ampm=hours>=12 ? "pm":"am";
    let greet = hours<12?"Good Morning":"Good Evening";
     if (now.getHours() >=6 && now.getHours()<18){
        document.body.style.background= "linear-gradient(to bottom #ffeb3b , #ff9800)";
        document.body.style.color = "#1a1313ff";
    }
    else{
         document.body.style.background= "linear-gradient( #300722ff , #03031aff, #1a0606ff";
         document.body.style.color = "#fff";
    }
    
    document.getElementById("clock").innerText= `${greet}
                                                 ${hours}:${minutes}:${seconds} ${ampm}\n
                                                 Date:${date}-${month}-${year}`;
   
    

}
setInterval(updateClock,1000);
updateClock();
