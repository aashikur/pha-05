
const btn = document.querySelectorAll('#CardContainer button');
const TaskLeft = document.getElementById('TaskAssinged');
const TaskTotal = document.getElementById('TaskTotal');
const History = document.getElementById('History');
const CardTitle = document.querySelectorAll('.card-title');


    
    function ClickBtn(num){

        const title = CardTitle[num].innerText;
     

        btn[num].addEventListener('click',function(){
            console.log(title);
            btn[num].setAttribute('disabled',true);
            // console.log("hello");
            TaskLeft.innerHTML ="0" + ( parseFloat(TaskLeft.innerHTML) - 1);
            TaskTotal.innerHTML =( parseFloat(TaskTotal.innerHTML) + 1);

        // Add title 
        const p = document.createElement('p');

        p.classList.add('px-5', 'py-2', 'rounded-md', 'bg-white', 'mb-5', 'text-text','text-sm');
        p.innerHTML = `You have Complete The Task Add <span class="text-primary opacity-70">${title}</span> at <span class="opacity-70 text-primary">${Time("NowTime")}</span>`;        
        History.appendChild(p);

        

        }) 
    }


    for(let i = 0; i<6 ; i++)   
        ClickBtn(i);
    

// DayTime 
// FullDayTime 
// NowTime


    // btn[0].addEventListener('click',function(){
    //     btn[0].setAttribute('disabled',true);
    //     console.log("hello");
    //     TaskLeft.innerHTML ="0" + ( parseFloat(TaskLeft.innerHTML) - 1);
    //     TaskTotal.innerHTML =( parseFloat(TaskTotal.innerHTML) + 1);
        
        
    // }) 
