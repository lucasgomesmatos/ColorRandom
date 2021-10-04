let colorContainer = document.getElementById('colorCode')

let getButton = document.getElementById('genNewBtn')

let symbols = "0123456789ABCDEF"

let color = ''

getButton.addEventListener('click', ()=>{
  for(let i=0; i<6; i++){
    color += symbols[Math.floor(Math.random() * 16)]; 
  }

  colorContainer.innerHTML = `#${color}`;
  document.body.style.background = `#${color}`;
  color = '';
});