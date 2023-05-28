let notification = document.querySelectorAll(".notification");
let checkAll = document.querySelector("button");
let bolinha = document.getElementsByTagName("svg");
checkAll.addEventListener("click", CheckAll)
for(let i = 0; i<3; i++){//pra cada área de noptificação, adicone o evento click
    notification[i].addEventListener("click", Check);
}
function CheckAll(){//marca todas como visualizadas aplicando a remoção de uma por uma através do laço de repetição
    let cont = document.querySelector("span").remove();
    for(let i = 0; i<3; i++){
        notification[i].style.backgroundColor="#fff";
        bolinha[0].remove();
    }
}
function Check(targ){//targ é o item clicado que ativa a função
   //FAZER A BOLINHA VERMELHA SUMIR 
   let cont = document.querySelector("span");//quantidade de notificações (3)
    targ.target.style.backgroundColor="#fff";
    bolinha[0].remove();
    cont.innerHTML-=1//diminui um da quantidade de notifação
    if(cont.innerHTML==0){
        cont.remove();//se a quantidade chegar a zero apaga o campo
    }
}
