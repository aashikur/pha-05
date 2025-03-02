
const btn = document.querySelectorAll('#CardContainer button');
const TaskLeft = document.getElementById('TaskAssinged');
const TaskTotal = document.getElementById('TaskTotal');
const History = document.getElementById('History');




console.log(TaskTotal.innerHTML)

    btn[0].addEventListener('click',function(){
        btn[0].setAttribute('disabled',true);
        console.log("hello");
        TaskLeft.innerHTML ="0" + ( parseFloat(TaskLeft.innerHTML) - 1);
        TaskTotal.innerHTML =( parseFloat(TaskTotal.innerHTML) + 1);
        
        
    }) 

    btn[1].addEventListener('click',function(){
        btn[1].setAttribute('disabled',true);
        console.log("hello");
        TaskLeft.innerHTML ="0" + ( parseFloat(TaskLeft.innerHTML) - 1);
        TaskTotal.innerHTML = ( parseFloat(TaskTotal.innerHTML) + 1);
        
        // Add title 
        const p = document.createElement('p');
        p.classList.add('px-5', 'py-2', 'rounded-md', 'bg-white', 'mb-5', 'text-text');
        const x = Time('Day');
        History.appendChild(p);

    }) 

