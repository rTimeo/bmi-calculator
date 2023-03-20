const submit = document.querySelector("#submit");
console.log(submit)
    const b = document.querySelector('div');
    const a = document.createElement('p');
    b.appendChild(a);


submit.addEventListener('click', (event) =>{
    event.preventDefault();
    let poids = document.querySelector('#poids').value;
    let taille = document.querySelector('#tailles').value;
    taille = taille/100;
    taille = taille * taille;

    resultat = poids / taille;

    a.textContent = resultat;
   
    console.log(resultat)
})