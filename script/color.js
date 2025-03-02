

const Rcolor = document.getElementById('Rcolor');

      Rcolor.addEventListener('click',function(){

        let r = parseInt(Math.random() * 1000) % 250;
        let g = parseInt(Math.random() * 1000) % 250;
        let b = parseInt(Math.random() * 1000) % 250;
        console.log(r,g,b);
        document.getElementById('main-body').classList.remove('bg-bg_color')
        document.getElementById('main-body').style.background = `rgba(${r}, ${g}, ${b}, 0.4)`;

      });
 