const submit = document.querySelector("#submit");
const header = document.querySelector('header');

const a = document.querySelector(".a")
const b = document.querySelector(".b")
const c = document.querySelector(".c")
const d = document.querySelector(".d")
const e = document.querySelector(".e")
const f = document.querySelector(".f")



const resultatNumber =document.querySelector("p")

submit.addEventListener('click', (event) =>{
    event.preventDefault();
    let poids = document.querySelector('#poids').value;
    let taille = document.querySelector('#tailles').value;
    if (!poids || !taille) {
        alert("");
        return;
      }
    taille = taille/100;
    taille = taille * taille;

     let resultat = poids / taille;

     if (isNaN(resultat)) {
        alert("Invalid input, please enter numbers only");
        return;
      }

 
        resultatNumber.textContent = resultat.toFixed(1);
 
    
     

    
 if(resultat < 18.5){
        a.classList.add("toggle");
        b.classList.remove("toggle");
        c.classList.remove("toggle");
        d.classList.remove("toggle");
        e.classList.remove("toggle");
        f.classList.remove("toggle");
    } else if ( resultat >= 18.5 && resultat <= 25){
        b.classList.add("toggle");
        a.classList.remove("toggle");
        c.classList.remove("toggle");
        d.classList.remove("toggle");
        e.classList.remove("toggle");
        f.classList.remove("toggle");
    } else if ( resultat > 25 && resultat <= 30){
        c.classList.add("toggle");
        a.classList.remove("toggle");
        b.classList.remove("toggle");
        d.classList.remove("toggle");
        e.classList.remove("toggle");
        f.classList.remove("toggle");
    }else if ( resultat > 30 && resultat <= 35){
        d.classList.add("toggle");
        a.classList.remove("toggle");
        b.classList.remove("toggle");
        c.classList.remove("toggle");
        e.classList.remove("toggle");
        f.classList.remove("toggle");
    }else if ( resultat > 35 && resultat <= 40){
        e.classList.add("toggle");
        a.classList.remove("toggle");
        b.classList.remove("toggle");
        c.classList.remove("toggle");
        d.classList.remove("toggle");
        f.classList.remove("toggle");
    } else{
        f.classList.add("toggle");
        a.classList.remove("toggle");
        b.classList.remove("toggle");
        c.classList.remove("toggle");
        d.classList.remove("toggle");
        e.classList.remove("toggle");
    }
})