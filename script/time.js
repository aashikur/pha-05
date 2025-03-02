// This WIll Return Date in Desk.

function Time(x){
// DayTime 
// FullDayTime 
// NowTime

    const now = new Date();
    
    if(x == "DayTime")
        return now.toDateString().slice(0,3) + ",";
    if(x=="FullDayTime")    
        return now.toDateString().slice(4);
    if(x == "NowTime") {
        let ss = now.getSeconds();
            ss = (ss <10)? "0"+ss : ss;

        let mm = now.getMinutes();
            mm = (mm < 10)? "0"+mm:mm;

        let  hh = now.getHours();
        let t = (hh > 12)? 'PM' : 'AM';

            hh %=12;
            hh = (hh < 10)? "0"+ hh : hh;

        return `${hh}:${mm}:${ss} ${t}`;
    }
}



