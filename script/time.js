// This WIll Return Date in Desk.

function Time(x){
    const now = new Date();
    
    if(x == "DayTime")
        return now.toDateString().slice(0,3) + ",";
    if(x=="FullDayTime")    
        return now.toDateString().slice(4);
    if(x == "NowTime") {
        let ss = now.getSeconds();
        let mm = now.getMinutes();
        let  hh = now.getHours();
        let t = (hh > 12)? 'PM' : 'AM';
            hh %=12;

        


        return `${hh}':'${mm}':'${ss}' '${t}`;
    }
}

console.log(Time("NowTime"))


