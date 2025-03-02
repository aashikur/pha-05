
const btn = document.querySelectorAll('#CardContainer button');
const TaskLeft = document.getElementById('TaskAssinged');
const TaskTotal = document.getElementById('TaskTotal');
const History = document.getElementById('History');


    
    function ClickBtn(num){

        btn[num].addEventListener('click',function(){
            btn[num].setAttribute('disabled',true);
            console.log("hello");
            TaskLeft.innerHTML ="0" + ( parseFloat(TaskLeft.innerHTML) - 1);
            TaskTotal.innerHTML =( parseFloat(TaskTotal.innerHTML) + 1);

        // Add title 
        const p = document.createElement('p');

        p.classList.add('px-5', 'py-2', 'rounded-md', 'bg-white', 'mb-5', 'text-text');
        p.innerHTML = `You have Complete The Task Add Dark Mode at <span class="text-primary">${Time("NowTime")}</span>`;

        
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
