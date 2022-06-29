//começo da interface
let yourVoteFor = document.querySelector ('.d-1-1 span');
let office = document.querySelector('.d-1-2 span');
let description = document.querySelector('.d-1-4');
let warning = document.querySelector('.d-2');
let image = document.querySelector('.d-1-right');
let numbers = document.querySelector('.d-1-3');
//fim da interface
let stapCurrent = 0;
let number ='';

function startStage() {
    let stap = staps [stapCurrent];

    let numberHtml = '';

    for(let i=0;i<stap.numbers;i++){
        if(i === 0){
            numberHtml += '<div class="numero pisca"></div>'
        } else{
            numberHtml += '<div class="numero"></div>';
        }
    }
    yourVoteFor.style.display = 'none';
    office.innerHTML = stap.tittle;
    description.innerHTML = '';
    warning.style.display = 'none';
    image.innerHTML = '';
    numbers.innerHTML = numberHtml;
}
function updateInterface (){
     let stap = staps[stapCurrent];
     let candidates = stap.candidates.filter((item)=>{
        if(item.number === number){
            return true;
        }else{
            return false;
        }
     });

     if(candidates.length > 0){
        candidates = candidates[0];
        yourVoteFor.style.display = 'block';
        description.innerHTML = `Nome: ${candidates.name}<br/>Partido: ${candidates.part}`;
        warning.style.display ='block'

        let photoHtml = '';
          for(let i in candidate.photo){
            photoHtml += `<div class="d-1-image"><img src="img/${candidates.photo[i].url}" alt="">${candidates.photo[i].legend}</div>`
          }
        image.innerHTML = photoHtml;
     }

}

function clicks(n) {
    let numberEl = document.querySelector(".numero.pisca");
    if(numberEl !== null){
        numberEl.innerHTML = n;
        number = `${number}${n}`;

        numberEl.classList.remove('pisca');
        if(numberEl.nextElementSibling){
            numberEl.nextElementSibling.classList.add('pisca');
        }else {
            updateInterface();
        }
    }else {
        updateInterface();
    }
}
function white(){
    alert("Clicou em BRANCO!");
}
function correct(){
    alert("Clicou em CORRIGE!");
}
function comfirm(){
    alert("Clicou em COMFIRMA!");
}


startStage();
